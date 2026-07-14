import React from 'react'
import { Image, View } from 'react-native'
import { Icon, Text } from '@src/component/Basic'

import styles from '../styles'
import { Button } from '@src/component/Form'
import theme from '@src/theme/styles'
import { navigate } from '@src/navigation'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item }) => {
  return (
    <View style={styles.offerContent}>
      <Button
        style={styles.offerDisplay}
        onPress={() => {
          logClickEvent('MenuPlansRecommendedItem', { title: item.title })
          navigate('PublicPlanView', { id: item.id })
        }}
      >
        <Image source={{ uri: item.offer_screen_image }} style={styles.offerImg} />
      </Button>
      <View style={theme.row}>
        <Text style={styles.offerText}>{item.title}</Text>
      </View>
      <View style={styles.offerRow}>
        <Text style={styles.priceText}>{item.recharge}</Text>
        <Icon name='keyboard-arrow-right' type='MaterialIcons' style={styles.offerIcon} />
      </View>
    </View>
  )
}

export default Item
