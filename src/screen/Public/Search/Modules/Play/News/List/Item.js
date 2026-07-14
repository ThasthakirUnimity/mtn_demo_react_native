import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from '../styles'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import date from '@src/utility/date'

const Item = ({ item }) => {
  return (
    <Button style={styles.newsContent} onPress={() => navigate('PlayNewsView', { url: item.url })}>
      <View style={styles.newsCol}>
        <Text numberOfLines={2} style={styles.newsTitle}>{item.title}</Text>
        <Text numberOfLines={2} style={styles.newsText}>{item.description || item.content}</Text>
        <Text style={styles.publishedDate}>{date.format(item.published_at)}</Text>
      </View>
      <Image source={{ uri: item.image }} style={styles.newsImg} resizeMode='contain' />
    </Button>
  )
}

export default Item
