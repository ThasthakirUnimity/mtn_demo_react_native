import React from 'react'
import { Image, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import styles from '../styles'

const Item = ({ item }) => {
  return (
    <View style={styles.cashbackContent}>
      <Button
        style={styles.cashbackDisplay}
        onPress={() => {
          navigate('GoldenCoinOfferView', { id: item.id })
        }}
      >
        <Image source={{ uri: item.field_image }} resizeMode='contain' style={styles.cashbackImg} />
      </Button>
      <View style={styles.cashbackGroup}>
        <Text style={styles.cashbackText}>{item.title}</Text>
      </View>
    </View>
  )
}

export default Item
