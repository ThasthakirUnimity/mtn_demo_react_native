import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import { navigate } from '@src/navigation'

const Item = ({ item }) => {
  return (
    <View style={styles.rechargeContent}>
      <TouchableOpacity
        style={styles.rechargeDisplay}
        onPress={() => {
          navigate('GoldenCoinOfferView', { id: item.id })
        }}
      >
        <Image source={{ uri: item.field_image }} style={styles.rechargeImg} resizeMode='contain' />
      </TouchableOpacity>
      <View style={styles.walletGroup}>
        <View style={styles.walletRow}>
          <Text style={styles.walletText} numberOfLines={1}>{item.title}</Text>
        </View>
        <View style={styles.walletRow}>
          <Text style={styles.walletDesc} numberOfLines={2}>{item.description}</Text>
        </View>
      </View>
    </View>
  )
}

export default Item
