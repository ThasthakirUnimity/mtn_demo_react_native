import React from 'react'
import { Text } from 'react-native'

import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from './../styles'

const Item = ({ item, amountSelected, selectAmount }) => {
  const selected = amountSelected?.amount === item.amount
  const _selectAmount = () => selectAmount(item)
  return (
    <Button style={selected ? styles.priceBtnActive : styles.priceBtn} onPress={_selectAmount}>
      <Text style={selected ? styles.priceBtnTextActive : styles.priceBtnText}>{item.currency}{item.amount}</Text>
    </Button>
  )
}

export default Item
