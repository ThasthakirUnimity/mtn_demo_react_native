import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'

import BannerAd from '@src/component/Ads/Banner'
import { Container, Content, Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import Header from '@src/component/Header'
import { DarkStatusBar } from '@src/component/StatusBar'
import { URLS } from '@src/config/url'
import { navigate } from '@src/navigation'
import theme from '@src/theme/styles'
import { bind } from '@src/utility/component'
import http, { httpCms } from '@src/utility/http'
import { __ } from '@src/utility/translation'

import styles from './styles'
import Latest from './Latest'
import Mobiles from './Mobiles'
import Games from './Games'
import Channels from './Channels'
import Postpaid from './Postpaid'
import Promotions from './Promotions'
import Shortcut from './Shortcut'
import Banners from './Banners'
import SpecialBanners from './SpecialBanners'
import { logClickEvent } from '@src/utility/analytics'

class Shop extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      banners: [],
      fetchingBanners: true,

      specialBanners: [],
      fetchingSpecialBanners: true,

      latest: [],
      fetchingLatest: true,

      mobile: [],
      fetchingMobileList: true,

      games: [],
      fetchingGames: true,

      channels: [],
      fetchingChannels: true,

      postpaidPlans: [],
      fetchingPostpaidPlans: true,

      promotions: [],
      fetchingPromotions: true
    }

    bind(this)

    this.fetchBanners = this.fetchBanners.bind(this)
    this.fetchSpecialBanners = this.fetchSpecialBanners.bind(this)
    this.fetchLatest = this.fetchLatest.bind(this)
    this.fetchMobiles = this.fetchMobiles.bind(this)
    this.fetchGames = this.fetchGames.bind(this)
    this.fetchChannels = this.fetchChannels.bind(this)
    this.fetchPostpaidPlans = this.fetchPostpaidPlans.bind(this)
    this.fetchPromotions = this.fetchPromotions.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
  }

  async componentDidMount () {
    await this.fetchBanners()
    await this.fetchSpecialBanners()
    await this.fetchLatest()
    await this.fetchMobiles()
    await this.fetchGames()
    await this.fetchChannels()
    await this.fetchPostpaidPlans()
    await this.fetchPromotions()
  }

  async fetchBanners () {
    try {
      const r = (await httpCms.get(URLS.PRODUCTS_BANNER)).data
      await this.promisedSetState({ banners: r })
    } catch (e) { }
    await this.promisedSetState({
      fetchingBanners: false
    })
  }

  async fetchSpecialBanners () {
    try {
      const r = (await httpCms.get(URLS.PRODUCTS_BANNER_SPECIAL)).data
      await this.promisedSetState({ specialBanners: r })
    } catch (e) { }
    await this.promisedSetState({
      fetchingSpecialBanners: false
    })
  }

  async fetchLatest () {
    try {
      const r = (await httpCms.get(URLS.PRODUCT_LATEST)).data
      await this.promisedSetState({ latest: r.rows })
    } catch (e) { }
    await this.promisedSetState({
      fetchingLatest: false
    })
  }

  async fetchMobiles () {
    try {
      const r = (await httpCms.get(URLS.PRODUCT_MOBILES)).data
      await this.promisedSetState({ mobiles: r.rows })
    } catch (e) { }
    await this.promisedSetState({
      fetchingMobiles: false
    })
  }

  async fetchGames () {
    try {
      const r = (await httpCms.get(URLS.PRODUCT_GAMES)).data
      await this.promisedSetState({ games: r.rows })
    } catch (e) { }
    await this.promisedSetState({
      fetchingGames: false
    })
  }

  async fetchChannels () {
    try {
      const r = (await httpCms.get(URLS.PRODUCT_CHANNELS)).data
      await this.promisedSetState({ channels: r.rows })
    } catch (e) { }
    await this.promisedSetState({
      fetchingChannels: false
    })
  }

  async fetchPostpaidPlans () {
    if (!(this.props.session.numbers[this.props.session.numberIndex] && this.props.session.numbers[this.props.session.numberIndex].type == 'Postpaid')) {
      return
    }
    try {
      const r = (await http.get(URLS.POSTPAID)).data
      await this.promisedSetState({ postpaidPlans: r.response.rows })
    } catch (e) { }
    await this.promisedSetState({
      fetchingPostpaidPlans: false
    })
  }

  async fetchPromotions () {
    try {
      const r = (await httpCms.get(URLS.COUPONS)).data
      await this.promisedSetState({ promotions: r.rows })
    } catch (e) { }
    await this.promisedSetState({
      fetchingPromotions: false
    })
  }

  renderHeader () {
    return (
      <>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('Shop')}
          titleColor='light'
          rightContent={
            <View style={styles.topBtn}>
              <Button
                onPress={() => {
                  logClickEvent('ShopGoldCoin')
                  navigate('GoldenCoinHome')
                }}
              >
                <Image source={require('@asset/icons/spark.png')} style={styles.miageImg} resizeMode='contain' />
              </Button>
              <Button
                onPress={() => {
                  logClickEvent('ShopSearch')
                  navigate('PublicSearch', { tabId: 'product' })
                }}
              >
                <Icon name='search1' type='AntDesign' style={styles.rightIcon} />
              </Button>
              {/* <Button onPress={() => navigate('UserLeaderboard')}>
                <Image source={require('@asset/icons/filters.png')} style={styles.filterImg} resizeMode='contain' />
              </Button> */}
            </View>
          }
        />
      </>
    )
  }

  render () {
    return (
      <Container>
        {this.renderHeader()}
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <Banners
              banners={this.state.banners}
              fetching={this.state.fetchingBanners}
            />
            <Shortcut session={this.props.session} />
            <BannerAd placement='shop' />
            <SpecialBanners
              banners={this.state.specialBanners}
              fetching={this.state.fetchingSpecialBanners}
            />
            <Latest
              list={this.state.latest}
              fetching={this.state.fetchingLatest}
            />
            <Mobiles
              list={this.state.mobiles}
              fetching={this.state.fetchingMobiles}
            />
            <Games
              list={this.state.games}
              fetching={this.state.fetchingGames}
            />
            <Channels
              list={this.state.channels}
              fetching={this.state.fetchingChannels}
            />
            <Postpaid
              list={this.state.postpaidPlans}
              fetching={this.state.fetchingPostpaidPlans}
              session={this.props.session}
            />
            <Promotions
              list={this.state.promotions}
              fetching={this.state.fetchingPromotions}
            />
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Shop)
