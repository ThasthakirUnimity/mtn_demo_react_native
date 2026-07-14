import React from 'react'
import { Text, View } from 'react-native'

import { __ } from '@src/utility/translation'
import styles from './../../styles'

const Topup = ({ cart }) => {
  const item = cart.items[0]
  let title = ''
  if (item.type == 'vouchercard') {
    title = 'Voucher card'
  } else if (item.type == 'mobilenumber') {
    title = 'Mobile number'
  }
  return (
    <View style={styles.cardCol}>
      <View style={styles.cardGroup}>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardLabel}>{__(title)}</Text>
        </View>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardValue}>{item[item.type]}</Text>
        </View>
      </View>
      <View style={styles.cardGroup}>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardLabel}>{__('Price')}</Text>
        </View>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardValue}>{item?.currency}{item?.price}</Text>
        </View>
      </View>
    </View>
  )
}

export default Topup
