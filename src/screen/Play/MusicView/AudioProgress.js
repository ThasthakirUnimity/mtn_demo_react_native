import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import TrackPlayer, { useProgress } from 'react-native-track-player'
import styles from './styles'

const AudioProgress = () => {
  const [percentage, setPercentage] = useState(0)
  const progress = useProgress()
  useEffect(() => {
    setPercentage(Math.round(progress.position / progress.duration * 100))
  }, [progress])
  return (
    <View style={styles.progress}>
      <View style={[styles.progressBar, { width: percentage + '%' }]} />
    </View>
  )
}

export default AudioProgress
