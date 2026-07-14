import React from 'react'
import { View, Image } from 'react-native'
import { Text, Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'

import styles from '../styles'

import theme from '@src/theme/styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'

const Item = ({ item }) => {
  return (
    <Button style={styles.rewardContainer} onPress={() => { }}>
      <View style={styles.logoBg}>
        {/* <Icon name='star' type='Ionicons' style={styles.logo} /> */}
        <Image source={{ uri: item.field_image }} style={styles.logo} />

      </View>
      <View style={[styles.rewardInfo, theme.row]}>
        <Text style={styles.rewardText}>{item.content}</Text>
      </View>
    </Button>
  )
}

export default Item

