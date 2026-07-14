import React, { Component } from 'react'
import { Alert, Platform, Text } from 'react-native'
import { appleAuth } from '@invertase/react-native-apple-authentication'
import jwt_decode from 'jwt-decode'

import { Button } from '@src/component/Form'
import { authSocialMediaTypes } from '@src/config/core'
import { loginServer } from './base'
import { logClickEvent } from '@src/utility/analytics'

class AppleLoginButton extends Component {
  constructor (props) {
    super(props)

    this.loginApple = this.loginApple.bind(this)
    this.loginServer = this.loginServer.bind(this)
  }

  async loginApple () {
    logClickEvent('AppleLogin')
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [
          appleAuth.Scope.EMAIL,
          appleAuth.Scope.FULL_NAME
        ]
      })

      // console.log('appleAuthRequestResponse', appleAuthRequestResponse)

      if (typeof appleAuthRequestResponse.identityToken === 'string') {
        const extracted = jwt_decode(appleAuthRequestResponse.identityToken)
        if (typeof appleAuthRequestResponse.email !== 'string') {
          appleAuthRequestResponse.email = extracted.email
        }

        // if (typeof appleAuthRequestResponse.email === 'string') {
        if (typeof extracted.sub !== 'undefined') {
          appleAuthRequestResponse.id = extracted.sub
          this.loginServer(appleAuthRequestResponse)
        } else {
          Alert.alert('Apple signin failed')
        }
      } else {
        Alert.alert('Apple signin failed')
      }
    } catch (error) {
      if (error.code === appleAuth.Error.CANCELED) {
        Alert.alert('User canceled Apple Sign in.')
      } else if (error.code === appleAuth.Error.INVALID_RESPONSE) {
        Alert.alert('The authorization request received an invalid response.')
      } else if (error.code === appleAuth.Error.NOT_HANDLED) {
        Alert.alert('The authorization request wasn\'t handled.')
      } else if (error.code === appleAuth.Error.FAILED) {
        Alert.alert('The authorization attempt failed.')
      } else if (error.code === appleAuth.Error.UNKNOWN) {
        Alert.alert('The authorization attempt failed for an unknown reason.')
      } else {
        Alert.alert('Apple Sign in Failed.')
      }
    }
  }

  async loginServer (data) {
    const user = {
      loginMethod: authSocialMediaTypes.APPLE,
      loginID: data.id,
      firstName: data.fullName?.givenName || data.fullName?.nickname || '',
      lastName: data.fullName?.familyName || '',
      emailID: data.email,
      mobileNo: ''
    }
    loginServer(
      user,
      this.props.loginSocialMedia,
      this.props.registerSocialMedia
    )
  }

  render () {
    if (Platform.OS != 'ios' || !appleAuth.isSupported) {
      return null
    }
    return (
      <Button style={this.props.buttonStyle || [styles.btnPrimary, styles.btnGooglePlus]} onPress={this.loginApple}>
        {
          this.props.children || <Text style={styles.loginBtnText}>{'Google'.toUpperCase()}</Text>
        }
      </Button>
    )
  }
};

const styles = {

  loginBtnText: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    color: '#FFF'
  },
  btnPrimary: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5
  },
  btnGooglePlus: {
    backgroundColor: '#DC4C39'
  }

}

export default AppleLoginButton
