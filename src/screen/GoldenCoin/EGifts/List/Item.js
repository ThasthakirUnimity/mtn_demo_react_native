import React from 'react'
import { Image, View } from 'react-native'
import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'

import styles from '../styles'

import theme from '@src/theme/styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'

const Item = ({ item }) => {
  const onPress = () => navigate('GoldenCoinOfferView', { id: item.id })
  return (
    <Button
      style={styles.infoBtn}
      onPress={onPress}
    >
      <View style={styles.infoTop}>
        <Image source={{ uri: item.field_image }} style={styles.infoImg} resizeMode='contain' />
      </View>
      <View style={styles.infoContent}>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitle}>{item.title}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoDesc}>{item.field_validity}</Text>
        </View>
      </View>
    </Button>
  )
}

export default Item
