"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import type {
  CSSProperties,
  TransitionEvent,
} from "react";

import styles from "./IntroAnimation.module.css";

import {
  INTRO_ATTR,
  INTRO_END_GRACE_MS,
  INTRO_FALLBACK_HOLD_MS,
  INTRO_LEAD_MS,
  INTRO_LEAVE_MS,
  INTRO_START_TIMEOUT_MS,
  INTRO_STORAGE_KEY,
  INTRO_VIDEO_DURATION_MS,
} from "./intro-config";

type Phase = "active" | "leaving" | "done";

const overlayVars = {
  "--intro-leave": `${INTRO_LEAVE_MS}ms`,
} as CSSProperties;

export default function IntroAnimation() {
  const [phase, setPhase] = useState<Phase>("active");
  const [videoMounted, setVideoMounted] = useState(false);
  const [fallback, setFallback] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const leavingRef = useRef(false);

  /**
   * Begin crossfade into the MEG website.
   *
   * This function is intentionally idempotent because
   * multiple video lifecycle events can potentially fire.
   */
  const leave = useCallback(() => {
    if (leavingRef.current) {
      return;
    }

    leavingRef.current = true;

    try {
      sessionStorage.setItem(
        INTRO_STORAGE_KEY,
        String(Date.now()),
      );
    } catch {
      // Storage can be unavailable in privacy modes.
    }

    setPhase("leaving");
  }, []);

  /**
   * Remove intro and unlock the website.
   */
  const finish = useCallback(() => {
    document.documentElement.setAttribute(
      INTRO_ATTR,
      "done",
    );

    setPhase("done");
  }, []);

  /**
   * Check the decision made by IntroBootstrap.
   */
  useEffect(() => {
    const state =
      document.documentElement.getAttribute(INTRO_ATTR);

    if (state === "skip" || state === "done") {
      setPhase("done");
      return;
    }

    setVideoMounted(true);
  }, []);

  /**
   * Video lifecycle.
   */
  useEffect(() => {
    if (!videoMounted) {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    let disposed = false;
    let started = false;

    let startTimer = 0;
    let raf = 0;

    const timers = new Set<number>();

    const later = (
      callback: () => void,
      milliseconds: number,
    ) => {
      const id = window.setTimeout(
        callback,
        milliseconds,
      );

      timers.add(id);

      return id;
    };

    /**
     * Video could not start.
     *
     * Show the final MEG logo instead of leaving the user
     * staring at a blank overlay.
     */
    const showFallback = () => {
      if (
        disposed ||
        started ||
        leavingRef.current
      ) {
        return;
      }

      setFallback(true);

      later(
        leave,
        INTRO_FALLBACK_HOLD_MS,
      );
    };

    /**
     * Start the handoff shortly before the 10-second
     * intro finishes.
     *
     * 10,000ms video
     * - 600ms lead
     * = approximately 9.4 seconds.
     */
    const watchLead = () => {
      if (
        disposed ||
        leavingRef.current
      ) {
        return;
      }

      const duration =
        Number.isFinite(video.duration)
          ? video.duration
          : INTRO_VIDEO_DURATION_MS / 1000;

      const leadSeconds =
        INTRO_LEAD_MS / 1000;

      if (
        video.currentTime >=
        duration - leadSeconds
      ) {
        leave();
        return;
      }

      raf = requestAnimationFrame(watchLead);
    };

    /**
     * Video successfully started.
     */
    const onPlaying = () => {
      if (started) {
        return;
      }

      started = true;

      window.clearTimeout(startTimer);

      /*
       * The actual video duration is preferred.
       * If metadata is unavailable, use the known
       * MEG 10-second duration.
       */
      const durationMs =
        Number.isFinite(video.duration)
          ? video.duration * 1000
          : INTRO_VIDEO_DURATION_MS;

      /*
       * Absolute watchdog.
       *
       * This guarantees the intro cannot remain
       * stuck forever if "ended" never fires.
       */
      later(
        leave,
        durationMs + INTRO_END_GRACE_MS,
      );

      raf = requestAnimationFrame(watchLead);
    };

    /**
     * Video error.
     */
    const onError = () => {
      if (started) {
        leave();
      } else {
        showFallback();
      }
    };

    /**
     * Start video playback.
     */
    const start = () => {
      if (disposed) {
        return;
      }

      /*
       * Explicitly set muted as a property.
       *
       * This is important because browsers block
       * unmuted autoplay.
       */
      video.muted = true;

      startTimer = later(
        showFallback,
        INTRO_START_TIMEOUT_MS,
      );

      video
        .play()
        .catch(() => {
          if (started) {
            leave();
          } else {
            showFallback();
          }
        });
    };

    video.addEventListener(
      "playing",
      onPlaying,
    );

    video.addEventListener(
      "ended",
      leave,
    );

    video.addEventListener(
      "error",
      onError,
    );

    /**
     * Don't start the intro while the browser tab
     * is hidden.
     */
    let onVisible: (() => void) | null = null;

    if (
      document.visibilityState ===
      "visible"
    ) {
      start();
    } else {
      onVisible = () => {
        if (
          document.visibilityState !==
          "visible" ||
          !onVisible
        ) {
          return;
        }

        document.removeEventListener(
          "visibilitychange",
          onVisible,
        );

        onVisible = null;

        start();
      };

      document.addEventListener(
        "visibilitychange",
        onVisible,
      );
    }

    return () => {
      disposed = true;

      cancelAnimationFrame(raf);

      timers.forEach((id) => {
        window.clearTimeout(id);
      });

      if (onVisible) {
        document.removeEventListener(
          "visibilitychange",
          onVisible,
        );
      }

      video.removeEventListener(
        "playing",
        onPlaying,
      );

      video.removeEventListener(
        "ended",
        leave,
      );

      video.removeEventListener(
        "error",
        onError,
      );
    };
  }, [
    videoMounted,
    leave,
  ]);

  /**
   * Safety net for the CSS transition.
   */
  useEffect(() => {
    if (phase !== "leaving") {
      return;
    }

    const id = window.setTimeout(
      finish,
      INTRO_LEAVE_MS + 250,
    );

    return () => {
      window.clearTimeout(id);
    };
  }, [
    phase,
    finish,
  ]);

  /**
   * Normal transition completion.
   */
  const onTransitionEnd = (
    event: TransitionEvent<HTMLDivElement>,
  ) => {
    if (
      event.target === event.currentTarget &&
      event.propertyName === "opacity"
    ) {
      finish();
    }
  };

  if (phase === "done") {
    return null;
  }

  return (
    <div
      className={styles.overlay}
      data-intro-overlay=""
      data-phase={phase}
      aria-hidden="true"
      translate="no"
      style={overlayVars}
      onTransitionEnd={onTransitionEnd}
    >
      {videoMounted && !fallback && (
        <video
          ref={videoRef}
          className={styles.media}
          muted
          autoPlay
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          tabIndex={-1}
        >
          {/* Laptop / desktop landscape intro */}
          <source
            src="/intro/logo-intro-2.mp4"
            type="video/mp4"
            media="(min-width: 1024px)"
          />

          {/* Mobile + tablet intro */}
          <source
            src="/intro/logo-intro.mp4"
            type="video/mp4"
          />
        </video>
      )}

      {fallback && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={styles.media}
          src="/intro/meg-logo-final.webp"
          alt=""
          decoding="async"
        />
      )}
    </div>
  );
}