import React from 'react'
import { Image, ScrollView, View } from 'react-native'

import { Container, Content, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import Header from '@src/component/Header'
import { __ } from '@src/utility/translation'
import theme from '@src/theme/styles'
import styles from './styles'
import { bind } from '@src/utility/component'
import { DarkStatusBar } from '@src/component/StatusBar'
import { httpCms } from '@src/utility/http'
import { URLS } from '@src/config/url'

class OfferView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      offer: {},
      fetching: true
    }

    bind(this)

    this.fetchOffer = this.fetchOffer.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
  }

  async componentDidMount () {
    await this.fetchOffer()
  }

  async fetchOffer () {
    const state = {}
    try {
      const r = (await httpCms.get(URLS.LOYALTY_BASED_OFFERS_DETAILS + this.props.route.params.id)).data
      state.offer = r.rows[0]
    } catch (e) {}
    state.fetching = false
    await this.promisedSetState(state)
  }

  renderHeader () {
    let title = ''
    switch (this.state.offer.field_offer_flags) {
      case 'activeoffers': title = 'Active Offers'; break
      case 'participatetowin': title = 'Participate to Win'; break
      case 'onlineshopping': title = 'Online Shopping'; break
      case 'subscriptions': title = 'Popular Subscriptions'; break
      case 'cashbackpoints': title = 'Cashback Points Offer'; break
      case 'momo_wallet_offer': title = 'Momo Wallet Offer'; break
      case 'e_gifts': title = 'E - Gifts'; break
      case 'recharge_bills': title = 'Recharge & Bills'; break
      case 'postpaidoffers': title = 'Postpaid Offers'; break
    }
    return (
      <Header
        default
        leftType='back'
        title={__(title)}
        titleColor='light'
      />
    )
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        {this.renderHeader()}
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View>
              <Image source={{ uri: this.state.offer.field_image }} style={styles.rewardsImage} resizeMode='contain' />
              {
                this.state.offer.field_logo
                  ? (
                    <View style={styles.imgOverlay}>
                      <Image source={{ uri: this.state.offer.field_logo }} style={styles.rewardImage} />
                    </View>
                    )
                  : null
              }
            </View>
            <View style={styles.details}>
              <View style={theme.row}>
                <Text style={styles.validText}>{this.state.offer.field_validity}</Text>
              </View>
              <View style={theme.row}>
                <Text style={styles.giftText}>{this.state.offer.title}</Text>
              </View>
              <View style={theme.row}>
                <Text style={styles.detailsText}>{this.state.offer.description}</Text>
              </View>
              <Button style={styles.redeemBtn}>
                <Text style={styles.redeemBtnText}>{__('Redeem')}</Text>
              </Button>
            </View>
          </ScrollView>
        </Content>
        <View style={styles.footerBg} />
      </Container>
    )
  }
}

export default OfferView
