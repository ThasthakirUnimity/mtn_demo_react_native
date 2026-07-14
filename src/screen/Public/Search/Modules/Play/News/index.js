import React from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { URLS } from '@src/config/url'
import { bind } from '@src/utility/component'
import http, { httpCms, httpNews } from '@src/utility/http'
import List from './List'
import { Context } from '../../../context'
import { refineNews } from '@src/helper/news'

class News extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fetchingInitial: true,
      fetchingMore: false,
      isPageMore: false,
      pageNumber: 1,
      news: []
    }

    bind(this)

    this.fetchNews = this.fetchNews.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }

  async componentDidMount () {
    this.context.setRefSearch(this)
    this.fetchNews()
  }

  async fetchNews () {
    try {
      const params = {}
      params.q = this.context?.searchKey || 'live'
      const r = (await httpNews.get(URLS.NEWS_SEARCH, { params })).data

      const state = {
      }
      if (Array.isArray(r.articles)) {
        const records = r.articles.map(refineNews)
        if (this.state.pageNumber === 1) {
          state.news = records
        } else {
          state.news = [...state.news, ...records]
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
      news: []
    })
    this.fetchNews()
  }

  renderContent () {
    return (
      <List
        list={this.state.news}
        fetchingInitial={this.state.fetchingInitial}
        fetchingMore={this.state.fetchingMore}
      />
    )
  }

  render () {
    return (
      <ScrollView>
        {this.renderContent()}
      </ScrollView>
    )
  }
}

News.contextType = Context

export default News
