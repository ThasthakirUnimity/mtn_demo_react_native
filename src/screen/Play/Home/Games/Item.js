import React from 'react'
import { Image, View } from 'react-native'

import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import styles from '../styles'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item }) => {
  return (
    <View style={styles.gamesContent}>
      <Button
        onPress={() => {
          logClickEvent('PlayServiceGameZoneItem', {
            title: item.title
          })
          navigate('PlayGameView', { url: item.url })
        }}
      >
        <Image source={{ uri: item.images }} style={styles.gamesImg} />
      </Button>
    </View>
  )
}

export default Item
