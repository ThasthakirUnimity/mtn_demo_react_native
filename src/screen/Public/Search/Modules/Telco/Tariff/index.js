import React from 'react'
import { ScrollView, View } from 'react-native'

import { URLS } from '@src/config/url'
import { bind } from '@src/utility/component'
import http from '@src/utility/http'
import List from './List'
import { Context } from '../../../context'

class Tariff extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fetchingInitial: true,
      fetchingMore: false,
      isPageMore: false,
      pageNumber: 1,
      plans: []
    }

    bind(this)

    this.fetchPlans = this.fetchPlans.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }

  async componentDidMount () {
    this.context.setRefSearch(this)
    this.fetchPlans()
  }

  async fetchPlans () {
    try {
      const params = {}
      if (this.context?.searchKey) {
        params.plan = this.context.searchKey
      } else {
        params.plan = ''
      }
      const r = (await http.get(URLS.TARIFF_SEARCH, { params })).data

      const state = {
      }
      if (Array.isArray(r?.response?.rows)) {
        const records = r.response.rows
        if (this.state.pageNumber === 1) {
          state.plans = records
        } else {
          state.plans = [...state.plans, ...records]
        }
      }
      await this.promisedSetState(state)
    } catch (e) {}
    await this.promisedSetState({
      fetchingInitial: false,
      fetchingMore: false
    })
  }

  async onSearch () {
    await this.promisedSetState({
      fetchingInitial: true,
      pageNumber: 1,
      plans: []
    })
    this.fetchPlans()
  }

  renderContent () {
    return (
      <List
        list={this.state.plans}
        fetchingInitial={this.state.fetchingInitial}
        fetchingMore={this.state.fetchingMore}
      />
    )
  }

  render () {
    return (
      <View>
        <ScrollView>
          {this.renderContent()}
        </ScrollView>
      </View>
    )
  }
}

Tariff.contextType = Context

export default Tariff
