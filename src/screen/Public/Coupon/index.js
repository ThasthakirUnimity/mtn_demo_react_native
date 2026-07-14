import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { Container, Content, Text } from '@src/component/Basic'
import { connect } from 'react-redux'

import Header from '@src/component/Header'
import { __ } from '@src/utility/translation'
import { bind } from '@src/utility/component'
import theme from '@src/theme/styles'
import styles from './styles'
import { DarkStatusBar } from '@src/component/StatusBar'
import List from './List'
import { httpCms } from '@src/utility/http'
import { URLS } from '@src/config/url'

class Coupon extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      coupons: [],
      fetchingCoupons: true
    }

    bind(this)

    this.fetchCoupons = this.fetchCoupons.bind(this)
  }

  async componentDidMount () {
    await this.fetchCoupons()
  }

  async fetchCoupons () {
    try {
      const r = (await httpCms.get(URLS.COUPONS)).data
      await this.promisedSetState({
        coupons: r.rows
      })
    } catch (e) {}
    await this.promisedSetState({
      fetchingCoupons: false
    })
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('Promotion & Coupons')}
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View style={[styles.topDeals, theme.row]}>
              <Text style={styles.topDealsText}>{__('Recommended offers')}</Text>
            </View>
            <List
              list={this.state.coupons}
              fetching={this.state.fetchingCoupons}
            />
            <View style={[styles.topDeals, theme.row]}>
              <Text style={styles.topDealsText}>{__('Offers only for you')}</Text>
            </View>
            <View style={styles.offerforyouRow}>
              <Text style={styles.rechargeText}>{__('Recharge with 500 and\nget a Gift Card')}</Text>
              <Image source={{ uri: 'https://therightustorage.blob.core.windows.net/assets/guide/track-university-offer.png' }} style={styles.offerforyouImg} />
            </View>
          </ScrollView>

        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Coupon)
