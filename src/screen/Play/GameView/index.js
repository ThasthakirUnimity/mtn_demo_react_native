import React from 'react'
import { ActivityIndicator, Platform, View, StatusBar } from 'react-native'
import Modal from 'react-native-modalbox'
import { WebView } from 'react-native-webview'
import Orientation, { OrientationLocker, UNLOCK } from 'react-native-orientation-locker'

import styles from './styles'
import { bind } from '@src/utility/component'
import { goBack } from '@src/navigation'
import { Button } from '@src/component/Form'
import { Icon } from '@src/component/Basic'

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpened: false,
      url: props.route.params.url,
      gameData: props.route.params.gameData || {},
      userId: ''
    }

    bind(this)

    this.onOpened = this.onOpened.bind(this)
    this.onClosed = this.onClosed.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.onMessage = this.onMessage.bind(this)
    this.renderContent = this.renderContent.bind(this)
  }

  componentDidMount () {
    this.open()
  }

  onOpened () {
    this.setState({
      isOpened: true
    })
  }

  onClosed () {
    this.setState({
      isOpened: false
    })
    Orientation.lockToPortrait()
  }

  async open () {
    Orientation.unlockAllOrientations()
    await this.refModal.open()
  }

  async close (force = false) {
    Orientation.lockToPortrait()
    this.refModal.close()
    goBack()
  }

  onError (data) {
    // console.log('onError', data)
  }

  onLoadEnd (data) {
    // console.log('onLoadEnd', data)
  }

  onMessage (event) {

  }

  onNavigationStateChange (e) {
    console.log('onNavigationStateChange', e)
  }

  renderLoading () {
    return (
      <ActivityIndicator
        color='#009688'
        size='large'
        style={{
          flex: 1,
          justifyContent: 'center'
        }}
      />
    )
  }

  renderWebview () {
    return (
      <WebView
        source={{ uri: this.state.url }}
        originWhitelist={['*']}
        mixedContentMode='always'
        useWebKit={Platform.OS == 'ios'}
        // onError={this.onError}
        // onLoadEnd={this.onLoadEnd}
        allowsFullscreenVideo={false}
        autoManageStatusBarEnabled
        sharedCookiesEnabled
        thirdPartyCookiesEnabled
        scrollEnabled
        domStorageEnabled
        startInLoadingState
        // injectedJavaScript={this.injectedJavaScript}
        allowUniversalAccessFromFileURLs
        // onMessage={this.onMessage}
        onNavigationStateChange={this.onNavigationStateChange}
        javaScriptEnabled
        nestedScrollEnabled
      />
    )
  }

  renderContent () {
    return (
      <>
        <StatusBar hidden />
        <View style={styles.modal}>
          <View style={styles.modalHeader}>
            <View style={styles.modalTop}>
              <Button style={styles.modalHeaderBtn} onPress={this.close}>
                <Icon name='chevron-left' type='Feather' style={styles.modalHeaderBtnIcon} />
              </Button>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            {this.renderWebview()}
          </View>
        </View>
      </>
    )
  }

  render () {
    return (
      <Modal
        ref={c => (this.refModal = c)}
        position='bottom'
        backButtonClose
        backdropPressToClose={false}
        swipeToClose={false}
        // coverScreen
        style={styles.modal}
        onOpened={this.onOpened}
        onClosed={this.onClosed}
      >
        {this.state.isOpened ? this.renderContent() : null}
      </Modal>
    )
  }
}
