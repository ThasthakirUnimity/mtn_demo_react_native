import React from 'react'
import { Image, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import { Button } from '@src/component/Form'
import { logClickEvent } from '@src/utility/analytics'

export default ({ item, onClick }) => {
  const _onClick = () => {
    logClickEvent('HelpCentreWalkThroughItem', { title: item.title })
    onClick(item)
  }
  return (
    <View style={styles.walkthroughContent}>
      <Button style={styles.walkthroughDisplay} onPress={_onClick}>
        <Image source={{ uri: item.thumbnail_image }} resizeMode='contain' style={styles.walkthroughImg} />
      </Button>
      <Text style={styles.walkthroughText}>{item.title}</Text>
    </View>
  )
}
