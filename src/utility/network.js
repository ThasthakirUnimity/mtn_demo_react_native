/* version 1.0 */

import { Alert } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import { store } from '@src/store'
import { updateConnectionState } from '@src/store/reducers/network'

const updateStore = async (connectionInfo) => {
  await store.dispatch(updateConnectionState({
    connectionType: connectionInfo.type,
    isConnected: connectionInfo.isConnected,
    isInternetReachable: connectionInfo.isInternetReachable
  }))
}

export const subscribeNetInfo = async () => {
  const connectionInfo = await NetInfo.fetch()
  await updateStore(connectionInfo)

  NetInfo.addEventListener(onConnectionChange)
}
const onConnectionChange = async (connectionInfo) => {
  await updateStore(connectionInfo)
}

export const runWhenInternet = async (cb) => {
  if (store.getState().network.isInternetReachable) {
    const r = await cb()
    return r
  } else {
    Alert.alert(
      'Network Error',
      'Please check your Internet Connection',
      [
        {
          text: 'OK'
        }
      ],
      { cancelable: false }
    )
  }
}
