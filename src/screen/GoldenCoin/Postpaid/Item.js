import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'

const Item = ({ item }) => {
  return (
    <View style={styles.postpaidContent}>
      <TouchableOpacity style={styles.postpaidDisplay} onPress={() => {
        navigate('UserMyRewardsDetail', item)
      }}>
        <Image source={{ uri: item.field_image }} style={styles.postpaidImg} />
      </TouchableOpacity>
      <Text style={styles.postpaidText}>{item.title}</Text>
      {/* <Text text='medium' size='text10' color='grey' style={styles.pointsText}>{item.points}</Text> */}
    </View>
  )
}

export default Item

