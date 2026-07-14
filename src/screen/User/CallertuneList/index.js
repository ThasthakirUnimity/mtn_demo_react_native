import React from 'react'
import { View } from 'react-native'
import { Container, Content, Icon } from '@src/component/Basic'

import { Button } from '@src/component/Form'
import { SecondaryStatusBar } from '@src/component/StatusBar'
import { URLS } from '@src/config/url'
import theme from '@src/theme/styles'
import { bind } from '@src/utility/component'
import http from '@src/utility/http'
import styles from './styles'
import List from './List'
import { goBack } from '@src/navigation'

class CallertuneList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      callerTunes: [],
      fetchingCallerTunes: true
    }

    bind(this)

    this.fetchCallerTunes = this.fetchCallerTunes.bind(this)
  }

  async componentDidMount () {
    await this.fetchCallerTunes()
  }

  async fetchCallerTunes () {
    try {
      const params = {
        size: 1,
        offset: 1
      }
      const r = (await http.get(URLS.CALLER_TUNES, { params })).data
      if (Array.isArray(r.responseCode)) {
        await this.promisedSetState({
          callerTunes: r.responseCode
        })
      }
    } catch (e) {}
    await this.promisedSetState({
      fetchingCallerTunes: false
    })
  }

  render () {
    return (
      <Container>
        <SecondaryStatusBar />
        <View style={styles.header}>
          <Button style={styles.headerBtn} onPress={goBack}>
            <Icon name='chevron-left' type='Entypo' style={styles.headerBtnIcon} />
          </Button>
        </View>
        <Content style={theme.layout}>
          <View style={styles.playList}>
            <List
              list={this.state.callerTunes}
              fetching={this.state.fetchingCallerTunes}
            />
          </View>
        </Content>
      </Container>
    )
  }
}

export default CallertuneList
