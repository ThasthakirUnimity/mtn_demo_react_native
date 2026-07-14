import React from 'react'
import { Text, Image } from 'react-native'

import { Button } from '@src/component/Form'
import styles from './../styles'

const Item = (props) => {
  const onPress = () => {}

  return (
    <Button
      style={styles.postContent}
      onPress={onPress}
    >
      <Text style={styles.postText} numberOfLines={2}>{props.item.title}</Text>
    </Button>
  )
}

export default Item
