import analytics from '@react-native-firebase/analytics'

export const logScreenChange = async (screenName) => {
  await analytics().logScreenView({
    screen_name: screenName,
    screen_class: screenName
  })
}

export const logScreenLoaded = async (screenName, data = {}) => {
  await analytics().logEvent('ScreenLoaded', {
    screen: screenName,
    ...data
  })
}

export const logCustomEvent = async (name, data = {}) => {
  await analytics().logEvent(name, data)
}

export const logClickEvent = async (name, data = {}) => {
  await analytics().logEvent(name, { ...data, action: 'clicked' })
}

export const logSuccessEvent = async (name, data = {}) => {
  await analytics().logEvent(name, { ...data, action: 'success' })
}

export const logErrorEvent = async (name, data = {}) => {
  await analytics().logEvent(name, { ...data, action: 'error' })
}
