import React from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { URLS } from '@src/config/url'
import { bind } from '@src/utility/component'
import http, { httpMovie } from '@src/utility/http'
import List from './List'
import { Context } from '../../../context'

class Movie extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fetchingInitial: true,
      fetchingMore: false,
      isPageMore: false,
      pageNumber: 1,
      movies: []
    }

    bind(this)

    this.fetchMovies = this.fetchMovies.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }

  async componentDidMount () {
    this.context.setRefSearch(this)
    this.fetchMovies()
  }

  async fetchMovies () {
    try {
      let url = URLS.MOVIE_LIST
      const params = {}
      if (this.context?.searchKey) {
        url = URLS.MOVIE_SEARCH
        params.query = this.context.searchKey
      }
      const r = (await httpMovie.get(url, { params })).data

      const state = {
      }
      if (Array.isArray(r.results)) {
        const records = r.results
        if (this.state.pageNumber === 1) {
          state.movies = records
        } else {
          state.movies = [...state.movies, ...records]
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
      movies: []
    })
    this.fetchMovies()
  }

  renderContent () {
    return (
      <List
        list={this.state.movies}
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

Movie.contextType = Context

export default Movie
