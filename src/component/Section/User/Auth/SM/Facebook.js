import React, { Component } from 'react'
import { Platform, Text } from 'react-native'
import { LoginManager, AccessToken, AuthenticationToken, GraphRequest, GraphRequestManager, Profile } from 'react-native-fbsdk-next'

import { Button } from '@src/component/Form'
import { loginServer } from './base'
import { authSocialMediaTypes } from '@src/config/core'
import { logClickEvent } from '@src/utility/analytics'

class FBLoginButton extends Component {
  constructor (props) {
    super(props)

    this.signInFacebook = this.signInFacebook.bind(this)
    this.loginServer = this.loginServer.bind(this)
  }

  async getAccessToken () {
    if (Platform.OS === 'ios') {
      const data = await AuthenticationToken.getAuthenticationTokenIOS()
      if (data && data.authenticationToken) {
        this.getProfile(data.authenticationToken)
      }
    } else {
      const data = await AccessToken.getCurrentAccessToken()
      if (data && data.accessToken) {
        this.getProfile(data.accessToken)
      }
    }
    return false
  }

  getProfile (accessToken) {
    const infoRequest = new GraphRequest(
      '/me?fields=id,first_name,last_name,name,email,picture.width(480).height(480)',
      Platform.OS === 'ios'
        ? null
        : {
            accessToken: accessToken
          },
      (error, result) => {
        if (error) {
        } else {
          if (result.id && result.email && (result.name || result.first_name)) {
            this.loginServer(result)
          }
        }
      }
    )
    new GraphRequestManager().addRequest(infoRequest).start()
  }

  async signInFacebook () {
    logClickEvent('FacebookLogin')
    let isLoggedIn = false
    try {
      await this.getAccessToken()
      isLoggedIn = await Profile.getCurrentProfile()
    } catch (e) {
      isLoggedIn = false
    }
    try {
      if (!isLoggedIn) {
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email'])
        if (result) {
          if (result.isCancelled) {
          } else {
            await this.getAccessToken()
          }
        }
      }
    } catch (e) {
    }
  }

  async loginServer (data) {
    const user = {
      loginMethod: authSocialMediaTypes.FB,
      loginID: data.id,
      firstName: data.first_name || data.name,
      lastName: data.last_name,
      emailID: data.email,
      mobileNo: ''
    }
    if (data.picture && data.picture.data && data.picture.data.url) {
      user.profilePicURL = data.picture.data.url
    } else if (data.url) {
      user.profilePicURL = data.url
    }

    loginServer(
      user,
      this.props.loginSocialMedia,
      this.props.registerSocialMedia
    )
  }

  render () {
    return (
      <Button style={this.props.buttonStyle || [styles.btnPrimary, styles.btnGooglePlus]} onPress={this.signInFacebook}>
        {
          this.props.children || <Text style={styles.loginBtnText}>{'Google'.toUpperCase()}</Text>
        }
      </Button>
    )
  }
}

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

export default FBLoginButton
