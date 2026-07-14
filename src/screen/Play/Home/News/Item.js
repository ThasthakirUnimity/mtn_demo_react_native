import React from 'react'
import { Image, View, Text } from 'react-native'

import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import date from '@src/utility/date'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item }) => {
  return (
    <Button
      style={styles.newsContent}
      onPress={() => {
        logClickEvent('PlayServiceNewsItem', { title: item.title })
        navigate('PlayNewsView', { url: item.url })
      }}
    >
      <View style={styles.newsCol}>
        <Text numberOfLines={2} style={styles.newsTitle}>{item.title}</Text>
        <Text numberOfLines={2} style={styles.newsText}>{item.description || item.content}</Text>
        <Text style={styles.publishedDate}>{date.formatFull(item.published_at)}</Text>
      </View>
      <Image source={{ uri: item.urlToImage }} style={styles.newsImg} resizeMode='contain' />
    </Button>
  )
}

export default Item
