/**
 * Shared intro configuration for MEG Electrical Solutions.
 *
 * This file is intentionally free of "use client" so it can be imported
 * by both the server-rendered bootstrap and the client intro component.
 */

export const INTRO_ATTR = "data-intro";

/**
 * Timestamp storage key.
 */
export const INTRO_STORAGE_KEY = "meg-intro-last-played";

/**
 * Intro video duration.
 *
 * MEG intro video = 10 seconds.
 */
export const INTRO_VIDEO_DURATION_MS = 10_000;

/**
 * Don't replay the intro within this period.
 *
 * 30 minutes.
 */
export const INTRO_REPLAY_AFTER_MS = 30 * 60 * 1000;

/**
 * Users who prefer reduced motion skip the intro.
 */
export const INTRO_SKIP_ON_REDUCED_MOTION = true;

/**
 * Start transitioning into the website shortly before
 * the 10-second video finishes.
 *
 * 600ms means the transition starts around 9.4 seconds.
 */
export const INTRO_LEAD_MS = 0;

/**
 * Website crossfade duration.
 */
export const INTRO_LEAVE_MS = 900;

/**
 * Maximum time allowed for the video to start.
 *
 * If autoplay fails, the static logo fallback is shown.
 */
export const INTRO_START_TIMEOUT_MS = 3500;

/**
 * Extra safety time after the expected video duration.
 */
export const INTRO_END_GRACE_MS = 2500;

/**
 * How long the fallback logo remains visible.
 */
export const INTRO_FALLBACK_HOLD_MS = 1400;

/**
 * Last-resort safety net.
 *
 * The website will never remain blocked indefinitely.
 */
export const INTRO_FAILSAFE_MS = 16_000;

/**
 * Add ?intro=replay to any URL to force the intro.
 */
export const INTRO_REPLAY_PARAM = "intro=replay";

