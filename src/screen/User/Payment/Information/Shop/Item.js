import React from 'react'
import { Text, View } from 'react-native'

import { __ } from '@src/utility/translation'
import styles from './../../styles'

const Item = ({ item }) => {
  return (
    <View style={styles.cardCol}>
      <View style={styles.cardGroup}>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardLabel}>{__('Name')}</Text>
        </View>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardValue}>{item?.title}</Text>
        </View>
      </View>
      <View style={styles.cardGroup}>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardLabel}>{__('Quantity')}</Text>
        </View>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardValue}>{item?.quantity}</Text>
        </View>
      </View>
      <View style={styles.cardGroup}>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardLabel}>{__('Price')}</Text>
        </View>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardValue}>{item?.currency}{item?.total}</Text>
        </View>
      </View>
    </View>
  )
}

export default Item
