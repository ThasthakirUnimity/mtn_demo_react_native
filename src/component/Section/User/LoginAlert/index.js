import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modalbox'

import styles from './styles'
import { bind } from '@src/utility/component'
import { COLOR } from '@src/theme/typography'
import { navigate } from '@src/navigation'

class LoginAlert extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpened: false
    }

    bind(this)

    this.onOpened = this.onOpened.bind(this)
    this.onClosed = this.onClosed.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
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
    await this.refModal.open()
  }

  async close () {
    await this.refModal.close()
  }

  renderContent () {
    return (
      <>
        <Text style={styles.modalHeader}>Welcome to RCB!</Text>
        <Text style={styles.modalText}>You are viewing the app as a <Text style={{ color: COLOR.RED }}>Guest</Text>, some features are not available to the guests. Register and enjoy the best features and exclusive content.</Text>
        <View style={styles.modalBtn}>
          <TouchableOpacity style={styles.modalCancelBtn} onPress={this.close}>
            <Text style={styles.modalCancelBtnText}>I'll do it Later</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalByeBtn}
            onPress={() => {
              this.close()
              navigate('UserAuth')
            }}
          >
            <Text style={styles.modalByeBtnText}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }

  render () {
    return (
      <Modal
        ref={c => (this.refModal = c)}
        position='center'
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

export default LoginAlert
