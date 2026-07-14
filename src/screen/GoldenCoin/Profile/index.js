import React from 'react'
import { TouchableOpacity, TextInput, Image, View, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { Container, Content, Text, Icon } from '@src/component/Basic'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { connect } from 'react-redux'

import { DarkStatusBar } from '@src/component/StatusBar'
import styles from './styles'
import theme from '@src/theme/styles'
import { navigate } from '@src/navigation'
import { setLocale, __ } from '@src/utility/translation'
import { bind } from '@src/utility/component'
import { URLS } from '@src/config/url'
import { GAME_API_URL, GAMIFICATION_PRODUCT_ID } from '@src/config/env'

import { httpGame } from '@src/utility/http'
import Header from '@src/component/Header'

class ProfileDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      profileImage: require('@asset/icons/avatar-dark.png'),
      profileBadge: {},
      userName: 'Guest',
      mobileNo: '',
      user: {},
      profileData: {},
      fetchProfileData: true,
      badgeList: [],
      fetchingBadgeList: false
    }

    bind(this)

    this.fetchProfileData = this.fetchProfileData.bind(this)
  }

  async componentDidMount () {
    if (this.props.session.isLoggedIn) {
      if (this.props.session.numbers[this.props.session.numberIndex]) {
        const selectedNumber = this.props.session.numbers[this.props.session.numberIndex]
        await this.promisedSetState({
          userName: selectedNumber.name ? selectedNumber.name : this.state.userName,
          mobileNo: selectedNumber.number,
          user: this.props.session.user
        })
        if (this.props.session.numberIndex == 0) {
          await this.promisedSetState({
            userName: this.props.session.user.firstName + ' ' + this.props.session.user.lastName
          })
        }
      }
      if (this.props.session.user.profileImage) {
        await this.promisedSetState({
          profileImage: { uri: this.props.session.user.profileImage }
        })
      }
    }
    await this.fetchProfileData()
  }

  async fetchProfileData () {
    await this.promisedSetState({
      fetchProfileData: true
    })
    const list = (await httpGame.get(URLS.GOLD_COIN_PROFILE, { params: { entityId: this.state.mobileNo, productId: GAMIFICATION_PRODUCT_ID } })).data
    await this.promisedSetState({
      profileData: list.userProfile,
      fetchProfileData: false
    })
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title='Profile'
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView>
            <View style={styles.profileContainer}>
              <View style={styles.profileContent}>
                <View>
                  <Image source={this.state.profileImage} style={styles.lbImage} />
                  <View style={styles.overlaymage} />
                  <View style={styles.dotRed} />
                </View>
                <View style={styles.profileDetail}>
                  <Text style={styles.profileLevel}>LVl.5</Text>
                  <Text style={styles.profileId}>{this.state.userName}</Text>
                  <Text text='light' size='text12' color='default' style={styles.mailID}>{this.state.user.emailID}</Text>
                </View>
              </View>
            </View>
            <View style={styles.playerStatus}>
              <View style={styles.voteDetail}>
                <View style={styles.soldInfo}>
                  <View style={styles.soldLine} />
                  <View style={{ ...styles.soldLineActive, width: `${(this.state.profileData.game_points / (this.state.profileData.game_points + this.state.profileData.points_for_next)) * 100}%` }} />
                </View>

              </View>
              <View style={styles.levelDetail}>
                <Text style={styles.levelPoints}>XP {this.state.profileData.game_points}/{this.state.profileData.game_points + this.state.profileData.points_for_next} </Text>
                <Text style={styles.levelPoints}>{this.state.profileData.points_for_next ? `${this.state.profileData.points_for_next} xp to level up` : ''}</Text>
              </View>
              <View style={styles.levelRow}>
                <Text style={styles.statusText}>Player Status</Text>
                <Text style={styles.time}>Last online 1 hr ago</Text>
              </View>
            </View>

            <View style={styles.playerStatus}>
              <Text style={styles.badgeText}>{__('Badges')} (3)</Text>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigate('GoldenCoinBadges')
                }}
              >
                <View style={styles.badge}>
                  <Image source={{ uri: 'https://i.dlpng.com/static/png/4729648-shield-vector-art-hubprime-free-download-png-clipart-blue-shield-shield-clipart-png-920_677_preview.png' }} style={styles.badgeImg} />
                  <Image source={{ uri: 'https://i.dlpng.com/static/png/4729648-shield-vector-art-hubprime-free-download-png-clipart-blue-shield-shield-clipart-png-920_677_preview.png' }} style={styles.badgeImg} />
                  <Image source={{ uri: 'https://i.dlpng.com/static/png/4729648-shield-vector-art-hubprime-free-download-png-clipart-blue-shield-shield-clipart-png-920_677_preview.png' }} style={styles.badgeImg} />
                </View>
              </TouchableWithoutFeedback>
              <Text style={styles.badgeText}>Games (3)</Text>
              <View style={styles.badge}>
                <Image source={{ uri: 'https://store-images.s-microsoft.com/image/apps.17382.13510798887677013.afcc99fc-bdcc-4b9c-8261-4b2cd93b8845.49beb011-7271-4f15-a78b-422c511871e4?q=90&w=256&h=384&mode=crop' }} style={styles.gameImg} />
                <Image source={{ uri: 'https://play-lh.googleusercontent.com/TLUeelx8wcpEzf3hoqeLxPs3ai1tdGtAZTIFkNqy3gbDp1NPpNFTOzSFJDvZ9narFS0' }} style={styles.gameImg} />
                <Image source={{ uri: 'https://www.cnet.com/a/img/F5-BEMjgtr5n2HZ_dXpK6MX8t7I=/1200x630/2019/09/18/c07d7cfa-5cc7-4d64-a3bb-aabf6b778dcc/call-of-duty-mobile.jpg' }} style={styles.gameImg} />
                <Image source={{ uri: 'https://play-lh.googleusercontent.com/Knw_hAyujH2PKqKtOEM5r8oJ_U-enugflHPpAMUr2T1R6Fp3AUPMYlLKm476BYwNt3Wl' }} style={styles.gameImg} />
                <Image source={{ uri: 'https://play-lh.googleusercontent.com/TLUeelx8wcpEzf3hoqeLxPs3ai1tdGtAZTIFkNqy3gbDp1NPpNFTOzSFJDvZ9narFS0' }} style={styles.gameImg} />
              </View>
              <Text style={styles.badgeText}>Friends (37)</Text>
              <View style={styles.frnds}>
                <Image source={{ uri: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={styles.frndImg} />
                <Image source={{ uri: 'https://images.pexels.com/photos/3851294/pexels-photo-3851294.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={styles.frndImg} />
                <Image source={{ uri: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={styles.frndImg} />
                <Image source={{ uri: 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={styles.frndImg} />
                <Image source={{ uri: 'https://images.pexels.com/photos/157728/straw-field-hair-nature-157728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={styles.frndImg} />
              </View>
            </View>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}
export default connect(({ session }) => ({ session }))(ProfileDetails)
