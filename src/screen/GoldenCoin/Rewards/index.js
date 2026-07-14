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

import List from './List'

class Rewards extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      list: [],
      fetching: true
    }

    bind(this)

    this.fetchRewards = this.fetchRewards.bind(this)
  }

  async componentDidMount () {
    await this.fetchRewards()
  }

  async fetchRewards () {
    try {
      const r = (await httpCms.get(URLS.USER_REWARDS)).data
      await this.promisedSetState({
        list: r.rows
      })
    } catch (e) {}
    await this.promisedSetState({
      fetching: false
    })
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('Rewards')}
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <List
              list={this.state.list}
              fetching={this.state.fetching}
            />
          </ScrollView>
        </Content>
        <View style={styles.footerBg} />
      </Container>
    )
  }
}

export default Rewards
