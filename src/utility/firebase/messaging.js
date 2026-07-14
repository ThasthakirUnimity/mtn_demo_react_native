/* version 1.0 */

import { AppState, Platform } from 'react-native'
import messaging from '@react-native-firebase/messaging'
// import firebase from '@react-native-firebase/app'
// import '@react-native-firebase/installations'

import { store } from '@src/store'

import { navigate } from '@src/navigation'
import { resourceTypeIDs } from '@src/config/core'

import { asyncForEach } from '@src/utility/core'

import { updateFcmReceived } from '@src/store/reducers/setting'

let hasPermission = false

const registerAppWithFCM = async () => {
  await messaging().registerDeviceForRemoteMessages()
  // await messaging().registerForRemoteNotifications()
}

const checkPermission = async () => {
  if (Platform.OS === 'ios') {
    const authorizationStatus = await messaging().requestPermission()
    console.log('authorizationStatus', authorizationStatus)

    if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      hasPermission = true
    } else if (authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL) {
      hasPermission = true
    }
  } else if (Platform.OS === 'android') {
    hasPermission = true
  }

  /* const installationsForDefaultApp = firebase.installations()
  const fid = await installationsForDefaultApp.getId()
  console.log(fid) */

  /* if (hasPermission) {
    try {
      await getToken()
    } catch (e) {
      console.log(e)
    }
  } */
}

const getToken = async () => {
  const token = await messaging().getToken()
  console.log(token)
  // saveToken(token)
  return token
}

const resetToken = async () => (await messaging().deleteToken())

/* const saveToken = async (token) => {
  // console.log('token', token)
  const token_ = await AsyncStorage.getItem('fcmToken')
  if (token !== token_) {
    await AsyncStorage.setItem('fcmToken', token)
  }
} */

const subscribe = async (topic) => {
  console.log('Tryiing to subscribe to topic ', topic)
  await messaging().subscribeToTopic(topic)
}

const unsubscribe = async (topic) => {
  console.log('Tryiing to unsubscribe to topic ', topic)
  await messaging().unsubscribeFromTopic(topic)
}

const subscribeTopics = (topics) => {
  asyncForEach(topics, (t) => subscribe(t.indexOf('/topics/') === 0 ? t.replace('/topics/', '') : ''))
}

const unsubscribeTopics = (topics) => {
  asyncForEach(topics, (t) => unsubscribe(t.indexOf('/topics/') === 0 ? t.replace('/topics/', '') : ''))
}

const getRoute = (message) => {
  const routeData = {
    routeName: '',
    params: {}
  }
  if (message) {
    const { data } = message
    if (data && data.notificationType) {
      let routeName
      let params
      switch (data.notificationType) {
        case '1':
          if (data.userID) {
            routeName = 'ChatUserMessage'
            params = { id: parseInt(data.userID, 10) }
          }
          break
        case '2':
          if (data.groupID) {
            routeName = 'ChatGroupMessage'
            params = { id: data.groupID }
          }
          break
        case '3':
          if (data.resourceID) {
            if (data.resourceTypeID == resourceTypeIDs.STORIES) {
              routeName = 'PublicHome'
              params = {}
            } else if (data.resourceTypeID == resourceTypeIDs.USER_LIVE) {
              routeName = 'LiveView'
              params = { id: data.resourceID }
            } else if (data.resourceTypeID == resourceTypeIDs.EDITORIAL_ARTICLE) {
              routeName = 'PublicPostView'
              params = { id: data.resourceID }
            } else {
              routeName = 'PublicPostView'
              params = { id: data.resourceID }
            }
          }
          break
        case '4':
          if (data.userID) {
            routeName = 'PublicProfileView'
            params = { id: data.userID }
          }
          break
      }
      if (routeName) {
        routeData.routeName = routeName
        routeData.params = params
      }
    }
  }
  return routeData
}

const onNotificationListeners = async () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', AppState.currentState, remoteMessage)
    if (AppState.currentState === 'background') {
      try {
        store.dispatch(updateFcmReceived(1))
      } catch (e) {}
    }
  })
  messaging().onNotificationOpenedApp(message => {
    console.log(
      'Notification caused app to open from background state:',
      message
    )
    const routeData = getRoute(message)
    if (routeData && routeData.routeName) {
      navigate(routeData.routeName, routeData.params)
    }
  })
  messaging().onMessage(function (remoteMessage) {
    console.log('Message handled in the foreground!', remoteMessage)
    try {
      store.dispatch(updateFcmReceived(1))
    } catch (e) {}
  })
}

const offNotificationListeners = () => {
}

const getInitialRoute = async () => {
  const message = await messaging().getInitialNotification()
  return await getRoute(message)
}

const initialize = async () => {
  if (Platform.OS === 'ios') {
    await registerAppWithFCM()
  }
  await checkPermission()
  if (hasPermission) {
    /* messaging().onTokenRefresh(token => {
      console.log('onTokenRefresh', typeof token, token)
      if (typeof token === 'string') {
        // saveToken(token)
      }
    }) */
    return await onNotificationListeners()
  }

  return null
}

const uninitialize = async () => {
  offNotificationListeners()
}

export default {
  initialize,
  uninitialize,
  subscribeTopics,
  unsubscribeTopics,
  getToken,
  resetToken,
  getInitialRoute
}
