import React from 'react'
import { Image, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item }) => {
  return (
    <Button
      style={styles.offerforyouRow}
      onPress={() => {
        logClickEvent('MenuOffersListItem', { title: item.title })
        navigate('PublicOfferView', { id: item.id })
      }}
    >
      <View style={styles.offerCol}>
        <Text style={styles.rechargeText}>{item.description}</Text>
      </View>
      <Image source={{ uri: item.offer_screen_image }} style={styles.offerforyouImg} resizeMode='contain' />
    </Button>
  )
}

export default Item
