import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { COLOR } from '@src/theme/typography'
import { Icon } from '@src/component/Basic'
import { navigate } from '@src/navigation'
import { logClickEvent } from '@src/utility/analytics'
import styles from '../styles'

const colors = [
  '#C4E759', '#54E38E', '#D4FC78', '#C1E3FF', '#8DE8FF',
  '#DEB0DF', '#F8C390', '#A16BFE', '#E16E93', '#ABC7FF'
]

const HeroCard = ({ list }) => {
  const [index, setIndex] = useState(0)

  const items = list || []
  const featured = items[index] || null
  const bgColor = colors[index % colors.length]
  const album = featured?.contentAlbum || ''
  const tuneTitle = featured?.title || 'Now Playing'

  const playTrack = (track) => {
    if (!track) return
    logClickEvent('HomeCallerTuneItem', { name: track.title })
    navigate('UserCallertune', { tune: track })
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
      colors={[COLOR.LIGHT_YELLOW, COLOR.LIGHT_GREEN]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.2, y: 1 }}
      style={styles.mhpCard}
    >
      {/* Top label row */}
      <View style={styles.mhpTopRow}>
        <Text style={styles.mhpLabel}>🎵  Caller Tune for you!</Text>
        <View style={styles.mhpDots}>
          <View style={styles.mhpDot} />
          <View style={styles.mhpDot} />
          <View style={styles.mhpDot} />
        </View>
      </View>

      {/* Artwork + info */}
      <View style={styles.mhpMain}>

        {/* Colored artwork tile with note icon */}
        <TouchableOpacity
          style={[styles.mhpArtWrap, { backgroundColor: bgColor }]}
          onPress={onPlay}
          activeOpacity={0.85}
        >
          <View style={styles.ctHeroArtInner}>
            <Icon name='beamed-note' type='Entypo' style={styles.ctHeroNoteIcon} />
          </View>
        </TouchableOpacity>

        {/* Song info + progress + controls */}
        <View style={styles.mhpInfo}>
          {!!album && <Text style={styles.ctHeroAlbum} numberOfLines={1}>{album}</Text>}
          <Text style={styles.mhpSongTitle} numberOfLines={2}>{tuneTitle}</Text>

          {/* Progress bar */}
          <View style={styles.mhpProgressTrack}>
            <View style={[styles.mhpProgressFill, { width: '40%' }]} />
          </View>

          {/* Controls */}
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
