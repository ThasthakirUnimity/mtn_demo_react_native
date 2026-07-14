import React from 'react'
import { BackHandler } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Orientation from 'react-native-orientation-locker'
import mobileAds from 'react-native-google-mobile-ads'
import inAppMessaging from '@react-native-firebase/in-app-messaging'
import { MenuProvider } from 'react-native-popup-menu'

import { store, persistor } from '@src/store'

import { setLandingScreen, onLastScreenLeave } from '@src/navigation'
import Navigator from '@src/navigation/screen'
import Support from '@src/component/Support'
import SectionProvider from '@src/component/Section/Provider'
import { initiate as initiateLinking, terminate as terminateLinking } from '@src/utility/linking'
import firebaseMessaging from '@src/utility/firebase/messaging'
import { checkUserSession } from '@src/helper/user'
import { subscribeNetInfo } from '@src/utility/network'
import { runAfterInteractions } from '@src/utility/component'
import { changeLanguage } from '@src/utility/translation'
import { initiate as initiateSupportChat } from '@src/utility/supportChat'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      storeLoaded: false,
      loading: true
    }

    this.runAfterInteractions = this.runAfterInteractions.bind(this)
    this.initiate = this.initiate.bind(this)
    this.onBeforeLift = this.onBeforeLift.bind(this)
  }

  componentDidMount () {
    Orientation.lockToPortrait()

    setTimeout(firebaseMessaging.initialize, 1)
    inAppMessaging().setMessagesDisplaySuppressed(false)
    BackHandler.addEventListener('hardwareBackPress', function () {
      onLastScreenLeave()
      return true
    })
    runAfterInteractions(this.runAfterInteractions)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', function () {
    })
    try {
      firebaseMessaging.uninitialize()
      terminateLinking()
    } catch (e) { }
  }

  async runAfterInteractions () {
    this.initiate()
  }

  async initiate () {
    await subscribeNetInfo()

    mobileAds().initialize()

    let routeData

    try {
      routeData = await firebaseMessaging.getInitialRoute()
    } catch (e) { }

    if (store.getState().session.isLoggedIn) {
      await checkUserSession()
    }

    const routeDataLinking = await initiateLinking()

    if (!(routeData && routeData.routeName)) {
      routeData = routeDataLinking
    }

    setTimeout(initiateSupportChat, 1)

    const state = store.getState()

    if (state.setting.languageCode) {
      await changeLanguage(state.setting.languageCode)
    } else {
      routeData.routeName = 'PublicLanguage'
    }

    if (!(routeData && routeData.routeName)) {
      if (state.session.isLoggedIn) {
        routeData.routeName = 'UserLoginPinCheck'
        routeData.params = {}
      }
    }

    if (routeData && routeData.routeName) {
      setLandingScreen(routeData.routeName, routeData.params)
    }

    this.setState({
      loading: false
    })
  }

  onBeforeLift () {
    this.setState({ storeLoaded: true })
  }

  render () {
    return (
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
          onBeforeLift={this.onBeforeLift}
        >
          {
            this.state.loading
              ? null
              : <MenuProvider style={{ flex: 1 }}><Navigator /></MenuProvider>
          }
        </PersistGate>
        <SectionProvider />
        {/* }<NetworkNotifier />{ */}
        <Support />
      </Provider>
    )
  }
}
