import React from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Container, Content, Icon, Text } from '@src/component/Basic'
import Header from '@src/component/Header'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import { bind } from '@src/utility/component'


import { navigate } from '@src/navigation'
import theme from '@src/theme/styles'
import styles from './styles'
import { DarkStatusBar } from '@src/component/StatusBar'
import http from '@src/utility/http'
import { URLS } from '@src/config/url'

import Games from './Games'
import Categories from './Categories'
import { cloneDeep } from 'lodash'

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCategory: 'all',
      categories: [{
        id: 'all',
        name: 'All'
      }],
      fetchingCategories: true,
      games: [],
      fetchingGames: true
    }

    bind(this)

    this.fetchCategories = this.fetchCategories.bind(this)
    this.fetchGames = this.fetchGames.bind(this)
    this.onSelectCategory = this.onSelectCategory.bind(this)

    this.games = []
  }

  async componentDidMount() {
    await this.fetchCategories()
    await this.fetchGames()
  }

  async fetchCategories() {
    try {
      const r = (await http.get(URLS.GAME_CATEGORIES)).data
      await this.promisedSetState({
        categories: [...this.state.categories, ...r.records.filter(c => (c.category != "All")).map(c => ({
          id: c.id,
          name: c.category
        }))]
      })
    } catch (e) { }
    await this.promisedSetState({
      fetchingCategories: false,
    })
  }

  async fetchGames() {
    try {
      const r = (await http.get(URLS.GAMES)).data
      this.games = r.records
      await this.promisedSetState({
        games: cloneDeep(this.games)
      })
    } catch (e) { }
    await this.promisedSetState({
      fetchingGames: false
    })
  }

  async onSelectCategory(id) {
    if (this.state.fetchingGames) {
      return
    }
    const category = this.state.categories.find(r => r.id == id)
    if (category) {
      let games = []
      if (id == 'all') {
        games = cloneDeep(this.games)
      } else {
        games = cloneDeep(this.games.filter(r => r.category == category.name))
      }
      await this.promisedSetState({
        selectedCategory: id,
        games
      })
    }
  }

  render() {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('Games')}
          titleColor='light'
          rightContent={
            <View style={styles.rightCol}>
              <Button style={styles.rightBtn} onPress={() => navigate('PublicSearch', { tabId: 'product' })}>
                <Icon name='search1' type='AntDesign' style={styles.rightIcon} />
              </Button>
            </View>
          }
        />
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}>
            <View>
              <Categories
                selectedCategory={this.state.selectedCategory}
                list={this.state.categories}
                onSelect={this.onSelectCategory}
              />
              <Games
                list={this.state.games}
                fetching={this.state.fetchingGames}
              />
            </View>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Game)


