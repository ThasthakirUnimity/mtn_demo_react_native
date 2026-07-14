import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import Modal from 'react-native-modalbox'

import styles from './styles'
import { Button } from '@src/component/Form'
import { bind } from '@src/utility/component'

const config = {
  visible: false,
  title: '',
  message: '',
  buttonRight: 'ok',
  labelBtnNo: 'CANCEL',
  labelBtnYes: 'YES'
}

const iconName = 'exclamationcircle'
const defaultTitle = 'Confirm'

class Dialog extends React.PureComponent {
  static instance
  static onYes
  static onNo

  constructor (props) {
    super(props)

    this.state = { ...config }

    bind(this)

    this.showDialog = this.showDialog.bind(this)
    this.hideDialog = this.hideDialog.bind(this)
    this.onClickYes = this.onClickYes.bind(this)
    this.onClickNo = this.onClickNo.bind(this)
    this.renderButtons = this.renderButtons.bind(this)
  }

  async showDialog (c) {
    const { onYes, onNo, ...c_ } = c
    const config_ = { ...config, ...c_ }
    config_.visible = true
    Dialog.onYes = onYes
    Dialog.onNo = onNo
    await this.promisedSetState(config_)
    this.refDialog.open()
  }

  async hideDialog () {
    await this.promisedSetState({
      visible: false
    })
    Dialog.onYes = null
    Dialog.onNo = null
    this.refDialog.close()
  }

  async onClickYes () {
    if (Dialog.onYes) {
      Dialog.onYes()
    }
    await this.hideDialog()
  }

  async onClickNo () {
    if (Dialog.onNo) {
      Dialog.onNo()
    }
    await this.hideDialog()
  }

  renderButtons () {
    const noBtn = (
      <Button style={this.state.buttonRight == 'ok' ? styles.noBtn : styles.yesBtn} block={false} onPress={this.onClickNo}>
        <Text style={this.state.buttonRight == 'ok' ? styles.noBtnText : styles.yesBtnText}>{this.state.labelBtnNo}</Text>
      </Button>
    )
    const yesBtn = (
      <Button style={this.state.buttonRight == 'ok' ? styles.yesBtn : styles.noBtn} block={false} onPress={this.onClickYes}>
        <Text style={this.state.buttonRight == 'ok' ? styles.yesBtnText : styles.noBtnText}>{this.state.labelBtnYes}</Text>
      </Button>
    )
    if (this.state.buttonRight == 'ok') {
      return <>{noBtn}{yesBtn}</>
    } else {
      return <>{yesBtn}{noBtn}</>
    }
  }

  render () {
    return (
      <Modal
        ref={c => this.refDialog = c}
        position='center'
        swipeToClose={false}
        backdropPressToClose={false}
        style={styles.modalContainer}
      >
        <View style={styles.modalHeader}>
          <Text style={styles.modalHeaderTitle} />
        </View>
        <ScrollView contentContainerStyle={styles.modalContent}>
          {/* }<Icon name={iconName} type='AntDesign' style={styles.modalContentIcon} />{ */}
          <Text style={styles.modalContentTitle}>{this.state.title || defaultTitle}</Text>
          <Text style={styles.modalContentDesc}>{this.state.message}</Text>
          <View style={styles.modalCol}>
            {this.renderButtons()}
          </View>
        </ScrollView>
      </Modal>
    )
  }
}

export default Dialog
