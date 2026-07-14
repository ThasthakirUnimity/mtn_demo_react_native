import React from 'react'
import { Image, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import styles from '../styles'
import dateUtil from '@src/utility/date'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item }) => {
  return (
    <Button
      onPress={() => {
        logClickEvent('HomeOffersItem', {
          name: item.title
        })
        navigate('PublicOfferView', { id: item.id })
      }}
      style={styles.offerBtn}
    >
      <Image source={{ uri: item.home_screen_image }} style={styles.offerImg} />
      <View style={styles.offerContent}>
        <View style={styles.offerBox}>
          <View style={styles.offerHeader}>
            <Text style={styles.offerText}>{item.title}</Text>
          </View>
          <View style={styles.offerBot}>
            <Text style={styles.offerExpiryText}>{dateUtil.format(item.expiry)}</Text>
          </View>
        </View>
      </View>
    </Button>
  )
}

export default Item
