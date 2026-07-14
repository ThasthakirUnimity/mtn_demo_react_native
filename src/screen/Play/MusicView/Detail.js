import React, { Component } from 'react'
import { Image, Text, View, ScrollView } from 'react-native'
import Modal from 'react-native-modalbox'

import { __ } from '@src/utility/translation'
import { Button } from '@src/component/Form'
import styles from './styles'

class Detail extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpened: false,
      music: null
    }

    this.onClosed = this.onClosed.bind(this)
    this.open = this.open.bind(this)
    this.renderModal = this.renderModal.bind(this)
  }

  onClosed () {
    this.setState({
      isOpened: false
    })
  }

  open (music) {
    this.setState({
      isOpened: true,
      music
    })
  }

  renderModal () {
    return (
      <Modal
        position='bottom'
        swipeDirection='down'
        isOpen
        style={styles.modalView}
        onClosed={this.onClosed}
      >
        <ScrollView>
          <View style={styles.modalInfo}>
            <View style={styles.modalBg}>
              <Image source={{ uri: this.state.music.field_image }} style={styles.modalImg} />
            </View>
            <View style={styles.infoContent}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>{__('Description')}</Text>
              </View>
              <View style={styles.infoRow}>
                  <Text style={styles.infoDesc}>{this.state.music.description}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </Modal>
    )
  }

  render () {
    return this.state.isOpened ? this.renderModal() : null
  }
}

export default Detail
