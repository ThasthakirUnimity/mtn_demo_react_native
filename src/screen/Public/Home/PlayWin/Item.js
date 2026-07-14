import React from 'react'
import { Image, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Text, Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item }) => {
  return (
    <Button
      style={styles.gameContent}
      onPress={() => {
        logClickEvent('HomeGameItem', {
          name: item.title
        })
        navigate('PlayGameView', { url: item.url })
      }}
    >
      <Image source={{ uri: item.images }} style={styles.gameImg} resizeMode='cover' />
    </Button>
  )
}

export default Item
