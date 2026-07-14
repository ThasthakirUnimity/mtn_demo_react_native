import React from 'react'
import { Image, View } from 'react-native'

import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import styles from '../styles'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item }) => {
  return (
    <View style={styles.channelContent}>
      <Button onPress={() => {
        logClickEvent('PlayServiceChannelItem', { title: item.title })
        navigate('PlayChannelView', { id: item.id })
      }}
      >
        <Image source={{ uri: item.banner }} style={styles.channelImg} resizeMode='contain' />
      </Button>
    </View>
  )
}

export default Item
