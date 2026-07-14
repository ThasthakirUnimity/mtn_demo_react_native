import React from 'react'
import { Image, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import styles from '../styles'

const Item = ({ item, openView }) => {
  const onPress = () => openView(item)
  return (
    <View style={styles.walkthroughContent}>
      <Button style={styles.walkthroughDisplay} onPress={onPress}>
        <Image source={{ uri: item.thumbnail_image }} resizeMode='contain' style={styles.walkthroughImg} />
      </Button>
      <Text style={styles.walkthroughText}>{item.title}</Text>
    </View>
  )
}

export default Item
