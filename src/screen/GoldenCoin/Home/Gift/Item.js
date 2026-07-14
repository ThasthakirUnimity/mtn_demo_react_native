import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import { navigate } from '@src/navigation'

const Item = ({ item }) => {
  return (
    <View style={styles.giftContent}>
      <TouchableOpacity
        style={styles.giftDisplay}
        onPress={() => {
          navigate('GoldenCoinOfferView', { id: item.id })
        }}
      >
        <Image source={{ uri: item.field_image }} resizeMode='contain' style={styles.giftImg} />
      </TouchableOpacity>
      <Text style={styles.giftText}>{item.title}</Text>
    </View>
  )
}

export default Item
