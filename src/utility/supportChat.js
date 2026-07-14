import { useNavigationState } from '@react-navigation/native'
import React, { memo, useEffect, useState } from 'react'
import { Platform, Image, View } from 'react-native'
// import { ZohoSalesIQ } from 'react-native-zohosalesiq-mobilisten'

import { Button } from '@src/component/Form'
import { ZOHO_ANDROID_ACCESS_KEY, ZOHO_ANDROID_APP_KEY, ZOHO_IOS_ACCESS_KEY, ZOHO_IOS_APP_KEY } from '@src/config/env'

const { appKey, accessKey } = Platform.select({
  ios: {
    appKey: ZOHO_IOS_APP_KEY,
    accessKey: ZOHO_IOS_ACCESS_KEY
  },
  android: {
    appKey: ZOHO_ANDROID_APP_KEY,
    accessKey: ZOHO_ANDROID_ACCESS_KEY
  }
})

const availabeScreens = []

const isAvailabe = (routeName) => availabeScreens.includes(routeName)

export const initiate = () => {
  // ZohoSalesIQ.init(appKey, accessKey)
  // ZohoSalesIQ.addEventListener(ZohoSalesIQ.EVENT_CHATVIEW_CLOSED, (chatID) => {
  //       console.log('EVENT_CHATVIEW_CLOSED', chatID)
  //   });
  //   ZohoSalesIQ.addEventListener(ZohoSalesIQ.EVENT_CHAT_CLOSED, (visitorChat) => {
  //       console.log('EVENT_CHAT_CLOSED', visitorChat)
  //   });
}

export const onScreenChange = (routeName) => {
  /* if (isAvailabe(routeName)) {
    // ZohoSalesIQ.setLauncherVisibility(true);
  } else {
    // ZohoSalesIQ.setLauncherVisibility(false);
  } */
}

export const openChatBot = () => {
  // ZohoSalesIQ.setLanguage('en')
  // ZohoSalesIQ.showOperatorImageInChat(true)
  // ZohoSalesIQ.showOfflineMessage(true)
  // ZohoSalesIQ.setFeedbackVisibility(true)
  // ZohoSalesIQ.setRatingVisibility(true)
  // ZohoSalesIQ.openChat()
}

export const SupportChat = memo((props) => {
  const [show, setShow] = useState(false)
  const state = useNavigationState(state => state)

  useEffect(() => {
    let _show = false
    if (state && state.routes) {
      if (typeof state.index === 'number' && state.routes[state.index]) {
        _show = isAvailabe(state.routes[state.index].name)
      } else if (state.routes.length === 1) {
        _show = isAvailabe(state.routes[0].name)
      }
    }
    setShow(_show)
  }, [state])

  if (show || props.forceShow) {
    const img = (
      <Button onPress={openChatBot}>
        <Image source={require('@asset/icons/chatbot.png')} />
      </Button>
    )

    const content = props.renderQuickTour
      ? props.renderQuickTour({
        category: 'Chat',
        shape: 'circle',
        children: img,
        style: {
          width: 68,
          height: 68
        }
      })
      : img
    return (
      <View style={styles.container}>
        {content}
      </View>
    )
  }

  return null
})

const styles = {
  container: {
    position: 'absolute',
    right: 15,
    bottom: 75,
    width: 68,
    height: 68,
    zIndex: 0
  }
}
