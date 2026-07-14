import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'

const Item = ({ item }) => {
  console.log('==============')
  console.log(item.field_image)
  console.log('==============')
  return (
    <View style={styles.rechargeContent}>
      <TouchableOpacity
        style={styles.rechargeDisplay} onPress={() => {
          navigate('UserMyRewardsDetail', item)
        }}
      >
        <Image source={{ uri: item.field_image }} style={styles.rechargeImg} resizeMode='contain' />
      </TouchableOpacity>
      <Text style={styles.rechargeText}>{item.title}</Text>
      <Text style={styles.rechargePoints}>{item.description}</Text>
    </View>
  )
}

export default Item
