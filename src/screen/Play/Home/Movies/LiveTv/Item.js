import React from 'react'
import { Image, View, Text } from 'react-native'

import { Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { MOVIE_ASSET_PATH } from '@src/config/env'
import { navigate } from '@src/navigation'
import styles from './../../styles'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item }) => {
  const onPress = () => {
    logClickEvent('PlayServiceLiveTvItem', {
      title: item.title
    })
    navigate('PlayLiveTvView', { item })
  }
  return (
    <View style={styles.moviesContent}>
      <Button onPress={onPress}>
        <Image source={{ uri: MOVIE_ASSET_PATH + item.poster_path }} style={styles.movieImg} />
        <View style={styles.movieplayBtn}>
          <Text style={styles.playBtnCount}>{item.vote_average}</Text>
          <View style={styles.playBtnBg}>
            <Icon name='play' type='Ionicons' style={styles.playBtnIcon} />
          </View>
        </View>
      </Button>
    </View>
  )
}

export default Item
