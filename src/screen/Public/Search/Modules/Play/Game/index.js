import React from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { URLS } from '@src/config/url'
import { bind } from '@src/utility/component'
import http, { httpCms } from '@src/utility/http'
import List from './List'
import { Context } from '../../../context'

class Game extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fetchingInitial: true,
      fetchingMore: false,
      isPageMore: false,
      pageNumber: 1,
      games: []
    }

    bind(this)

    this.fetchGames = this.fetchGames.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }

  async componentDidMount () {
    this.context.setRefSearch(this)
    this.fetchGames()
  }

  async fetchGames () {
    try {
      const params = { category: '' }
      if (this.context?.searchKey) {
        params.category = this.context.searchKey
      }
      const r = (await http.get(URLS.GAME_SEARCH, { params })).data

      const state = {
      }
      if (Array.isArray(r.records)) {
        const records = r.records
        if (this.state.pageNumber === 1) {
          state.games = records
        } else {
          state.games = [...state.games, ...records]
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
      games: []
    })
    this.fetchGames()
  }

  renderContent () {
    return (
      <List
        list={this.state.games}
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

Game.contextType = Context

export default Game
