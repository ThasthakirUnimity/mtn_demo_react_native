import React from 'react'
import { Image, View } from 'react-native'

import styles from '../styles'

const Item = ({ item }) => {
  return (
    <View style={styles.promotionContent}>
      <Image
        source={{ uri: item.offer_screen_image }}
        style={styles.promotionImg}
        resizeMode='contain'
      />
    </View>
  )
}

export default Item
