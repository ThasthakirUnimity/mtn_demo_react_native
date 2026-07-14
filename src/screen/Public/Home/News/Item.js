import React from 'react'
import { Image, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import { logClickEvent } from '@src/utility/analytics'

export default ({ item }) => {
  return (
    <View style={styles.newContent}>
      <Button
        onPress={() => {
          logClickEvent('HomeNewsItem', {
            name: item.title
          })
          navigate('PlayNewsView', { url: item.url })
        }}
      >
        <Image source={{ uri: item.urlToImage }} style={styles.newImg} />
        <View style={styles.events}>
          <Text style={styles.eventText}>{item.title}</Text>
        </View>
      </Button>
      <Text style={styles.newText} numberOfLines={2}>{item.description || item.content}</Text>
    </View>
  )
}
