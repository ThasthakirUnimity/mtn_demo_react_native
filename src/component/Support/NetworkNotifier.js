import { COLOR, FAMILY, SIZE } from '@src/theme/typography'
import React, { memo, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const renderConnected = () => (
  <View style={styles.connected}>
    <Text style={styles.connectedText}>Connected</Text>
  </View>
)

const renderDisconnected = () => (
  <View style={styles.disconnected}>
    <Text style={styles.disconnectedText}>You are Offline, No Internet Connection</Text>
  </View>
)

const NetworkNotifier = (props) => {
  const [show, setShow] = useState(false)
  const isConnected = useSelector((state) => state.network.isConnected)

  let connected = true

  useEffect(() => {
    if (connected === false) {
      if (isConnected === true) {
        setShow(true)
      }
    } else if (connected === true) {
      if (isConnected === false) {
        setShow(true)
      }
    }
    connected = isConnected
  }, [isConnected])

  if (show) {
    return isConnected ? null : renderDisconnected()
  }
  return null
}

const styles = {
  connected: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    backgroundColor: 'green',
    width: '100%',
    zIndex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 1
  },
  connectedText: {
    fontFamily: FAMILY.CHIRP_REGULAR,
    fontSize: SIZE.SIZE_10,
    color: COLOR.LIGHT
  },
  disconnected: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    backgroundColor: 'red',
    width: '100%',
    zIndex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5
  },
  disconnectedText: {
    fontFamily: FAMILY.CHIRP_REGULAR,
    fontSize: SIZE.SIZE_10,
    color: COLOR.LIGHT
  }
}

export default memo(NetworkNotifier)
