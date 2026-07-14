import React from 'react'

import { Container, Content } from '@src/component/Basic'
import Header from '@src/component/Header'
import { bind } from '@src/utility/component'

import theme from '@src/theme/styles'
import { DarkStatusBar } from '@src/component/StatusBar'
import { httpCms } from '@src/utility/http'
import { URLS } from '@src/config/url'
import List from './List'

class ChannelList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      channels: [],
      fetchingChannels: true
    }

    bind(this)

    this.fetchChannels = this.fetchChannels.bind(this)
  }

  async componentDidMount () {
    await this.fetchChannels()
  }

  async fetchChannels () {
    try {
      const r = (await httpCms.get(URLS.PRODUCT_CHANNELS)).data

      await this.promisedSetState({
        channels: r.rows,
        fetchingChannels: false
      })
    } catch (e) { }
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title='Channels'
          titleColor='light'
        />
        <Content style={theme.layout}>
          <List
            list={this.state.channels}
            fetching={this.state.fetchingChannels}
          />
        </Content>
      </Container>
    )
  }
}

export default ChannelList
