import React from 'react'
import { TouchableOpacity, TextInput, Image, View, ScrollView } from 'react-native'
import { Container, Content, Text, Icon } from '@src/component/Basic'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { connect } from 'react-redux'

import { DarkStatusBar } from '@src/component/StatusBar'
import styles from './styles'
import theme from '@src/theme/styles'
import { navigate } from '@src/navigation'
import { setLocale, __ } from '@src/utility/translation'

import Header from '@src/component/Header'
import { bind } from '@src/utility/component'
import request from '@src/utility/request'

import Badge from './Badge'
import badgeList from './data/badge'


class Badges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'en',

      isDisabled: false,
      isOpen: false,

      badgeList: [],
      fetchingBadgeList: true,

    }
    bind(this)

    this.fetchingBadgeList = this.fetchingBadgeList.bind(this)

  }

  async componentDidMount() {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })

    await this.fetchingBadgeList()
  }

  async fetchingBadgeList() {
    await this.promisedSetState({
      fetchingBadgeList: true
    })
    const list = await request(badgeList)
    await this.promisedSetState({
      badgeList: list,
      fetchingBadgeList: false
    })
  }

  render() {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={'Badges'}
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView>
            <View>
              <Badge
                language={this.state.language}
                list={this.state.badgeList}
                fetching={this.state.fetchingBadgeList}
              />
            </View>

          </ScrollView>
        </Content>
      </Container>
    )
  }
}
export default connect(({ session }) => ({ session }))(Badges)
