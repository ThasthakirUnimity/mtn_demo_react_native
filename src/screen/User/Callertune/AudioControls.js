import { Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import React from 'react'
import { View } from 'react-native'
import TrackPlayer, { usePlaybackState, State } from 'react-native-track-player'
import styles from './styles'

const AudioControls = () => {
  const state = usePlaybackState()
  const isPlaying = state === State.Playing
  const isLoading = state === State.Connecting || state === State.Buffering

  const toggle = async () => {
    if (isLoading) {
      return
    }
    if (isPlaying) {
      await TrackPlayer.pause()
    } else {
      if (state === State.Stopped) {
        await TrackPlayer.seekTo(0)
      }
      await TrackPlayer.play()
    }
  }

  return (
    <View style={styles.option}>
      <Button style={styles.optionBtn}>
        <Icon name='heart' type='AntDesign' style={styles.optionBtnIcon} />
      </Button>
      <View style={styles.optionCol}>
        <Button>
          <Icon name='stepbackward' type='AntDesign' style={styles.optionIcon} />
        </Button>
        <Button style={styles.pauseBtn} onPress={toggle}>
          <Icon name={isPlaying ? 'pause' : 'play'} type='Ionicons' style={styles.pauseBtnIcon} />
        </Button>
        <Button>
          <Icon name='stepforward' type='AntDesign' style={styles.optionIcon} />
        </Button>
      </View>
      <Button style={styles.optionBtn}>
        <Icon name='swap-horiz' type='MaterialIcons' style={styles.optionBtnIcon} />
      </Button>
    </View>
  )
}

export default AudioControls
