import React from 'react'
import { ScrollView } from 'react-native'
import { Container, Content } from '@src/component/Basic'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Header from '@src/component/Header'
import { __ } from '@src/utility/translation'
import { Button, Picker, TextInput } from '@src/component/Form'
import theme from '@src/theme/styles'
import styles from './styles'
import { DarkStatusBar } from '@src/component/StatusBar'
import { bind } from '@src/utility/component'
import request from '@src/utility/request'

import Weekly from './Weekly'
import weeklyList from './data/weekly'
import http from '@src/utility/http'
import { URLS } from '@src/config/url'

class DataBundle extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      weekly: [],
      fetchingWeeklyList: true,
    }

    bind(this)

    this.fetchCategories = this.fetchCategories.bind(this)
    this.fetchWeeklyList = this.fetchWeeklyList.bind(this)
  }

  async componentDidMount() {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })
    await this.fetchCategories()
  }

  async fetchCategories() {
    try {
      const r = (await http.get(URLS.BUNDLE_CATEGORY)).data
      await this.promisedSetState({
        categories: [...this.state.categories, ...r.map(c => ({
          id: c.name,
          name: c.name
        }))]
      })
    } catch (e) { }
    await this.promisedSetState({
      fetchingCategories: false,
    })
  }

  async fetchWeeklyList() {
    await this.promisedSetState({
      fetchWeeklyList: true
    })
    const list = await request(weeklyList)
    await this.promisedSetState({
      weeklyList: list,
      fetchingWeeklyList: false
    })
  }

  render() {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('Data Bundles')}
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView style={styles.formContainer}>
            <Weekly
              language={this.state.language}
              list={this.state.weeklyList}
              fetching={this.state.fetchingWeeklyList}
            />
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(DataBundle)
