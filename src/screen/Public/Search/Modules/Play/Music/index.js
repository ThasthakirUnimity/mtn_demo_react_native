import React from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { URLS } from '@src/config/url'
import { bind } from '@src/utility/component'
import http, { httpCms } from '@src/utility/http'
import List from './List'
import { Context } from '../../../context'

class Music extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fetchingInitial: true,
      fetchingMore: false,
      isPageMore: false,
      pageNumber: 1,
      musics: []
    }

    bind(this)

    this.fetchMusics = this.fetchMusics.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }

  async componentDidMount () {
    this.context.setRefSearch(this)
    this.fetchMusics()
  }

  async fetchMusics () {
    try {
      let url = URLS.MUSIC_SEARCH
      if (this.context?.searchKey) {
        url = url + '/' + this.context.searchKey
      }
      const r = (await httpCms.get(url)).data

      const state = {
      }
      if (Array.isArray(r)) {
        const records = r
        if (this.state.pageNumber === 1) {
          state.musics = records
        } else {
          state.musics = [...state.musics, ...records]
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
      musics: []
    })
    this.fetchMusics()
  }

  renderContent () {
    return (
      <List
        list={this.state.musics}
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

Music.contextType = Context

export default Music
