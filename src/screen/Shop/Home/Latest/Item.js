import React from 'react'
import { Image, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import styles from '../styles'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item }) => {
  return (
    <Button
      style={styles.newContent}
      onPress={() => {
        logClickEvent('ShopWhatsNewItem', { title: item.title })
        navigate('ShopView', { id: item.id, item })
      }}
    >
      <View style={styles.newDisplay}>
        <Image source={{ uri: item.field_product_image_small }} resizeMode='contain' style={styles.newImg} />
      </View>
      <Text style={styles.newText}>{item.title}</Text>
      <Text style={styles.priceText}>{item.field_currency} {item.field_product_price}</Text>
    </Button>
  )
}

export default Item
