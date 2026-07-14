import React from 'react'
import { Text } from 'react-native'

import { Button } from '@src/component/Form'
import styles from './../../../styles'

const Item = ({ item, onClick }) => {
  const onPress = () => onClick(item)

  return (
    <Button
      style={styles.postContent}
      onPress={onPress}
    >
      <Text style={styles.postText} numberOfLines={2}>{item.title}</Text>
    </Button>
  )
}

export default Item
