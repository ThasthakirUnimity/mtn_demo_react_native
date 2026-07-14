import React from 'react'
import { ScrollView, View } from 'react-native'

import { Container, Content } from '@src/component/Basic'
import Header from '@src/component/Header'
import { __ } from '@src/utility/translation'
import theme from '@src/theme/styles'
import styles from './styles'
import { bind } from '@src/utility/component'
import { DarkStatusBar } from '@src/component/StatusBar'
import { httpCms } from '@src/utility/http'
import { URLS } from '@src/config/url'
import List from './List'

class OnlineShopping extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      list: [],
      fetching: true
    }

    bind(this)

    this.fetchOffers = this.fetchOffers.bind(this)
  }

  async componentDidMount () {
    await this.fetchOffers()
  }

  async fetchOffers () {
    try {
      const r = (await httpCms.get(URLS.LOYALTY_BASED_OFFERS + 'onlineshopping')).data
      await this.promisedSetState({
        list: r.rows
      })
    } catch (e) {}
    await this.promisedSetState({
      fetching: false
    })
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('Online Shopping')}
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <List
              list={this.state.list}
              fetching={this.state.fetching}
            />
          </ScrollView>
        </Content>
        <View style={styles.footerBg} />
      </Container>
    )
  }
}

export default OnlineShopping
