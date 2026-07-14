import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { Container, Content, Image } from '@src/component/Basic'
import Header from '@src/component/Header'
import { DarkStatusBar } from '@src/component/StatusBar'
import { agreeTerms } from '@src/store/reducers/session'
import http, { httpCms } from '@src/utility/http'
import { __ } from '@src/utility/translation'

import styles from './styles'
import { applyComponentFeatures } from '@src/utility/core'
import { Button } from '@src/component/Form'
import { openSms } from '@src/utility/linking'
import { URLS } from '@src/config/url'
import Support from '@src/component/Support'
import { CURRENCY, APP_DETAILS } from '@src/theme/typography'
class ReferralInvite extends Component {
  constructor (props) {
    super(props)

    this.state = {}

    applyComponentFeatures(this)

    this.openSms = this.openSms.bind(this)
  }

  async openSms () {
    await Support.showLoading()
    try {
      const r = (await http.get(URLS.USER_INVITE, {})).data
      if (r?.response?.message) {
        openSms('', r.response.message)
      }
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header leftType='back' title='Referal & Invites' titleColor='light' />
        <Content style={styles.inviteBg}>
          <View style={styles.invite}>
            <View style={styles.inviteHeader}>
              <View style={styles.inviteRow}>
                <Text style={styles.inviteTitle}>
                  {__('Invite your friends to My '+ APP_DETAILS.APP_NAME +'')}
                </Text>
              </View>
              <View style={styles.inviteRow}>
                <Text style={styles.inviteDesc}>
                  {__(
                    'Invite friends to My '+ APP_DETAILS.APP_NAME +' and get 10 GB data when your friend use this app. They get 5 GB data.'
                  )}
                </Text>
              </View>
            </View>
            <Button style={styles.inviteBtn} onPress={this.openSms}>
              <Text style={styles.inviteBtnText}>{__('Invite')}</Text>
            </Button>
            <Image
              source={require('@asset/images/invite.png')}
              style={styles.inviteImg}
              resizeMode='contain'
            />
          </View>
        </Content>
      </Container>
    )
  }
}

export default ReferralInvite
