import React from 'react'
import { Image, View } from 'react-native'
import { Icon, Text } from '@src/component/Basic'

import styles from '../styles'
import { __ } from '@src/utility/translation'
import { Button } from '@src/component/Form'

export default ({ item, selectStore }) => {
  let img = require('@asset/icons/play.png')
  if (item.field_upload_image) {
    img = { uri: item.field_upload_image }
  }

  const _selectStore = () => selectStore(item)

  return (
    <Button style={styles.storeRow} onPress={_selectStore}>
      <View style={styles.storeRow2}>
        <Image source={img} style={styles.rechargeStoreImg} resizeMode="contain" />
        <View style={styles.storeInfo}>
          <Text style={styles.storeName}>{item.field_title}</Text>
          <View style={styles.storeTime}>
            <Text style={styles.storeTimeText}>7am - 9pm</Text>
            <Text style={styles.storeDistance}>{item.field_location_proximity}</Text>
          </View>
        </View>
      </View>
      <Icon name='location-outline' type='Ionicons' style={styles.storeIcon} />
    </Button>

  )
}