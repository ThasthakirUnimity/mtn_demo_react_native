import React from 'react'
import { View } from 'react-native'

import { __ } from '@src/utility/translation'
import Item from './Item'
import styles from './../styles'

const Amount = ({ list, amountSelected, selectAmount }) => {
  const renderItem = (item) => (<Item key={item} item={item} amountSelected={amountSelected} selectAmount={selectAmount} />)
  return (
    <View style={styles.price}>
      {list.map(renderItem)}
    </View>
  )
}

export default Amount
