import React from 'react'
import { Image, ScrollView, View, Text } from 'react-native'
import { compile } from 'path-to-regexp'

import { Container, Content } from '@src/component/Basic'
import { Button, TextInput } from '@src/component/Form'
import Header from '@src/component/Header'
import { DarkStatusBar } from '@src/component/StatusBar'
import Support from '@src/component/Support'
import { URLS } from '@src/config/url'
import theme from '@src/theme/styles'
import { bind } from '@src/utility/component'
import http from '@src/utility/http'
import { __ } from '@src/utility/translation'
import RecentTopup from './RecentTopup'
import styles from './styles'
import Amount from './Amount'
import { navigateCurrent } from '@src/navigation'
import Success from './Success'
import Scanner from './Scanner'
import { connect } from 'react-redux'
import { logClickEvent } from '@src/utility/analytics'
import SectionProvider from '@src/component/Section/Provider'

class Topup extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showForm: false,
      recentTopups: [],
      fetchingRecentTopups: true,
      amount: '',
      amounts: [],
      amountSelected: null,
      fetchingAmounts: true,
      profile: {},

      visibleScanner: false,
      visibleSuccess: false
    }

    bind(this)

    this.onChangeVoucherNumber = this.onChangeVoucherNumber.bind(this)
    this.onChangeMobile = this.onChangeMobile.bind(this)
    this.onSubmitEditing = this.onSubmitEditing.bind(this)
    this.openContacts = this.openContacts.bind(this)
    this.getNumber = this.getNumber.bind(this)
    this.fetchProfile = this.fetchProfile.bind(this)
    this.fetchAmounts = this.fetchAmounts.bind(this)
    this.fetchRecentTopups = this.fetchRecentTopups.bind(this)
    this.onChangeAmount = this.onChangeAmount.bind(this)
    this.selectAmount = this.selectAmount.bind(this)
    this.selectRecentTopup = this.selectRecentTopup.bind(this)
    this.onRecharge = this.onRecharge.bind(this)
    this.onOpenScanner = this.onOpenScanner.bind(this)
    this.onCloseScanner = this.onCloseScanner.bind(this)
    this.onOpenSuccess = this.onOpenSuccess.bind(this)
    this.onCloseSuccess = this.onCloseSuccess.bind(this)
    this.renderForm = this.renderForm.bind(this)
  }

  componentDidMount () {
    this.fetchAmounts()
  }

  async onChangeVoucherNumber (v) {
    await this.promisedSetState({
      voucherNumber: v,
      mobilenumber: '',
      showForm: false
    })
  }

  async onChangeMobile (v) {
    await this.promisedSetState({
      mobilenumber: v,
      voucherNumber: '',
      showForm: false
    })
  }

  async fetchProfile (number) {
    let res = false
    await Support.showLoading()
    try {
      const url = compile(URLS.USER_PROFILE_FROM_MOBILE)({ number })
      const r = (await http.get(url)).data
      if (r?.response?.records?.id) {
        const profile = r.response.records
        if (profile.type != 'Prepaid') {
          throw new Error('This topup feature is not available for postpaid number')
        }
        res = {
          name: profile.nick_name,
          mobilenumber: profile.mobilenumber,
          avatar: profile.profile_image
        }
        await this.promisedSetState({ profile })
      } else {
        throw new Error('Record not found')
      }
    } catch (e) {
      Support.showServerError(e)
    }
    await Support.hideLoading()
    return res
  }

  async fetchAmounts () {
    try {
      const r = (await http.get(URLS.TOPUP_AMOUNT)).data
      if (Array.isArray(r?.response?.rows)) {
        await this.promisedSetState({
          amounts: r.response.rows
        })
      }
    } catch (e) { }
    await this.promisedSetState({
      fetchingAmounts: false
    })
  }

  async getNumber () {
    if (this.state.voucherNumber) {
      const type = 'voucher'
      const number = this.state.voucherNumber
      return { type, number }
    } else if (this.state.mobilenumber) {
      const type = 'mobile'
      const number = this.state.mobilenumber
      const profile = await this.fetchProfile(number)
      console.log('profile', profile)
      if (!profile) {
        return { number: false }
      } else {
        return { type, number, profile }
      }
    }
    return null
  }

  async onSubmitEditing () {
    const { number } = await this.getNumber()
    if (!number) {
      if (number !== false) {
        await Support.showError({
          layout: 'toast',
          message: __('Please enter voucher card or mobile number')
        })
      }
      return
    }
    await this.promisedSetState({
      showForm: true
    })
    await this.fetchRecentTopups()
  }

  openContacts () {
    const onContactSelected = async (contact) => {
      await this.promisedSetState({
        mobilenumber: contact.number,
        voucherNumber: '',
        showForm: false
      })
      this.onSubmitEditing()
    }
    logClickEvent('TopupContactList')
    SectionProvider.showContactSelection({
      onSelected: onContactSelected
    })
  }

  async fetchRecentTopups () {
    const { number } = await this.getNumber()
    await this.promisedSetState({
      fetchingRecentTopups: true
    })
    try {
      const url = compile(URLS.RECENT_TOPUPS)({ number })
      const r = (await http.get(url)).data
      if (r?.response?.length) {
        await this.promisedSetState({
          recentTopups: r.response
        })
      }
    } catch (e) { }
    await this.promisedSetState({
      fetchingRecentTopups: false
    })
  }

  onChangeAmount (amount) {
    this.setState({
      amount,
      amountSelected: null
    })
  }

  selectAmount (amount) {
    this.setState({
      amount: '',
      amountSelected: amount
    })
  }

  selectRecentTopup (amount) {
    this.setState({
      amount,
      amountSelected: ''
    })
  }

  async onRecharge () {
    const cb = () => { }
    const { type, number } = await this.getNumber()
    if (!number) {
      await Support.showError({
        layout: 'toast',
        message: __('Please enter voucher card or mobile number')
      })
      return
    }
    const amount = parseInt(this.state.amountSelected?.amount ? this.state.amountSelected.amount : this.state.amount, 10)
    if (isNaN(amount) || !amount) {
      await Support.showError({
        layout: 'toast',
        message: __('Please select an amount to recharge')
      })
      return
    }

    const selectedNumber = this.props.session.numbers.find(r => r.isPrimary)

    let cartType = ''
    if (type == 'voucher') {
      cartType = 'vouchercard'
    } else if (type == 'mobile') {
      cartType = 'mobilenumber'
    }
    const cart = {
      productType: 'topup',
      items: [{
        id: 1,
        title: 'topup',
        type: cartType,
        [cartType]: number,
        quantity: 1,
        currency: this.state.amountSelected?.currency || 'Rs',
        price: this.state.amountSelected?.amount || this.state.amount
      }],
      currency: this.state.amountSelected?.currency || 'Rs',
      total: this.state.amountSelected?.amount || this.state.amount
    }
    navigateCurrent('UserPayment', {
      profile: {
        name: selectedNumber.name,
        mobilenumber: selectedNumber.number
      },
      cart
    })
    /* await Support.showLoading()
    try {
      const formdata = new FormData()
      if (type == 'voucher') {
        formdata.append('voucher_card', number)
      } else if (type == 'mobile') {
        formdata.append('number', number)
      }
      formdata.append('amount', this.state.amount)
      const headers = {}
      headers['Content-Type'] = 'multipart/form-data'
      const r = (await http.post(URLS.TOPUP, formdata, { headers })).data
      cb = this.onOpenSuccess
    } catch (e) {
      console.log(e)
      await Support.showServerError(e)
    }
    await Support.hideLoading()
    cb() */
  }

  async onOpenScanner () {
    await this.promisedSetState({ visibleScanner: true })
  }

  async onCloseScanner () {
    await this.promisedSetState({ visibleScanner: false })
  }

  async onReadQRCode (code) {
    await this.onChangeVoucherNumber(code)
    await this.onCloseScanner()
  }

  async onOpenSuccess () {
    await this.promisedSetState({ visibleSuccess: true })
  }

  async onCloseSuccess () {
    await this.promisedSetState({ visibleSuccess: false })
  }

  renderForm () {
    let recentTopup
    if (this.state.showForm) {
      recentTopup = (
        <RecentTopup
          list={this.state.recentTopups}
          fetching={this.state.fetchingRecentTopups}
          selectRecentTopup={this.selectRecentTopup}
        />
      )
    }
    return (
      <>
        <View style={[styles.card, styles.cardSpace]}>
          <View style={styles.cardRow}>
            <View style={styles.cardCol}>
              <TextInput
                keyboardType='numeric'
                placeholder={__('Enter Amount')}
                placeholderTextColor='rgba(0, 0, 0, 0.3)'
                style={styles.cardInput}
                value={this.state.amount?.toString()}
                onChangeText={this.onChangeAmount}
              />
            </View>
          </View>

          <Amount
            list={this.state.amounts}
            amountSelected={this.state.amountSelected}
            selectAmount={this.selectAmount}
          />
        </View>

        {recentTopup}

        <View style={styles.footer}>
          <Button style={styles.footerBtn} onPress={this.onOpenScanner}>
            <Image source={require('@asset/icons/scan.png')} style={styles.footerBtnIcon} resizeMode='contain' />
            <Text style={styles.footerBtnText}>{__('Scan')}</Text>
          </Button>
          <Button style={[styles.footerBtn, styles.footerBtnPrimary]} onPress={this.onRecharge}>
            <Text style={[styles.footerBtnText, styles.footerBtnPrimaryText]}>{__('Recharge')}</Text>
          </Button>
        </View>
      </>
    )
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('Topup Card')}
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.termContent}
          >

            <View style={styles.card}>
              <View style={styles.cardRow}>
                <View style={styles.cardCol}>
                  <TextInput
                    placeholder={__('Enter Voucher Card')}
                    placeholderTextColor='rgba(0, 0, 0, 0.3)'
                    style={styles.cardInput}
                    value={this.state.voucherNumber}
                    onChangeText={this.onChangeVoucherNumber}
                    onSubmitEditing={this.onSubmitEditing}
                  />
                </View>
              </View>
              <Text style={styles.orText}>Or</Text>
              <View style={styles.cardRow}>
                <View style={styles.cardCol}>
                  <TextInput
                    keyboardType='phone-pad'
                    maxLength={10}
                    placeholder={__('Enter Topup Number')}
                    placeholderTextColor='rgba(0, 0, 0, 0.3)'
                    style={styles.cardInput}
                    value={this.state.mobilenumber}
                    onChangeText={this.onChangeMobile}
                    onSubmitEditing={this.onSubmitEditing}
                  />
                </View>
                <Button onPress={this.openContacts}>
                  <Image source={require('@asset/icons/addressbook.png')} style={styles.cardAddressBook} resizeMode='contain' />
                </Button>
              </View>
            </View>

            {this.renderForm()}
          </ScrollView>
        </Content>

        {this.state.visibleScanner
          ? <Scanner
              onRead={this.onReadQRCode}
              close={this.onCloseScanner}
            />
          : null}

        {this.state.visibleSuccess
          ? <Success
              profile={this.state.profile}
              amount={this.state.amount}
              close={this.onCloseSuccess}
            />
          : null}
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Topup)
