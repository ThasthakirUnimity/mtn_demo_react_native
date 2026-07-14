import React from 'react'
import { Image, View } from 'react-native'

import { Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import { navigate } from '@src/navigation'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ item }) => {
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
      <Image source={{ uri: item.field_image }} style={styles.musicImg} resizeMode='contain' />
      <View style={styles.musicVideo}>
        <View style={styles.musicBtn}>
          <Icon name='controller-play' type='Entypo' style={styles.musicBtnIcon} />
        </View>
      </View>
    </Button>
  )
}

export default Item
