import React from 'react'
import { Text, Image } from 'react-native'

import { Button } from '@src/component/Form'
import styles from './../styles'

const Item = (props) => {
  const onPress = () => {}

  let img = ''
  if (props.item.resource) {
    if (props.item.resource.image?.length) {
      img = { uri: props.item.resource.image[0].file }
    } else if (props.item.resource.thumbnail) {
      img = { uri: props.item.resource.thumbnail }
    }
  }
  if (typeof img !== 'string') {
    if (props.item.infoFields?.image) {
      img = { uri: props.item.infoFields.image }
    }
  }

  return (
    <Button
      style={styles.postContent}
      onPress={onPress}
    >
      <Image source={img} style={styles.postImg} resizeMode='cover' />
      <Text style={styles.postText} numberOfLines={2}>{props.item.description}</Text>
    </Button>
  )
}

export default Item
