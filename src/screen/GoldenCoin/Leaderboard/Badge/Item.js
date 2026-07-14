import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Text, Icon } from '@src/component/Basic'

import styles from '../styles'

import { __ } from '@src/utility/translation'

export default class extends React.Component {
  render() {
    const item = this.props.item

    return (
      <>
        <TouchableOpacity style={styles.leaderboardContainer} onPress={() => this.refs.modalProfile.open()}>
          <View style={styles.badgeContent}>
            <View>
              <Image source={{ uri: item.image }} style={styles.leaderboardImage} />
              <Text style={styles.lvText}>LV.2</Text>
            </View>
            <View style={styles.badgeInfo}>
              <Text style={styles.badgeName}>{item.name}</Text>
              <Text style={styles.badgeItems}>{__('Complete a Quick Quize')}</Text>
              <View style={styles.voteDetail}>
                <View style={styles.soldInfo}>
                  <View style={styles.soldLine} />
                  <View style={[styles.soldLineActive, { width: '70%' }]} />
                </View>
              </View>
              <Text style={styles.xpText}>{__('12xp')}</Text>
            </View>
          </View>

        </TouchableOpacity>
      </>


    )
  }
}
