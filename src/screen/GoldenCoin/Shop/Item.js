import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'

const Item = ({ item }) => {
  return (
    <View style={styles.shopContent}>
      <TouchableOpacity style={styles.shopDisplay} onPress={() => {
        navigate('UserMyRewardsDetail', item)
      }}>
        <Image source={{ uri: item.field_image }} resizeMode={'contain'} style={styles.shopImg} />
      </TouchableOpacity>
      <Text text='medium' size='text14' color='dark' style={styles.shopText}>{item.title}</Text>
    </View>
  )
}

export default Item

