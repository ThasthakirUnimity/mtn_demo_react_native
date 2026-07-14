import React from 'react'
import { Text } from 'react-native'

import { Button } from '@src/component/Form'
import styles from './../../../styles'

const Item = ({ item, tabSelected, selectTab }) => {
  const selected = tabSelected?.id === item.id
  const _select = () => selectTab(item)
  return (
    <Button
      style={selected ? styles.tabActive : styles.tabInactive}
      onPress={_select}
    >
      <Text style={selected ? styles.tabActiveText : styles.tabInactiveText}>{item.title}</Text>
    </Button>
  )
}

export default Item
