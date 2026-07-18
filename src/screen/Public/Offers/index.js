import React from 'react'
import { ScrollView } from 'react-native'
import { Container, Content } from '@src/component/Basic'

import Header from '@src/component/Header'
import { __ } from '@src/utility/translation'
import { bind } from '@src/utility/component'
import theme from '@src/theme/styles'
import { DarkStatusBar } from '@src/component/StatusBar'
import Recommended from './Recommended'
import List from './List'
import { httpCms } from '@src/utility/http'
import { URLS } from '@src/config/url'
import Placeholder from './Placeholder'
import { store } from '@src/store'

class Offers extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      recommended: [],
      list: [],
      fetching: true
    }

    bind(this)

    this.fetchOffers = this.fetchOffers.bind(this)
    this.renderView = this.renderView.bind(this)
  }

  async componentDidMount () {
    await this.fetchOffers()
  }

  async fetchOffers () {
    const state = {}
    try {
      const brandId = store.getState().brand?.brandId
      const url = brandId ? URLS.BRAND_OFFERS(brandId) : URLS.OFFERS
      const r = (await httpCms.get(url)).data
      // BRAND_OFFERS returns an array directly; OFFERS returns { rows: [] }
      const rows = r.rows || (Array.isArray(r) ? r : (r ? [r] : []))
      state.recommended = []
      state.list = []
      rows.forEach(offer => {
        if (offer.flag === 'recommendedoffers') {
          state.recommended.push(offer)
        } else if (offer.flag === 'offersonlyforyou') {
          state.list.push(offer)
        }
      })
    } catch (e) {}
    state.fetching = false
    await this.promisedSetState(state)
  }

  renderView () {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Recommended list={this.state.recommended} />
        <List list={this.state.list} />
      </ScrollView>
    )
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('Offers & Promotions')}
          titleColor='light'
        />
        <Content style={theme.layout}>
          {this.state.fetching ? <Placeholder /> : this.renderView()}
        </Content>
      </Container>
    )
  }
}

export default Offers
