import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { Container, Content, Icon, Text } from '@src/component/Basic'
import { connect } from 'react-redux'
import Modal from 'react-native-modalbox'

import Header from '@src/component/Header'
import { Button, TextInput } from '@src/component/Form'
import { __ } from '@src/utility/translation'

import theme from '@src/theme/styles'
import styles from './styles'
import { DarkStatusBar } from '@src/component/StatusBar'
import { bind } from '@src/utility/component'
import Support from '@src/component/Support'
import { URLS } from '@src/config/url'
import http from '@src/utility/http'
import Otp from './Otp'
import { navigate } from '@src/navigation'
import SectionProvider from '@src/component/Section/Provider'
import { logClickEvent } from '@src/utility/analytics'

class Terms extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      values: {}
    }

    bind(this)

    this.onChangeNumber = this.onChangeNumber.bind(this)
    this.openContacts = this.openContacts.bind(this)
    this.onChangeNin = this.onChangeNin.bind(this)
    this.onSubmitNo = this.onSubmitNo.bind(this)
    this.onSuccess = this.onSuccess.bind(this)
  }

  onChangeNumber (v) {
    this.onChangeValue('mobilenumber', v)
  }

  openContacts () {
    const onContactSelected = (contact) => {
      this.onChangeValue('mobilenumber', contact.number)
    }
    logClickEvent('SubmitNINContactList')
    SectionProvider.showContactSelection({
      onSelected: onContactSelected
    })
  }

  onChangeNin (v) {
    this.onChangeValue('nin', v)
  }

  async onSubmitNo () {
    logClickEvent('SubmitNINSave', {
      mobilenumber: this.state.values.mobilenumber
    })
    await Support.showLoading()
    try {
      const values = {
        mobilenumber: this.state.values.mobilenumber,
        nin: this.state.values.nin
      }
      const result = (await http.post(URLS.USER_NIN_CREATE, values)).data

      await this.onChangeValue('insertId', result.insertId)

      this.refOtp.open()
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
  }

  onSuccess () {
    this.refs.modalSuccess.open()
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title='Submit NIN'
          titleColor='light'
        />
        <Content style={theme.layoutBg}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >

            <View style={styles.form}>
              <View style={styles.formRow}>
                <View style={styles.formLabel}>
                  <Text style={styles.formLabelText}>{__('Enter Phone Number')}</Text>
                </View>
                <View style={styles.formGroup}>
                  <View style={styles.formCol}>
                    <TextInput
                      placeholder=''
                      placeholderTextColor='rgba(0, 0, 0, 0.3)'
                      value={this.state.values.mobilenumber}
                      onChangeText={this.onChangeNumber}
                      style={styles.formInput}
                    />
                  </View>
                  <Button onPress={this.openContacts}>
                    <Image source={require('@asset/icons/addressbook.png')} resizeMode='contain' />
                  </Button>
                </View>
              </View>
              <View style={styles.formRow}>
                <View style={styles.formLabel}>
                  <Text style={styles.formLabelText}>{__('Enter NIN')}</Text>
                </View>
                <View style={styles.formGroup}>
                  <View style={styles.formCol}>
                    <TextInput
                      placeholder=''
                      placeholderTextColor='rgba(0, 0, 0, 0.3)'
                      value={this.state.values.nin}
                      onChangeText={this.onChangeNin}
                      style={styles.formInput}
                    />
                  </View>
                </View>
              </View>
            </View>

          </ScrollView>
          <View style={styles.footer}>
            <Button style={styles.footerBtn} onPress={this.onSubmitNo}>
              <Text style={styles.footerBtnText}>{__('Proceed')}</Text>
            </Button>
          </View>
        </Content>

        <Otp
          ref={c => (this.refOtp = c)}
          values={this.state.values}
          onSuccess={this.onSuccess}
        />

        <Modal
          ref='modalSuccess'
          position='bottom'
          style={styles.modalSuccess}
        >
          <View style={styles.confirm}>
            <Image source={require('@asset/icons/success.png')} style={styles.confirmImg} resizeMode='contain' />
            <Text style={styles.confirmTitle}>{__('Thank You')}</Text>
            <Text style={styles.confirmDesc}>{__('Your NIN has been submitted \n successfully')}</Text>
            <Button style={styles.confirmBtn} onPress={() => navigate('PublicHome')}>
              <Text style={styles.confirmBtnText}>{__('Return to home Screen')}</Text>
            </Button>
          </View>
        </Modal>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Terms)
