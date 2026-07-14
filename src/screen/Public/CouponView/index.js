import React from 'react'
import { Image, ScrollView, View } from 'react-native'

import { Container, Content, Text } from '@src/component/Basic'
import Header from '@src/component/Header'
import { __ } from '@src/utility/translation'
import theme from '@src/theme/styles'
import styles from './styles'
import { bind } from '@src/utility/component'
import { DarkStatusBar } from '@src/component/StatusBar'
import { httpCms } from '@src/utility/http'
import { URLS } from '@src/config/url'
import dateUtil from '@src/utility/date'

class CouponView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      coupon: {},
      fetching: true
    }

    bind(this)

    this.fetchCoupon = this.fetchCoupon.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
  }

  async componentDidMount () {
    await this.fetchCoupon()
  }

  async fetchCoupon () {
    const state = {}

    console.log(URLS.COUPONS + '/' + this.props.route.params.id)
    try {
      const r = (await httpCms.get(URLS.COUPONS + '/' + this.props.route.params.id)).data
      state.coupon = r.rows[0]

      console.log("URL OF THE IMAGES- >>>>>>",r)
    } catch (e) {
      console.log(e)
    }
    state.fetching = false
    await this.promisedSetState(state)
  }

  renderHeader () {
    return (
      <Header
        default
        leftType='back'
        title={__('Coupon')}
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
            <View style={styles.offer}>
              <Image source={{ uri: this.state.coupon.offer_screen_image }} style={styles.offerImg} resizeMode='cover' />
              <View style={styles.offerHeader}>
                <View style={styles.offerRow}>
                  <Text style={styles.offerDate}>{__('Valid till')} {dateUtil.format(this.state.coupon.expiry)}</Text>
                </View>
                <View style={styles.offerRow}>
                  <Text style={styles.offerTitle}>{this.state.coupon.title}</Text>
                </View>
                <View style={styles.offerRow}>
                  <Text style={styles.offerDesc}>{this.state.coupon.summary}</Text>
                </View>
              </View>

              <View style={styles.offerContent}>
                <View style={styles.offerRow}>
                  <Text style={styles.offerDesc}>{this.state.coupon.description}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </Content>
        <View style={styles.footerBg} />
      </Container>
    )
  }
}

export default CouponView
