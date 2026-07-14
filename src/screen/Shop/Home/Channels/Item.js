import React from 'react'
import { Image, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Text, Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import { logClickEvent } from '@src/utility/analytics'
import { navigate } from '@src/navigation'

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
      style={styles.channelContent}
      onPress={() => {
        logClickEvent('ShopChannelItem', { title: item.title })
        navigate('ShopView', { id: item.id, item })
      }}
    >
      <LinearGradient colors={['rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.2)']} style={[{ backgroundColor: colors[index] || '#fff' }, styles.linearChannelImg]}>
        <View style={styles.gamePicture}>
          <Image source={{ uri: item.field_product_image_banner }} resizeMode='cover' style={styles.gameImg} />
        </View>
        <View style={styles.gameCol}>
          <View>
            <Text style={styles.channelName}>{item.title}</Text>
          </View>
          <Text style={styles.channelsText}>{item.field_product_caption}</Text>
        </View>
      </LinearGradient>
    </Button>
  )
}

export default Item
