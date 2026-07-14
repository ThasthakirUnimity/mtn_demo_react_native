import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import { Button } from '@src/component/Form'
import { logClickEvent } from '@src/utility/analytics'

export default ({ item }) => {
  return (
    <Button
      style={styles.quickBtn}
      onPress={() => {
        if (!item.route) {
          return
        }
        if (item.logName) {
          logClickEvent(item.logName)
        }
        item.route && navigate(item.route)
      }}
    >
      <View style={styles.quickBtnBg}>
        <Image source={item.icon} style={styles.quickBtnImg} resizeMode='contain' />
      </View>
      <Text style={styles.quickBtnText}>{__(item.title)}</Text>
    </Button>
  )
}
