import React from 'react'
import { Image, View } from 'react-native'
import { Text } from '@src/component/Basic'

import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item }) => {
  return (
    <View style={styles.newContent}>
      <Button
        style={styles.newDisplay}
        onPress={() => {
          logClickEvent('ShopMobileItem', { title: item.title })
          navigate('ShopMobileList', { id: item.id, item })
        }}
      >
        <Image source={{ uri: item.field_product_image_small }} resizeMode='contain' style={styles.newImg} />
      </Button>
      <Text style={styles.newText}>{item.title}</Text>
      <Text style={styles.priceText}>{item.field_currency} {item.field_product_price}</Text>
    </View>
  )
}

export default Item
