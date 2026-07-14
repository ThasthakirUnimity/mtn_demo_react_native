import React from 'react'
import { Image, View } from 'react-native'
import { Icon, Text } from '@src/component/Basic'

import styles from './styles'
import theme from '@src/theme/styles'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'

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
            <Text style={styles.playListTitle} numberOfLines={2}>{tuneSubscribed.title}</Text>
          </View>
          <View style={theme.row}>
            <Text style={styles.playListDesc}>{tuneSubscribed.contentArtist}</Text>
          </View>
        </View>
        <View style={styles.playListRight}>
          <Button style={styles.playSubscribeBtn} onPress={_removeSubscription}>
            <Text style={styles.playSubscribeBtnText}>{__('Unsubscribe')}</Text>
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Subscribed
