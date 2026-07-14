import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from '../styles'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import date from '@src/utility/date'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item }) => {
  return (
    <Button
      style={styles.newsContent}
      onPress={() => {
        logClickEvent('PlayServiceNewsListItem', {
          title: item.title
        })
        navigate('PlayNewsView', { url: item.url })
      }}
    >
      <Image source={{ uri: item.urlToImage }} style={styles.newsImg} resizeMode='cover' />
      <View style={styles.newsCol}>
        <Text numberOfLines={2} style={styles.newsTitle}>{item.title}</Text>
        {/* }<Text numberOfLines={2} style={styles.newsText}>{item.description || item.content}</Text>{ */}
        <Text style={styles.publishedDate}>{date.formatFull(item.published_at)}</Text>
      </View>
    </Button>
  )
}

export default Item
