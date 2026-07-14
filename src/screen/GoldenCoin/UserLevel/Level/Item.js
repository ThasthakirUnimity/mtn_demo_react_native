import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Text, Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'

import styles from '../styles'

import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'

export default class extends React.Component {
  render() {
    const item = this.props.item

    return (
        <Button style={styles.workItem}>
          <View style={styles.workBg}>
            <Image source={{ uri: item.field_image }} style={styles.workImg} resizeMode='contain' />
          </View>
          <View style={styles.workCol}>
              <Text style={styles.workDesc} numberOfLines={3}>{item.content}</Text>
          </View>
        </Button>
    )
  }
}
