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
import { DarkStatusBar } from '@src/component/StatusBar'
import { httpCms } from '@src/utility/http'
import { URLS } from '@src/config/url'

class RewardView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      reward: {},
      fetching: true
    }

    bind(this)

    this.fetchReward = this.fetchReward.bind(this)
  }

  async componentDidMount () {
    await this.fetchReward()
  }

  async fetchReward () {
    const state = {}
    try {
      const r = (await httpCms.get(URLS.USER_REWARDS_DETAILS + this.props.route.params.id)).data
      state.reward = r.rows[0]
    } catch (e) {}
    state.fetching = false
    await this.promisedSetState(state)
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('My Rewards Details')}
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View>
              <Image source={{ uri: this.state.reward.field_image }} style={styles.rewardsImage} />
              <View style={styles.imgOverlay}>
                <Image source={{ uri: this.state.reward.field_logo }} style={styles.rewardImage} />
              </View>
            </View>
            <View style={styles.details}>
              <View style={theme.row}>
                <Text style={styles.validText}>{this.state.reward.field_expiry_date}</Text>
              </View>
              <View style={theme.row}>
                <Text style={styles.giftText}>{this.state.reward.title}</Text>
              </View>
              <View style={theme.row}>
                <Text style={styles.detailsText}>{this.state.reward.description}</Text>
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

export default RewardView
