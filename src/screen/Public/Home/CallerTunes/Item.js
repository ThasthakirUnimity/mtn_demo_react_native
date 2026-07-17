import React from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Text, Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import { navigate } from '@src/navigation'
import { logClickEvent } from '@src/utility/analytics'

const colors = [
  '#C4E759', '#54E38E', '#D4FC78', '#C1E3FF', '#8DE8FF',
  '#DEB0DF', '#F8C390', '#A16BFE', '#E16E93', '#ABC7FF',
  '#C4E759', '#54E38E', '#D4FC78', '#C1E3FF', '#8DE8FF',
  '#DEB0DF', '#F8C390', '#A16BFE', '#E16E93', '#ABC7FF'
]

const Item = ({ item, index }) => {
  const onPress = () => {
    logClickEvent('HomeCallerTuneItem', {
      name: item.title
    })
    navigate('UserCallertune', { tune: item })
  }

  return (
    <View style={styles.ctContent}>
      <LinearGradient
        colors={['rgba(255,255,255,0.75)', 'rgba(255,255,255,0.1)']}
        style={[styles.ctGradient, { backgroundColor: colors[index] || '#C1E3FF' }]}
      >
        {/* Album name */}
        {!!item.contentAlbum && (
          <Text style={styles.ctAlbum} numberOfLines={1}>{item.contentAlbum}</Text>
        )}

        {/* Tune title */}
        <Text style={styles.ctTuneTitle} numberOfLines={2}>{item.title}</Text>

        {/* Play row */}
        <Button style={styles.ctPlayRow} onPress={onPress}>
          <View style={styles.ctPlayBtn}>
            <Icon name='controller-play' type='Entypo' style={styles.ctPlayBtnIcon} />
          </View>
          <Text style={styles.ctDuration}>{__('1 Min')}</Text>
        </Button>
      </LinearGradient>
    </View>
  )
}

export default Item
