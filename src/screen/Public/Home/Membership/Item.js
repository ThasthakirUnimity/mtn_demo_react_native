import React from 'react'
import { Image, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Text } from '@src/component/Basic'
import { __ } from '@src/utility/translation'
import styles from '../styles'

const Item = ({ item }) => {
  return (
    <View style={styles.membershipContent}>
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.2)']} style={[{ backgroundColor: item.color }, styles.linearmembershipImg]}>
        <View style={styles.membershipContent2}>
          <View style={styles.membershipDetail}>
            <Text style={styles.membershipText}>{item.desc}</Text>
            <Text style={styles.membershipText2}>{item.membershipDesc}</Text>
          </View>
          <Image source={item.image} resizeMode='contain' style={styles.membershipImg} />
        </View>
      </LinearGradient>
    </View>
  )
}

export default Item
