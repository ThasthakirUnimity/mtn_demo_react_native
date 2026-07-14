import * as firebase from '@src/utility/firebase/analytics'
import * as custom from './custom'

export const logScreenChange = async (screenName) => {
  firebase.logScreenChange(screenName)
  custom.logEvent({
    WidgetID: screenName,
    WidgetTransaction: 'ScreenChange'
  })
}

export const logScreenLoaded = async (screenName, data = {}) => {
  firebase.logScreenLoaded(screenName, data)
  custom.logEvent({
    WidgetID: screenName,
    WidgetTransaction: 'ScreenLoaded',
    data
  })
}

export const logCustomEvent = async (name, data = {}) => {
  firebase.logCustomEvent(name, data)
  custom.logEvent({
    WidgetID: name,
    data
  })
}

export const logClickEvent = async (name, data = {}) => {
  firebase.logClickEvent(name, data)
  custom.logEvent({
    WidgetID: name,
    WidgetTransaction: 'Click',
    data
  })
}

export const logSuccessEvent = async (name, data = {}) => {
  firebase.logSuccessEvent(name, data)
  custom.logEvent({
    WidgetID: name,
    WidgetTransaction: 'Success',
    data
  })
}

export const logErrorEvent = async (name, data = {}) => {
  firebase.logErrorEvent(name, data)
  custom.logEvent({
    WidgetID: name,
    WidgetTransaction: 'Error',
    data
  })
}
