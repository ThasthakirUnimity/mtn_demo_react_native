import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modalbox';

import theme from '@src/theme/styles';
import { __ } from '@src/utility/translation';
import styles from './styles';

class PlanView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      plan: null,
    };

    this.onClosed = this.onClosed.bind(this);
    this.open = this.open.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  onClosed() {
    this.setState({
      isOpened: false,
    });
  }

  open(plan) {
    if (!plan) {
      return;
    }
    this.setState({
      isOpened: true,
      plan,
    });
  }

  renderModal() {
    return (
      <Modal
        position={'bottom'}
        swipeDirection="down"
        isOpen
        style={styles.modalView}
        onClosed={this.onClosed}>
          <View style={styles.rBox}>
            <View style={styles.rBoxCol}>
              <View style={styles.rBoxRow}>
                <Text style={styles.rBoxLabel}>{__('Name')}</Text>
              </View>
              <View style={styles.rBoxRow}>
                <Text style={styles.rBoxValue}>{this.state.plan.name}</Text>
              </View>
            </View>
            <View style={styles.rBoxCol}>
              <View style={styles.rBoxRow}>
                <Text style={styles.rBoxLabel}>{__('Number')}</Text>
              </View>
              <View style={styles.rBoxRow}>
                <Text style={styles.rBoxValue}>{this.state.plan.number}</Text>
              </View>
            </View>
            <View style={styles.rBoxCol}>
              <View style={styles.rBoxRow}>
                <Text style={styles.rBoxLabel}>{__('Price')}</Text>
              </View>
              <View style={styles.rBoxRow}>
                <Text style={styles.rBoxValue}>{this.state.plan.currency} {this.state.plan.price}</Text>
              </View>
            </View>

          </View>
      </Modal>
    );
  }

  render() {
    return this.state.isOpened ? this.renderModal() : null;
  }
}

export default PlanView;
