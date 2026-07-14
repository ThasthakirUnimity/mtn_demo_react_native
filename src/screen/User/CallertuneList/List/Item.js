import React from 'react'
import { Image, View } from 'react-native'
import { Icon, Text } from '@src/component/Basic'

import styles from '../styles'
import theme from '@src/theme/styles'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { COLOR } from '@src/theme/typography'

const colors = [
  '#ffe992',
  '#54E38E',
  '#D4FC78',
  '#C1E3FF',
  '#8DE8FF',
  '#DEB0DF',
  '#F8C390',
  '#A16BFE',
  '#E16E93',
  '#ABC7FF',

  '#e8b525',
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
  const onPress = () => navigate('UserCallertune', { tune: item })
  return (
    <Button style={[{ backgroundColor: colors[index] || COLOR.SMOKE }, styles.playListItem]} onPress={onPress}>
      <View style={styles.playGroup}>
        <View style={theme.row}>
          <Text style={styles.playListTitle} numberOfLines={2}>{item.title}</Text>
        </View>
        <View style={theme.row}>
          <Text style={styles.playListDesc}>{item.contentAlbum}</Text>
        </View>
      </View>
      <View style={styles.playCol}>
        <View style={styles.playListBtn}>
          <Icon name='play' type='FontAwesome5' style={styles.playListBtnIcon} />
        </View>
        <Text style={styles.playValidity}>{item.contentValidity}</Text>
      </View>
    </Button>
  )
}
export default Item
