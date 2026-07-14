import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { Container, Content, Icon, Text } from '@src/component/Basic'
import { connect } from 'react-redux'

import Header from '@src/component/Header'
import { Button, RadioButton, TextInput, DatePicker } from '@src/component/Form'
import { __ } from '@src/utility/translation'

import Support from '@src/component/Support'
import { URLS } from '@src/config/url'
import { updateUser } from '@src/store/reducers/session'
import http from '@src/utility/http'
import { bind } from '@src/utility/component'
import theme from '@src/theme/styles'
import styles from './styles'
import { DarkStatusBar } from '@src/component/StatusBar'
import { navigateCurrent } from '@src/navigation/'
import { fetchUserSessionInformation } from '@src/helper/user'
import { openImagePicker } from '@src/utility/file'

class Profile extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      values: { ...props.session.user }
    }

    console.log(this.state.values)

    bind(this)

    this.onChangeValue = this.onChangeValue.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.selectProfileImage = this.selectProfileImage.bind(this)
  }

  async componentDidMount () {
  }

  onChangeValue (name, value) {
    this.setState({ values: { ...this.state.values, [name]: value } })
  }

  async onSubmit () {
    Support.showLoading()

    try {
      const r = (await http.post(URLS.USER_PROFILE, this.state.values)).data

      await fetchUserSessionInformation()

      await Support.showSuccess({
        message: __('Successfully saved.'),
        onHide: () => {
          navigateCurrent('UserProfile')
        },
        hideDelay: 2500
      })
    } catch (e) {
      Support.showServerError(e)
    }

    Support.hideLoading()
  }

  selectProfileImage () {
    openImagePicker({
      title: 'Choose a Profile Photo',
      message: 'Select from galley or camera',
      onSuccess: async (data) => {
        await Support.showLoading()
        try {
          const headers = {}
          const formdata = new FormData()
          formdata.append('profileImage', {
            uri: data.path,
            type: data.mime,
            name: data.name
          })
          headers['Content-Type'] = 'multipart/form-data'
          const result = (await http.post(URLS.USER_PROFILE_PHOTO, formdata, { headers })).data

          await fetchUserSessionInformation()

          await Support.showSuccess({
            message: __('Successfully saved.'),
            onHide: () => {
              navigateCurrent('UserProfile')
            },
            hideDelay: 2500
          })
        } catch (e) {
          await Support.showServerError(e)
        }
        await Support.hideLoading()
      }
    })
  }

  render () {
    let img = require('@asset/icons/play.png')
    if (this.props.session.isLoggedIn) {
      if (this.props.session.user.profileImage) {
        img = { uri: this.props.session.user.profileImage }
      }
    }

    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title='Profile'
          titleColor='light'
          rightContent={
            <Button style={styles.saveBtn} onPress={this.onSubmit}>
              <Text style={styles.saveBtnText}>{__('Save')}</Text>
            </Button>
          }
        />
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.profileContainer}>
              <Image source={img} style={styles.profileImg} />
              <Button style={styles.editBtn} onPress={this.selectProfileImage}>
                <Icon name='mode-edit' type='MaterialIcons' style={styles.editBtnIcon} />
              </Button>
            </View>

            <View style={styles.formGroup}>
              <View style={[styles.formContent, styles.formPicker]}>
                <View style={styles.formLabel}>
                  <Text style={styles.formLabelText}>{__('Gender')}</Text>
                </View>
                <View style={styles.formCol}>
                  <RadioButton
                    checked={this.state.values.gender === 'Male'}
                    style={styles.radioRow}
                    onChange={() => { this.onChangeValue('gender', 'Male') }}
                    color='black'
                    suffix={
                      <View>
                        <Text style={styles.genderText}>{__('Male')}</Text>
                      </View>
                    }
                  />
                  <RadioButton
                    checked={this.state.values.gender === 'Female'}
                    style={styles.radioRow}
                    onChange={() => { this.onChangeValue('gender', 'Female') }}
                    color='black'
                    suffix={
                      <View>
                        <Text style={styles.genderText}>{__('Female')}</Text>
                      </View>
                    }
                  />
                </View>
              </View>
              <View style={styles.formContent}>
                <View style={styles.formLabel}>
                  <Text style={styles.formLabelText}>{__('Date of Birth')}</Text>
                </View>
                <DatePicker
                  // format='DD/MM/YY'
                  value={this.state.values.dob}
                  onChange={(v) => (this.onChangeValue('dob', v))}
                  textStyle={styles.dobInput}
                  placeholder={__('Select your DOB')}
                />
              </View>
              <View style={styles.formContent}>
                <View style={styles.formLabel}>
                  <Text style={styles.formLabelText}>{__('Email Address')}</Text>
                </View>
                <TextInput
                  placeholder=''
                  placeholderTextColor='rgba(0, 0, 0, 1)'
                  style={styles.formInput}
                  value={this.state.values.emailID}
                  onChangeText={(v) => (this.onChangeValue('emailID', v))}
                />
              </View>
              <View style={styles.formContent}>
                <View style={styles.formLabel}>
                  <Text style={styles.formLabelText}>{__('Primary Number')}</Text>
                </View>
                <TextInput
                  editable={false}
                  placeholder=''
                  placeholderTextColor='rgba(0, 0, 0, 1)'
                  style={styles.formInput}
                  value={this.state.values.altMobilenumber}
                  // onChangeText={async (v) => (this.onChangeValue('altMobilenumber', v))}
                />
              </View>
              <View style={styles.formContent}>
                <View style={styles.formLabel}>
                  <Text style={styles.formLabelText}>{__('Secondary Number')}</Text>
                </View>
                <TextInput
                  placeholder=''
                  placeholderTextColor='rgba(0, 0, 0, 1)'
                  style={styles.formInput}
                  value={this.state.values.telePhonenumber}
                  onChangeText={async (v) => (this.onChangeValue('telePhonenumber', v))}
                />
              </View>
              <View>
                <View style={styles.formLabel}>
                  <Text style={styles.formLabelText}>{__('Permanent address')}</Text>
                </View>
                <TextInput
                  placeholder={__('line 1 of address')}
                  placeholderTextColor='rgba(0, 0, 0, 1)'
                  style={styles.formAddressInput}
                  value={this.state.values.permanentAddress1}
                  onChangeText={async (v) => (this.onChangeValue('permanentAddress1', v))}
                />
                <TextInput
                  placeholder={__('line 2 of address')}
                  placeholderTextColor='rgba(0, 0, 0, 1)'
                  style={styles.formAddressInput}
                  value={this.state.values.permanentAddress2}
                  onChangeText={async (v) => (this.onChangeValue('permanentAddress2', v))}
                />
                <TextInput
                  placeholder={__('City')}
                  placeholderTextColor='rgba(0, 0, 0, 1)'
                  style={styles.formAddressInput}
                  value={this.state.values.cityDesc}
                  onChangeText={async (v) => (this.onChangeValue('cityDesc', v))}
                />
                <TextInput
                  placeholder={__('State')}
                  placeholderTextColor='rgba(0, 0, 0, 1)'
                  style={styles.formAddressInput}
                  value={this.state.values.state}
                  onChangeText={async (v) => (this.onChangeValue('state', v))}
                />
                <TextInput
                  placeholder={__('Zipcode')}
                  placeholderTextColor='rgba(0, 0, 0, 1)'
                  style={styles.formAddressInput}
                  value={this.state.values.zipCode}
                  onChangeText={async (v) => (this.onChangeValue('zipCode', v))}
                />
              </View>
            </View>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }), { updateUser })(Profile)
