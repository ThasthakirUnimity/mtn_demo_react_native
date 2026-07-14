import React from 'react'
import { Image, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import { navigate } from '@src/navigation'
import { Button } from '@src/component/Form'
import { logClickEvent } from '@src/utility/analytics'

export default class extends React.Component {
  render () {
    const item = this.props.item

    return (
      <View style={styles.mobileContent}>
        <Button
          style={styles.mobileDisplay}
          onPress={() => {
            logClickEvent('ShopListItem', { title: item.title })
            navigate('ShopView', { id: item.id })
          }}
        >
          <Image source={{ uri: item.field_product_image_small }} style={styles.mobileImg} resizeMode='contain' />
        </Button>
        <View style={styles.mobileCol}>
          <View>
            <Text style={styles.mobileText}>{item.title}</Text>
          </View>
          <View>
            <Text style={styles.priceText}>{item.field_currency} {item.field_product_price}</Text>
          </View>
        </View>
        {/* <Text text='regular' size='text12' color='grey' style={styles.offerText}>{item.offer}</Text> */}
      </View>
    )
  }
}
