import React, { useEffect } from 'react'
import { usePlaybackState, State } from 'react-native-track-player'

const AudioTrack = () => {
  const state = usePlaybackState()
  const isPlaying = state === State.Playing
  const isLoading = state === State.Connecting || state === State.Buffering
  useEffect(() => {
    console.log('isPlaying', isPlaying)
  }, [isPlaying])
  useEffect(() => {
    console.log('isLoading', isLoading)
  }, [isLoading])
  return null
}

export default AudioTrack
