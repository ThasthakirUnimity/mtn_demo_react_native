import React from 'react'
import { View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { sortings } from '@src/config/filters/transaction'
import { __ } from '@src/utility/translation'
import styles from './../styles'

const Item = ({ item, filters, select }) => {
  const sorting = sortings[item]
  const selected = item == filters.sorting
  return (
    <Button
      style={selected ? styles.fBtnActive : styles.fBtn}
      onPress={() => select(item)}
    >
      <Text style={selected ? styles.fBtnTextActive : styles.fBtnText}>
        {__(sorting.name)}
      </Text>
    </Button>
  )
}

const Sorting = ({ filters, select }) => {
  const renderItem = item => (
    <Item item={item} filters={filters} select={select} />
  )
  return (
    <>
      <Text style={styles.filterHeader}>{__('Price Sort')}</Text>

      <View style={styles.filterContent}>
        {Object.keys(sortings).map(renderItem)}
      </View>
    </>
  )
}

export default Sorting
