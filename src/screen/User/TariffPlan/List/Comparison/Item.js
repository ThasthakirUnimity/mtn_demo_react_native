import React from 'react'
import { View } from 'react-native'

import { Text, Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import styles from './../../styles'


const Item = ({ item, selectedPlans, select }) => {
  const selected = !!selectedPlans[item.id]
  const _select = () => select(item.id)
  return (
    <Button style={styles.personalRow} onPress={_select}>
      <View style={{flex: 1}}>
        <Text style={styles.mtnData}>{item.title}</Text>
      </View>
      <Icon
        style={styles.checkIcon}
        name={selected ? 'checkbox-marked' : 'checkbox-blank-outline'}
        type='MaterialCommunityIcons'
      />
    </Button>
  )
}

export default Item
