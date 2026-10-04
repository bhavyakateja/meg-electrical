import {
  INTRO_ATTR,
  INTRO_FAILSAFE_MS,
  INTRO_REPLAY_AFTER_MS,
  INTRO_REPLAY_PARAM,
  INTRO_SKIP_ON_REDUCED_MOTION,
  INTRO_STORAGE_KEY,
} from "./intro-config";

/**
 * Server component.
 *
 * This must be rendered before the actual website content.
 *
 * The script executes while the browser is parsing the HTML,
 * allowing us to decide whether the intro should play before
 * the page underneath becomes visible.
 */

const script = `
(function () {
  var documentElement = document.documentElement;
  var attribute = ${JSON.stringify(INTRO_ATTR)};
  var mode = "play";

  try {
    /*
     * ?intro=replay forces the intro to play.
     */
    if (
      location.search.indexOf(
        ${JSON.stringify(INTRO_REPLAY_PARAM)}
      ) < 0
    ) {
      /*
       * Respect reduced-motion preferences.
       */
      var reducedMotion =
        ${INTRO_SKIP_ON_REDUCED_MOTION} &&
        window
          .matchMedia(
            "(prefers-reduced-motion: reduce)"
          )
          .matches;

      /*
       * Check when the MEG intro was last played.
       */
      var lastPlayed = 0;

      try {
        lastPlayed =
          Number(
            sessionStorage.getItem(
              ${JSON.stringify(INTRO_STORAGE_KEY)}
            )
          ) || 0;
      } catch (error) {
        lastPlayed = 0;
      }

      /*
       * Skip if:
       * - reduced motion is enabled
       * - intro played within the last 30 minutes
       */
      if (
        reducedMotion ||
        (
          lastPlayed &&
          Date.now() - lastPlayed <
            ${INTRO_REPLAY_AFTER_MS}
        )
      ) {
        mode = "skip";
      }
    }
  } catch (error) {
    /*
     * Fail open.
     *
     * If something unexpected happens, the website
     * should remain usable.
     */
    mode = "skip";
  }

  documentElement.setAttribute(
    attribute,
    mode
  );

  /*
   * If the intro should not play, stop here.
   */
  if (mode !== "play") {
    return;
  }

  /*
   * Last-resort failsafe.
   *
   * Never leave the website locked indefinitely.
   */
  var timer;

  function armFailsafe() {
    clearTimeout(timer);

    if (!document.hidden) {
      timer = setTimeout(
        function () {
          documentElement.setAttribute(
            attribute,
            "done"
          );
        },
        ${INTRO_FAILSAFE_MS}
      );
    }
  }

  document.addEventListener(
    "visibilitychange",
    armFailsafe
  );

  armFailsafe();
})();
`;

/**
 * Global intro rules.
 *
 * These are intentionally outside the CSS Module because
 * CSS Modules cannot target the html element using local
 * selectors.
 */
const css = `
html[data-intro="play"] {
  overflow: hidden;
  scrollbar-gutter: stable;
}

html[data-intro="skip"] [data-intro-overlay],
html[data-intro="done"] [data-intro-overlay] {
  display: none !important;
}
`;

export default function IntroBootstrap() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: css,
        }}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: script,
        }}
      />

      <noscript>
        <style>
          {`
            [data-intro-overlay] {
              display: none !important;
            }
          `}
        </style>
      </noscript>
    </>
  );
}