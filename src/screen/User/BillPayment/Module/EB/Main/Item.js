import React, { useState } from 'react'
import { View } from 'react-native'

import { Icon, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import styles from '../../../styles'
import { __ } from '@src/utility/translation'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item, select, remove }) => {
  const [deleteUI, setDeleteUI] = useState(false)
  const onPress = () => setDeleteUI(false)
  const onLongPress = () => setDeleteUI(!deleteUI)
  const onAction = () => {
    if (deleteUI) {
      logClickEvent('PayBillEBNumberRemove', {
        number: item.meternumber
      })
      remove(item)
    } else {
      logClickEvent('PayBillEBNumberSelect', {
        number: item.meternumber
      })
      select(item)
    }
  }
  return (
    <Button style={styles.ebItem} onPress={onPress} onLongPress={onLongPress}>
      <View style={styles.ebCheck}>
        {deleteUI && <Icon type='Ionicons' name='checkbox' style={styles.ebCheckIcon} />}
      </View>
      <View style={styles.ebCol}>
        <View style={styles.ebRow}>
          <Text style={styles.ebItemName}>{item.name}</Text>
        </View>
        <View style={styles.ebRow}>
          <Text style={styles.ebItemNo}>{item.meternumber}</Text>
        </View>
      </View>
      <Button style={styles.ebBtn} onPress={onAction}>
        <Text style={styles.ebBtnText}>{__(deleteUI ? 'Delete' : 'Select')}</Text>
      </Button>
    </Button>
  )
}

export default Item
