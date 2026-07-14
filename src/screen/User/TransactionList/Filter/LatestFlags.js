import React from 'react'
import { View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { latestFlags } from '@src/config/filters/transaction'
import { __ } from '@src/utility/translation'
import styles from './../styles'

const LatestFlag = ({ item, filters, select }) => {
  const latestFlag = latestFlags[item]
  const selected = item == filters.latestFlag
  return (
    <Button
      style={selected ? styles.fBtnActive : styles.fBtn}
      onPress={() => select(item)}
    >
      <Text style={selected ? styles.fBtnTextActive : styles.fBtnText}>
        {__(latestFlag.name)}
      </Text>
    </Button>
  )
}

const LatestFlags = ({ filters, select }) => {
  const renderItem = item => (
    <LatestFlag item={item} filters={filters} select={select} />
  )
  return (
    <View style={styles.filterContentRow}>
      {Object.keys(latestFlags).map(renderItem)}
    </View>
  )
}

export default LatestFlags
