import React from 'react'
import { Text } from 'react-native'
import { GoogleSignin /*, statusCodes */ } from '@react-native-google-signin/google-signin'

import { Button } from '@src/component/Form'
import { authSocialMediaTypes } from '@src/config/core'
import { loginServer } from './base'
import { logClickEvent } from '@src/utility/analytics'

class GoogleLoginButton extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

    this.configureGoogleSignIn = this.configureGoogleSignIn.bind(this)
    this.signInGoogle = this.signInGoogle.bind(this)
  }

  componentDidMount () {
    this.configureGoogleSignIn()
  }

  configureGoogleSignIn () {
    GoogleSignin.configure()
  }

  async signInGoogle () {
    logClickEvent('GoogleLogin')
    try {
      await GoogleSignin.hasPlayServices()
      let user = null
      const isSignedIn = await GoogleSignin.isSignedIn()
      if (isSignedIn) {
        await GoogleSignin.signOut()
        // const result = await GoogleSignin.getCurrentUser()
        // user = result?.user
      }
      if (!user) {
        const result = await GoogleSignin.signIn()
        user = result.user
      }
      if (user && user.id && user.email && (user.name || user.givenName)) {
        // const tokens = await GoogleSignin.getTokens()
        // console.log(tokens)
        this.loginServer(user)
      }
    } catch (error) {
      /* if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      } */
    }
  }

  async loginServer (data) {
    const user = {
      loginMethod: authSocialMediaTypes.GMAIL,
      loginID: data.id,
      firstName: data.givenName || data.name,
      lastName: data.familyName,
      emailID: data.email,
      mobileNo: ''
    }
    if (data.photo) {
      user.profilePicURL = data.photo
    }

    loginServer(
      user,
      this.props.loginSocialMedia,
      this.props.registerSocialMedia
    )
  }

  render () {
    return (
      <Button style={this.props.buttonStyle || [styles.btnPrimary, styles.btnGooglePlus]} onPress={this.signInGoogle}>
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

export default GoogleLoginButton
