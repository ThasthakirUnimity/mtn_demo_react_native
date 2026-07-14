import React from 'react'
import { Image, ScrollView, View, TouchableWithoutFeedback } from 'react-native'
import { Container, Content, Text } from '@src/component/Basic'
import { connect } from 'react-redux'

import Header from '@src/component/Header'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import { bind } from '@src/utility/component'
import { GAMIFICATION_PRODUCT_ID, GAME_API_URL } from '@src/config/env'
import { navigate } from '@src/navigation'
import theme from '@src/theme/styles'
import styles from './styles'
import { DarkStatusBar } from '@src/component/StatusBar'
import { URLS } from '@src/config/url'
import { httpCms, httpGame } from '@src/utility/http'
import Challenge from './Challenge'
import Participate from './Participate'
import Offer from './Offer'
import Rewards from './Rewards'
import Shop from './Shop'
import Popular from './Popular'
import Cashback from './Cashback'
import Wallet from './Wallet'
import Gift from './Gift'
import Recharge from './Recharge'
import Postpaid from './Postpaid'
import Placeholder from './Placeholder'

class GoldenCoin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

      challenge: [],
      fetchingChallengeList: true,

      participates: [],
      fetchingParticipates: true,

      offers: [],
      fetchingOffers: true,

      rewards: [],
      fetchingRewards: true,

      shops: [],
      fetchingShops: true,

      populars: [],
      fetchingPopulars: true,

      cashbacks: [],
      fetchingCashbacks: true,

      wallets: [],
      fetchingWallets: true,

      gifts: [],
      fetchingGifts: true,

      recharges: [],
      fetchingRecharges: true,

      postpaid: [],
      fetchingPostpaidList: true,

      images: [
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      ],

      profileImage: require('@asset/icons/avatar-dark.png'),
      profileBadge: {},
      userName: 'Guest',
      mobileNo: '',

      profileData: {},
      fetchProfileData: true
    }
    bind(this)

    this.fetchChallengeList = this.fetchChallengeList.bind(this)
    this.fetchParticipates = this.fetchParticipates.bind(this)
    this.fetchOffers = this.fetchOffers.bind(this)
    this.fetchRewards = this.fetchRewards.bind(this)
    this.fetchShops = this.fetchShops.bind(this)
    this.fetchPopulars = this.fetchPopulars.bind(this)
    this.fetchCashbacks = this.fetchCashbacks.bind(this)
    this.fetchWallets = this.fetchWallets.bind(this)
    this.fetchGifts = this.fetchGifts.bind(this)
    this.fetchRecharges = this.fetchRecharges.bind(this)
    this.fetchPostpaids = this.fetchPostpaids.bind(this)
    this.fetchProfileData = this.fetchProfileData.bind(this)
    this.renderTemplate = this.renderTemplate.bind(this)
  }

  async componentDidMount () {
    if (this.props.session.isLoggedIn) {
      if (this.props.session.numbers[this.props.session.numberIndex]) {
        const selectedNumber = this.props.session.numbers[this.props.session.numberIndex]
        await this.promisedSetState({
          userName: selectedNumber.name ? selectedNumber.name : this.state.userName,
          mobileNo: selectedNumber.number
        })
        if (this.props.session.numberIndex == 0) {
          await this.promisedSetState({
            userName: this.props.session.user.firstName + ' ' + this.props.session.user.lastName
          })
        }
      }
      if (this.props.session.user.profileImage) {
        await this.promisedSetState({
          profileImage: { uri: this.props.session.user.profileImage }
        })
      }
    }

    await this.fetchProfileData()
    await this.fetchChallengeList()
    await this.fetchParticipates()
    await this.fetchOffers()
    await this.fetchRewards()
    await this.fetchShops()
    await this.fetchPopulars()
    await this.fetchCashbacks()
    await this.fetchWallets()
    await this.fetchGifts()
    await this.fetchRecharges()
    await this.fetchPostpaids()
  }

  async fetchChallengeList () {
    await this.promisedSetState({
      fetchChallengeList: true
    })
    try {
      const list = (await httpGame.get(URLS.GAME_EVENTS, { params: { productId: GAMIFICATION_PRODUCT_ID } })).data
      await this.promisedSetState({
        challengeList: list.events
      })
    } catch (e) {}
    await this.promisedSetState({
      fetchingChallengeList: false
    })
  }

  async fetchParticipates () {
    try {
      await this.promisedSetState({
        fetchingParticipates: true
      })
      const response = (await httpCms.get(URLS.LOYALTY_BASED_OFFERS + 'participatetowin')).data
      await this.promisedSetState({
        participates: response.rows
      })
    } catch (error) { }
    await this.promisedSetState({
      fetchingParticipates: false
    })
  }

  async fetchOffers () {
    try {
      await this.promisedSetState({
        fetchingOffers: true
      })
      const response = (await httpCms.get(URLS.LOYALTY_BASED_OFFERS + 'activeoffers')).data
      await this.promisedSetState({
        offers: response.rows
      })
    } catch (error) { }
    await this.promisedSetState({
      fetchingOffers: false
    })
  }

  async fetchRewards () {
    try {
      await this.promisedSetState({
        fetchingRewards: true
      })
      const r = (await httpCms.get(URLS.USER_REWARDS)).data
      await this.promisedSetState({
        rewards: r.rows
      })
    } catch (error) { }
    await this.promisedSetState({
      fetchingRewards: false
    })
  }

  async fetchShops () {
    try {
      await this.promisedSetState({
        fetchingShops: true
      })
      // const list = await request(shopList)
      const response = (await httpCms.get(URLS.LOYALTY_BASED_OFFERS + 'onlineshopping')).data
      await this.promisedSetState({
        shops: response.rows
      })
    } catch (error) { }
    await this.promisedSetState({
      fetchingShops: false
    })
  }

  async fetchPopulars () {
    try {
      await this.promisedSetState({
        fetchingPopulars: true
      })
      // const list = await request(popularList)
      const response = (await httpCms.get(URLS.LOYALTY_BASED_OFFERS + 'subscriptions')).data

      await this.promisedSetState({
        populars: response.rows
      })
    } catch (error) {

    }
    await this.promisedSetState({
      fetchingPopulars: false
    })
  }

  async fetchCashbacks () {
    try {
      await this.promisedSetState({
        fetchingCashbacks: true
      })
      // const list = await request(cashbackList)
      const response = (await httpCms.get(URLS.LOYALTY_BASED_OFFERS + 'cashbackpoints')).data
      await this.promisedSetState({
        cashbacks: response.rows
      })
    } catch (error) {}
    await this.promisedSetState({
      fetchingCashbacks: false
    })
  }

  async fetchWallets () {
    try {
      await this.promisedSetState({
        fetchingWallets: true
      })
      const response = (await httpCms.get(URLS.LOYALTY_BASED_OFFERS + 'momo_wallet_offer')).data
      await this.promisedSetState({
        wallets: response.rows
      })
    } catch (error) {}
    await this.promisedSetState({
      fetchingWallets: false
    })
  }

  async fetchGifts () {
    try {
      await this.promisedSetState({
        fetchingGifts: true
      })
      // const list = await request(giftList)
      const response = (await httpCms.get(URLS.LOYALTY_BASED_OFFERS + 'e_gifts')).data

      await this.promisedSetState({
        gifts: response.rows
      })
    } catch (error) {

    }
    await this.promisedSetState({
      fetchingGifts: false
    })
  }

  async fetchRecharges () {
    try {
      await this.promisedSetState({
        fetchingRecharges: true
      })
      const response = (await httpCms.get(URLS.LOYALTY_BASED_OFFERS + 'recharge_bills')).data
      await this.promisedSetState({
        recharges: response.rows
      })
    } catch (error) {}
    await this.promisedSetState({
      fetchingRecharges: false
    })
  }

  async fetchPostpaids () {
    try {
      await this.promisedSetState({
        fetchingPostpaids: true
      })
      // const list = await request(postpaidList)
      const response = (await httpCms.get(URLS.LOYALTY_BASED_OFFERS + 'postpaidoffers')).data

      await this.promisedSetState({
        postpaids: response.rows
      })
    } catch (error) {

    }
    await this.promisedSetState({
      fetchingPostpaids: false
    })
  }

  async fetchProfileData () {
    await this.promisedSetState({
      fetchProfileData: true
    })

    const state = {}
    try {
      const list = (await httpGame.get(URLS.GOLD_COIN_PROFILE, { params: { entityId: this.state.mobileNo, productId: GAMIFICATION_PRODUCT_ID } })).data
      state.profileData = list.userProfile
      if (list.userProfile.Badges.length) {
        state.profileBadge = list.userProfile.Badges[list.userProfile.Badges.length - 1]
      }
      await this.promisedSetState(state)
    } catch (e) {}
    await this.promisedSetState({
      fetchProfileData: false
    })
  }

  renderTemplate () {
    return <Placeholder />
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('Golden Coin')}
          titleColor='light'
          rightContent={
            <Button onPress={() => navigate('GoldenCoinLeaderBoard')} style={styles.rightBtn}>
              <Image source={require('@asset/icons/leaderboard.png')} resizeMode='contain' />
            </Button>
          }
        />
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <TouchableWithoutFeedback
              onPress={() => {
                navigate('GoldenCoinProfile')
              }}
            >
              {!this.state.fetchProfileData
                ? (
                  <View style={styles.profile}>
                    <View style={styles.profileAvatar}>
                      <Image source={this.state.profileImage} style={styles.profileAvatarPic} />
                    </View>
                    <View style={styles.profileContainer}>
                      <View style={styles.profileContent}>
                        <View style={styles.profileCol}>
                          <View>
                            <View style={styles.profileRowContent}>
                              <Text style={styles.profileTitle}>{this.state.userName}</Text>
                            </View>
                            <View style={styles.profileRow}>
                              <Text style={styles.selectCoin}>{`${this.state.profileBadge.profileName ? this.state.profileBadge.profileName : ''} ${this.state.profileData.game_points}xp`}</Text>
                            </View>
                          </View>
                          <Image source={{ uri: GAME_API_URL + this.state.profileBadge.profileImgPath }} style={styles.goldenImg} />
                        </View>
                        <View style={styles.progressbar}>
                          <View style={{ ...styles.progressLine, width: `${(this.state.profileData.game_points / (this.state.profileData.game_points + this.state.profileData.points_for_next)) * 100}%` }} />
                        </View>
                      </View>
                      <View style={styles.profileProgress}>
                        <View style={styles.profileProgressBar} />
                        <View style={styles.profileProgressBarActive} />
                      </View>
                      <View>
                        <Text style={styles.earnText}>{this.state.profileData.points_for_next ? `Earn ${this.state.profileData.points_for_next} points more to reach ${this.state.profileData.next_level}` : 'You reached top level'}</Text>
                      </View>
                    </View>
                  </View>
                  )
                : <Placeholder />}
            </TouchableWithoutFeedback>

            <View style={styles.points}>
              <View style={styles.pointsItem}>
                <View style={styles.pointRow}>
                  <Text style={styles.pointNum}>{__('40')}</Text>
                </View>
                <View style={styles.pointRow}>
                  <Text style={styles.pointText}>{__('Cashback \n Won')}</Text>
                </View>
              </View>
              <View style={styles.pointsItem}>
                <View style={styles.pointRow}>
                  <Text style={styles.pointNum}>{__('260')}</Text>
                </View>
                <View style={styles.pointRow}>
                  <Text style={styles.pointText}>{__('Points \n Won')}</Text>
                </View>
              </View>
              <View style={styles.pointsItem}>
                <View style={styles.pointRow}>
                  <Text style={styles.pointNum}>{__('12')}</Text>
                </View>
                <View style={styles.pointRow}>
                  <Text style={styles.pointText}>{__('Vocher \n& Deals')}</Text>
                </View>
              </View>
            </View>

            <Challenge
              list={this.state.challengeList}
              fetching={this.state.fetchingChallengeList}
            />
            <Participate
              list={this.state.participates}
              fetching={this.state.fetchingParticipates}
            />
            <Offer
              list={this.state.offers}
              fetching={this.state.fetchingOffers}
            />
            <Rewards
              list={this.state.rewards}
              fetching={this.state.fetchingRewards}
            />
            <Shop
              list={this.state.shops}
              fetching={this.state.fetchingShops}
            />
            <Popular
              list={this.state.populars}
              fetching={this.state.fetchingPopulars}
            />
            <Image source={require('@asset/images/cashback.png')} style={styles.cashbackBanner} />
            <Cashback
              list={this.state.cashbacks}
              fetching={this.state.fetchingCashbacks}
            />
            <Wallet
              list={this.state.wallets}
              fetching={this.state.fetchingWallets}
            />
            <Image source={require('@asset/images/cashback.png')} style={styles.cashbackBanner} />
            <Gift
              list={this.state.gifts}
              fetching={this.state.fetchingGifts}
            />
            <Recharge
              list={this.state.recharges}
              fetching={this.state.fetchingRecharges}
            />
            <Postpaid
              list={this.state.postpaids}
              fetching={this.state.fetchingPostpaids}
            />
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(GoldenCoin)
