import React from 'react'
import { Image, View } from 'react-native'
import { Text, Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'

import styles from '../styles'

import theme from '@src/theme/styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'

const Item = ({ item }) => {
  const onPress = () => navigate('GoldenCoinRewardView', { id: item.id })
  return (
    <Button
      style={styles.rewardContainer}
      onPress={onPress}
    >
      <View style={styles.rewardContent}>
        <View>
          <View style={theme.row}>

            <Text style={styles.giftText}>{item['gift_' + item.language] || item.title}</Text>

          </View>
          <View style={theme.row}>
            <Text style={styles.date}>{item['date_' + item.language] || (item.flag_type != null) ? item.field_validity : item.field_expiry_date}</Text>
          </View>
        </View>
        <View style={styles.rewardInfo}>
          <Image source={{ uri: (item.flag_type != null) ? item.field_image : item.field_logo }} style={styles.rewardImage} />
          <Button onPress={() => {
            navigate('UserMyRewardsDetail', item)
          }}
          >
            <Text style={styles.detailText}>{__('Details')}</Text>
          </Button>
        </View>
      </View>
    </Button>
  )
}

export default Item
