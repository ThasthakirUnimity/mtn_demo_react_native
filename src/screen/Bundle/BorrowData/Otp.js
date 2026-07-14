import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modalbox'

import { Text } from '@src/component/Basic'
import { TextInput } from '@src/component/Form'
import styles from './styles'
import { bind } from '@src/utility/component'
import Support from '@src/component/Support'
import { __ } from '@src/utility/translation'
import { URLS } from '@src/config/url'
import http from '@src/utility/http'
import { navigateCurrent } from '@src/navigation/'

const codeLength = 4
const otpField = 'pin'

class Otp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpened: false,
      numbers: [],
      numberIndex: 0
    }

    bind(this)

    this.onOpened = this.onOpened.bind(this)
    this.onClosed = this.onClosed.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.onChangeOtpCode = this.onChangeOtpCode.bind(this)
    this.renderCodeInput = this.renderCodeInput.bind(this)
    this.renderContent = this.renderContent.bind(this)
  }

  onOpened() {
    this.setState({
      isOpened: true
    })
  }

  onClosed() {
    this.setState({
      isOpened: false
    })
  }

  async open() {
    let otpCodes = []
    otpCodes.length = codeLength
    otpCodes.forEach((v, i) => (otpCodes[i] = ''))
    otpCodes = otpCodes.fill('')
    await this.promisedSetState({
      otpCodes,
      values: {
        [otpField]: otpCodes.join('')
      }
    })
    await this.refModal.open()
  }

  async close() {
    await this.refModal.close()
  }

  async onChangeOtpCode(v, i) {
    if (v.length === 1) {
      const next = i + 1
      const otpCodes = this.state.otpCodes || []
      otpCodes[i] = v
      console.log(otpCodes)
      await this.promisedSetState({
        otpCodes
      })
      await this.onChangeValue(otpField, this.state.otpCodes.join(''))
      if (next === codeLength) {
        this.onSubmit()
      } else {
        this.references.inputs['otpCode' + next].focus()
      }
    }
  }

  async onSubmit() {
    await Support.showLoading()
    try {
      const values = {}
      values[otpField] = this.state.values[otpField] ? this.state.values[otpField] : ''
      values.insertId = this.props.values.insertId

      const result = (await http.post(URLS.BORROW_RESPONSE, values)).data

      this.props.onSuccess()
    } catch (e) {
      Support.showServerError(e)
    }

    Support.hideLoading()
  }

  renderCodeInput() {
    return this.state.otpCodes.map((value, i) => (
      <View style={styles.otpGroup}>
        <TextInput
          key={i}
          autoCapitalize='none'
          blurOnSubmit={false}
          editable={this.state.verified !== 1}
          keyboardType='numeric'
          maxLength={1}
          placeholder=''
          placeholderTextColor='rgba(0, 0, 0, 1)'
          returnKeyType='next'
          selectTextOnFocus
          value={(value || '').toString()}
          onChangeText={v => this.onChangeOtpCode(v, i)}
          onSubmitEditing={() => this.focusNextField('otpCode' + (i + 1))}
          ref={r => (this.references.inputs['otpCode' + i] = r)}
          style={styles.otpInput}
        />
      </View>
    ))
  }

  renderContent() {
    return (
      <View style={styles.otp}>
        <View style={styles.otpHeader}>
          <View style={styles.otpHeaderRow}>
            <Text style={styles.otpHeaderTitle}>{__('Authenticate')}</Text>
          </View>
          <View style={styles.otpHeaderRow}>
            <Text style={styles.otpHeaderSubTitle}>{__('To borrow data, you need to authenticate. \n Use your four digit transaction pin')}</Text>
          </View>
        </View>
        <View style={styles.otpContent}>
          <View style={styles.otpRow}>
            <Text style={styles.otpTitle}>{__('Enter your transaction pin')}</Text>
          </View>
          <View style={styles.otpCol}>
            {this.renderCodeInput()}
          </View>
          <Button style={styles.otpBtn}>
            <Text style={styles.otpBtnText}>{__('Forgot PIN?')}</Text>
          </Button>
        </View>
      </View>
    )
  }

  render() {
    return (
      <Modal
        ref={c => (this.refModal = c)}
        position='bottom'
        backButtonClose
        backdropPressToClose
        swipeToClose={false}
        style={styles.modalOtp}
        onOpened={this.onOpened}
        onClosed={this.onClosed}
      >
        {this.state.isOpened ? this.renderContent() : null}
      </Modal>
    )
  }
}

export default Otp
