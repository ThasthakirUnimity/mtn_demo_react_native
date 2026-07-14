import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modalbox';

import dateUtil from '@src/utility/date';
import { __ } from '@src/utility/translation';
import styles from './styles';

class InvoiceView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      invoice: null,
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

  open(invoice) {
    if (!invoice) {
      return;
    }
    this.setState({
      isOpened: true,
      invoice,
    });
  }

  renderModal() {
    return (
      <Modal
        position={'bottom'}
        swipeDirection="down"
        isOpen
        style={styles.modalSuccess}
        onClosed={this.onClosed}>
        <View style={styles.transactionListRow}>
          <Text style={styles.title}>{__('xtraPlan')}</Text>
          <Text style={styles.price}>{this.state.invoice.currency} {this.state.invoice.amount}</Text>
        </View>
        <View style={styles.transactionListRow}>
          <Text style={styles.dataPack}>{__('N Data Pack')}</Text>
          <Text style={styles.successText}>{__('Successful')}</Text>
        </View>
        <Text style={styles.date}>{dateUtil.formatFull(this.state.invoice.transactionDate)}</Text>
        <View style={styles.paymodeRow}>
          <Text style={styles.payMode}>{__('Payment Mode')}</Text>
          <Text style={styles.upitransactionText}>{this.state.invoice.payMode}</Text>
        </View>
        <View style={styles.paymodeRow}>
          <Text style={styles.payMode}>{__('Reference Number')}</Text>
          <Text style={styles.upitransactionText}>{this.state.invoice.transactionRefNo}</Text>
        </View>
        <View style={styles.paymodeRow}>
          <Text style={styles.payMode}>{__('VAT Reg no.')}</Text>
          <Text style={styles.upitransactionText}></Text>
        </View>
        <View style={styles.paymodeRow}>
          <Text style={styles.payMode}>{__('Invoice Number')}</Text>
          <Text style={styles.upitransactionText}>{this.state.invoice.invoice}</Text>
        </View>
        <View style={styles.paymodeRow}>
          <Text style={styles.payMode}>{__('Account Number')}</Text>
          <Text style={styles.upitransactionText}>{this.state.invoice.registrationNo}</Text>
        </View>

        <View style={styles.transactionDetail}>
          <View style={styles.paymodeRow}>
            <Text style={styles.payMode}>{__('Total Excluding VAT')}</Text>
            <Text style={styles.upiPrice}>{this.state.invoice.currency} {this.state.invoice.amount}</Text>
          </View>
          <View style={styles.paymodeRow}>
            <Text style={styles.payMode}>{__('VAT at 14%')}</Text>
            <Text style={styles.upiPrice}>{this.state.invoice.currency} {this.state.invoice.excludingVat}</Text>
          </View>
          <View style={styles.paymodeRow}>
            <Text style={styles.payMode}>{__('Total')}</Text>
            <Text style={styles.upiPrice}>{this.state.invoice.currency} {this.state.invoice.total}</Text>
          </View>
        </View>

        <View style={styles.transactionPrice}>
          <View style={styles.paymodeRow}>
            <Text style={styles.payMode}>{__('Date')}</Text>
            <Text style={styles.payMode}>{__('Transaction')}</Text>
            <Text style={styles.payMode}>{__('Amount')}</Text>
          </View>
          <View style={styles.paymodeRow}>
            <Text style={styles.payMode}>{dateUtil.format(this.state.invoice.transactionDate)}</Text>
            <Text style={styles.payMode}>{this.state.invoice.shop}</Text>
            <Text style={styles.planScheme}>{this.state.invoice.currency} {this.state.invoice.total}</Text>
          </View>
        </View>
      </Modal>
    );
  }

  render() {
    return this.state.isOpened ? this.renderModal() : null;
  }
}

export default InvoiceView;
