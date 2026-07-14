import React from 'react'
import { Image, View } from 'react-native'
import { Icon, Text } from '@src/component/Basic'

import styles from '../styles'
import theme from '@src/theme/styles'
import { Button } from '@src/component/Form'

const Item = ({ item, changeTrack }) => {
  const _select = () => changeTrack(item)
  return (
    <View style={styles.playListItem}>
      <Image source={{ uri: item.contentImagePath }} style={styles.playListImg} />
      <View style={styles.playListCol}>
        <View style={styles.playListLeft}>
          <View style={theme.row}>
            <Text style={styles.playListTitle}>{item.title}</Text>
          </View>
          <View style={theme.row}>
            <Text style={styles.playListDesc}>{item.contentArtist}</Text>
          </View>
        </View>
        <View style={styles.playListRight}>
          <Button style={styles.playListBtn} onPress={_select}>
            <Icon name='play' type='FontAwesome5' style={styles.playListBtnIcon} />
          </Button>
          <Button style={styles.playListBtn}>
            <Icon name='dots-three-vertical' type='Entypo' style={styles.playListDotBtnIcon} />
          </Button>
        </View>
      </View>
    </View>
  )
}
export default Item
