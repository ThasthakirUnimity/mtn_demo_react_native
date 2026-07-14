import React from 'react'
import { Text, View } from 'react-native'

import { __ } from '@src/utility/translation'
import styles from './../../styles'

const EB = ({ cart }) => {
  const item = cart.items[0]
  return (
    <View style={styles.cardCol}>
      <View style={styles.cardGroup}>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardLabel}>{__('Meter number')}</Text>
        </View>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardValue}>{item.meternumber}</Text>
        </View>
      </View>
      <View style={styles.cardGroup}>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardLabel}>{__('Name')}</Text>
        </View>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardValue}>{item.name}</Text>
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

export default EB
