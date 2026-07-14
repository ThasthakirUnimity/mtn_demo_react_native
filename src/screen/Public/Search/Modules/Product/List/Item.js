import React from 'react'
import { Text, Image, View } from 'react-native'

import { Button } from '@src/component/Form'
import styles from './../../../styles'
import { navigate } from '@src/navigation'

const Item = (props) => {
  const onPress = () => navigate('ShopView', { id: props.item.product_id, item: props.item })

  let img = ''
  if (props.item.field_product_image_small) {
    img = { uri: props.item.field_product_image_small }
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
      <View style={styles.productCol}>
        <View style={styles.row}>
          <Text style={styles.productTitle} numberOfLines={2}>{props.item.field_product_caption}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.productPrice}>{props.item.field_currency}{props.item.field_product_revised_price}</Text>
          {
            props.item.field_product_price != props.item.field_product_revised_price
              ? <Text style={styles.productOriginalPrice}>{props.item.field_currency}{props.item.field_product_price}</Text>
              : null
          }
        </View>
      </View>
    </Button>
  )
}

export default Item
