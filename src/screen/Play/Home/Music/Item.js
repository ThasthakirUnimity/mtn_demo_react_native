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
    <View style={styles.musicContent}>
      <Button
        onPress={() => {
          logClickEvent('PlayServiceMusicItem', {
            title: item.title
          })
          navigate('PlayMusicView', { music: item })
        }}
      >
        <Image source={{ uri: item.field_image }} style={styles.musicImg} />
        <View style={styles.musicBox}>
          <View style={styles.musicBtn}>
            <Icon name='play' type='Ionicons' style={styles.musicBtnIcon} />
          </View>
        </View>
      </Button>
    </View>
  )
}

export default Item
