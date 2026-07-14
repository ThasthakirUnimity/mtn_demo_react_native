import React from 'react'
import { Image } from 'react-native'

import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import styles from '../styles'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item }) => {
  return (
    <Button
      style={styles.couponItem}
      onPress={() => {
        logClickEvent('HomePromotionItem', {
          name: item.title
        })
        navigate('PublicCouponView', { id: item.id })
      }}
    >
      <Image source={{ uri: item.home_screen_image }} style={styles.couponImg} resizeMode='cover' />
    </Button>
  )
}

/* const Item1 = ({ item }) => {
  return (
    <View style={styles.layout}>
      <View style={styles.offerContent}>
        <Button
          onPress={() => {
            logClickEvent('HomePromotionItem', {
              name: item.title
            })
            navigate('UserCoupon')
          }}
        >
          <Image source={{ uri: item.home_screen_image }} style={styles.offerImg} />
          <View style={styles.offerContent2}>
            <View style={{ flex: 1 }}>
              <Text style={styles.offerText}>{item.title}</Text>
              <Text style={styles.offerCashbackText}>{item.text}</Text>
            </View>
            <Text style={styles.offerExpiryText}>{dateUtil.format(item.expiry)}</Text>
          </View>
        </Button>
      </View>
    </View>
  )
} */

export default Item
