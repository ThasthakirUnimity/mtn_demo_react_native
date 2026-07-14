import React from 'react'
import { View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import styles from './../../styles'
import { __ } from '@src/utility/translation'

const Item = ({ item, shareType, selectedPlan, selectPlan }) => {
  const selected = selectedPlan?.id == item.id
  const styleMain = [styles.planItem]
  if (selected) {
    styleMain.push(styles.planItemSelected)
  }
  const _select = () => selectPlan(item)
  return (
    <Button style={styleMain} onPress={_select}>
      <View style={styles.planRow}>
        <View style={styles.planCol}>
          <View style={styles.planRow}>
            <Text style={styles.planLabel}>{__('Validity')}</Text>
          </View>
          <View style={styles.planRow}>
            <Text style={styles.planValue}>{item.validity}</Text>
          </View>
        </View>
        {
          shareType.id == 'data' && (
            <View style={styles.planCol}>
              <View style={styles.planRow}>
                <Text style={styles.planLabel}>{__('Data')}</Text>
              </View>
              <View style={styles.planRow}>
                <Text style={styles.planValue}>{item.data}</Text>
              </View>
            </View>
          )
        }
        {
          shareType.id == 'airtime' && (
            <View style={styles.planCol}>
              <View style={styles.planRow}>
                <Text style={styles.planLabel}>{__('Airtime')}</Text>
              </View>
              <View style={styles.planRow}>
                <Text style={styles.planValue}>{item.airtime}</Text>
              </View>
            </View>
          )
        }
        <View style={styles.planCol}>
          <View style={styles.planRow}>
            <Text style={styles.planLabel}>{__('Calls')}</Text>
          </View>
          <View style={styles.planRow}>
            <Text style={styles.planValue}>{item.calls}</Text>
          </View>
        </View>
      </View>
      <View style={styles.planBot}>
        <Text style={styles.planBotLink} />
        <Text style={styles.planPrice}>{item.currency} {item.price}</Text>
      </View>
    </Button>
  )
}

export default Item
