import React from 'react'
import { Image, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import styles from '../styles'

const Item = ({ item, openCategory }) => {
  const _openCategory = () => openCategory(item)
  return (
    <Button style={styles.billItem} onPress={_openCategory}>
      <View style={styles.billGroup}>
        <Image source={{ uri: item.icon }} style={styles.billImg} />
      </View>
      <Text style={styles.billTitle} numberOfLines={1}>{item.title}</Text>
    </Button>
  )
}

export default Item
