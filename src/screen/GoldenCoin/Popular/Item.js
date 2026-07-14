import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'

const Item = ({ item }) => {
  return (
    <View style={styles.popularContent}>
      <TouchableOpacity style={styles.popularDisplay} onPress={() => {
        navigate('UserMyRewardsDetail', item)
      }}>
        <Image source={{ uri: item.field_image }} resizeMode={'contain'} style={styles.popularImg} />
      </TouchableOpacity>
      <Text style={styles.popularText}>{item.title}</Text>
    </View>
  )
}

export default Item

