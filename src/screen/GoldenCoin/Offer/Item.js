import React from 'react'
import { TouchableOpacity, Image ,View } from 'react-native'

import styles from '../styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'

const Item = ({ item }) => {
  return (
    <View style={styles.offerContent}>
      <TouchableOpacity onPress={() => {
        navigate('UserMyRewardsDetail', item)
      }}>
        <Image source={{ uri: item.field_image }} style={styles.offerImg} resizeMode={'contain'} />
      </TouchableOpacity>
    </View>
  )
}

export default Item
