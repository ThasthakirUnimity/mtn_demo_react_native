import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'

import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'

export default class extends React.Component {
  render() {
    const item = this.props.item

    return (
      <>
        <TouchableOpacity style={styles.leaderboardContainer} >
          <View style={styles.leaderboardContent}>
            <Image source={item?.profile_image ? { uri: item.profile_image } : require('@asset/icons/avatar-dark.png')} style={styles.leaderboardImage} />
            <View style={styles.leaderboardInfo}>
              <Text style={styles.lbPlace}>{item?.nick_name}</Text>
              <Text style={styles.lbPoints}>{item?.game_points} points</Text>
            </View>
          </View>
          <Text style={styles.itemDate}>{item?.rank}th</Text>
        </TouchableOpacity>
      </>


    )
  }
}
