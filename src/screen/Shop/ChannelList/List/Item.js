import React from 'react'
import { Image, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import { __ } from '@src/utility/translation'
import { Button } from '@src/component/Form'
import { Rating } from 'react-native-ratings'
import { logClickEvent } from '@src/utility/analytics'
import { navigate } from '@src/navigation'
import { shopBuyNow } from '@src/helper/cart'

export default class extends React.Component {
  render () {
    const item = this.props.item

    const goView = () => {
      logClickEvent('ShopChannelListItem', { title: item.title })
      navigate('ShopView', { id: item.id, item })
    }
    const buyNow = () => {
      shopBuyNow(item)
    }

    return (
      <View style={styles.gamesContent}>
        <Button onPress={goView}>
          <Image source={{ uri: item.field_product_image_banner || item.field_product_image_small }} style={styles.gamesImg} />
        </Button>
        <View style={styles.gamesContent2}>
          <View>
            <Text style={styles.gamesText}>{item.title}</Text>
            <View style={styles.favIcon}>
              <Rating
                type='star'
                startingValue={item.field_product_rating}
                ratingCount={5}
                showRating={false}
                imageSize={15}
                isDisabled
                readonly
              />
            </View>
          </View>
          <View style={styles.buyPrice}>
            <Text style={styles.priceText}>{item.field_currency} {item.field_product_price}</Text>
            <Button style={styles.buyBtn} onPress={buyNow}>
              <Text style={styles.buyBtnText}>{__('Buy Now')}</Text>
            </Button>
          </View>
        </View>
      </View>
    )
  }
}
