import React from 'react'
import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Icon } from '@src/component/Basic'
import styles from './styles'
import { COLOR } from '@src/theme/typography'

const BalanceItem = ({ iconName, iconType, title, value, subtitle, progress }) => (
  <View style={styles.biItem}>
    <Icon name={iconName} type={iconType} style={styles.biIcon} />
    <Text style={styles.biTitle}>{title}</Text>
    <Text style={styles.biValue} numberOfLines={1}>{value}</Text>
    <Text style={styles.biSubtitle} numberOfLines={1}>{subtitle}</Text>
    {typeof progress === 'number' && (
      <View style={styles.biProgressBg}>
        <LinearGradient
          colors={[COLOR.PRIMARY, COLOR.SECONDARY]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.biProgressFill, { width: `${Math.min(Math.max(progress, 0), 100)}%` }]}
        />
      </View>
    )}
  </View>
)

export default BalanceItem
