import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import Modal from 'react-native-modalbox'

import { Container, Content, Text } from '@src/component/Basic'
import Header from '@src/component/Header'
import { Button } from '@src/component/Form'
import { DarkStatusBar } from '@src/component/StatusBar'
import Support from '@src/component/Support'
import { URLS } from '@src/config/url'
import { fetchProfileNumbers } from '@src/helper/user'
import { changeNumber } from '@src/store/reducers/session'
import { goBack, navigate } from '@src/navigation'
import { bind } from '@src/utility/component'
import http from '@src/utility/http'
import { __ } from '@src/utility/translation'
import SectionProvider from '@src/component/Section/Provider'
import Form from './Form'
import Otp from './Otp'
import styles from './styles'
import { CURRENCY, APP_DETAILS } from '@src/theme/typography'

class Chat extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      step: 'form',
      values: {}
    }

    bind(this)

    this.changeNumber = this.changeNumber.bind(this)
    this.openContacts = this.openContacts.bind(this)
    this.changeOtp = this.changeOtp.bind(this)
    this.onSubmitNo = this.onSubmitNo.bind(this)
    this.onSubmitOtp = this.onSubmitOtp.bind(this)
    this.renderContent = this.renderContent.bind(this)
    this.renderFooter = this.renderFooter.bind(this)
  }

  async changeNumber (v) {
    this.setState({ values: { number: v } })
  }

  openContacts () {
    const onContactSelected = (contact) => {
      this.setState({ values: { number: contact.number } })
    }
    SectionProvider.showContactSelection({
      onSelected: onContactSelected
    })
  }

  async changeOtp (v) {
    this.setState({ values: { ...this.state.values, otp: v } })
  }

  async onSubmitNo () {
    await Support.showLoading()
    try {
      const values = {
        GetSecondaryNumberRequest: {
          CommonInfromation: {
            TransactionId: 'C3CC6129B45FB4',
            OrderDateTime: '2021-10-26T14:59:26.139',
            OpCoID: 'NG',
            SenderID: 'SmartApp'
          },
          ApiCode: 8223,
          ExternalUser: 'testuser1',
          ExternalApplication: 'CLM',
          ServiceCode: 'SEC_NUM',
          SubServiceCode: 'string',
          ContractType: 'string',
          ServiceKeyCode: 'SEC_NUM',
          ALC: this.state.values.number
        }
      }

      const result = (await http.post(URLS.USER_NUMBER_LINKED_CREATE, values)).data

      await this.promisedSetState({ step: 'otp' })
      await this.onChangeValue('insertId', result.GetSecondaryNumberResponse.API_Output.insertId)
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
  }

  async onSubmitOtp () {
    await Support.showLoading()
    try {
      const values = { insertId: this.state.values.insertId, otp: this.state.values.otp }
      const result = (await http.post(URLS.USER_NUMBER_LINKED_VERIFY, values)).data

      await fetchProfileNumbers()
      const index = this.props.session.numbers.findIndex(r => r.number == this.state.values.number)
      if (index > -1) {
        this.props.changeNumber(index)
      }
      // goBack()
      navigate('PublicHome')
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
  }

  renderContent () {
    if (this.state.step === 'form') {
      return (
        <Form
          values={this.state.values}
          changeNumber={this.changeNumber}
          openContacts={this.openContacts}
        />
      )
    } else if (this.state.step === 'otp') {
      return (
        <Otp
          values={this.state.values}
          changeOtp={this.changeOtp}
        />
      )
    }

    return null
  }

  renderFooter () {
    let footer
    if (this.state.step === 'form') {
      return (
        <Button style={styles.footerBtn} onPress={this.onSubmitNo}>
          <Text style={styles.footerBtnText}>{__('Generate OTP')}</Text>
        </Button>
      )
    } else if (this.state.step === 'otp') {
      return (
        <Button style={styles.footerBtn} onPress={this.onSubmitOtp}>
          <Text style={styles.footerBtnText}>{__('Check OTP')}</Text>
        </Button>
      )
    }
    return (
      <View style={styles.footer}>
        {footer}
      </View>
    )
  }

  render () {
    let user = {}
    let username = ''
    let userInitial = ''
    if (this.props.session.isLoggedIn) {
      user = this.props.session.user
      username = user.firstName + '' + user.lastName
      userInitial = user.firstName.toUpperCase().substring(0, 1)
    }
    return (
      <Container>
        <DarkStatusBar />
        <Header
          leftType='back'
          title='Add Number'
          titleColor='light'
        />

        <Content style={styles.layout}>
          <ScrollView>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>{__('My Account')}</Text>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={styles.cardHeaderCol}>
                  <Text style={styles.cardPrimary}>{__('Primary number')}</Text>
                </View>
                <Text style={styles.cardSpecial}>{__('My '+ APP_DETAILS.APP_NAME +' XtraSpecial')}</Text>
              </View>
              <View style={styles.cardContent}>
                <View style={styles.cardInitial}>
                  <Text style={styles.cardInitialText}>{userInitial}</Text>
                </View>
                <View style={styles.cardCol}>
                  <View style={styles.cardRow}>
                    <Text style={styles.cardName}>{username}</Text>
                  </View>
                  <View style={styles.cardRow}>
                    <Text style={styles.cardNo}>{user.altMobilenumber}</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.alert}>
              <Image source={require('@asset/icons/alert.png')} style={styles.alertImg} resizeMode='contain' />
              <View style={styles.alertCol}>
                <View style={styles.alertRow}>
                  <Text style={styles.alertTitle}>{__('Your friends recharge is due!')}</Text>
                </View>
                <View style={styles.alertRow}>
                  <Text style={styles.alertDesc}>{__('Now you can get recharge reminders for your family and friend\'s numbers')}</Text>
                </View>
                <View style={styles.alertDivider} />
                <View style={styles.alertRow}>
                  <Text style={styles.alertNote}>{__('You can add 4 more accounts!')}</Text>
                </View>
              </View>
            </View>

            {this.renderContent()}

          </ScrollView>
        </Content>

        {this.renderFooter()}

        <Modal
          ref='modalSuccess'
          position='bottom'
          style={styles.modalSuccess}
        >
          <View style={styles.confirm}>
            <Image source={require('@asset/icons/success.png')} style={styles.confirmImg} resizeMode='contain' />
            <Text style={styles.confirmTitle}>{__('Successful')}</Text>
            <Text style={styles.confirmDesc}>{__('We Linked your friends’s account \n successfully')}</Text>
            <Button style={styles.confirmBtn} onPress={() => this.refs.modalSearch.open()}>
              <Text style={styles.confirmBtnText}>{__('Done')}</Text>
            </Button>
          </View>
        </Modal>

      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }), { changeNumber })(Chat)
