import React from 'react'
import { Text, ScrollView, View, Platform } from 'react-native'
import { connect } from 'react-redux'
import { TourGuideProvider, TourGuideZone } from 'rn-tourguide'

import BannerAd from '@src/component/Ads/Banner'
import { Container, Content, Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import Footer from '@src/component/Footer'
import SectionProvider from '@src/component/Section/Provider'
import { LightStatusBar } from '@src/component/StatusBar'
import { URLS } from '@src/config/url'
import { navigate } from '@src/navigation'
import theme from '@src/theme/styles'
import { applyComponentFeatures } from '@src/utility/core'
import http, { httpCms, httpMovie, httpNews } from '@src/utility/http'
import request from '@src/utility/request'
import { SupportChat } from '@src/utility/supportChat'

import styles from './styles'
import Shortcut from './Shortcut'
import PlayWin from './PlayWin'
import Offers from './Offers'
import Coupon from './Coupon'
import MtnProduct from './MtnProduct'
import Music from './Music'
import Movies from './Movies'
import News from './News'
import CallerTunes from './CallerTunes'
import Live from './Live'
import Membership from './Membership'
import membershipList from './data/membership'
import TourGuideListener from './TourGuideListener'
import Balance from './Balance'
import { logClickEvent } from '@src/utility/analytics'
import { useNumberBaseKey } from '@src/hooks/user'
import { refineNews } from '@src/helper/news'

class HomeUI extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isAppTour: false,
      fetchCompleted: false,

      quickTours: {},

      planDetails: [],
      fetchingPlans: true,

      offers: [],
      fetchingOffers: true,

      mtnProducts: [],
      fetchingMtnProducts: false,

      coupons: [],
      fetchingCoupons: true,

      games: [],
      fetchingGames: true,

      music: [],
      fetchingMusic: true,

      movies: [],
      fetchingMoviesList: true,

      news: [],
      fetchingNews: true,

      callerTunes: [],
      fetchingCallerTunes: true,

      liveTv: [],
      fetchingLiveTv: true,

      membership: [],
      fetchingMemberships: true
    }

    applyComponentFeatures(this)

    this.fetchQuickTour = this.fetchQuickTour.bind(this)
    this.fetchPlanDetails = this.fetchPlanDetails.bind(this)
    this.fetchOffers = this.fetchOffers.bind(this)
    this.fetchCoupons = this.fetchCoupons.bind(this)
    this.fetchMtnProducts = this.fetchMtnProducts.bind(this)
    this.fetchGames = this.fetchGames.bind(this)
    this.fetchCallerTunes = this.fetchCallerTunes.bind(this)
    this.fetchMusic = this.fetchMusic.bind(this)
    this.fetchMovies = this.fetchMovies.bind(this)
    this.fetchNews = this.fetchNews.bind(this)
    this.fetchLiveTv = this.fetchLiveTv.bind(this)
    this.fetchMemberships = this.fetchMemberships.bind(this)
    this.renderQuickTour = this.renderQuickTour.bind(this)
    this.renderSearchButton = this.renderSearchButton.bind(this)
    this.renderNotificationButton = this.renderNotificationButton.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
    this.renderPlans = this.renderPlans.bind(this)
    this.renderHomePage = this.renderHomePage.bind(this)
    this.renderQuickTourProvider = this.renderQuickTourProvider.bind(this)
  }

  async componentDidMount () {
    if (!this.props.setting.quicktourShown) {
      await this.fetchQuickTour()
    }

    await this.fetchPlanDetails()
    await this.promisedSetState({
      fetchCompleted: true
    })
    await this.fetchMemberships()

    await this.fetchOffers()
    await this.fetchCallerTunes()
    await this.fetchGames()
    await this.fetchMusic()
    await this.fetchMovies()
    await this.fetchNews()
    await this.fetchMtnProducts()
    await this.fetchCoupons()
    await this.fetchLiveTv()
    if (this.state.isAppTour) {
      // await Support.hideLoading()
    }
  }

  async fetchQuickTour () {
    try {
      const r = (await httpCms.get(URLS.QUICK_TOUR)).data
      const quickTours = {}
      r.rows.forEach((d, i) => {
        quickTours[d.category_type] = {
          title: d.title,
          description: d.description,
          ordering: parseInt(d.field_display_order, 10)
        }
      })

      await this.promisedSetState({
        quickTours,
        isAppTour: Object.keys(quickTours).length > 0
      })
    } catch (e) {}
  }

  async fetchPlanDetails () {
    try {
      let phone = ''
      if (this.props.session.numbers[this.props.session.numberIndex]) {
        const selectedNumber =
          this.props.session.numbers[this.props.session.numberIndex]
        phone = selectedNumber.number
      }
      const params = { mobilenumber: phone }
      const r = (await http.post(URLS.USER_BALANCE_PREPAID)).data
      if (r?.result?.type) {
        const data = {}
        if (r.result.type == 'Prepaid') {
          const _data = parseInt(r.result.data, 10) || 0
          const _dataBalance = parseInt(r.result.data_balance, 10) || 0
          const _dataCompleted = (_data - _dataBalance) || 0
          data.data_percentage = _dataCompleted / _data * 100
        } else if (r.result.type == 'Postpaid') {
          const _data = parseInt(r.result.data, 10) || 0
          const _dataBalance = parseInt(r.result.data_balance, 10) || 0
          const _dataCompleted = (_data - _dataBalance) || 0
          data.data_percentage = _dataCompleted / _data * 100

          const _voice = parseInt(r.result.voice, 10) || 0
          const _voiceBalance = parseInt(r.result.voice_balance, 10) || 0
          const _voiceCompleted = (_voice - _voiceBalance) || 0
          data.voice_percentage = _voiceCompleted / _voice * 100

          const _sms = parseInt(r.result.sms, 10) || 0
          const _smsBalance = parseInt(r.result.sms_balance, 10) || 0
          const _smsCompleted = (_sms - _smsBalance) || 0
          data.sms_percentage = _smsCompleted / _sms * 100
        }
        const planDetails = [{ ...r.result, ...data }]
        await this.promisedSetState({
          planDetails,
          fetchingPlans: false
        })
      }
    } catch (e) {}
  }

  async fetchOffers () {
    try {
      const r = (await httpCms.get(URLS.OFFERS)).data
      await this.promisedSetState({
        offers: r.rows
      })
    } catch (e) {}
    await this.promisedSetState({
      fetchingOffers: false
    })
  }

  async fetchMtnProducts () {
    try {
      const r = (await httpCms.get(URLS.MTN_PRODUCT_SERVICE)).data
      if (Array.isArray(r.rows)) {
        await this.promisedSetState({
          mtnProducts: r.rows
        })
      }
    } catch (e) {
      console.log(e)
    }
    await this.promisedSetState({
      fetchingMtnProducts: false
    })
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

  async fetchGames () {
    try {
      const r = (await http.get(URLS.GAMES)).data
      if (Array.isArray(r.records)) {
        await this.promisedSetState({
          games: r.records
        })
      }
    } catch (e) {}
    await this.promisedSetState({
      fetchingGames: false
    })
  }

  async fetchMusic () {
    try {
      const params = {}
      const r = (await httpCms.get(URLS.MUSIC_LIST, { params })).data

      if (Array.isArray(r)) {
        await this.promisedSetState({
          music: r
        })
      }
    } catch (e) {}
    await this.promisedSetState({
      fetchingMusic: false
    })
  }

  async fetchMovies () {
    try {
      const params = {}
      params.page = 1
      const r = (await httpMovie.get(URLS.MOVIE_LIST, { params })).data
      if (Array.isArray(r.results)) {
        await this.promisedSetState({
          moviesList: r.results
        })
      }
    } catch (e) {
      console.log(e)
    }
    await this.promisedSetState({
      fetchingMoviesList: false
    })
  }

  async fetchNews () {
    try {
      const params = {
        category: 'business'
      }
      const r = (await httpNews.get(URLS.NEWS_HEADLINES, { params })).data
      if (Array.isArray(r.articles)) {
        await this.promisedSetState({
          news: r.articles.map(refineNews)
        })
      }
    } catch (e) {
      console.log(e)
    }
    await this.promisedSetState({
      fetchingNews: false
    })
  }

  async fetchCallerTunes () {
    try {
      const params = {
        size: 1,
        offset: 1
      }
      console.log('callet tune---------------------')
      const r = (await http.get(URLS.CALLER_TUNES, { params })).data
      if (Array.isArray(r.responseCode)) {
        await this.promisedSetState({
          callerTunes: r.responseCode
        })
      }
    } catch (e) {
      console.log(e)
    }
    await this.promisedSetState({
      fetchingCallerTunes: false
    })
  }

  async fetchLiveTv () {
    try {
      const params = {}
      params.page = 1
      const r = (await httpMovie.get(URLS.MOVIE_LIVE_TV, { params })).data
      if (Array.isArray(r.results)) {
        await this.promisedSetState({
          liveTv: r.results
        })
      }
    } catch (e) {}
    await this.promisedSetState({
      fetchingLiveTv: false
    })
  }

  async fetchMemberships () {
    const list = await request(membershipList)
    await this.promisedSetState({
      memberships: list,
      fetchingMemberships: false
    })
  }

  renderQuickTour ({
    category,
    children,
    shape = 'rectangle',
    style = {},
    props = {}
  }) {
    if (!this.state.quickTours[category]) {
      return children
    }
    const tag = this.state.quickTours[category]
    return (
      <TourGuideZone
        zone={tag.ordering}
        text={<Text style={styles.quickTourText}>{tag.description}</Text>}
        shape={shape}
        style={style}
        {...props}
      >
        {children}
      </TourGuideZone>
    )
  }

  renderPlans () {
    return (
      <Balance
        planDetails={this.state.planDetails}
        renderQuickTour={this.renderQuickTour}
      />
    )
  }

  renderSearchButton () {
    const goToSearch = () => {
      logClickEvent('HomeSearch')
      navigate('PublicSearch')
    }
    const btn = (
      <Button style={styles.navRightBtn} onPress={goToSearch}>
        <Icon name='search' type='Feather' style={styles.navBtnIcon} />
      </Button>
    )
    return this.renderQuickTour({
      category: 'Search',
      children: btn,
      shape: 'circle',
      style: styles.searchBtnIcon
    })
  }

  renderNotificationButton () {
    const btn = (
      <Button style={styles.navRightBtn} onPress={() => navigate('UserNotification')}>
        <Icon name='bell' type='Fontisto' style={styles.navBtnIcon} />
      </Button>
    )
    return this.renderQuickTour({
      category: 'Notification',
      children: btn,
      shape: 'circle'
    })
  }

  renderHeader () {
    let userName = 'Guest'
    let phone = ''
    if (this.props.session.numbers[this.props.session.numberIndex]) {
      const selectedNumber =
        this.props.session.numbers[this.props.session.numberIndex]
      userName = selectedNumber.name
      phone = selectedNumber.number
    }
    return (
      <View style={styles.navBar}>
        <View style={styles.navLeft}>
          <Button
            style={styles.navBtn}
            onPress={() => {
              logClickEvent('HomeSwitchNumber')
              SectionProvider.showUserNumberSelection()
            }}
          >
            <View>
              <View style={styles.navRow}>
                <Text style={styles.navName}>{userName}</Text>
              </View>
              <View style={styles.navRow}>
                <Text style={styles.navNumber}>{phone}</Text>
              </View>
            </View>
            <View style={styles.pickerSelect}>
              <Icon
                name='caretdown'
                type='AntDesign'
                style={styles.pickerSelectIcon}
              />
            </View>
          </Button>
        </View>
        <View style={styles.navRight}>
          {this.renderSearchButton()}
          {this.renderNotificationButton()}
        </View>
      </View>
    )
  }

  renderHomePage () {
    return (
      <Container>
        <LightStatusBar />
        {this.renderHeader()}

        <Content style={theme.layout}>
          <ScrollView keyboardShouldPersistTaps='always' nestedScrollEnabled>
            <View style={styles.bgImg} />
            <View style={styles.mainContainer}>{this.renderPlans()}</View>

            <View style={styles.mainContent}>
              <BannerAd placement='home' />
              <Shortcut session={this.props.session} />
              <Offers
                list={this.state.offers}
                fetching={this.state.fetchingOffers}
              />
              <MtnProduct
                list={this.state.mtnProducts}
                fetching={this.state.fetchingMtnProducts}
              />
              <Coupon
                list={this.state.coupons}
                fetching={this.state.fetchingCoupons}
              />
              <PlayWin
                list={this.state.games}
                fetching={this.state.fetchingGames}
              />
              <Music
                list={this.state.music}
                fetching={this.state.fetchingMusic}
              />
              <Movies
                language={this.state.language}
                list={this.state.moviesList}
                fetching={this.state.fetchingMoviesList}
              />
              <News list={this.state.news} fetching={this.state.fetchingNews} />
              <CallerTunes
                list={this.state.callerTunes}
                fetching={this.state.fetchingCallerTunes}
              />
              <Live
                list={this.state.liveTv}
                fetching={this.state.fetchingLiveTv}
              />
              <Membership
                list={this.state.memberships}
                fetching={this.state.fetchingMemberships}
              />
            </View>
          </ScrollView>
        </Content>
        <Footer
          currentScreen='PublicHome'
          renderQuickTour={this.renderQuickTour}
        />
        <SupportChat forceShow renderQuickTour={this.renderQuickTour} />
      </Container>
      
    )
  }

  renderQuickTourProvider () {
    if (
      this.props.setting.quicktourShown ||
      !this.state.isAppTour ||
      !this.state.fetchCompleted
    ) {
      return this.renderHomePage()
    }
    const tourProps =
      Platform.OS === 'ios'
        ? {
            maskOffset: 0,
            verticalOffset: 0
          }
        : {
            maskOffset: 5,
            verticalOffset: 22
          }
    return (
      <TourGuideProvider
        startAtMount
        preventOutsideInteraction
        tooltipStyle={styles.qtTooltipStyle}
        {...tourProps}
      >
        {this.renderHomePage()}
        <TourGuideListener />
      </TourGuideProvider>
    )
  }

  render () {
    return this.renderQuickTourProvider()
  }
}

const Home = (props) => {
  const key = useNumberBaseKey(props)

  return <HomeUI key={key} {...props} />
}

export default connect(({ session, setting }) => ({ session, setting }))(Home)
