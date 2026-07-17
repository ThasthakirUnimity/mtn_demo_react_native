import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Icon } from '@src/component/Basic'
import { navigate } from '@src/navigation'
import { logClickEvent } from '@src/utility/analytics'
import styles from '../styles'
import { COLOR } from '@src/theme/typography'

const HeroCard = ({ list }) => {
  const [index, setIndex] = useState(0)

  const items = list || []
  const featured = items[index] || null
  const title = featured?.name || featured?.title || 'Now Playing'
  const artist = featured?.field_artist || featured?.artist || featured?.field_singer || 'MTN Music'

  const playTrack = (track) => {
    if (!track) return
    logClickEvent('HomeMusicItem', { name: track?.name || track?.title || '' })
    navigate('PlayMusicView', { music: track })
  }

  const onPlay = () => playTrack(featured)

  const onPrev = () => {
    const prevIdx = index > 0 ? index - 1 : items.length - 1
    setIndex(prevIdx)
    playTrack(items[prevIdx])
  }

  const onNext = () => {
    const nextIdx = index < items.length - 1 ? index + 1 : 0
    setIndex(nextIdx)
    playTrack(items[nextIdx])
  }

  return (
    <LinearGradient
      colors={[COLOR.LIGHT_BLUE, COLOR.LIGHT_ORANGE]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.2, y: 1 }}
      style={styles.mhpCard}
    >
      {/* Top label row */}
      <View style={styles.mhpTopRow}>
        <Text style={styles.mhpLabel}>♬  Music for you!</Text>
        <View style={styles.mhpDots}>
          <View style={styles.mhpDot} />
          <View style={styles.mhpDot} />
          <View style={styles.mhpDot} />
        </View>
      </View>

      {/* Artwork + info side by side */}
      <View style={styles.mhpMain}>

        {/* Tappable album artwork */}
        <TouchableOpacity style={styles.mhpArtWrap} onPress={onPlay} activeOpacity={0.85}>
          {featured
            ? <Image source={{ uri: featured.field_image }} style={styles.mhpArt} resizeMode='cover' />
            : <View style={styles.mhpArtPlaceholder} />
          }
        </TouchableOpacity>

        {/* Song info, progress, controls */}
        <View style={styles.mhpInfo}>
          <Text style={styles.mhpSongTitle} numberOfLines={1}>{title}</Text>
          <Text style={styles.mhpArtist} numberOfLines={1}>{artist}</Text>

          {/* Progress bar */}
          <View style={styles.mhpProgressTrack}>
            <View style={[styles.mhpProgressFill, { width: '35%' }]} />
          </View>

          {/* Playback controls */}
          <View style={styles.mhpControls}>
            <TouchableOpacity style={styles.mhpCtrlBtn} onPress={onPrev} activeOpacity={0.7}>
              <Icon name='controller-jump-to-start' type='Entypo' style={styles.mhpCtrlIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mhpPlayBtn} onPress={onPlay} activeOpacity={0.85}>
              <Icon name='controller-play' type='Entypo' style={styles.mhpPlayIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mhpCtrlBtn} onPress={onNext} activeOpacity={0.7}>
              <Icon name='controller-next' type='Entypo' style={styles.mhpCtrlIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

export default HeroCard
