import React, { Component } from 'react'
import { Text, View, ImageBackground, ScrollView } from 'react-native'
import DeviceInfo from 'react-native-device-info'

import { Container, Content, Image } from '@src/component/Basic'
import { Button, TextInput } from '@src/component/Form'
import { URLS } from '@src/config/url'
import { applyComponentFeatures } from '@src/utility/core'
import { LightStatusBar } from '@src/component/StatusBar'
import { __ } from '@src/utility/translation'
import http from '@src/utility/http'

import theme from '@src/theme/styles'
import { COLOR } from '@src/theme/typography'
import styles from './styles'
import Support from '@src/component/Support'
import { initiateUserSession } from '@src/helper/user'
import { navigateReset } from '@src/navigation'
import Auth0 from 'react-native-auth0'
import AsyncStorage from "@react-native-async-storage/async-storage";

const sandbox = false
const codeLength = 4
const otpField = 'otp'

class MobileVerification extends Component {
  constructor (props) {
    super(props)

    const otpCodes = []
    otpCodes.length = codeLength

    this.state = {
      verified: 0,
      otpCodes: otpCodes.fill(''),
      country: this.props.route.params.country,
      values: {
        mobilenumber: this.props.route.params.mobilenumber
      },
      experyTime: this.props.route.params.experyTime,
      resendTime: this.props.route.params.resendTime,
      showResend: false
    }

    applyComponentFeatures(this)

    this.onChangeOtpCode = this.onChangeOtpCode.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
    this.enableResendTimeout = this.enableResendTimeout.bind(this)
    this.resendOTP = this.resendOTP.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.renderCodeInput = this.renderCodeInput.bind(this)
    this.renderResendLink = this.renderResendLink.bind(this)

    this.references = {
      inputs: {}
    }

    this.auth0 = new Auth0({
      domain: 'dev-ub055fhs.us.auth0.com',
      clientId: 'e4D3QC3dx3utPUI1nliZl0WWnXpUmuL5'
    })
  }

  componentDidMount () {
    // this.enableResendTimeout()
  }

  async onChangeOtpCode (v, i) {
    let s = (v || '').toString()
    s = s.toString().charAt(s.length - 1)
    const next = i + 1
    const otpCodes = this.state.otpCodes || []
    if (otpCodes[i] != s) {
      otpCodes[i] = s
      await this.promisedSetState({
        otpCodes
      })
    }
    // console.log(v, i, s, s.length === 1 && i < codeLength - 1)
    if (s.length === 1 && i < codeLength - 1) {
      this.references.inputs['otpCode' + next].focus()
    }
  }

  onKeyPress (e, i) {
    // console.log(e, i)
    if (e.nativeEvent.key === 'Backspace' && i !== 0) {
      this.references.inputs['otpCode' + (i - 1)].focus()
    }
  }

  enableResendTimeout () {
    if (this.timeoutResendLink) {
      clearTimeout(this.timeoutResendLink)
    }
    this.timeoutResendLink = setTimeout(() => {
      this.setState({
        showResend: true
      })
    }, 10000)
  }

  async resendOTP () {
    let cb = null
    await this.promisedSetState({
      showResend: false
    })
    const url = URLS.USER_LOGIN_RESEND
    const values = { mobile: this.state.values.mobilenumber }
    values.ipaddress = await DeviceInfo.getDeviceName()
    await Support.showLoading()
    try {
      const r = (await http.post(url, values)).data

      await Support.showSuccess({
        layout: 'toast',
        message: 'Successfully sent',
        hideDelay: 2500
      })

      cb = this.enableResendTimeout()
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
    cb && cb()
  }

  async validate(values) {
    const isEmpty = (key) => {
      return !(typeof values[key] !== "undefined" && values[key] !== "");
    };
    const errors = [];
    if (isEmpty("mobilenumber")) { //not needed
      errors.push("Please enter your mobile number");
    } 
    // else if (!values.mobilenumber.match(/^\d{10}$/)) { //not needed
    //   errors.push("Please enter a valid mobile number");
    // }
    if (isEmpty(otpField)) {
      errors.push("Please enter your verification code");
    } else if (!values[otpField].match(/^\d{4}$/)) {
      errors.push(`Please enter your ${codeLength} digit code`);
    }

    if (errors.length) {
      throw new Error(errors.join("\n"));
    }
  }

  // async onSubmit () {
  //   if (this.state.verified === 1) {
  //     return
  //   }

  //   const cb = null
  //   await Support.showLoading()
  //   try {
  //     const values = { mobilenumber: this.state.values.mobilenumber }
  //     values[otpField] = this.state.otpCodes.join('') ?? ''
  //     values.ipaddress = await DeviceInfo.getDeviceName()

  //     await this.validate(values)

  //     const code = this.state.otpCodes.join('') ?? ''

  //     const r = await this.auth0.auth
  //       .loginWithSMS({
  //         phoneNumber: '+' + this.state.country.phone_code + this.state.values.mobilenumber,
  //         code
  //       })
  //     if (r.idToken) {
  //       const token = r.idToken
  //       const result = (await http.post('/getSubscriberDetails/verifyToken', {
  //         token
  //       })).data

  //       const { profileStatus } = result

  //       await this.promisedSetState({
  //         verified: 1
  //       })

  //       const isLoggedIn = await initiateUserSession(token, profileStatus)
  //       if (isLoggedIn) {
  //         await Support.showSuccess({
  //           title: __('Thank you'),
  //           message: __('Successfully loggedin.'),
  //           onHide: async () => {
  //             navigateReset('UserLoginTerms')
  //           },
  //           hideDelay: 2500
  //         })
  //       }
  //     }
  //   } catch (e) {
  //     await this.promisedSetState({
  //       verified: 2
  //     })
  //     await Support.showServerError(e)
  //   }
  //   await Support.hideLoading()
  //   if (cb) {
  //     setTimeout(cb, 1000)
  //   }
  // }

    async onSubmit() {
    if (this.state.verified === 1) {
      return;
    }

    const cb = null;
    await Support.showLoading();
    try {
      const values = { mobilenumber: this.state.values.mobilenumber };
      values[otpField] = this.state.otpCodes.join("") ?? "";
      // values.ipaddress = await DeviceInfo.getDeviceName();

      await this.validate(values);

      const code = this.state.otpCodes.join("") ?? "";

      // const r = await this.auth0.auth
      //   .loginWithSMS({
      //     phoneNumber: '+' + this.state.country.phone_code + this.state.values.mobilenumber,
      //     code
      //   })
      // if (r.idToken) {
      // const token = r.idToken

      
      const rawMobile = this.state.values.mobilenumber;
      const mobilenumber = rawMobile.startsWith('+')
        ? rawMobile
        : '+' + (this.state.country?.phone_code ?? '') + rawMobile;
      const otp = code;
      const ipaddress = await DeviceInfo.getDeviceName();
      const result = (
        await http.post("/getSubscriberDetails/verify", {
          mobilenumber,
          otp,
          ipaddress,
        })
      ).data;

      const profileStatus = result?.profileStatus;
      const token = result?.userToken?.tokenrecords;

      if (!token) {
        await Support.showError(result);
      } else {
        console.log("\n\n\n\n\nTOKEN\n\n\n\n\n", result);

        await this.promisedSetState({
          verified: 1,
        });

        const isLoggedIn = await initiateUserSession(token, profileStatus);
        if (isLoggedIn) {
          const email = await AsyncStorage.getItem("emailId");
          const data = {
            email: email ? email : "",
          };
          const eventData = {
            eventcategory: "login",
            eventaction: "focus",
            eventlabel: "login",
          };

          // await factorealCustomApi(data, eventData);
          await Support.showSuccess({
            title: __("Thank you"),
            message: __("OTP Verified Successfully."),
            onHide: async () => {
              navigateReset("UserLoginTerms");
            },
            hideDelay: 2500,
          });
        }
      }

      // }
    } catch (e) {
      await this.promisedSetState({
        verified: 2,
      });
      await Support.showServerError(e);
    }
    await Support.hideLoading();
    if (cb) {
      setTimeout(cb, 1000);
    }
  }

  async onSubmit1 () {
    if (this.state.verified === 1) {
      return
    }

    const cb = null
    const url = URLS.USER_LOGIN_VERIFY
    await Support.showLoading()
    try {
      const values = { mobilenumber: this.state.values.mobilenumber }
      values[otpField] = this.state.otpCodes.join('') ?? ''
      values.ipaddress = await DeviceInfo.getDeviceName()

      await this.validate(values)

      const result = (await http.post(url, values)).data

      const { userToken: { tokenrecords: token }, profileStatus } = result

      await this.promisedSetState({
        verified: 1
      })

      const isLoggedIn = await initiateUserSession(token, profileStatus)
      if (isLoggedIn) {
        await Support.showSuccess({
          title: __('Thank you'),
          message: __('Successfully loggedin.'),
          onHide: async () => {
            navigateReset('UserLoginTerms')
          },
          hideDelay: 2500
        })
      }
    } catch (e) {
      await this.promisedSetState({
        verified: 2
      })
      await Support.showServerError(e)
    }
    await Support.hideLoading()
    if (cb) {
      setTimeout(cb, 1000)
    }
  }

  renderCodeInput () {
    return this.state.otpCodes.map((value, i) => (
      <View key={i} style={styles.verifyNumber}>
        <TextInput
          key={i}
          autoCapitalize='none'
          blurOnSubmit={false}
          editable={this.state.verified !== 1}
          keyboardType='numeric'
          maxLength={1}
          placeholder=''
          returnKeyType='next'
          selectTextOnFocus
          style={styles.verifyInput}
          value={(value || '').toString()}
          onChangeText={v => this.onChangeOtpCode(v, i)}
                    // onSubmitEditing={() => this.focusNextField('otpCode' + (i + 1))}
          onKeyPress={e => this.onKeyPress(e, i)}
          ref={r => (this.references.inputs['otpCode' + i] = r)}
        />
      </View>
    ))
  }

  renderResendLink () {
    if (!this.state.showResend) {
      return null
    }
    return (
      <Button style={styles.verifyOtp} onPress={this.resendOTP}>
        <Text style={styles.verifyOtpText}>{__('Don\'t receive the OTP? Resend OTP')}</Text>
      </Button>
    )
  }

  render () {
    return (
      <Container>
        <LightStatusBar />
        <Content style={theme.layout}>
          <ScrollView style={styles.verify}>
            <ImageBackground source={require('@asset/images/bg.png')} style={styles.verifyBg}>
              <View style={styles.verifyTop}>
                <View style={styles.verifyLogo}>
                  <Image source={require('@asset/images/logo-vodafone.png')} style={styles.verifyLogoImg} resizeMode='contain' />
                </View>
                <View style={styles.verifyTopRow}>
                  <Text style={styles.verifyTitle}>{__('OTP Verification')}</Text>
                </View>
              </View>

              <View style={styles.verifyContainer}>
                <View style={styles.verifyForm}>
                  <View style={styles.verifyRow}>
                    <Text style={styles.verifySubTitle}>{__('Enter 4 Digits Code')}</Text>
                  </View>
                  <View style={styles.verifyRow}>
                    <Text style={styles.verifyDesc}>{__('Enter 4 digit verification code sent to your Mobile Number')} {this.state.values.mobilenumber}</Text>
                  </View>
                  <View style={styles.verifyGroup}>
                    {this.renderCodeInput()}
                  </View>
                  {this.renderResendLink()}
                  <Button style={styles.verifyBtn} onPress={this.onSubmit}>
                    <Text style={styles.verifyBtnText}>{__('Verify')}</Text>
                  </Button>
                </View>
              </View>
            </ImageBackground>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default MobileVerification
