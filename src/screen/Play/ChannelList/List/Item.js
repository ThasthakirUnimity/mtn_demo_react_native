import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from '../styles'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import LinearGradient from 'react-native-linear-gradient'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item }) => {
  const onPress = () => {
    logClickEvent('PlayServiceChannelListItem', {
      title: item.title
    })
    navigate('PlayChannelView', { id: item.id })
  }
  return (
    <Button style={styles.item} onPress={onPress}>
      <Image
        source={{ uri: item.banner }}
        style={styles.itemImg}
        resizeMode='cover'
      />
      <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 1)']} style={styles.itemOverlay} />
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
    </Button>
  )
}

export default Item
