import React from 'react'
import { Image, View } from 'react-native'

import { Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { MOVIE_ASSET_PATH } from '@src/config/env'
import { navigate } from '@src/navigation'
import styles from './../../styles'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item }) => {
  return (
    <View style={styles.moviesContent}>
      <Button
        onPress={() => {
          logClickEvent('PlayServiceMovieItem', {
            title: item.title
          })
          navigate('PlayMovieView', { id: item.id })
        }}
      >
        <Image source={{ uri: MOVIE_ASSET_PATH + item.poster_path }} style={styles.movieImg} />
        <View style={styles.movieplayBtn}>
          <View style={styles.playBtnBg}>
            <Icon name='play' type='Ionicons' style={styles.playBtnIcon} />
          </View>
        </View>
      </Button>
    </View>
  )
}

export default Item
