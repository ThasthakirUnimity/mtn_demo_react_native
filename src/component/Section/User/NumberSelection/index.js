import React, { useRef } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { Icon, Text } from '@src/component/Basic'
import Modal from 'react-native-modalbox'

import styles from './styles'
import { bind } from '@src/utility/component'
import { store } from '@src/store'
import { changeNumber } from '@src/store/reducers/session'
import { Button, RadioButton } from '@src/component/Form'
import { navigate } from '@src/navigation/'
import { __ } from '@src/utility/translation'
import { logClickEvent } from '@src/utility/analytics'

class NumberSelection extends React.Component {
  constructor (props) {
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
    this.changeNumber = this.changeNumber.bind(this)
    this.renderNumber = this.renderNumber.bind(this)
    this.renderContent = this.renderContent.bind(this)
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
  }

  async open () {
    const session = store.getState().session
    await this.promisedSetState({
      numbers: session.numbers,
      numberIndex: session.numberIndex
    })
    await this.refModal.open()
  }

  async close () {
    await this.refModal.close()
  }

  changeNumber (index) {
    store.dispatch(changeNumber(index))
    this.close()
    logClickEvent('SwitchProfile')
    // navigate('PublicHome')
  }

  renderNumber (item, index) {
    const changeNumber = () => {
      this.changeNumber(index)
    }
    return (
      <Button style={styles.accountBtn} onPress={changeNumber}>
        <View style={styles.accountInitial}>
          <Text style={styles.accountInitialText}>{item.name.substring(0, 1).toUpperCase()}</Text>
        </View>
        <View style={styles.accountCol}>
          <View style={styles.accountCol2}>
            <View style={styles.accountRow}>
              <Text style={styles.accountName}>{item.name}</Text>
            </View>
            <View style={styles.accountRow}>
              <Text style={styles.accountNo}>{item.number}</Text>
            </View>
          </View>
          <View>
            <RadioButton checked={index === this.state.numberIndex} />
          </View>
        </View>
      </Button>
    )
  }

  renderContent () {
    const gotoForm = () => {
      this.close()
      navigate('UserAddNumber')
    }
    const balanceNos = 5 - this.state.numbers.length
    return (
      <>
        <ScrollView style={{ flex: 1 }}>
          {this.state.numbers.map(this.renderNumber)}
        </ScrollView>
        <View style={styles.accountCount}>
          <Text style={styles.accountCountText}>{balanceNos} {__('members can be added')}</Text>
        </View>
        {
          balanceNos > 0
            ? (
              <View style={styles.accountFooter}>
                <Button variant='primary' style={styles.accountFooterBtn} onPress={gotoForm}>
                  <Text style={styles.accountFooterBtnText}>{__('Add Account')}</Text>
                </Button>
              </View>
              )
            : null
        }
      </>
    )
  }

  render () {
    return (
      <Modal
        ref={c => (this.refModal = c)}
        position='bottom'
        backButtonClose
        backdropPressToClose
        swipeToClose={false}
        style={styles.modal}
        onOpened={this.onOpened}
        onClosed={this.onClosed}
      >
        {this.state.isOpened ? this.renderContent() : null}
      </Modal>
    )
  }
}

export default NumberSelection
