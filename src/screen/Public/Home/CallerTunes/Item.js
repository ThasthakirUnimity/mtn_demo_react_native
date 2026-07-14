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
  '#C4E759',
  '#54E38E',
  '#D4FC78',
  '#C1E3FF',
  '#8DE8FF',
  '#DEB0DF',
  '#F8C390',
  '#A16BFE',
  '#E16E93',
  '#ABC7FF',

  '#C4E759',
  '#54E38E',
  '#D4FC78',
  '#C1E3FF',
  '#8DE8FF',
  '#DEB0DF',
  '#F8C390',
  '#A16BFE',
  '#E16E93',
  '#ABC7FF'
]

const Item = ({ item, index }) => {
  const onPress = () => {
    logClickEvent('HomeCallerTuneItem', {
      name: item.title
    })
    navigate('UserCallertune', { tune: item })
  }
  return (
    <View style={styles.callertuneContent}>
      <LinearGradient colors={['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.2)']} style={[{ backgroundColor: colors[index] || '#fff' }, styles.linearCallertuneImg]}>
        <View style={styles.callertuneCol}>
          <Text style={styles.callertunesText}>{item.contentAlbum}</Text>
          <Text style={styles.callertunesDesc} numberOfLines={3}>{item.title}</Text>
        </View>
        <Button style={styles.callertuneBtn} onPress={onPress}>
          <View style={styles.callertuneplayBtn}>
            <Icon name='controller-play' type='Entypo' style={styles.callertuneplayBtnIcon} />
          </View>
          <Text style={styles.callertunesDesc}>1 Min</Text>
        </Button>
      </LinearGradient>
    </View>
  )
}

export default Item
