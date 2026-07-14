import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import { openUrl } from '@src/utility/linking'
import { Button } from '@src/component/Form'
import { logClickEvent } from '@src/utility/analytics'

export default ({ item }) => {
  return (
    <View style={styles.featureContent}>
      <Button
        style={styles.featureImgDisplay}
        onPress={() => {
          logClickEvent('HomeMTNProductItem', {
            name: item.title
          })
          openUrl(item.link)
        }}
      >
        <Image source={{ uri: item.icon }} style={styles.featureImg} resizeMode='contain' />
      </Button>
      <Text text='medium' size='text12' color='default' style={styles.featureText}>{item.title}</Text>
    </View>
  )
}
