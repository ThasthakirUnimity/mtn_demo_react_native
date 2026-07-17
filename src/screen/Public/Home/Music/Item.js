import React from 'react'
import { Image, View, Text } from 'react-native'

import { Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import { navigate } from '@src/navigation'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item }) => {
  const title = item?.name || item?.title || ''
  const artist = item?.field_artist || item?.artist || item?.field_singer || ''

  return (
    <Button
      style={styles.musicContent}
      onPress={() => {
        logClickEvent('HomeMusicItem', {
          name: item?.name || item?.title || ''
        })
        navigate('PlayMusicView', { music: item })
      }}
    >
      <View style={styles.musicImgWrap}>
        <Image source={{ uri: item.field_image }} style={styles.musicImg} resizeMode='cover' />
        <View style={styles.musicVideo}>
          <View style={styles.musicBtn}>
            <Icon name='controller-play' type='Entypo' style={styles.musicBtnIcon} />
          </View>
        </View>
      </View>
      {!!title && <Text style={styles.musicItemTitle} numberOfLines={1}>{title}</Text>}
      {!!artist && <Text style={styles.musicItemArtist} numberOfLines={1}>{artist}</Text>}
    </Button>
  )
}

export default Item
