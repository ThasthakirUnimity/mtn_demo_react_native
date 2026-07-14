import React from 'react'
import { Text, View } from 'react-native'

import { __ } from '@src/utility/translation'
import styles from './../../styles'

const Item = ({ item }) => {
  return (
    <View style={styles.cardCol}>
      <View style={styles.cardGroup}>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardLabel}>{__('Validity')}</Text>
        </View>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardValue}>{item?._original?.Validity} {item?._original?.validity_type}</Text>
        </View>
      </View>
      <View style={styles.cardGroup}>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardLabel}>{__('Data')}</Text>
        </View>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardValue}>{item?._original?.Data} {item?._original?.data_type}</Text>
        </View>
      </View>
      <View style={styles.cardGroup}>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardLabel}>{__('Calls')}</Text>
        </View>
        <View style={styles.cardGroupRow}>
          <Text style={styles.cardValue}>{item?._original?.Calls}</Text>
        </View>
      </View>
    </View>
  )
}

export default Item
