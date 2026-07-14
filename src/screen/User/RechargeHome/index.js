import React, { createRef } from 'react'
import { Image, ScrollView, View } from 'react-native'

import Header from '@src/component/Header'
import { Container, Content, Text } from '@src/component/Basic'
import { Button, TextInput } from '@src/component/Form'
import { navigate } from '@src/navigation'
import theme from '@src/theme/styles'
import styles from './styles'
import { DarkStatusBar } from '@src/component/StatusBar'
import { bind } from '@src/utility/component'
import { __ } from '@src/utility/translation'
import { URLS } from '@src/config/url'
import http from '@src/utility/http'
import RecentRecharge from './RecentRecharge'
import PlanView from './PlanView'
import Support from '@src/component/Support'
import { compile } from 'path-to-regexp'
import SectionProvider from '@src/component/Section/Provider'
import { logClickEvent } from '@src/utility/analytics'

class RechargeHome extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      recentRecharges: [],
      fetchingRecentRecharges: true
    }

    bind(this)

    this.fetchRecentRecharges = this.fetchRecentRecharges.bind(this)
    this.fetchProfile = this.fetchProfile.bind(this)
    this.openContacts = this.openContacts.bind(this)
    this.onContactSelected = this.onContactSelected.bind(this)
    this.openView = this.openView.bind(this)
    this.repeatRecharge = this.repeatRecharge.bind(this)

    this.refPlanView = createRef()
  }

  async componentDidMount () {
    await this.fetchRecentRecharges()
  }

  async fetchRecentRecharges () {
    try {
      const r = (await http.get(URLS.RECENT_RECHARGE + '/1')).data
      if (r?.response?.rows?.length) {
        await this.promisedSetState({
          recentRecharges: r.response.rows
        })
      }
    } catch (e) { }
    await this.promisedSetState({
      fetchingRecentRecharges: false
    })
  }

  async fetchProfile () {
    if (this.state.mobilenumber?.length == 10) {
      await Support.showLoading()
      try {
        const url = compile(URLS.USER_PROFILE_FROM_MOBILE)({ number: this.state.mobilenumber })
        const r = (await http.get(url)).data
        if (r?.response?.records?.id) {
          const profile = r.response.records
          if (profile.type != 'Prepaid') {
            throw new Error('This recharge feature is not available for postpaid number')
          }
          logClickEvent('RechargeBundle', {
            name: profile.nick_name,
            mobilenumber: profile.mobilenumber
          })
          navigate('UserBundleList', {
            isRecharge: true,
            profile: {
              name: profile.nick_name,
              mobilenumber: profile.mobilenumber,
              avatar: profile.profile_image
            }
          })
        } else {
          throw new Error('Record not found')
        }
      } catch (e) {
        Support.showServerError(e)
      }
      await Support.hideLoading()
    }
  }

  openContacts () {
    logClickEvent('RechargeContactList')
    SectionProvider.showContactSelection({
      onSelected: this.onContactSelected
    })
  }

  async onContactSelected (contact) {
    await this.promisedSetState({ mobilenumber: contact.number })
    await this.fetchProfile()
  }

  repeatRecharge (item) {
    logClickEvent('RechargeRecentRepeat', {
      name: item.name,
      mobilenumber: item.number
    })
    const cart = {
      productType: 'recharge',
      items: [{
        id: item.plan.ProductID,
        title: item.plan.ProductName,
        type: item.plan.Category,
        quantity: 1,
        currency: item.currency,
        price: item.plan.Price,
        _original: item.plan
      }],
      currency: item.currency,
      total: parseInt(item.plan.Price, 10)
    }
    navigate('UserPayment', {
      cart,
      profile: {
        name: item.name,
        mobilenumber: item.number,
        avatar: ''
      }
    })
  }

  openView (item) {
    logClickEvent('RechargeRecentView')
    this.refPlanView.current.open(item)
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header default leftType='back' title='Recharge' titleColor='light' />
        <Content style={theme.layout}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.search}>
              <View style={styles.searchHeader}>
                <Text style={styles.searchHeaderTitle}>
                  {__('Choose contact')}
                </Text>
              </View>
              <View style={styles.searchRow}>
                <View style={styles.searchCol}>
                  <TextInput
                    keyboardType='phone-pad'
                    maxLength={10}
                    placeholder={__('Enter Number or search from contact list')}
                    placeholderTextColor='rgba(0, 0, 0, 0.3)'
                    returnKeyType='done'
                    style={styles.searchInput}
                    value={this.state.mobilenumber}
                    onChangeText={v => this.setState({ mobilenumber: v })}
                    onSubmitEditing={this.fetchProfile}
                  />
                </View>
                <Button onPress={this.openContacts}>
                  <Image
                    source={require('@asset/icons/addressbook.png')}
                    style={styles.searchImg}
                    resizeMode='contain'
                  />
                </Button>
              </View>
            </View>

            <RecentRecharge
              list={this.state.recentRecharges}
              fetching={this.state.fetchingRecentRecharges}
              openView={this.openView}
              repeatRecharge={this.repeatRecharge}
            />
          </ScrollView>
        </Content>
        <PlanView ref={this.refPlanView} />
      </Container>
    )
  }
}

export default RechargeHome
