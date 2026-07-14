import React from 'react'
import { Image, View } from 'react-native'
import { Icon, Text } from '@src/component/Basic'

import styles from './styles'
import theme from '@src/theme/styles'
import { Button } from '@src/component/Form'

const Subscribed = ({ tuneSubscribed, removeSubscription }) => {
  if (!(tuneSubscribed?.toneId)) {
    return null
  }
  const _removeSubscription = () => removeSubscription()
  return (
    <View style={styles.playListItem}>
      <Image source={{ uri: tuneSubscribed.contentImagePath }} style={styles.playListImg} />
      <View style={styles.playListCol}>
        <View style={styles.playListLeft}>
          <View style={theme.row}>
            <Text style={styles.playListTitle}>{tuneSubscribed.title}</Text>
          </View>
          <View style={theme.row}>
            <Text style={styles.playListDesc}>{tuneSubscribed.contentArtist}</Text>
          </View>
        </View>
        <View style={styles.playListRight}>
          <Button style={styles.playListBtn} onPress={_removeSubscription}>
            <Text>Unsubscribe</Text>
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Subscribed
