import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'

import styles from '../styles'
import { navigate } from '@src/navigation'

const Item = ({ item }) => {
  return (
    <View style={styles.offerContent}>
      <TouchableOpacity onPress={() => {
        navigate('GoldenCoinOfferView', { id: item.id })
      }}
      >
        <Image source={{ uri: item.field_image }} style={styles.offerImg} resizeMode='contain' />
      </TouchableOpacity>
    </View>
  )
}

export default Item
