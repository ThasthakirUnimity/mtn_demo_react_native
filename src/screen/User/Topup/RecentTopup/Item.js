import React from 'react'
import { View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from './../styles'

const Item = ({ item, selectRecentTopup }) => {
  const _selectRecentTopup = () => selectRecentTopup(item.amount)
  return (
    <View style={styles.recentItem}>
      <Text style={styles.recentPrice}>{item.amount}</Text>
      <Button style={styles.recentBtn} onPress={_selectRecentTopup}>
        <Text style={styles.recentBtnText}>{__('Repeat')}</Text>
      </Button>
    </View>
  )
}

export default Item
