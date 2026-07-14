import React from 'react'
import { Text } from 'react-native'

import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from './../styles'

const Item = ({ item, select }) => {
  const _select = () => select(item)
  return (
    <Button style={styles.cardBtn} onPress={_select}>
      <Text style={styles.cardBtnText}>{__(item.titleLong)}</Text>
    </Button>
  )
}

export default Item
