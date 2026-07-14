import React from 'react'
import { Image, View } from 'react-native'

import { Icon, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import styles from '../styles'

export default ({ item, index, removeProduct, updateQuantity }) => {
  const remove = () => removeProduct(index)

  const increaseQuantity = () => updateQuantity({ id: item.id, quantity: item.quantity + 1 })
  const decreaseQuantity = () => {
    const quantity = item.quantity - 1
    if (quantity > 0) {
      updateQuantity({ id: item.id, quantity })
    }
  }

  return (
    <Button style={styles.cartContainer} underlayColor='transparent' onPress={() => { navigate('ShopView', { id: item.id }) }}>
      <View style={styles.cartContent}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.content}>
          <View>
            <Text style={styles.cartItemName}>{item.name}</Text>
            <Text style={styles.cartText}>{item.text}</Text>
          </View>
          <View style={styles.cartDetail}>
            {
            item.price_org
              ? <Text style={styles.priceOrgText}>{item.currency}{item.price_org}</Text>
              : null
            }

            <View style={styles.price}>
              <Text style={styles.priceText}>{item.currency}{item.price}</Text>
            </View>
            <Text style={styles.offerText}>{__('10% off')}</Text>
          </View>
          <View>
            <Text style={styles.deliveryOffer}>{__('Eligiblle for Free Shipping')}</Text>
            <View style={styles.cartRow}>
              <Button onPress={decreaseQuantity}>
                <Icon name='minus' type='AntDesign' style={styles.btns} />
              </Button>
              <Text style={styles.priceText}>{item.quantity}</Text>
              <Button onPress={increaseQuantity}>
                <Icon name='plus' type='AntDesign' style={styles.btns} />
              </Button>
            </View>
          </View>
        </View>
        <Button style={styles.trash} onPress={remove}>
          <Icon name='trash' type='Feather' style={styles.btns} />
        </Button>
      </View>
      {/* }
      <View style={styles.save}>
        <View style={styles.saveInfo}>
          <Icon name='save-alt' type='MaterialIcons' size='text20' color='dark' />
          <Text style={styles.saveBtnText}>{__('Save for later')}</Text>
        </View>
        <View style={styles.saveInfo} onPress={() => { navigate('UserMyOrders') }}>
          <Icon name='shoppingcart' type='AntDesign' size='text20' color='dark' />
          <Text style={styles.saveBtnText}>{__('Checkout')}</Text>
        </View>
      </View>
      { */}
    </Button>
  )
}
