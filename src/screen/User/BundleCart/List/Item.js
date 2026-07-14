import React from 'react'
import { View } from 'react-native'

import { Icon, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item, removeFromCart }) => {
  const _removeFromCart = () => {
    logClickEvent('BundleCartRemoveFromCart', {
      title: item.ProductName
    })
    removeFromCart(item.ProductID)
  }
  return (
    <View style={styles.recognitionRow}>
      <View style={styles.cartRow}>
        <View style={styles.cartScheme}>
          <Text style={styles.recognitionText}>{item.Category}</Text>
          <Text style={styles.schemeText}>{item.ProductName}</Text>
        </View>
      </View>
      <View style={styles.priceRow}>
        <Button onPress={_removeFromCart}>
          <Icon name='trash' type='Feather' style={styles.priceIcon} />
        </Button>
        <Text style={styles.price}>{item.currency}{item.Price}</Text>
      </View>
    </View>
  )
}

export default Item
