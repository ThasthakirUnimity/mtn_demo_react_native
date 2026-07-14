import React from 'react'
import { Image, View } from 'react-native'

import { Icon, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { MOVIE_ASSET_PATH } from '@src/config/env'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item }) => {
  const onPress = () => {
    logClickEvent('HomeLiveTvItem', {
      name: item.name
    })
    navigate('PlayLiveTvView', { item })
  }
  return (
    <View style={styles.liveContent}>
      <Button onPress={onPress}>
        <Image source={{ uri: MOVIE_ASSET_PATH + item.poster_path }} style={styles.liveImg} />
        <View style={styles.liveBtn}>
          <View style={styles.liveplayBtn}>
            <Icon name='controller-play' type='Entypo' style={styles.liveplayBtnIcon} />
          </View>
        </View>
      </Button>
      <Text style={styles.liveText}>{item.name}</Text>
      <Text color='grey' style={styles.dateText}>{item.first_air_date}</Text>
    </View>
  )
}

export default Item
