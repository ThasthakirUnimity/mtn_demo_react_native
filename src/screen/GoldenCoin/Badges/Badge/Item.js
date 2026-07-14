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
        <TouchableOpacity style={styles.badgeContainer} >
          <View style={styles.badgeContent}>
            <View>
              <Image source={{ uri: item.image }} style={styles.badgeImage} />
              <Text style={styles.lvText}>{item.lv}</Text>
            </View>
            <View style={styles.badgeInfo}>
              <Text style={styles.badgeText}>{item.name}</Text>
              <Text style={styles.badgeDesc}>{__('Complete a Quick Quize')}</Text>
              <View style={styles.voteDetail}>
                <View style={styles.soldInfo}>
                  <View style={styles.soldLine} />
                  <View style={[styles.soldLineActive, { width: '70%' }]} />
                </View>
              </View>
              <Text style={styles.xpText}>{item.xp}</Text>
            </View>
          </View>

        </TouchableOpacity>
      </>


    )
  }
}
