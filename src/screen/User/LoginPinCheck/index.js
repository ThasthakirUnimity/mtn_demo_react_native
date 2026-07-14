import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'

import { Container, Content, Icon, Image } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import Support from '@src/component/Support'
import { bind } from '@src/utility/component'
import request from '@src/utility/request'
import { navigateReset } from '@src/navigation'

import styles from './styles'
import theme from '@src/theme/styles'
import { SecondaryStatusBar } from '@src/component/StatusBar'

const rnBiometrics = new ReactNativeBiometrics()

const codeLength = 4

class LoginPinCheck extends Component {
  constructor (props) {
    super(props)

    this.state = {
      code: [],
      isBiometricAvailable: false
    }

    bind(this)

    this.findBiometrics = this.findBiometrics.bind(this)
    this.verifyBiometric = this.verifyBiometric.bind(this)
    this.selectValue = this.selectValue.bind(this)
    this.afterCodeComplete = this.afterCodeComplete.bind(this)
    this.removeLastValue = this.removeLastValue.bind(this)
    this.renderPin = this.renderPin.bind(this)
    this.renderPins = this.renderPins.bind(this)
    this.renderKeyButton = this.renderKeyButton.bind(this)
    this.renderKeyList = this.renderKeyList.bind(this)
    this.renderBiometrics = this.renderBiometrics.bind(this)
  }

  componentDidMount () {
    this.findBiometrics()
  }

  async findBiometrics () {
    const { biometryType } = await rnBiometrics.isSensorAvailable()
    let isBiometricAvailable = false
    let biometricMessage = ''
    if (biometryType === BiometryTypes.TouchID) {
      isBiometricAvailable = true
      biometricMessage = 'Unlock app using your Fingerprint'
    } else if (biometryType === BiometryTypes.FaceID) {
      isBiometricAvailable = true
      biometricMessage = 'Unlock app using your Face'
    } else if (biometryType === BiometryTypes.Biometrics) {
      isBiometricAvailable = true
      biometricMessage = 'Unlock app using your Biometric'
    }
    this.setState({ isBiometricAvailable, biometryType, biometricMessage })
  }

  async verifyBiometric () {
    let promptMessage = 'Verify'
    if (this.state.biometryType === BiometryTypes.TouchID) {
      promptMessage = 'Unlock app using your Fingerprint'
    } else if (this.state.biometryType === BiometryTypes.FaceID) {
      promptMessage = 'Unlock app using your Face'
    } else if (this.state.biometryType === BiometryTypes.Biometrics) {
      promptMessage = 'Unlock app using your Biometric'
    }
    rnBiometrics.simplePrompt({ promptMessage: __(promptMessage) })
      .then((result) => {
        const { success } = result

        if (success) {
          navigateReset('PublicHome')
        } else {
          Support.showError({
            layout: 'toast',
            message: __('Cancelled')
          })
        }
      })
      .catch(() => {
        Support.showError({
          layout: 'toast',
          message: __('Failed')
        })
      })
  }

  selectValue (v) {
    let cb = () => { }
    const code = [...this.state.code]
    if (code.length < codeLength) {
      code.push(v)
    }
    if (code.length === codeLength) {
      cb = this.afterCodeComplete
    }
    this.setState({ code }, cb)
  }

  async afterCodeComplete () {
    await Support.showLoading()
    await request(null, 500)
    await Support.hideLoading()

    const pin = this.state.code.join('')
    if (pin === this.props.session.pin) {
      navigateReset('PublicHome')
    } else {
      this.setState({ code: [] })
      await Support.showError({
        layout: 'toast',
        message: __('PIN mismatch')
      })
    }
  }

  removeLastValue () {
    const code = [...this.state.code]
    if (code.length) {
      code.pop()
    }
    this.setState({ code })
  }

  renderPin (i) {
    const selected = this.state.code.length > i
    return <Icon key={i} name={selected ? 'circle' : 'circle-o'} type='FontAwesome' style={styles.pinIcon} />
  }

  renderPins () {
    const pins = []
    for (let i = 0; i < codeLength; i++) {
      pins.push(this.renderPin(i))
    }
    return pins
  }

  renderKeyButton (value) {
    const selectValue = () => {
      this.selectValue(value)
    }
    return (
      <Button key={value} style={styles.pinBtn} onPress={selectValue}>
        <Text style={styles.pinBtnText}>{value}</Text>
      </Button>
    )
  }

  renderKeyList () {
    const rows = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    return rows.map((cols, row) => (
      <View key={row} style={styles.pinGroup}>{cols.map(col => this.renderKeyButton(col))}</View>
    ))
  }

  renderBiometrics () {
    if (!this.state.isBiometricAvailable) {
      return null
    }
    return (
      <Button style={styles.biometricBtn} onPress={this.verifyBiometric}>
        <Text style={styles.biometricBtnText}>{__(this.state.biometricMessage)}</Text>
      </Button>
    )
  }

  render () {
    return (
      <Container>
        <SecondaryStatusBar />
        <Content style={theme.layout}>
          <View style={styles.pin}>
            <Image source={require('@asset/images/lock_bg.png')} style={{width: 92, height: 92 }} resizeMethod='contain' />
            <View style={styles.pinHeader}>
              <Text style={styles.pinHeaderTitle}>{__('Check 4 Digit PIN')}</Text>
            </View>
            <View style={styles.pinStatus}>
              {this.renderPins()}
            </View>
            <View style={styles.pinContent}>
              {this.renderKeyList()}
              <View style={styles.pinGroup}>
                <View style={[styles.pinBtn, styles.pinBtnEmpty]} />
                {this.renderKeyButton(0)}
                <Button style={styles.pinBtn} onPress={this.removeLastValue}>
                  <Image source={require('@asset/images/pin-back.png')} style={styles.pinBtnImg} resizeMode='contain' />
                </Button>
              </View>
            </View>
            <View style={styles.pinNote}>
              <Text style={styles.pinNoteText}>{__('This keeps your account secure')}</Text>
            </View>
            {this.renderBiometrics()}
          </View>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(LoginPinCheck)
