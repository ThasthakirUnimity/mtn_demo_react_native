import React from 'react'
import { Image, ScrollView, View } from 'react-native'

import { Container, Content, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import Header from '@src/component/Header'
import { __ } from '@src/utility/translation'
import theme from '@src/theme/styles'
import styles from './styles'
import { bind } from '@src/utility/component'
import { DarkStatusBar } from '@src/component/StatusBar'
import { httpCms } from '@src/utility/http'
import { URLS } from '@src/config/url'

class ChannelView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      channel: {},
      fetching: true
    }

    bind(this)

    this.fetchOffer = this.fetchOffer.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
  }

  async componentDidMount () {
    await this.fetchOffer()
  }

  async fetchOffer () {
    const state = {}
    try {
      const r = (await httpCms.get(URLS.PLAY_PRODUCT_CHANNELS + '/' + this.props.route.params.id)).data
      state.channel = r.rows[0]
    } catch (e) {}
    state.fetching = false
    await this.promisedSetState(state)
  }

  renderHeader () {
    return (
      <Header
        default
        leftType='back'
        title={this.state.channel.title || __('Channel')}
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
            <View>
              <Image source={{ uri: this.state.channel.banner }} style={styles.rewardsImage} resizeMode='contain' />
            </View>
            <View style={styles.details}>
              <View style={theme.row}>
                <Text style={styles.giftText}>{this.state.channel.title}</Text>
              </View>
              <View style={theme.row}>
                <Text style={styles.detailsText}>{this.state.channel.description}</Text>
              </View>
            </View>
          </ScrollView>
        </Content>
        <View style={styles.footerBg} />
      </Container>
    )
  }
}

export default ChannelView
