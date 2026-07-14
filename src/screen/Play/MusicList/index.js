import { uniqBy, cloneDeep } from 'lodash'
import React, { Component, View } from 'react'
import { Text } from 'react-native'

import { Container, Content } from '@src/component/Basic'
import { DarkStatusBar } from '@src/component/StatusBar'
import { URLS } from '@src/config/url'
import { applyComponentFeatures } from '@src/utility/core'
import { httpCms } from '@src/utility/http'

import List from './List'
import Header from '@src/component/Header'
import { __ } from '@src/utility/translation'

class MusicList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fetchingListInitial: true,
      fetchingListMore: false,
      list: [],
      pagination: {
        page: 1
      },
      title: 'Play Services'
    }
    if (props.route.params.type == 'music') {
      this.state.title = 'Music'
    }

    applyComponentFeatures(this)

    this.fetchList = this.fetchList.bind(this)
  }

  componentDidMount () {
    this.fetchList()
  }

  async fetchList () {
    try {
      const params = {}
      const r = (await httpCms.get(URLS.MUSIC_LIST, { params })).data

      const state = {
      }
      if (Array.isArray(r)) {
        const records = r
        if (this.state.pageNumber === 1) {
          state.list = records
        } else {
          state.list = [...this.state.list, ...records]
        }
      }
      await this.promisedSetState(state)
    } catch (e) {}
    await this.promisedSetState({
      fetchingListInitial: false,
      fetchingListMore: false
    })
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__(this.state.title)}
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

export default MusicList
