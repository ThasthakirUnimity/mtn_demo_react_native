import React from 'react'
import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from './styles'

const QuickActionButtons = ({ onRecharge, onBuyAddon, onViewPlan }) => {
  const actions = [
    { label: __('Recharge'), onPress: onRecharge },
    { label: __('Buy Add-on'), onPress: onBuyAddon },
    { label: __('View Plan'), onPress: onViewPlan },
  ]
  return (
    <View style={styles.qaRow}>
      {actions.map(({ label, onPress }, i) => (
        <Button key={i} style={styles.qaBtn} onPress={onPress}>
          <LinearGradient
            colors={[COLOR.PRIMARY, COLOR.SECONDARY]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.qaGradientFill}
          >
            <Text style={styles.qaBtnText}>{label}</Text>
          </LinearGradient>
        </Button>
      ))}
    </View>
  )
}

export default QuickActionButtons
