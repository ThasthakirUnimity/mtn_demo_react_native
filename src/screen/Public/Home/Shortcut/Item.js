import React from 'react'
import { View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import { Button } from '@src/component/Form'
import { logClickEvent } from '@src/utility/analytics'
import { COLOR } from '@src/theme/typography'

export default ({ item }) => {
  return (
    <Button
      style={styles.scItem}
      onPress={() => {
        if (!item.route) return
        if (item.logName) logClickEvent(item.logName)
        navigate(item.route)
      }}
    >
      <View style={styles.scIconWrap}>
        {item.iconType && item.icon && (
          <item.iconType name={item.icon} size={22} color={COLOR.PRIMARY} />
        )}
      </View>
      <Text style={styles.scIconLabel} numberOfLines={2}>{__(item.title)}</Text>
    </Button>
  )
}
