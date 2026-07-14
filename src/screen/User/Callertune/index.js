import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { Container, Content, Icon, Text } from '@src/component/Basic'
import { connect } from 'react-redux'
import TrackPlayer, { State as TrackState, Event as TrackEvent } from 'react-native-track-player'

import { Button } from '@src/component/Form'
import { SecondaryStatusBar } from '@src/component/StatusBar'
import { URLS } from '@src/config/url'
import theme from '@src/theme/styles'
import { bind } from '@src/utility/component'
import http from '@src/utility/http'
import { __ } from '@src/utility/translation'
import styles from './styles'
import AudioTrack from './AudioTrack'
import AudioProgress from './AudioProgress'
import List from './List'
import { goBack } from '@src/navigation'
import AudioControls from './AudioControls'
import Support from '@src/component/Support'
import { compile } from 'path-to-regexp'
import Subscribed from './Subscribed'

class Callertune extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      tune: props.route.params.tune || {},
      callerTunes: [],
      fetchingCallerTunes: true,
      tuneSubscribed: null
    }

    bind(this)

    this.fetchCurrentSubscription = this.fetchCurrentSubscription.bind(this)
    this.startPlayer = this.startPlayer.bind(this)
    this.startTrack = this.startTrack.bind(this)
    this.fetchCallerTunes = this.fetchCallerTunes.bind(this)
    this.changeTrack = this.changeTrack.bind(this)
    this.updateSubscription = this.updateSubscription.bind(this)
    this.removeSubscription = this.removeSubscription.bind(this)
  }

  async componentDidMount () {
    await this.fetchCurrentSubscription()
    await this.startPlayer()
    await this.fetchCallerTunes()
  }

  async componentWillUnmount () {
    const state = await TrackPlayer.getState()
    if (state === TrackState.Playing) {
      await TrackPlayer.stop()
    }
  }

  async fetchCurrentSubscription () {
    await Support.showLoading()
    try {
      const profile = this.props.session.numbers.find(r => r.isPrimary)
      if (profile) {
        const url = compile(URLS.CALLER_TUNE_SUBSCRIBED)({ number: profile.number })
        const params = {
          profileType: 'T', transId: 'fdkl2321_ldf_212'
        }
        const r = (await http.get(url, { params })).data
        await this.promisedSetState({
          tuneSubscribed: r?.toneDetails?.allCaller?.length ? r?.toneDetails?.allCaller[0] : null
        })
      }
    } catch (e) {}
    await this.promisedSetState({
      fetchingCallerTunes: false
    })
    await Support.hideLoading()
  }

  async startPlayer () {
    try {
      await TrackPlayer.setupPlayer()
    } catch (e) {}
    this.startTrack()
  }

  async startTrack () {
    let index
    try {
      index = await TrackPlayer.getCurrentTrack()
      if (index !== null) {
        const state = await TrackPlayer.getState()
        if (state === TrackState.Playing) {
          await TrackPlayer.pause()
        }
      }
    } catch (e) {}
    const track = {
      url: this.state.tune.contentPath,
      title: this.state.tune.title,
      artist: this.state.tune.contentArtist,
      album: this.state.tune.contentAlbum,
      genre: this.state.tune.genre,
      date: '2014-05-20T07:00:00+00:00',
      artwork: this.state.tune.contentImagePath
      // duration: 402
    }
    await TrackPlayer.add([track])
    if (index !== null) {
      const q = await TrackPlayer.getQueue()
      if (q.length > 1) {
        await TrackPlayer.skip(index + 1)
        await TrackPlayer.remove(index)
      }
    }
    await TrackPlayer.play()
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

  async changeTrack (tune) {
    await this.promisedSetState({
      tune
    })
    this.startTrack()
  }

  async updateSubscription () {
    let cb = () => {}
    if (this.state.tune?.id && this.state.tuneSubscribed?.toneId != this.state.tune?.id) {
      await Support.showLoading()
      try {
        const profile = this.props.session.numbers.find(r => r.isPrimary)
        if (profile) {
          const data = {
            caller: this.state.tune.cpName,
            contentType: 'T',
            msisdn: profile.number,
            operation: 'A',
            overRideTonePlan: this.state.tune.contentInPlaylist,
            setting: 'A',
            subPlanId: 'SUB_30D_15R',
            toneId: this.state.tune.id,
            tonePlanId: this.state.tune.contentPlan
          }
          const r = (await http.post(URLS.CALLER_TUNE_SUBSCRIPTION, data)).data
          cb = () => {
            this.fetchCurrentSubscription()
          }
        }
      } catch (e) {}
      await this.promisedSetState({
        fetchingCallerTunes: false
      })
      await Support.hideLoading()
    }
    cb()
  }

  async removeSubscription () {
    let cb = () => {}
    if (this.state.tuneSubscribed?.toneId) {
      await Support.showLoading()
      try {
        const profile = this.props.session.numbers.find(r => r.isPrimary)
        const data = {
          caller: '66770045',
          contentType: 'T',
          msisdn: profile?.number,
          setting: 'C',
          toneId: this.state.tuneSubscribed.toneId,
          jukebox: 1
        }
        const r = (await http.delete(URLS.CALLER_TUNE_SUBSCRIPTION, { data })).data
        cb = () => {
          this.fetchCurrentSubscription()
        }
      } catch (e) {}
      await this.promisedSetState({
        fetchingCallerTunes: false
      })
      await Support.hideLoading()
    }
    cb()
  }

  render () {
    return (
      <Container>
        <SecondaryStatusBar />
        <AudioTrack />
        <View style={styles.header}>
          <Button style={styles.headerBtn} onPress={goBack}>
            <Icon name='chevron-left' type='Entypo' style={styles.headerBtnIcon} />
          </Button>
        </View>
        <Content style={theme.layout}>
          <Subscribed tuneSubscribed={this.state.tuneSubscribed} removeSubscription={this.removeSubscription} />
          <ScrollView
            showsVerticalScrollIndicator={false}
          >

            <View style={styles.musicBg}>
              <Image source={{ uri: this.state.tune?.contentImagePath }} style={styles.musicImg} />
            </View>

            <View style={styles.musicContent}>
              <View style={styles.musicLeft}>
                <Text style={styles.musicTitle}>{this.state.tune.title}</Text>
                <Text style={styles.musicLyrist}>{this.state.tune.contentAlbum}</Text>
              </View>
              <View style={styles.musicRight}>
                {
                  this.state.tuneSubscribed?.toneId != this.state.tune?.id
                    ? (
                      <Button style={styles.subscribeBtn} onPress={this.updateSubscription}>
                        <Text style={styles.subscribeBtnText}>{__('Subscribe')}</Text>
                      </Button>
                      )
                    : null
                }
                <Button style={styles.musicRightBtn}>
                  <Icon name='dots-three-vertical' type='Entypo' style={styles.musicRightBtnIcon} />
                </Button>
              </View>
            </View>

            <AudioProgress />
            <AudioControls />

            <View style={styles.playList}>
              <View style={theme.row}>
                <Text style={styles.playListHeader}>{__('Up next')}</Text>
              </View>
              <List
                list={this.state.callerTunes}
                fetching={this.state.fetchingCallerTunes}
                changeTrack={this.changeTrack}
              />
            </View>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Callertune)
