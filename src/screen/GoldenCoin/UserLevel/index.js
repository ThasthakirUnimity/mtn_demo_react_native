import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Container, Content, Text } from '@src/component/Basic'
import Header from '@src/component/Header'
import { Button } from '@src/component/Form'
import { DarkStatusBar } from '@src/component/StatusBar'
import { URLS } from '@src/config/url'
import { __ } from '@src/utility/translation'
import { bind } from '@src/utility/component'
import { httpCms } from '@src/utility/http'
import theme from '@src/theme/styles'
import Level from './Level'
import styles from './styles'

class LeaderboardLevel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      levelList: [],
      fetchingLevelList: true,
      levelPointsList: [],
      fetchingPointsLevelList: true
    }
    bind(this)

    this.fetchingLevelList = this.fetchingLevelList.bind(this)
    this.fetchingPointsList = this.fetchingPointsList.bind(this)
  }

  async componentDidMount () {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })
    await this.fetchingPointsList()
    await this.fetchingLevelList()
  }

  async fetchingLevelList () {
    await this.promisedSetState({
      fetchingLevelList: true
    })
    const r = (await httpCms.get(URLS.USER_LEADER_BOARD_LEVEL)).data
    await this.promisedSetState({
      levelList: r.rows,
      fetchingLevelList: false
    })
  }

  async fetchingPointsList () {
    await this.promisedSetState({
      fetchingPointsLevelList: true
    })
    const r = (await httpCms.get(URLS.USER_LEADER_BOARD_LEVEL_POINTS)).data
    // console.log(r.rows);
    await this.promisedSetState({
      levelPointsList: r.rows,
      fetchingPointsLevelList: false
    })
  }

  render () {
    let userName = 'Guest'
    let img = require('@asset/icons/avatar-dark.png')
    if (this.props.session.isLoggedIn) {
      if (this.props.session.numbers[this.props.session.numberIndex]) {
        const selectedNumber = this.props.session.numbers[this.props.session.numberIndex]
        userName = selectedNumber.name
      }
      if (this.props.session.user.profileImage) {
        img = { uri: this.props.session.user.profileImage }
      }
    }
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('User Level')}
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.userHeader}>
              <Image source={img} style={styles.userAvatar} resizeMode='cover' />
              <View style={styles.userCol}>
                <View style={styles.userRow}>
                  <Text style={styles.userName}>{userName}</Text>
                </View>
                <View style={styles.userRow}>
                  <Text style={styles.userPlan}>{__('Gold Member')}</Text>
                </View>
              </View>
            </View>

            <View style={styles.coin}>
              {this.state.levelPointsList.map((prop) =>
                <Button key={prop.id} style={styles.coinBtn}>
                  <View style={styles.coinBg}>
                    <Image source={{ uri: prop.field_icons }} style={styles.coinImg} />
                  </View>
                  <View style={styles.coinRow}>
                    <Text style={styles.coinName}>{prop.title}</Text>
                  </View>
                  <View style={styles.coinRow}>
                    <Text style={styles.coinPts}>{prop.field_sub_title}</Text>
                  </View>
                </Button>
              )}
            </View>

            <Level
              language={this.state.language}
              list={this.state.levelList}
              fetching={this.state.fetchingLevelList}
            />
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(LeaderboardLevel)
