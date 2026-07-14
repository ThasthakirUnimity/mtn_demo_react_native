import DeviceInfo from 'react-native-device-info'

import { URLS } from '@src/config/url'
import { store } from '@src/store'
import http from '@src/utility/http'

const defaultData = {
  subscriberID: null,
  MSISDN: null,
  deviceInfo: null,
  clientVersion: null,
  requestType: null,
  requestAction: null,
  requestName: null,
  requestSize: null,
  responseSize: null,
  HTTPStatusCode: null,
  DeviceID: null,
  WidgetID: null,
  WidgetTransaction: null,
  GroupName: null,
  AppName: null,
  Category: null,
  SubCategory: null,
  SubscriberType: null,
  SessionID: null,
  ResponseCode: null,
  Param1: null,
  Param2: null,
  LocalHTTPHits: null,
  HTTPHitsSize: null,
  ExternalHTTPHits: null,
  ExternalHTTPHitsSize: null,
  TransactionID: null,
  Circle: null,
  ResponseTime: null
}

let savedData = {}
let initiated = false

const initiate = async () => {
  savedData = { ...defaultData }
  savedData.deviceInfo = await DeviceInfo.getDeviceName()
  savedData.clientVersion = await DeviceInfo.getReadableVersion()
  savedData.DeviceID = await DeviceInfo.getDeviceId()
  savedData.AppName = await DeviceInfo.getApplicationName()
  initiated = true
}

export const logEvent = async ({ data, ...newdata }) => {
  if (!initiated) {
    await initiate()
  }
  try {
    const state = store.getState()
    const formdata = { ...savedData, ...newdata }
    if (state.session.isLoggedIn) {
      formdata.subscriberID = state.session.user.userid
      formdata.MSISDN = state.session.user.altMobilenumber
    }
    if (typeof data === 'object') {
      Object.keys(data).forEach((k, i) => {
        if (i > 1) {
          return
        }
        formdata['Param' + (i + 1)] = data[k]
      })
    }
    await http.post(URLS.LOGS, formdata)
  } catch (e) {}
}
