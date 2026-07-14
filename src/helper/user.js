import RNRestart from 'react-native-restart'

import Support from '@src/component/Support'
import { URLS } from '@src/config/url'
import { store } from '@src/store'
import { login, logout, updatePrimaryNumber, updateNumbers, updateProfileStatus, updateUser } from '@src/store/reducers/session'
import http from '@src/utility/http'
import firebaseMessaging from '@src/utility/firebase/messaging'
import SectionProvider from '@src/component/Section/Provider'
import { wait } from '@src/utility/core'
import { Platform } from 'react-native'

export const initiateUserSession = async (token, profileStatus) => {
  if (profileStatus != 1) {
    await store.dispatch(login({
      user: {},
      token
    }))
    setTimeout(sendFirebaseToken, 1)
    return true
  } else {
    try {
      const headers = {
        'x-access-token': token
      }
      const r = (await http.post(URLS.USER_SESSION_INITIATE, {}, { headers })).data
      const { data_Json_return, user_type } = r
      if (data_Json_return || user_type == 'New') {
        await store.dispatch(login({
          user: data_Json_return || {},
          token
        }))
        await store.dispatch(updatePrimaryNumber({
          type: data_Json_return.type,
          name: data_Json_return.nickName || (data_Json_return.firstName + ' ' + data_Json_return.lastName),
          number: data_Json_return.altMobilenumber,
          profile_image: data_Json_return.profileImage
        }))
        await store.dispatch(updateProfileStatus({ profileStatus }))

        await fetchProfileNumbers()

        setTimeout(sendFirebaseToken, 1)

        return true
      }
    } catch (e) {
    }
    return false
  }
}

export const checkUserSession = async () => {
  try {
    const r = (await http.post(URLS.USER_SESSION_INITIATE)).data
    const { data_Json_return } = r
    if (data_Json_return) {
      await store.dispatch(updateUser({
        user: data_Json_return,
        profileStatus: 1
      }))
      await store.dispatch(updatePrimaryNumber({
        type: data_Json_return.type,
        name: data_Json_return.nickName || (data_Json_return.firstName + ' ' + data_Json_return.lastName),
        number: data_Json_return.altMobilenumber,
        profile_image: data_Json_return.profileImage
      }))
      await fetchProfileNumbers()
      return true
    }
  } catch (e) {
  }
}

export const fetchUserSessionInformation = async () => {
  try {
    const r = (await http.post(URLS.USER_SESSION_INITIATE)).data
    const { data_Json_return } = r
    if (data_Json_return) {
      await store.dispatch(updateUser({
        user: data_Json_return,
        profileStatus: 1
      }))
      await store.dispatch(updatePrimaryNumber({
        type: data_Json_return.type,
        name: data_Json_return.nickName || (data_Json_return.firstName + ' ' + data_Json_return.lastName),
        number: data_Json_return.altMobilenumber,
        profile_image: data_Json_return.profileImage
      }))
      return true
    }
  } catch (e) {
  }
}

export const fetchProfileNumbers = async () => {
  try {
    const r = (await http.get(URLS.USER_NUMBER_LINKED)).data
    if (r.GetSecondaryNumberResponse.RowSet && Array.isArray(r.GetSecondaryNumberResponse.RowSet)) {
      await store.dispatch(updateNumbers(r.GetSecondaryNumberResponse.RowSet.map(n => ({
        type: n.type,
        name: n.nick_name,
        number: n.SecondaryNumber,
        profile_image: n.profile_image
      }))))
    }
  } catch (e) {
  }
}

export const removeAccountNumber = async (mobilenumber) => {
  try {
    const data = {
      LinkDelinkMSISDNRequest: {
        CommonInfromation: {
          TransactionId: 'C3CC612AD4BCB0',
          OrderDateTime: '2021-10-26T15:05:39.452',
          OpCoID: 'NG',
          SenderID: 'SmartApp'
        },
        ExternalUser: 'esfuser',
        ExternalApplication: 'ESF',
        ExternalSystemsLogReference: 'string',
        ExternalReference: 'C3CC612AD4BCB0',
        ClientId: 'string',
        OperationName: 'R',
        APICode: 50036,
        EntityId: 9062058457,
        MSISDN: mobilenumber,
        ReasonCode: 1
      }
    }
    const r = (await http.post(URLS.USER_NUMBER_LINKED_REMOVE, data)).data
    await fetchProfileNumbers()
  } catch (e) {
  }
}

export const fetchProfileSetting = async () => { }

export const sendFirebaseToken = async () => {
  try {
    const deviceToken = await firebaseMessaging.getToken()
    const r = (await http.post(URLS.USER_FCM_TOKEN, {
      deviceType: Platform.OS,
      deviceToken
    })).data
  } catch (e) {}
}

export const notifyLogout = async () => {
  let b = false
  try {
    await http.put(URLS.USER_LOGOUT)
    b = true
  } catch (e) {
  }
  return b
}

export const updateUserSession = async () => { }

export const showNoAuthenticated = (message) => {
  SectionProvider.showLoginAlert()
}

export const refineSessionUser = (user) => {
  return user
}

let isSessionExpiredNotified = false

export const notifySessionExpired = async () => {
  if (isSessionExpiredNotified) {
    return
  }
  isSessionExpiredNotified = true

  await Support.showError({
    title: 'Session Expired',
    message: 'You will be redirected into Login',
    hideDelay: 1500,
    onHide: async () => {
      await clearCurrentUserSession()
      wait(2500)
      RNRestart.Restart()
    }
  })
}

export const clearCurrentUserSession = async () => {
  await store.dispatch(logout())
  try {
    await firebaseMessaging.resetToken()
  } catch (e) {
    console.log(e)
  }
}
