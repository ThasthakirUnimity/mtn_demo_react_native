import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Text, Icon } from '@src/component/Basic'
import LinearGradient from 'react-native-linear-gradient';

import { Button } from '@src/component/Form'

import styles from '../styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'

const Item = ({ item }) => {
  return (
    <TouchableOpacity style={styles.rewardContainer} onPress={() => { navigate('UserMyRewardsDetail', item) }}>
      <View style={styles.rewardContent}>
        <View style={styles.imgBg}>
          <View style={styles.imgBgLine} />
          <Image source={{ uri: item.field_logo }} style={styles.rewardImg} resizeMode={'contain'} />
        </View>
        <Text style={styles.rewardText}>{item.title}</Text>
      </View>
      <View style={styles.rewardContent2}>
        <Text style={styles.rewardExpiry}>{item.field_expiry_date}</Text>
        <Button style={styles.redeemBtn}>
          <Text style={styles.redeemBtnText}>Redeem</Text>
        </Button>
      </View>
    </TouchableOpacity>
  )
}

export default Item

       