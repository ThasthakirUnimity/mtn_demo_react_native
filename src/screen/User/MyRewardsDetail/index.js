import React from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { Container, Content, Icon, Text } from '@src/component/Basic'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button } from '@src/component/Form'

import Header from '@src/component/Header'
import { __ } from '@src/utility/translation'

import theme from '@src/theme/styles'
import styles from './styles'
import { bind } from '@src/utility/component'
import request from '@src/utility/request'
import { DarkStatusBar } from '@src/component/StatusBar'
import http, { httpCms } from '@src/utility/http'
import { URLS } from '@src/config/url'
import Reward from './Reward'
import rewardList from './data/reward'

class Address extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      rewardList: [],
      fetchingRewardList: true,
      rewardDetails: [],
      fetchingDetailsRewards: true
    }
    bind(this)

    this.fetchDetailsRewards = this.fetchDetailsRewards.bind(this)
  }

  async componentDidMount () {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })
    await this.fetchDetailsRewards()
    await this.fetchingRewardList()
  }

  async fetchDetailsRewards () {
    await this.promisedSetState({
      fetchingDetailsRewards: true
    })
    let response = []
    if (this.props.route.params?.flag_type) {
      response = (await httpCms.get(URLS.LOYALTY_BASED_OFFERS_DETAILS + this.props.route.params.id)).data
    } else {
      response = (await httpCms.get(URLS.USER_REWARDS_DETAILS + this.props.route.params.id)).data
    }
    await this.promisedSetState({
      rewardDetails: response.rows[0],
      fetchingDetailsRewards: false
    })
  }

  async fetchingRewardList () {
    await this.promisedSetState({
      fetchingRewardList: true
    })
    const r = (await httpCms.get(URLS.USER_REWARDS_HELP_CONTENT)).data
    await this.promisedSetState({
      rewardList: r.rows,
      fetchingRewardList: false
    })
  }

  headTitle () {
    if (this.props.route.params.flag_type == null) {
      return __('My Rewards Details')
    } else {
      return this.props.route.params.flag_title
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
            <View>
              <Image source={{ uri: this.state.rewardDetails.field_image }} style={styles.rewardsImage} />
              <View style={styles.imgOverlay}>
                <Image source={{ uri: this.state.rewardDetails.field_logo }} style={styles.rewardImage} />
              </View>
            </View>
            <View style={styles.details}>
              <View style={theme.row}>
                <Text style={styles.validText}>{(this.props.route.params?.flag_type != null) ? this.state.rewardDetails.field_validity : this.state.rewardDetails.field_expiry_date}</Text>
              </View>
              <View style={theme.row}>
                <Text style={styles.giftText}>{this.state.rewardDetails.title}</Text>
              </View>
              <View style={theme.row}>
                <Text style={styles.detailsText}>{this.state.rewardDetails.description}</Text>
              </View>
              <Button style={styles.redeemBtn}>
                <Text style={styles.redeemBtnText}>{__('Redeem')}</Text>
              </Button>
            </View>
            <Reward
              language={this.state.language}
              list={this.state.rewardList}
              fetching={this.state.fetchingRewardList}
            />
          </ScrollView>
        </Content>
        <View style={styles.footerBg}>
        </View>

      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Address)
