import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'


const Item = ({ item }) => {
  return (
    <View style={styles.cashbackContent}>
      <TouchableOpacity style={styles.cashbackDisplay} onPress={() => {
        navigate('UserMyRewardsDetail', item)
      }}>
        <Image source={{ uri: item.field_image }} resizeMode={'contain'} style={styles.cashbackImg} />
      </TouchableOpacity>
      <Text style={styles.cashbackText}>{item.title}</Text>
      {/* <Text text='medium' size='text10' color='grey' style={styles.pointsText}>{item.points}</Text> */}
    </View>
  )
}

export default Item
