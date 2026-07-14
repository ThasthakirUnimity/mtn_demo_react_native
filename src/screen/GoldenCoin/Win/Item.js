import React from 'react'
import { TouchableOpacity, Image ,View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import { __ } from '@src/tility/translation'

export default class extends React.Component {
  render() {
    const item = this.props.item

    return (
        <View style={styles.winContent}>
          <View>
            <Image source={{ uri: item.image }} style={styles.winImg}/>
          </View>
          <Text style={styles.winText}>{item.desc}</Text>
        </View>
    )
  }
}
