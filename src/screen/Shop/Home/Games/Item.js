import React from 'react'
import { Image, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Text, Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import styles from '../styles'
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
  return (
    <Button
      style={styles.gameContent}
      onPress={() => {
        logClickEvent('ShopGameItem', { title: item.title })
        navigate('ShopView', { id: item.id, item })
      }}
    >
      <LinearGradient colors={['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.2)']} style={[{ backgroundColor: colors[index] || '#fff' }, styles.linearGameImg]}>
        <View style={styles.gamePicture}>
          <Image source={{ uri: item.field_product_image_small }} resizeMode='cover' style={styles.gameImg} />
        </View>
        <View style={styles.gameCol}>
          <View>
            <Text style={styles.gamesText} numberOfLines={2}>{item.title}</Text>
          </View>
          <View>
            <Text style={styles.gamesText2} numberOfLines={2}>{item.field_product_caption}</Text>
          </View>
        </View>
      </LinearGradient>
    </Button>
  )
}

export default Item
