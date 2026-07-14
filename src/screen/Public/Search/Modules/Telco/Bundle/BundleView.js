import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Modal from 'react-native-modalbox'

import { __ } from '@src/utility/translation'
import styles from './styles'
import { Button } from '@src/component/Form'

class BundleView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpened: false,
      bundle: null
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

  open (bundle) {
    if (!bundle) {
      return
    }
    this.setState({
      isOpened: true,
      bundle
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
        <View style={styles.info}>
          <View style={styles.infoHeader}>
            <View style={styles.infoBar} />
            <Text style={styles.infoHeaderTitle}>
              {this.state.bundle.currency} {this.state.bundle.Price}
            </Text>
            <Text style={styles.infoHeaderDesc}>
              {this.state.bundle.Data} {this.state.bundle.data_type} / {this.state.bundle.Validity} {this.state.bundle.validity_type}
            </Text>
          </View>
          <View style={styles.infoContent}>
            <View style={styles.infoRow}>
              <View style={styles.infoLeft}>
                <Text style={styles.infoLabel}>{__('Plan')}</Text>
              </View>
              <View style={styles.infoRight}>
                <Text style={styles.infoValue}>
                  {this.state.bundle.Validity} {this.state.bundle.ProductName}
                </Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <View style={styles.infoLeft}>
                <Text style={styles.infoLabel}>{__('Validity')}</Text>
              </View>
              <View style={styles.infoRight}>
                <Text style={styles.infoValue}>
                  {this.state.bundle.Validity} {this.state.bundle.validity_type}
                </Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <View style={styles.infoLeft}>
                <Text style={styles.infoLabel}>{__('Data')}</Text>
              </View>
              <View style={styles.infoRight}>
                <Text style={styles.infoValue}>
                  {this.state.bundle.Data}{this.state.bundle.data_type}
                </Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <View style={styles.infoLeft}>
                <Text style={styles.infoLabel}>{__('Calls')}</Text>
              </View>
              <View style={styles.infoRight}>
                <Text style={styles.infoValue}>{this.state.bundle.Calls}</Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <View style={styles.infoLeft}>
                <Text style={styles.infoLabel}>{__('Description')}</Text>
              </View>
              <View style={styles.infoRight}>
                <Text style={styles.infoValue}>
                  {this.state.bundle.Description}
                </Text>
              </View>
            </View>
          </View>
          <Button style={styles.proceedBtn} onPress={this.onClosed}>
            <Text style={styles.proceedBtnText}>{__('Close')}</Text>
          </Button>
        </View>
      </Modal>
    )
  }

  render () {
    return this.state.isOpened ? this.renderModal() : null
  }
}

export default BundleView
