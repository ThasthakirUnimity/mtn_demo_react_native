import { uniqBy, cloneDeep } from 'lodash'
import React, { Component, View } from 'react'
import { Text } from 'react-native'

import { Container, Content } from '@src/component/Basic'
import { DarkStatusBar } from '@src/component/StatusBar'
import { URLS } from '@src/config/url'
import { applyComponentFeatures } from '@src/utility/core'
import { httpMovie } from '@src/utility/http'

import List from './List'
import Header from '@src/component/Header'
import { __ } from '@src/utility/translation'

class MovieList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fetchingListInitial: true,
      fetchingListMore: false,
      list: [],
      pagination: {
        page: 1
      }
    }

    applyComponentFeatures(this)

    this.fetchList = this.fetchList.bind(this)
    this.onEndReached = this.onEndReached.bind(this)
  }

  componentDidMount () {
    this.fetchList()
  }

  async fetchList () {
    try {
      const params = {}
      params.page = this.state.pagination.page
      const r = (await httpMovie.get(URLS.MOVIE_LIVE_TV)).data
      if (Array.isArray(r.results)) {
        const state = {
          list: uniqBy([...cloneDeep(this.state.list), ...r.results], 'id')
        }
        state.pagination = {
          ...this.state.pagination
        }
        if (r.length) {
          state.pagination.page = this.state.pagination.page + 1
          if (this.state.pagination.page > 5) {
            state.pagination.noMore = true
          }
        } else {
          state.pagination.noMore = true
        }
        await this.promisedSetState(state)
      }
    } catch (e) { console.log(e) }
    await this.promisedSetState({
      fetchingListInitial: false,
      fetchingListMore: false
    })
  }

  async onEndReached () {
    if (this.fetchingListInitial || this.fetchingListMore) {
      return
    }
    if (this.state.pagination.noMore) {
      return
    }
    await this.promisedSetState({
      fetchingListMore: true
    })
    this.fetchList()
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('Live TV')}
          titleColor='light'
        />
        <Content>
          <List
            fetchingInitial={this.state.fetchingListInitial}
            fetchingMore={this.state.fetchingListMore}
            list={this.state.list}
            onEndReached={this.onEndReached}
          />
        </Content>
      </Container>
    )
  }
}

export default MovieList
