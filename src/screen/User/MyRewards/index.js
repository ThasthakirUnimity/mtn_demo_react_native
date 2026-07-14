import React from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { Container, Content, Icon, Text } from '@src/component/Basic'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Header from '@src/component/Header'
import { __ } from '@src/utility/translation'

import { navigate } from '@src/navigation'
import theme from '@src/theme/styles'
import styles from './styles'
import { bind } from '@src/utility/component'
import request from '@src/utility/request'
import { DarkStatusBar } from '@src/component/StatusBar'
import http, { httpCms } from '@src/utility/http'
import { URLS } from '@src/config/url'

import Reward from './Reward'
import rewardList from './data/reward'

class Rewards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rewards: [],
      fetchingRewards: true,
      rewardPointsList: [],
      fetchingRewardPointsList: true
    }
    bind(this)

    this.fetchRewards = this.fetchRewards.bind(this)
    this.fetchPoints = this.fetchPoints.bind(this)
    // console.log(this.props.route.params.flag_type);
  }
  async componentDidMount() {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })
    await this.fetchPoints()
    await this.fetchRewards()
  }

  async fetchRewards() {
    await this.promisedSetState({
      fetchingRewards: true
    })
    let response = []
    if (this.props.route.params?.flag_type) {
      response = (await httpCms.get(URLS.LOYALTY_BASED_OFFERS + this.props.route.params.flag_type)).data
    } else {
      response = (await httpCms.get(URLS.USER_REWARDS)).data
    }
    await this.promisedSetState({
      rewards: response.rows,
      fetchingRewards: false
    })
  }
  
  async fetchPoints() {
    await this.promisedSetState({
      fetchingRewardPointsList: true
    })
    const r = (await httpCms.get(URLS.USER_REWARDS_POINTS)).data
    await this.promisedSetState({
      rewardPointsList: r.rows[0]?.content,
      fetchingRewardPointsList: false
    })
  }

  headTitle () {
    if (this.props.route.params.flag_type == null) {
      return __('My Rewards')
    } else {
      return this.props.route.params.flag_title
    }
  }

  template () {
    if (this.props.route.params?.flag_type == null) {
      return (
        <View>
          <View style={styles.gift}>
            <View style={styles.logoBg}>
              <Icon name='gift-outline' type='Ionicons' style={styles.logo} />
            </View>
            <Text style={styles.rewardNum}>500</Text>
            <Text style={styles.rewardPtText}>{__('Available Points')}</Text>
          </View>
          <View style={styles.rewardTerms}>
            <View style={theme.row}>
              <Text style={styles.rewardText}>{this.state.rewardPointsList}</Text>
            </View>
            <Image source={{ uri: 'https://image.freepik.com/free-vector/people-making-money-from-referral-concept-illustration_52683-22927.jpg' }} style={styles.referlogo} />
          </View>
        </View>
      )
    }
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={this.headTitle()}
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >

            {this.template()}

            <Reward
              language={this.state.language}
              list={this.state.rewards}
              flag_type={this.props.route.params?.flag_type}
              flag_title={this.props.route.params?.flag_title}
              fetching={this.state.fetchingRewards}
            />
          </ScrollView>
        </Content>
        <View style={styles.footerBg}>
        </View>

      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Rewards)
