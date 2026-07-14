import React, { createRef } from 'react'
import { Container, Content } from '@src/component/Basic'

import Header from '@src/component/Header'
import { __ } from '@src/utility/translation'
import { bind } from '@src/utility/component'
import theme from '@src/theme/styles'
import { DarkStatusBar } from '@src/component/StatusBar'
import List from './List'
import { httpCms } from '@src/utility/http'
import { URLS } from '@src/config/url'
import Placeholder from './Placeholder'
import Player from './Player'

class Offers extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      list: [],
      fetching: true,
      selectedItem: null
    }

    bind(this)

    this.fetchList = this.fetchList.bind(this)
    this.openView = this.openView.bind(this)
    this.renderView = this.renderView.bind(this)

    this.refPlayer = createRef()
  }

  async componentDidMount () {
    await this.fetchList()
  }

  async fetchList () {
    const state = {}
    try {
      const r = (await httpCms.get(URLS.WALKTHROUGH)).data
      state.list = r.rows
    } catch (e) {}
    state.fetching = false
    await this.promisedSetState(state)
  }

  async openView (item) {
    await this.promisedSetState({
      selectedItem: item
    })
    this.refPlayer.current.open()
  }

  renderView () {
    return (
      <List
        list={this.state.list}
        openView={this.openView}
      />
    )
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('Walk Through')}
          titleColor='light'
        />
        <Content style={theme.layout}>
          {this.state.fetching ? <Placeholder /> : this.renderView()}
        </Content>
        <Player
          selectedItem={this.state.selectedItem}
          ref={this.refPlayer}
        />
      </Container>
    )
  }
}

export default Offers
