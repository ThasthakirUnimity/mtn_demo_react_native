import React from 'react'
import { View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { types } from '@src/config/filters/transaction'
import { __ } from '@src/utility/translation'
import styles from './../styles'

const Type = ({ item, filters, select }) => {
  const type = types[item]
  const selected = item == filters.type
  return (
    <Button
      style={selected ? styles.fBtnActive : styles.fBtn}
      onPress={() => select(item)}
    >
      <Text style={selected ? styles.fBtnTextActive : styles.fBtnText}>
        {__(type.name)}
      </Text>
    </Button>
  )
}

const Types = ({ filters, select }) => {
  const renderItem = item => (
    <Type item={item} filters={filters} select={select} />
  )
  return (
    <>
      <Text style={styles.filterHeader}>{__('Choose Type')}</Text>

      <View style={styles.filterContent}>
        {Object.keys(types).map(renderItem)}
      </View>
    </>
  )
}

export default Types
