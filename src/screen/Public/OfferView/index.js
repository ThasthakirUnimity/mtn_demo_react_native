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
import dateUtil from '@src/utility/date'

class OfferView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      offer: {},
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
      const r = (await httpCms.get(URLS.OFFERS + '/' + this.props.route.params.id)).data
      state.offer = r.rows[0]
    } catch (e) {}
    state.fetching = false
    await this.promisedSetState(state)
  }

  renderHeader () {
    let title = ''
    switch (this.state.offer.flag) {
      case 'recommendedoffers': title = 'Recommended offer'; break
      case 'offersonlyforyou': title = 'Offer only for you'; break
    }
    return (
      <Header
        default
        leftType='back'
        title={__(title)}
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
              <Image source={{ uri: this.state.offer.offer_screen_image }} style={styles.offerImg} resizeMode='cover' />
              <View style={styles.offerHeader}>
                <View style={styles.offerRow}>
                  <Text style={styles.offerDate}>{__('Valid till')} {dateUtil.format(this.state.offer.expiry)}</Text>
                </View>
                <View style={styles.offerRow}>
                  <Text style={styles.offerTitle}>{this.state.offer.title}</Text>
                </View>
                <View style={styles.offerRow}>
                  <Text style={styles.offerDesc}>{this.state.offer.summary}</Text>
                </View>
              </View>

              <View style={styles.offerContent}>
                <View style={styles.offerRow}>
                  <Text style={styles.offerDesc}>{this.state.offer.description}</Text>
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

export default OfferView
