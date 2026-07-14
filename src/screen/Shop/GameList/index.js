import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import { compile } from 'path-to-regexp'

import { Container, Content, Icon } from '@src/component/Basic'
import Header from '@src/component/Header'
import { Button } from '@src/component/Form'
import { bind } from '@src/utility/component'
import { navigate } from '@src/navigation'
import theme from '@src/theme/styles'
import { DarkStatusBar } from '@src/component/StatusBar'
import { httpCms } from '@src/utility/http'
import { URLS } from '@src/config/url'
import Categories from './Categories'
import { logClickEvent } from '@src/utility/analytics'
import List from './List'
import styles from './styles'
import { __ } from '@src/utility/translation'

class Game extends React.Component {
  constructor (props) {
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
  }

  async componentDidMount () {
    await this.fetchCategories()
    await this.fetchGames()
  }

  async fetchCategories () {
    try {
      const r = (await httpCms.get(URLS.PRODUCT_GAME_CATEGORIES)).data
      await this.promisedSetState({
        categories: [...this.state.categories, ...r.map(c => ({
          id: c.name,
          name: c.name
        }))]
      })
    } catch (e) { }
    await this.promisedSetState({
      fetchingCategories: false
    })
  }

  async fetchGames () {
    try {
      let url = URLS.PRODUCT_GAMES
      if (this.state.selectedCategory && this.state.selectedCategory != 'all') {
        url = compile(URLS.PRODUCT_GAMES_BY_CATEGORY)({ category: this.state.selectedCategory })
      }
      const r = (await httpCms.get(url)).data

      await this.promisedSetState({
        games: r.rows,
        fetchingGames: false
      })
    } catch (e) { }
  }

  async onSelectCategory (id) {
    await this.promisedSetState({
      selectedCategory: id,
      games: [],
      fetchingGames: true
    })
    await this.fetchGames()
  }

  render () {
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
              <Button
                style={styles.rightBtn}
                onPress={() => {
                  logClickEvent('ShopGameListSearch')
                  navigate('PublicSearch', { tabId: 'product' })
                }}
              >
                <Icon name='search1' type='AntDesign' style={styles.rightIcon} />
              </Button>
              <Button style={styles.rightBtn}>
                <Image source={require('@asset/icons/filters.png')} style={styles.filterImg} resizeMode='contain' />
              </Button>
            </View>
          }
        />
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View>
              <Categories
                selectedCategory={this.state.selectedCategory}
                list={this.state.categories}
                onSelect={this.onSelectCategory}
              />
              <View>
                <List
                  list={this.state.games}
                  fetching={this.state.fetchingGames}
                />
              </View>
            </View>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Game)
