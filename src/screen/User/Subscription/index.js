import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'

import { Container, Content, Icon, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import Header from '@src/component/Header'
import SectionProvider from '@src/component/Section/Provider'
import { DarkStatusBar } from '@src/component/StatusBar'
import { URLS } from '@src/config/url'
import theme from '@src/theme/styles'
import { bind } from '@src/utility/component'
import http from '@src/utility/http'
import { __ } from '@src/utility/translation'
import styles from './styles'
import List from './List'
import { useNumberBaseKey } from '@src/hooks/user'

class SubscriptionUI extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fetching: true,

      upcomingList: [],
      expiredList: [],
      allList: [],

      openedItem: null
    }
    bind(this)

    this.fetchSubscriptions = this.fetchSubscriptions.bind(this)
    this.toggleView = this.toggleView.bind(this)
    this.renderProfile = this.renderProfile.bind(this)
  }

  async componentDidMount () {
    await this.fetchSubscriptions()
  }

  async fetchSubscriptions () {
    try {
      const r = (await http.post(URLS.USER_SUBSCRIPTIONS)).data
      await this.promisedSetState({
        upcomingList: r.response?.upcomingRenewal || [],
        expiredList: r.response?.expiredSubscription || [],
        allList: r.response?.allYourSubscription || []
      })
    } catch (e) { }
    await this.promisedSetState({
      fetching: false
    })
  }

  toggleView (id, type) {
    if (this.state.openedItem == id) {
      this.setState({ openedItem: null })
    } else {
      this.setState({ openedItem: id })
    }
  }

  renderProfile () {
    let userName = 'Guest'
    let phone = ''
    let img = require('@asset/icons/avatar-dark.png')
    if (this.props.session.numbers[this.props.session.numberIndex]) {
      const selectedNumber =
        this.props.session.numbers[this.props.session.numberIndex]
      userName = selectedNumber.name
      phone = selectedNumber.number
      if (selectedNumber.profile_image) {
        img = { uri: selectedNumber.profile_image }
      }
    }

    return (
      <View style={styles.profile}>
        <Image source={img} resizeMode='contain' style={styles.profileImg} />
        <View style={styles.profileCol}>
          <View style={styles.profileRow}>
            <Text style={styles.profileName}>
              {userName}
            </Text>
            <Text style={styles.profileNo}>
              {phone}
            </Text>
          </View>
          <Button style={styles.profileBtn} onPress={() => SectionProvider.showUserNumberSelection()}>
            <Icon
              name='arrow-drop-down'
              type='MaterialIcons'
              size='text24'
              color='dark'
              style={styles.profileBtnIcon}
            />
          </Button>
        </View>
      </View>
    )
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('My Subscriptions')}
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView style={styles.formContainer}>
            {this.renderProfile()}
            <List
              type='upcoming'
              title={__('Upcoming Renewal')}
              list={this.state.upcomingList}
              fetching={this.state.fetching}
              openedItem={this.state.openedItem}
              toggleView={this.toggleView}
            />
            <List
              type='expired'
              title={__('Expired Subscriptions')}
              list={this.state.expiredList}
              fetching={this.state.fetching}
              openedItem={this.state.openedItem}
              toggleView={this.toggleView}
            />
            <List
              type='all'
              title={__('All Your Subscriptions')}
              list={this.state.allList}
              fetching={this.state.fetching}
              openedItem={this.state.openedItem}
              toggleView={this.toggleView}
            />
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

const Subscription = (props) => {
  const key = useNumberBaseKey(props)

  return <SubscriptionUI key={key} {...props} />
}

export default connect(({ session }) => ({ session }))(Subscription)
