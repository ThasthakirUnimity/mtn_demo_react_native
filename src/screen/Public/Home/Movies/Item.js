import React from 'react'
import { Image, View } from 'react-native'

import { Icon, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item }) => {
  return (
    <View style={styles.moviesContent}>
      <Button
        onPress={() => {
          logClickEvent('HomeMovieItem', {
            name: item.title
          })
          navigate('PlayMovieView', { id: item.id })
        }}
      >
        <Image source={{ uri: 'https://image.tmdb.org/t/p/w300' + item.poster_path }} style={styles.moviesImg} resizeMode="cover" />
        <View style={styles.playVideo}>
          <View style={styles.videoBtn}>
            <Icon name='controller-play' type='Entypo' style={styles.videoBtnIcon} />
          </View>
        </View>
      </Button>
      <Text style={styles.moviesText}>{item.title}</Text>
    </View>
  )
}

export default Item
