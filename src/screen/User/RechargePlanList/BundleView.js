import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modalbox';

import theme from '@src/theme/styles';
import { __ } from '@src/utility/translation';
import styles from './styles';

class BundleView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      bundle: null,
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

  open(bundle) {
    if (!bundle) {
      return;
    }
    this.setState({
      isOpened: true,
      bundle,
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
        <View style={styles.rechargeRow}>
          <Text style={styles.rechargeDesc}>{this.state.bundle.Description}</Text>
        </View>
        <View style={styles.rechargeContent2}>
          <View style={styles.rechargePlans}>
            <View style={styles.layout}>
              <View style={theme.row}>
                <Text style={styles.validityText}>{__('Validity')}</Text>
              </View>
              <View style={theme.row}>
                <Text style={styles.limitedText}>
                  {this.state.bundle.Validity}
                </Text>
              </View>
            </View>
            <View style={styles.layout}>
              <View style={theme.row}>
                <Text style={styles.validityText}>{__('Data')}</Text>
              </View>
              <View style={theme.row}>
                <Text style={styles.limitedText}>
                  {this.state.bundle.DataShareDenomination}
                </Text>
              </View>
            </View>
            <View style={styles.layout}>
              <View style={theme.row}>
                <Text style={styles.validityText}>{__('Calls')}</Text>
              </View>
              <View style={theme.row}>
                <Text style={styles.limitedText}>
                  {this.state.bundle.Calls}
                </Text>
              </View>
            </View>
            <Text style={styles.planText}>{this.state.bundle.Price}</Text>
          </View>
        </View>
      </Modal>
    );
  }

  render() {
    return this.state.isOpened ? this.renderModal() : null;
  }
}

export default BundleView;
