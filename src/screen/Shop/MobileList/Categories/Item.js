import React from 'react'
import { Image, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import { Button } from '@src/component/Form'

const Item = ({ item, filterByCategory }) => {
  const onPress = () => filterByCategory(item.id)
  return (
    <Button style={styles.deviceContent} onPress={onPress}>
      <View style={styles.deviceDisplay}>
        <Image source={{ uri: item.field_mobile_category_image }} style={styles.deviceImg} resizeMode='cover' />
      </View>
      <View style={styles.deviceRow}>
        <Text style={styles.deviceText} numberOfLines={1}>{item.name}</Text>
      </View>
    </Button>
  )
}

export default Item
