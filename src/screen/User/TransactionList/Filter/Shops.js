import React from 'react'
import { View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { shops } from '@src/config/filters/transaction'
import { __ } from '@src/utility/translation'
import styles from './../styles'

const Shop = ({ item, filters, select }) => {
  const shop = shops[item]
  const selected = item == filters.shop
  return (
    <Button
      style={selected ? styles.fBtnActive : styles.fBtn}
      onPress={() => select(item)}
    >
      <Text style={selected ? styles.fBtnTextActive : styles.fBtnText}>
        {__(shop.name)}
      </Text>
    </Button>
  )
}

const Shops = ({ filters, select }) => {
  const renderItem = item => (
    <Shop item={item} filters={filters} select={select} />
  )
  return (
    <>
      <Text style={styles.filterHeader}>{__('Shop')}</Text>

      <View style={styles.filterContent}>
        {Object.keys(shops).map(renderItem)}
      </View>
    </>
  )
}

export default Shops
