import React from 'react'
import { RefreshControl, ScrollView, Text, View, Keyboard } from 'react-native'
import { connect } from 'react-redux'

import { Container, Content, Icon } from '@src/component/Basic'
import { Button, TextInput } from '@src/component/Form'
import Header from '@src/component/Header'
import { DarkStatusBar } from '@src/component/StatusBar'
import { URLS } from '@src/config/url'
import { bind } from '@src/utility/component'
import http, { httpCms } from '@src/utility/http'

import theme from '@src/theme/styles'
import styles from './styles'
import Telco from './Telco'
import Product from './Product'
import Play from './Play'
import Help from './Help'

const searchTypeIds = {
  ALL: 'all',
  TELCO: 'telco',
  PRODUCT: 'product',
  PLAY: 'play',
  HELP: 'help'
}

const searchType = [
  {
    id: searchTypeIds.ALL,
    title: 'All'
  },
  {
    id: searchTypeIds.TELCO,
    title: 'Telco',
    fetcher: 'fetchTelco',
    component: Telco
  },
  {
    id: searchTypeIds.PRODUCT,
    title: 'Products',
    fetcher: 'fetchProduct',
    component: Product
  },
  {
    id: searchTypeIds.PLAY,
    title: 'Play Services',
    fetcher: 'fetchPlay',
    component: Play
  },
  {
    id: searchTypeIds.HELP,
    title: 'Help & Support',
    fetcher: 'fetchHelp',
    component: Help
  }
]

const functionNames = [
  'changeTab', 'changeTabByIndex',
  'fetchInitial', 'fetch', 'fetchTelco', 'fetchProduct', 'fetchPlay', 'fetchHelp',
  'onChangeSearchKey', 'onSearch', 'onEndReached', 'onRefresh',
  'renderTabs', 'renderContentSingle', 'renderContent'
]

const resetableStates = {
  defaultPageLimit: 5,
  currentTabIndex: 0,
  isSearch: false,
  fetchingInitial: false,
  fetchingMore: false,
  isPageMore: false,
  pageNumber: 1,
  data: {},
  noRecord: false
}

searchType.forEach(item => {
  resetableStates.data[item.id] = {
    lists: [],
    total: 0
  }
})

class Search extends React.Component {
  constructor (props) {
    super(props)

    this.state = { ...resetableStates }

    if (this.props.route.params.tabId) {
      const currentTabIndex = searchType.findIndex(r => r.id == this.props.route.params.tabId)
      if (currentTabIndex > -1) {
        this.state.currentTabIndex = currentTabIndex
      }
    }

    bind(this)

    this.componentDidFocus = this.componentDidFocus.bind(this)
    this.componentDidBlur = this.componentDidBlur.bind(this)
    this.runAfterInteractions = this.runAfterInteractions.bind(this)

    functionNames.forEach(name => (this[name] = this[name].bind(this)))
  }

  async componentDidMount () {
    this.mounted = true

    this.navigationFocus = this.props.navigation.addListener('focus', this.componentDidFocus)
    this.navigationBlur = this.props.navigation.addListener('blur', this.componentDidBlur)
    console.log('componentDidMount')
  }

  componentWillUnmount () {
    this.mounted = false
    this.navigationFocus && this.navigationFocus()
    this.navigationBlur && this.navigationBlur()

    this.componentDidBlur()
  }

  async componentDidFocus () {
    console.log('componentDidFocus')
    this.runAfterInteractions()
    this.focussed = true
  }

  componentDidBlur () {
    this.focussed = false
  }

  runAfterInteractions () {
    console.log('runAfterInteractions')
    this.fetchInitial()
  }

  async changeTab (currentTabIndex) {
    await this.promisedSetState({
      ...resetableStates,
      currentTabIndex
    })

    await this.fetchInitial()
  }

  async changeTabByIndex (id) {
    const index = searchType.findIndex(r => r.id == id)
    if (searchType[index]) {
      await this.changeTab(index)
    }
  }

  async fetchInitial () {
    const state = {
      fetchingInitial: true,
      pageNumber: 1,
      data: { ...this.state.data }
    }
    searchType.forEach(item => {
      state.data[item.id] = {
        lists: [],
        total: 0
      }
    })
    await this.promisedSetState(state)
    await this.fetch()
  }

  async fetch () {
    const tab = searchType[this.state.currentTabIndex]
    const promises = []
    searchType.forEach(item => {
      if (item.id == 'all') {
        return
      }
      if (tab.id == 'all' || tab.id == item.id) {
        promises.push(this[item.fetcher])
      }
    })
    await Promise.all(promises.map(async r => (await r())))
    // await asyncForEach(promises, async (cb) => (await cb()))
    await this.promisedSetState({
      fetchingInitial: false,
      fetchingMore: false
    })
  }

  async fetchTelco () {
  }

  async fetchProduct () {
    try {
      const tab = searchType[this.state.currentTabIndex]
      const tabId = 'product'
      const params = {}
      if (this.state.searchKey) {
        params.key = this.state.searchKey
      }
      // params.page = this.state.pageNumber
      const r = (await httpCms.get(URLS.PRODUCTS_SEARCH, { params })).data

      const state = {
        data: { ...this.state.data },
        isPageMore: false
      }
      state.data[tabId] = { ...this.state.data[tabId] }
      if (r.rows && r.rows.length > 0) {
        const records = r.rows
        if (this.state.pageNumber === 1) {
          state.data[tabId].lists = records
        } else {
          state.data[tabId].lists = [...this.state.data[tabId].lists, ...records]
        }
        if (tab.id === tabId) {
          state.isPageMore = true
        }
      }

      await this.promisedSetState(state)
    } catch (e) {}
  }

  async fetchPlay () {
  }

  async fetchHelp () {
    try {
      const tab = searchType[this.state.currentTabIndex]
      const tabId = 'help'
      const params = {}
      if (this.state.searchKey) {
        params.key = this.state.searchKey
      }
      // params.page = this.state.pageNumber
      const r = (await httpCms.get(URLS.CONTENT_SEARCH, { params })).data

      const state = {
        data: { ...this.state.data },
        isPageMore: false
      }
      state.data[tabId] = { ...this.state.data[tabId] }
      if (Array.isArray(r.rows) && r.rows.length > 0) {
        if (this.state.pageNumber === 1) {
          state.data[tabId].lists = r.rows
        } else {
          state.data[tabId].lists = [...this.state.data[tabId].lists, ...r.rows]
        }
        if (tab.id === tabId) {
          state.isPageMore = true
        }
      }

      await this.promisedSetState(state)
    } catch (e) {
      console.log(e)
    }
  }

  onChangeSearchKey (v) {
    this.setState({ isSearch: true, searchKey: v })
  }

  onSearch () {
    Keyboard.dismiss()
    this.fetchInitial()
  }

  async onEndReached (e) {
    if (this.state.isPageMore) {
      const { layoutMeasurement, contentOffset, contentSize } = e.nativeEvent

      if (layoutMeasurement.height + contentOffset.y >= contentSize.height - 1) {
        if (!this.state.fetchingInitial && !this.state.fetchingMore) {
          await this.promisedSetState({
            fetchingMore: true,
            pageNumber: this.state.pageNumber + 1
          })
          await this.fetch()
        }
      }
    }
  }

  async onRefresh () {
    if (this.state.fetchingInitial || this.state.fetchingMore) {
      return
    }
    this.fetchInitial()
  }

  renderContentSingle (tab) {
    const data = this.state.data[tab.id]
    const C = tab.component
    return (
      <C
        tab={tab}
        isSearch={this.state.isSearch}
        fetchingInitial={this.state.fetchingInitial}
        fetchingMore={this.state.fetchingMore}
        list={data.lists}
        defaultPageLimit={this.state.defaultPageLimit}
        searchTypeIds={searchTypeIds}
        changeTabByIndex={this.changeTabByIndex}
      />
    )
  }

  renderEmptyRecord () {
    return <View style={styles.empty}><Text style={styles.emptyText}>Sorry, we couldn't find any results!</Text></View>
  }

  renderContent () {
    if (this.state.noRecord) {
      return this.renderEmptyRecord()
    }

    const tab = searchType[this.state.currentTabIndex]
    if (tab.id !== searchTypeIds.ALL) {
      return this.renderContentSingle(tab)
    }

    return (
      <View>
        {searchType.map(item => {
          if (item.id == searchTypeIds.ALL) {
            return null
          }
          return this.renderContentSingle(item)
        })}
      </View>
    )
  }

  renderTabs () {
    return searchType.map((tab, index) => {
      const selected = this.state.currentTabIndex === index
      return (
        <Button
          key={tab.id}
          style={selected ? styles.tabActive : styles.tabInactive}
          onPress={() => this.changeTab(index)}
        >
          <Text style={selected ? styles.tabActiveText : styles.tabInactiveText}>{tab.title}</Text>
        </Button>
      )
    })
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          primary
          leftType='back'
          middleContent={
            <View style={styles.search}>
              <TextInput
                style={styles.searchInput}
                onChangeText={this.onChangeSearchKey}
                onSubmitEditing={this.onSearch}
                value={this.state.searchKey}
              />
              <Button style={styles.searchBtn} onPress={this.onSearch}>
                <Icon name='search1' type='AntDesign' style={styles.searchIcon} />
              </Button>
            </View>
          }
          rightHide
        />
        <Content style={theme.layout}>
          <ScrollView
            onMomentumScrollEnd={this.onEndReached}
            refreshControl={
              <RefreshControl
                refreshing={this.state.fetchingInitial}
                onRefresh={this.onRefresh}
              />
            }
          >
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.tabSelect}>
                {this.renderTabs()}
              </View>
            </ScrollView>
            <View>
              {this.renderContent()}
            </View>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Search)
