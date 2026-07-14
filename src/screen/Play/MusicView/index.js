import React, { createRef } from 'react'
import { Image, ScrollView, View } from 'react-native'
import { Container, Content, Icon, Text } from '@src/component/Basic'
import { connect } from 'react-redux'
import TrackPlayer, { State as TrackState } from 'react-native-track-player'

import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import { bind } from '@src/utility/component'

import { goBack } from '@src/navigation'
import theme from '@src/theme/styles'
import styles from './styles'
import { SecondaryStatusBar } from '@src/component/StatusBar'

import Music from './Music'
import AudioTrack from './AudioTrack'
import AudioProgress from './AudioProgress'
import AudioControls from './AudioControls'
import { httpCms } from '@src/utility/http'
import { URLS } from '@src/config/url'
import { shuffle } from 'lodash'
import Menu from './Menu'
import Detail from './Detail'

class PlayDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      music: props.route.params.music || {},

      musicList: [],
      fetchingMusicList: true
    }
    bind(this)

    this.fetchMusicList = this.fetchMusicList.bind(this)
    this.startPlayer = this.startPlayer.bind(this)
    this.startTrack = this.startTrack.bind(this)
    this.changeTrack = this.changeTrack.bind(this)
    this.playPrevious = this.playPrevious.bind(this)
    this.playNext = this.playNext.bind(this)
    this.shuffle = this.shuffle.bind(this)
    this.openView = this.openView.bind(this)

    this.refDetail = createRef()
  }

  async componentDidMount () {
    await this.fetchMusicList()
    await this.startPlayer()
  }

  async componentWillUnmount () {
    const state = await TrackPlayer.getState()
    if (state === TrackState.Playing) {
      await TrackPlayer.stop()
    }
  }

  async fetchMusicList () {
    try {
      const params = {}
      const r = (await httpCms.get(URLS.MUSIC_LIST, { params })).data

      if (Array.isArray(r)) {
        await this.promisedSetState({
          musicList: r
        })
      }
    } catch (e) {}
    await this.promisedSetState({
      fetchingMusicList: false
    })
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
      url: this.state.music.field_music_audio.url,
      title: this.state.music.title,
      artist: this.state.music.field_artists,
      album: '',
      genre: '',
      date: '2014-05-20T07:00:00+00:00',
      artwork: this.state.music.field_image
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

  async changeTrack (music) {
    await this.promisedSetState({
      music
    })
    this.startTrack()
  }

  playPrevious () {
    if (this.state.music) {
      const index = this.state.musicList.findIndex(r => (r.id == this.state.music.id))
      if (index > 0) {
        const music = this.state.musicList[index - 1]
        if (music) {
          this.changeTrack(music)
        }
      }
    }
  }

  playNext () {
    if (this.state.music) {
      const index = this.state.musicList.findIndex(r => (r.id == this.state.music.id))
      if (index > -1 && index < this.state.musicList.length - 1) {
        const music = this.state.musicList[index + 1]
        if (music) {
          this.changeTrack(music)
        }
      }
    }
  }

  shuffle () {
    this.setState({
      musicList: shuffle(this.state.musicList)
    })
  }

  openView (id) {
    const music = this.state.musicList.find(r => (r.id == id))
    if (music) {
      this.refDetail.current.open(music)
    }
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
          <ScrollView
            showsVerticalScrollIndicator={false}
          >

            <View style={styles.musicBg}>
              <Image source={{ uri: this.state.music.field_image }} style={styles.musicImg} />
            </View>

            <View style={styles.musicContent}>
              <View style={styles.musicLeft}>
                <Text style={styles.musicTitle}>{this.state.music.title}</Text>
                <Text style={styles.musicLyrist}>{this.state.music.field_artists}</Text>
              </View>
              <View style={styles.musicRight}>
                {/* }
                <Button style={styles.musicRightBtn}>
                  <Icon name='arrow-collapse-down' type='MaterialCommunityIcons' style={styles.musicRightBtnIcon} />
                </Button>
                { */}
                <Menu
                  id={this.state.music?.id}
                  content={
                    <View style={styles.musicRightBtn}>
                      <Icon name='dots-three-vertical' type='Entypo' style={styles.musicRightBtnIcon} />
                    </View>
                  }
                  openView={this.openView}
                />
              </View>
            </View>

            <AudioProgress />
            <AudioControls
              music={this.state.music}
              playPrevious={this.playPrevious}
              playNext={this.playNext}
              shuffle={this.shuffle}
            />

            <View style={styles.playList}>
              <View style={theme.row}>
                <Text style={styles.playListHeader}>{__('Up next')}</Text>
              </View>
              <Music
                list={this.state.musicList}
                fetching={this.state.fetchingMusicList}
                changeTrack={this.changeTrack}
                openView={this.openView}
              />
            </View>
          </ScrollView>
        </Content>
        <Detail ref={this.refDetail} />
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(PlayDetail)
