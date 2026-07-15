import { useSelector } from 'react-redux'

import {
  COLOR as DEFAULT_COLOR,
  FAMILY as DEFAULT_FAMILY,
  SIZE as DEFAULT_SIZE,
  CURRENCY as DEFAULT_CURRENCY,
  APP_DETAILS as DEFAULT_APP_DETAILS,
} from '@src/theme/typography'

/**
 * Returns the active design tokens.
 * CMS values (from brand.designTokens) override the static defaults in typography.js.
 *
 * Usage:
 *   const { COLOR, FAMILY, SIZE, CURRENCY, APP_DETAILS } = useTheme()
 *   <View style={{ backgroundColor: COLOR.PRIMARY }} />
 */
const useTheme = () => {
  const css = useSelector(state => state.brand?.designTokens)

  return {
    COLOR:       { ...DEFAULT_COLOR,       ...(css?.COLOR       || {}) },
    FAMILY:      { ...DEFAULT_FAMILY,      ...(css?.FAMILY      || {}) },
    SIZE:        { ...DEFAULT_SIZE,        ...(css?.SIZE        || {}) },
    CURRENCY:    { ...DEFAULT_CURRENCY,    ...(css?.CURRENCY    || {}) },
    APP_DETAILS: { ...DEFAULT_APP_DETAILS, ...(css?.APP_DETAILS || {}) },
  }
}

export default useTheme
