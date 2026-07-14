import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import { Container, Content, Icon, Image } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import Support from '@src/component/Support'
import { bind } from '@src/utility/component'
import request from '@src/utility/request'
import { updatePin } from '@src/store/reducers/session'
import { navigateReset } from '@src/navigation'

import styles from './styles'
import theme from '@src/theme/styles'
import { logSuccessEvent } from '@src/utility/analytics'
import { LightStatusBar, SecondaryStatusBar } from '@src/component/StatusBar'

const codeLength = 4

class LoginPinCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      code: [],
      steps: 0,
      codeFirst: ''
    }

    bind(this)

    this.selectValue = this.selectValue.bind(this)
    this.afterCodeComplete = this.afterCodeComplete.bind(this)
    this.removeLastValue = this.removeLastValue.bind(this)
    this.renderPin = this.renderPin.bind(this)
    this.renderPins = this.renderPins.bind(this)
    this.renderKeyButton = this.renderKeyButton.bind(this)
    this.renderKeyList = this.renderKeyList.bind(this)
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
    // await Support.showLoading()
    await request(null, 500)
    // await Support.hideLoading()

    if (this.state.steps === 1) {
      const pin = this.state.code.join('')
      if (pin === this.state.codeFirst) {
        await this.props.updatePin({ pin })
        logSuccessEvent('LoginPINCreation')
        await Support.showSuccess({
          message: __('Successfully saved'),
          hideDelay: 1500,
          onHide: () => {
            navigateReset('PublicHome')
          }
        })
      } else {
        this.setState({ code: [] })
        await Support.showError({
          layout: 'toast',
          message: __('PIN mismatch')
        })
      }
    } else if (this.state.steps === 0) {
      await this.promisedSetState({
        code: [],
        steps: 1,
        codeFirst: this.state.code.join('')
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

  render () {
    return (
      <Container>
        <SecondaryStatusBar />
        <Content style={theme.layout}>
          <View style={styles.pin}>
            <Image source={require('@asset/images/pin-lock.png')} style={styles.pinLock} resizeMode='contain' />
            <View style={styles.pinHeader}>
              <Text style={styles.pinHeaderTitle}>{__(this.state.steps == 1 ? 'Reconfirm 4 Digit PIN' : 'Create 4 Digit PIN')}</Text>
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
          </View>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }), { updatePin })(LoginPinCreate)
