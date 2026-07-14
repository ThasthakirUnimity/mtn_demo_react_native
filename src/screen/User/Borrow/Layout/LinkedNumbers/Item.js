import React from 'react'
import { View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import styles from './../../styles'

const Item = ({ item, selectNumber }) => {
  const selected = selectNumber == item.number
  const styleMain = [styles.linkedItem]
  if (selected) {
    styleMain.push(styles.linkedItemSelected)
  }
  const _select = () => selectNumber(item)
  return (
    <Button style={styleMain} onPress={_select}>
      <View style={styles.linkedInitial}>
        <Text style={styles.linkedInitialText}>S</Text>
      </View>
      <View style={styles.linkedCol}>
        <Text style={styles.linkedName}>{item.name}</Text>
        <Text style={styles.linkedNo}>{item.number}</Text>
      </View>
    </Button>
  )
}

export default Item
