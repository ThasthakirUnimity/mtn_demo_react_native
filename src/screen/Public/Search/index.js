import { Container, Content, Icon } from '@src/component/Basic'
import RefreshControl from '@src/component/Basic/RefreshControl'
import { Button, TextInput } from '@src/component/Form'
import Header from '@src/component/Header'
import { DarkStatusBar } from '@src/component/StatusBar'
import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import Home from './Home'
import Layout from './Layout'
import styles from './styles'
import theme from '@src/theme/styles'
import ProductModule from './Modules/Product'
import HelpModule from './Modules/Help'
import TelcoModule from './Modules/Telco'
import PlayModule from './Modules/Play'
import ContextProvider from './context'
import SearchBox from './SearchBox'
import { connect } from 'react-redux'

const searchTypeIds = {
  TELCO: 'telco',
  PRODUCT: 'product',
  PLAY: 'play',
  HELP: 'help'
}

const searchTypes = [
  {
    id: searchTypeIds.TELCO,
    title: 'Telco',
    titleLong: 'Telco Products',
    component: TelcoModule
  },
  {
    id: searchTypeIds.PRODUCT,
    title: 'Products',
    titleLong: 'Products',
    component: ProductModule
  },
  {
    id: searchTypeIds.PLAY,
    title: 'Play Services',
    titleLong: 'Play Services',
    component: PlayModule
  },
  {
    id: searchTypeIds.HELP,
    title: 'Help & Support',
    titleLong: 'Help & Support',
    component: HelpModule
  }
]

class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tabSelected: null
    }

    this.selectTab = this.selectTab.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
  }

  selectTab (tabSelected) {
    this.setState({
      tabSelected
    })
  }

  onChangeSearchKey () {}
  onSearch () {}

  renderHeader () {
    let title = null
    let middleContent = null
    let rightHide = false
    if (this.state.tabSelected) {
      middleContent = (<SearchBox />)
      rightHide = true
    } else {
      title = 'Search'
    }
    return (
      <Header
        primary
        leftType='back'
        title={title}
        titleColor='light'
        middleContent={middleContent}
        rightHide={rightHide}
      />
    )
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        {this.renderHeader()}
        <Content style={theme.layout}>
          {
          this.state.tabSelected
            ? <Layout
                tabSelected={this.state.tabSelected}
                session={this.props.session}
              />
            : <Home
                searchTypes={searchTypes}
                select={this.selectTab}
              />
          }
        </Content>
      </Container>
    )
  }
}

const SearchUI = ({ session }) => {
  return (
    <ContextProvider>
      <Search session={session} />
    </ContextProvider>
  )
}

export default connect(({ session }) => ({ session }))(SearchUI)
