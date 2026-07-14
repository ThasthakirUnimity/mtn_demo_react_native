import React from 'react'
import { Image, View } from 'react-native'
import { Icon, Text } from '@src/component/Basic'

import styles from '../styles'
import theme from '@src/theme/styles'
import { Button } from '@src/component/Form'
import Menu from '../Menu'

export default class extends React.Component {
  render () {
    const item = this.props.item

    const _select = () => this.props.changeTrack(item)

    return (
      <Button style={styles.playListItem} onPress={_select}>
        <Image source={{ uri: item.field_image }} style={styles.playListImg} />
        <View style={styles.playListCol}>
          <View style={styles.playListLeft}>
            <View style={theme.row}>
              <Text style={styles.playListTitle}>{item.title}</Text>
            </View>
            <View style={theme.row}>
              <Text style={styles.playListDesc}>{item.field_artists}</Text>
            </View>
          </View>
          <View style={styles.playListRight}>
            <Button style={styles.playListBtn}>
              <Icon name='play' type='FontAwesome5' style={styles.playListBtnIcon} />
            </Button>
            <Menu
              id={item?.id}
              content={
                <View style={styles.playListBtn}>
                  <Icon name='dots-three-vertical' type='Entypo' style={styles.playListDotBtnIcon} />
                </View>
              }
              openView={this.props.openView}
            />
          </View>
        </View>
      </Button>
    )
  }
}
