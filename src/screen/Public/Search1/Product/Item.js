import React from 'react'
import { Text, Image, View } from 'react-native'

import { Button } from '@src/component/Form'
import styles from './../styles'
import { CURRENCY, APP_DETAILS } from '@src/theme/typography'



const Item = (props) => {
  const onPress = () => {}

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
          <Text style={styles.productPrice}>{CURRENCY.SYMBOL}600</Text>
          <Text style={styles.productOriginalPrice}>{CURRENCY.SYMBOL}650</Text>
        </View>
      </View>
      
    </Button>
  )
}

export default Item
