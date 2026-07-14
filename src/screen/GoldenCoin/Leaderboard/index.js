import React from 'react'
import { TouchableOpacity, TextInput, Image, View, ScrollView } from 'react-native'
import { Container, Content, Text, Icon } from '@src/component/Basic'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './styles'
import theme from '@src/theme/styles'
import { navigate } from '@src/navigation'

import Header from '@src/component/Header'
import { bind } from '@src/utility/component'
import request from '@src/utility/request'
import { DarkStatusBar } from '@src/component/StatusBar'
import { URLS } from '@src/config/url'

import { GAMIFICATION_PRODUCT_ID } from '@src/config/env'
import http from '@src/utility/http'
import { setLocale, __ } from '@src/utility/translation'

import Leaderboards from './Leaderboards'
import leaderboardsList from './data/leaderboards'

import Badge from './Badge'
import badgeList from './data/badge'

import { LightStatusBar } from '@component/StatusBar'
import { connect } from 'react-redux'
import Placeholder from './Leaderboards/Placeholder'

class Leaderboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      language: 'en',
      tabSelect: 'today',

      isDisabled: false,
      isOpen: false,
      tabSelected: 'intro',

      leaderboardsList: [],
      leaderboardData: [],
      fetchingLeaderboardsList: true,

      badgeList: [],
      fetchingBadgeList: true,
      avatar: require('@asset/icons/avatar-dark.png'),
      mobileNo: ''

    }
    bind(this)

    this.fetchingLeaderboardsList = this.fetchingLeaderboardsList.bind(this)
    this.fetchingBadgeList = this.fetchingBadgeList.bind(this)
  }

  async componentDidMount () {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })

    if (this.props.session.isLoggedIn) {
      if (this.props.session.numbers[this.props.session.numberIndex]) {
        const selectedNumber = this.props.session.numbers[this.props.session.numberIndex]
        await this.promisedSetState({
          mobileNo: selectedNumber.number
        })
      }
    }

    await this.fetchingLeaderboardsList()
    await this.fetchingBadgeList()
  }

  async fetchingLeaderboardsList (request) {
    await this.promisedSetState({
      fetchingLeaderboardsList: true
    })
    const list = (await http.get(`${URLS.GOLD_COIN_LEADERBOARD}`, { params: { productId: GAMIFICATION_PRODUCT_ID, type: request ? request.type : 1, dur: request ? request.dur : 2 } })).data
    const leaderboardData = list.records.splice(3, 2)
    console.log('-----------', this.state.mobileNo, list.records)
    const loggedUser = list.records.find(element => element.entityId == this.state.mobileNo && element.ranks > 3)
    if (loggedUser) {
      leaderboardData.push(loggedUser)
    }
    await this.promisedSetState({
      leaderboardsList: list.records,
      fetchingLeaderboardsList: false,
      leaderboardData
    })
  }

  async fetchingBadgeList () {
    await this.promisedSetState({
      fetchingBadgeList: true
    })
    const list = await request(badgeList)
    await this.promisedSetState({
      badgeList: list,
      fetchingBadgeList: false
    })
  }

  renderToday () {
    return (
      <View />
    )
  }

  renderWeek () {
    return (
      <View />
    )
  }

  renderTime () {
    return (
      <View />
    )
  }

  render () {
    let tabCont
    if (this.state.tabSelect === 'today') {
      tabCont = this.renderToday()
    } else if (this.state.tabSelect === 'week') {
      tabCont = this.renderWeek()
    } else if (this.state.tabSelect === 'time') {
      tabCont = this.renderTime()
    }

    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('Leaderboard')}
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.share}>
                <View style={styles.shareProf}>
                  <TouchableOpacity style={this.state.tabSelect === 'today' ? styles.tabActive : styles.tab} onPress={() => { this.fetchingLeaderboardsList({ type: 1, dur: 2 }); this.setState({ tabSelect: 'today' }) }}>
                    <Text style={this.state.tabSelect === 'today' ? styles.tagActive : styles.tag}>{__('Today')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={this.state.tabSelect === 'week' ? styles.tabActive : styles.tab} onPress={() => { this.fetchingLeaderboardsList({ type: 1, dur: 3 }); this.setState({ tabSelect: 'week' }) }}>
                    <Text style={this.state.tabSelect === 'week' ? styles.tagActive : styles.tag}>{__('This Week')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={this.state.tabSelect === 'time' ? styles.tabActive : styles.tab} onPress={() => { this.fetchingLeaderboardsList({ type: 1, dur: 1 }); this.setState({ tabSelect: 'time' }) }}>
                    <Text style={this.state.tabSelect === 'time' ? styles.tagActive : styles.tag}>{__('All Time')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {tabCont}

            </ScrollView>

            {!this.state.fetchingLeaderboardsList
              ? <View style={styles.container}>

                <View style={styles.pointsDetail}>

                  <Image source={this.state.leaderboardsList[1]?.profile_image ? { uri: this.state.leaderboardsList[1].profile_image } : this.state.avatar} style={styles.lbImage} />
                  <View style={[styles.pointsInfo, styles.pointsOne]}>
                    <Text style={styles.lbPlace}>2nd</Text>
                    <Text style={styles.lbPoints}>{this.state.leaderboardsList.length >= 2 ? this.state.leaderboardsList[1].game_points : 0}p</Text>
                  </View>
                </View>

                <View style={styles.pointsDetail}>
                  <Image source={this.state.leaderboardsList[0]?.profile_image ? { uri: this.state.leaderboardsList[0].profile_image } : this.state.avatar} style={styles.lbImage} resizeMode='cover' />
                  <View style={styles.overlaymage} />
                  <View style={[styles.pointsInfo, styles.pointsTwo]}>
                    <Text style={styles.lbPlace}>1st</Text>
                    <Text style={styles.lbPoints}>{this.state.leaderboardsList.length >= 1 ? this.state.leaderboardsList[0].game_points : 0}p</Text>
                  </View>
                </View>

                <View>
                  <Image source={this.state.leaderboardsList[2]?.profile_image ? { uri: this.state.leaderboardsList[2].profile_image } : this.state.avatar} style={styles.lbImage} />
                  <View style={[styles.pointsInfo, styles.pointsThree]}>
                    <Text style={styles.lbPlace}>3rd</Text>
                    <Text style={styles.lbPoints}>{this.state.leaderboardsList.length >= 3 ? this.state.leaderboardsList[2].game_points : 0}p</Text>
                  </View>
                </View>

                </View>
              : <Placeholder />}
            <View>
              {this.state.leaderboardData.length
                ? <Leaderboards
                    language={this.state.language}
                    list={this.state.leaderboardData}
                    fetching={this.state.fetchingLeaderboardsList}
                  />
                : <></>}

            </View>

            <View>
              <Badge
                language={this.state.language}
                list={this.state.badgeList}
                fetching={this.state.fetchingBadgeList}
              />
            </View>

          </ScrollView>
        </Content>
      </Container>
    )
  }
}
export default connect(({ session }) => ({ session }))(Leaderboard)
