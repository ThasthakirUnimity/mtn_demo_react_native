import React from 'react'
import { View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import styles from './../styles'
import { __ } from '@src/utility/translation'

const Item = ({ item, openView, repeatRecharge }) => {
  const _openView = () => openView(item)
  const _repeatRecharge = () => repeatRecharge(item)
  return (
    <View style={styles.planItem}>
      <View style={styles.planRow}>
        <Text style={styles.planTitle}>{__('Voice Bundle')}</Text>
      </View>
      <View style={styles.planContent}>
        <View style={styles.planInitial}>
          <Text style={styles.planInitialText}>{item.name.substring(0, 1)}</Text>
        </View>
        <View style={styles.planInfo}>
          <View style={styles.planRow}>
            <Text style={styles.planName}>{item.name}</Text>
          </View>
          <View style={styles.planRow}>
            <Text style={styles.planNo}>{item.number}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.planPrice}>{item.currency} {item.price}</Text>
        </View>
      </View>
      <View style={styles.planBot}>
        <Button style={styles.planDetailBtn} onPress={_openView}>
          <Text style={styles.planDetailBtnText}>{__('Details')}</Text>
        </Button>

        <Button style={styles.planBtn} onPress={_repeatRecharge}>
          <Text style={styles.planBtnText}>{__('Repeat')}</Text>
        </Button>
      </View>
    </View>
  )
}

export default Item
