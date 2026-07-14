import { Platform } from 'react-native'

export const getDefaultHeaderHeight = (
  layout,
  modalPresentation,
  statusBarHeight
) => {
  let headerHeight

  const isLandscape = layout.width > layout.height

  if (Platform.OS === 'ios') {
    if (Platform.isPad || Platform.isTVOS) {
      if (modalPresentation) {
        headerHeight = 56
      } else {
        headerHeight = 50
      }
    } else {
      if (isLandscape) {
        headerHeight = 32
      } else {
        if (modalPresentation) {
          headerHeight = 56
        } else {
          headerHeight = 30
        }
      }
    }
  } else if (Platform.OS === 'android') {
    headerHeight = 56
  } else {
    headerHeight = 64
  }

  return headerHeight + statusBarHeight
}
