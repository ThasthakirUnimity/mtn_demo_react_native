import {
  COLOR,
  FAMILY,
  SIZE,
  CURRENCY,
  APP_DETAILS,
} from '@src/theme/typography'

/* Frozen snapshot of the original static defaults */
const DEFAULTS = {
  COLOR:       { ...COLOR },
  FAMILY:      { ...FAMILY },
  SIZE:        { ...SIZE },
  CURRENCY:    { ...CURRENCY },
  APP_DETAILS: { ...APP_DETAILS },
}

/**
 * Applies CMS design tokens over the typography.js exports in-place.
 * Every existing import of COLOR / FAMILY / SIZE etc. automatically
 * reflects the CMS values — no refactor of other files needed.
 *
 * @param {object|null} css — the `data.css` object from the design-token API
 */
export const applyDesignTokens = (css) => {
  if (!css) return

  if (css.COLOR)       Object.assign(COLOR,       css.COLOR)
  if (css.FAMILY)      Object.assign(FAMILY,      css.FAMILY)
  if (css.SIZE)        Object.assign(SIZE,         css.SIZE)
  if (css.CURRENCY)    Object.assign(CURRENCY,    css.CURRENCY)
  if (css.APP_DETAILS) Object.assign(APP_DETAILS, css.APP_DETAILS)
}

/**
 * Restores all typography exports back to the original static defaults.
 * Call this on every app relaunch before the brand selection screen.
 */
export const resetDesignTokens = () => {
  Object.assign(COLOR,       DEFAULTS.COLOR)
  Object.assign(FAMILY,      DEFAULTS.FAMILY)
  Object.assign(SIZE,        DEFAULTS.SIZE)
  Object.assign(CURRENCY,    DEFAULTS.CURRENCY)
  Object.assign(APP_DETAILS, DEFAULTS.APP_DETAILS)
}
