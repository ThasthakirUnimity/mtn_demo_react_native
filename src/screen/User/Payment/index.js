import React from 'react'
import { Image, Platform, ScrollView, View } from 'react-native'
import moment from 'moment'
import { connect } from 'react-redux'
import Modal from 'react-native-modalbox'
import RNFetchBlob from 'rn-fetch-blob'

import { Container, Content, Icon, Text } from '@src/component/Basic'
import { Button, TextInput } from '@src/component/Form'
import Header from '@src/component/Header'
import { DarkStatusBar } from '@src/component/StatusBar'
import Support from '@src/component/Support'
import { URLS } from '@src/config/url'
import { navigate } from '@src/navigation'
import theme from '@src/theme/styles'
import { bind } from '@src/utility/component'
import http from '@src/utility/http'
import { __ } from '@src/utility/translation'
import styles from './styles'
import Information from './Information'
import PaymentMethods from './PaymentMethods'
import PayWithFlutterwave, { FlutterwaveInit } from 'flutterwave-react-native'
import uniqueId from 'lodash/uniqueId'
import { FLUTTERWAVE_PUBLIC_KEY } from '@src/config/env'
import { addToSavedEbList } from '@src/helper/bill'

import { CURRENCY, APP_DETAILS } from '@src/theme/typography'



const paymentMethods = [
  {
    id: 'blink',
    name: 'Blink',
    RightComponent: () => <Text style={styles.payBtnAmount}>{__('Balance')} {CURRENCY.SYMBOL} 500</Text>
  },
  {
    id: 'airtime',
    name: 'Airtime',
    RightComponent: () => <Text style={styles.payBtnAmount}>{__('Balance')} {CURRENCY.SYMBOL} 600</Text>
  },
  {
    id: 'card',
    name: 'Credit/Debit Card',
    payment_type: 'card'
  },
  {
    id: 'bank',
    name: 'Bank Account',
    payment_type: 'account'
  }
]

const cardNumbers = [
  {
    number: '5439-7654-XXXX-X321',
    icon: require('@asset/icons/visa.png')
  },
  {
    number: '6548-8798-XXXX-X546',
    icon: require('@asset/icons/visa.png')
  }
]

const bankAccounts = [
  {
    number: '0004531XXXX543',
    icon: require('@asset/icons/bank/hsbc.png')
  },
  {
    number: '0008547XXXX726',
    icon: require('@asset/icons/bank/hsbc.png')
  }
]

class Payment extends React.Component {
  constructor (props) {
    super(props)
    console.log("SNSN 2 --> " +  JSON.stringify(props))
    const profile = props.route.params?.profile || {}
    const cart = props.route.params.cart
    var chatSettings = null
    if( props.route.params?.chatState ){
      chatSettings = props.route.params.chatState
    }

    const flutterwaveOptions = {
      tx_ref: cart.productType + '-' + moment().format('x'),
      authorization: FLUTTERWAVE_PUBLIC_KEY,
      customer: {
        email: 'customer-email@example.com',
        phonenumber: profile.mobilenumber,
        name: profile.name
      },
      amount: cart.total,
      currency: CURRENCY.CURRENCY,
      payment_options: '',

      card_number: '4556052704172643',
      cvv: '899',
      expiry_month: '01',
      expiry_year: '23'
    }

    this.state = {
      profile,
      cart, 
      flutterwaveOptions,

      selectedPaymentMethod: null,
      values: {},
      chatState: chatSettings 
    }

    bind(this)
    
    this.selectPaymentMethod = this.selectPaymentMethod.bind(this)
    this.selectCard = this.selectCard.bind(this)
    this.onChangeCardCvv = this.onChangeCardCvv.bind(this)
    this.validateCardCvv = this.validateCardCvv.bind(this)
    this.selectBank = this.selectBank.bind(this)
    this.startTransaction = this.startTransaction.bind(this)
    this.onFlutterwaveRedirect = this.onFlutterwaveRedirect.bind(this)
    this.saveTransaction = this.saveTransaction.bind(this)
    this.onTransactionSaved = this.onTransactionSaved.bind(this)
    this.downloadPdf = this.downloadPdf.bind(this)
    this.renderTop = this.renderTop.bind(this)
    this.renderOffers = this.renderOffers.bind(this)
    this.renderPayButton = this.renderPayButton.bind(this)
  }

  selectPaymentMethod (id) {
    const paymentMethod = paymentMethods.find(r => (r.id == id))
    if (!paymentMethod) {
      return
    }
    this.setState({
      selectedPaymentMethod: id,
      flutterwaveOptions: { ...this.state.flutterwaveOptions, payment_options: paymentMethod.payment_type || '' }
    })
  }

  selectCard (number) {
    if (this.state.values?.card?.number != number) {
      this.setState({ values: { ...this.state.values, card: { number }, bank: {} } })
    }
  }

  onChangeCardCvv (cvv) {
    this.setState({ values: { ...this.state.values, card: { ...this.state.values.card, cvv, passed: false } } })
  }

  validateCardCvv () {
    if (this.state.values?.card?.cvv?.length == 3) {
      this.setState({ values: { ...this.state.values, card: { ...this.state.values.card, passed: true } } })
    } else {
      Support.showError({
        layout: 'toast',
        message: __('Please enter CVV')
      })
    }
  }

  selectBank (number) {
    if (this.state.values?.bank?.number != number) {
      this.setState({ values: { ...this.state.values, card: {}, bank: { number } } })
    }
  }

  async startTransaction () {
    const paymentMethod = paymentMethods.find(r => (r.id === this.state.selectedPaymentMethod))
    if (!paymentMethod) {
      Support.showError({ layout: 'toast', message: __('Please select a payment method') })
    }
  }

  onFlutterwaveRedirect (data) {
    this.saveTransaction({
      gatewayType: 'flutterwave',
      transactionId: parseInt(data.transaction_id, 10)
    })
  }

  async saveTransaction ({ gatewayType, transactionId }) {
    await Support.showLoading()
    let cb = null
    try {
      const data = {
        items: this.state.cart.items.map(item => {
          const { _original, ...all } = item
          return all
        }),
        flag: this.state.cart.productType,
        mobilenumber: this.state.profile.mobilenumber? this.state.profile.mobilenumber : "eKYC",
        gatewayType,
        transactionId
      }

      var data1 = {
        items:[],
        flag:"Prepaid Starter Pack",
        mobilenumber:"Test",
        gatewayType:"flutterwave",
        transactionId:3687021
    };
      const r = (await http.post(URLS.PAYMENT_VERIFICATION, data1)).data
      await this.promisedSetState({ transaction: r.response })

      cb = this.onTransactionSaved
      /* if (r.response.status == 'error') {
        await Support.showError({
          message: r.response.message,
          onHide: () => {
            navigate('PublicHome')
          },
          hideDelay: 2500
        })
      } else {
        const paydate = moment(r.response.data.created_at, 'YYYY-MM-DD')
        r.response.data.created_at = paydate.format('DD MMMM YYYY')
        this.setState(r.response)

        this.refs.modalSuccess.open()
      } */
    } catch (e) {
      console.log(e)
    }
    await Support.hideLoading()
    cb && cb()
  }

  onTransactionSaved () {
    this.state.paymentStatus = 1
    this.refs.modalSuccess.open()
    if (this.state.cart.productType == 'bills') {
      if (this.state.cart.productSubType == 'eb') {
        addToSavedEbList({
          meternumber: this.state.cart.items[0].meternumber,
          name: this.state.cart.items[0].name
        })
      }
    }
  }

  downloadPdf () {
    if (this.state.transaction?.pdfUrl) {
      Support.showSuccess({
        layout: 'toast',
        message: 'Downloading'
      })
      const dirs = RNFetchBlob.fs.dirs
      const path = dirs.DownloadDir + '/payment_invoice.pdf'
      RNFetchBlob.config({
        path
      })
        .fetch('GET', this.state.transaction.pdfUrl)
        .then((res, res1) => {
          Support.showSuccess({
            layout: 'toast',
            message: 'The file saved to ' + res.path()
          })
          if (Platform.OS === 'ios') {
            RNFetchBlob.ios.openDocument(res.path())
          } else {
            RNFetchBlob.android.actionViewIntent(res.path(), 'application/pdf')
          }
        }, () => {}).catch(e => {})
    }
  }

  renderTop () {
    return (
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Image source={require('@asset/icons/avatar-light.png')} resizeMode='cover' style={styles.cardAvatar} />
          <View style={styles.cardRight}>
            <Text style={styles.cardName}>{this.state.profile.name}</Text>
            <Text style={styles.cardNo}>{this.state.profile.mobilenumber}</Text>
          </View>
        </View>
        <Information cart={this.state.cart} />
        <View style={styles.cardPay}>
          <Text style={styles.cardPayText}>{__('Amount Payable')}</Text>
          <Text style={styles.cardPayAmount}>{this.state.cart.currency}{this.state.cart.total}</Text>
        </View>
      </View>
    )
  }

  renderOffers () {
    return (
      <View style={styles.btnGroup}>
        <Button style={styles.btn}>
          <View style={styles.btnCol}>
            <Image source={require('@asset/icons/offers.png')} resizeMode='contain' style={styles.btnImg} />
            <Text style={styles.btnText}>{__('Apply Coupons')}</Text>
          </View>
          <Icon name='chevron-right' type='Entypo' style={styles.btnIcon} />
        </Button>
        <Button style={styles.btn}>
          <View style={styles.btnCol}>
            <Image source={require('@asset/icons/offers.png')} resizeMode='contain' style={styles.btnImg} />
            <Text style={styles.btnText}>{__('Redeem Points')}</Text>
          </View>
          <Icon name='chevron-right' type='Entypo' style={styles.btnIcon} />
        </Button>
      </View>
    )
  }

  renderPayButton () {
    if (this.state.selectedPaymentMethod) {
      const onWillInitialize = (data) => {
        console.log('onWillInitialize', data, this.state.flutterwaveOptions)
        Support.showLoading()
      }
      const onDidInitialize = (data) => {
        console.log('onDidInitialize', data)
        Support.hideLoading()
      }
      const onInitializeError = (data) => {
        console.log('onInitializeError', data)
        Support.hideLoading()
      }
      const onAbort = (data) => {
        console.log('onAbort', data)
      }
      return (
        <PayWithFlutterwave
          onRedirect={this.onFlutterwaveRedirect}
          onWillInitialize={onWillInitialize}
          onDidInitialize={onDidInitialize}
          onInitializeError={onInitializeError}
          onAbort={onAbort}
          options={this.state.flutterwaveOptions}
          customButton={(props) => (
            <Button
              style={styles.footerBtn}
              onPress={props.onPress}
              isBusy={props.isInitializing}
              disabled={props.disabled}
            >
              <Text style={styles.footerBtnText}>{__('Pay Now')}</Text>
            </Button>
          )}
        />
      )
    }
    return (
      <Button style={styles.footerBtn} onPress={this.startTransaction}>
        <Text style={styles.footerBtnText}>{__('Pay Now')}</Text>
      </Button>
    )
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('Payment')}
          titleColor='light'
        />
        <Content style={theme.layoutBg}>
          <ScrollView>
            {this.renderTop()}
            {this.renderOffers()}
            <PaymentMethods
              paymentMethods={paymentMethods}
              cardNumbers={cardNumbers}
              bankAccounts={bankAccounts}
              values={this.state.values}
              selectedPaymentMethod={this.state.selectedPaymentMethod}
              selectPaymentMethod={this.selectPaymentMethod}
              selectCard={this.selectCard}
              onChangeCardCvv={this.onChangeCardCvv}
              validateCardCvv={this.validateCardCvv}
              selectBank={this.selectBank}
            />
          </ScrollView>
        </Content>

        <View style={styles.footer}>
          {this.renderPayButton()}
        </View>

        <Modal
          ref='modalMoMo'
          position='bottom'
          swipeDirection='down'
          style={styles.modalMoMo}
        >
          <View style={styles.momoTop}>
            <Text style={styles.momoTopTitle}>{__('Paying with Mobile Money MoMo')}</Text>
          </View>
          <View style={styles.momoContent}>
            <Text style={styles.momoTitle}>{__('Enter the 4 digit PIN')}</Text>
            <View style={styles.momoRow}>
              <View style={styles.momoCol}>
                <TextInput
                  placeholder='2'
                  placeholderTextColor='rgba(0, 0, 0, 1)'
                  keyboardType='phone-pad'
                  maxLength={1}
                  style={styles.momoInput}
                />
              </View>
              <View style={styles.momoCol}>
                <TextInput
                  placeholder='3'
                  placeholderTextColor='rgba(0, 0, 0, 1)'
                  keyboardType='phone-pad'
                  maxLength={1}
                  style={styles.momoInput}
                />
              </View>
              <View style={styles.momoCol}>
                <TextInput
                  placeholder='4'
                  placeholderTextColor='rgba(0, 0, 0, 1)'
                  keyboardType='phone-pad'
                  maxLength={1}
                  style={styles.momoInput}
                />
              </View>
              <View style={styles.momoCol}>
                <TextInput
                  placeholder='5'
                  placeholderTextColor='rgba(0, 0, 0, 1)'
                  keyboardType='phone-pad'
                  maxLength={1}
                  style={styles.momoInput}
                />
              </View>
            </View>
            <Button style={styles.forgotBtn}>
              <Text style={styles.forgotBtnText}>{__('Forgot PIN?')}</Text>
            </Button>
          </View>
          <View style={styles.momoBot}>
            <Button style={styles.momoBtn} onPress={() => this.refs.modalSuccess.open()}>
              <Text style={styles.momoBtnText}>{__('Pay Now')}</Text>
            </Button>
          </View>
        </Modal>

        <Modal
          ref='modalAirtime'
          position='bottom'
          swipeDirection='down'
          style={styles.modalMoMo}
        >
          <View style={styles.momoTop}>
            <Text style={styles.momoTopTitle}>{__('Paying with Airtime Balance')}</Text>
          </View>
          <View style={styles.momoContent}>
            <View style={styles.momoHeader}>
              <Text style={styles.momoTitle}>{__('Mode of Activation')}</Text>
              <View style={styles.momoHeaderRow}>
                <Button style={styles.momoHeaderBtn}>
                  <Icon name='record-circle-outline' type='MaterialCommunityIcons' style={styles.momoHeaderBtnIcon} />
                  <Text style={styles.momoHeaderBtnText}>{__('One Off')}</Text>
                </Button>
                <Button style={styles.momoHeaderBtn}>
                  <Icon name='checkbox-blank-circle-outline' type='MaterialCommunityIcons' style={styles.momoHeaderBtnIcon} />
                  <Text style={styles.momoHeaderBtnText}>{__('Auto Renew')}</Text>
                </Button>
              </View>
            </View>

            <View style={styles.momoItems}>
              <View style={styles.momoItem}>
                <View style={styles.momoInitial}>
                  <Text style={styles.momoInitialText}>J</Text>
                </View>
                <View style={styles.momoItemCol}>
                  <View style={styles.momoItemRow}>
                    <Text style={styles.momoItemName}>John</Text>
                  </View>
                  <View style={styles.momoItemRow}>
                    <Text style={styles.momoItemNo}>8939179809</Text>
                  </View>
                </View>
                <Text style={styles.momoItemData}>500 MB</Text>
              </View>
            </View>
          </View>
          <View style={styles.momoBot}>
            <Button style={styles.momoBtn} onPress={() => this.refs.modalSuccess.open()}>
              <Text style={styles.momoBtnText}>{__('Pay Now')}</Text>
            </Button>
          </View>
        </Modal>

        <Modal
          ref='modalSuccess'
          position='bottom'
          swipeDirection='down'
          isOpen={this.state.isOpen}
          onClosed={() =>
            this.setState({
              isOpen: false
            })}
          style={styles.modalSuccess}
        >
          <View style={styles.confirmHeader}>
            <Image source={require('@asset/icons/success.png')} resizeMode='contain' style={styles.confirmImg} />
            <View style={styles.confirmHeaderRow}>
              <Text style={styles.confirmHeaderTitle}>{__('Successful')}</Text>
            </View>
            <View style={styles.confirmHeaderRow}>
              <Text style={styles.confirmHeaderSubTitle}>{__('Thank you for using My '+ APP_DETAILS.APP_NAME +'')}</Text>
            </View>
          </View>

          <View style={styles.confirmContent}>
            <View style={styles.confirmBox}>
              <View style={styles.confirmRow}>
                <View style={styles.confirmCol}>
                  <Text style={styles.confirmTitle}>{__('Transaction Details')}</Text>
                </View>
                <Button onPress={this.downloadPdf}>
                  <Image source={require('@asset/icons/transaction-download.png')} resizeMode='contain' />
                </Button>
              </View>
              <View style={styles.confirmRow}>
                <View style={styles.confirmCol}>
                  <Text style={styles.confirmLabel}>{__('Date')}</Text>
                  <Text style={styles.confirmValue}>{this.state.transaction?.transactionDate}</Text>
                </View>
                <View style={styles.confirmCol}>
                  <Text style={styles.confirmLabel}>{__('Transaction ID')}</Text>
                  <Text style={styles.confirmValue}>{this.state.transaction?.invoiceId}</Text>
                </View>
              </View>
              <View style={styles.confirmRow}>
                <View style={styles.confirmCol}>
                  <Text style={styles.confirmLabel}>{__('From')}</Text>
                  <Text style={styles.confirmValue}>{this.state.profile.name}</Text>
                  <Text style={styles.confirmValue}>{this.state.profile.mobilenumber}</Text>
                </View>
              </View>
            </View>
          </View>
          
                <View style={styles.confirmFooter}>
                  <Button style={styles.confirmBtn} onPress={() => {
                    console.log("Payment screen | State --> " + this.state.chatState.currentStep )
                        navigate("UserLoginProfile", {
                            chatSettings: this.state.chatState
                          });
                    }}>
                  <Text style={styles.confirmBtnText}>{__('Continue choosing mobile number')}</Text>
                </Button>
              </View>
                {/* <View style={styles.confirmFooter}>
                <Button style={styles.confirmBtn} onPress={() => navigate('PublicHome')}>
                  <Text style={styles.confirmBtnText}>{__('Back to Home')}</Text>
                </Button>
              </View> */}
          
        </Modal>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Payment)
