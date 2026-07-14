import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Text, Icon } from '@src/component/Basic'
import { navigate } from '@src/navigation'
import { Button } from '@src/component/Form'

import styles from '../styles'
import { __ } from '@src/utility/translation'
import { GAME_API_URL } from '@src/config/env'

export default class extends React.Component {
  render() {
    const item = this.props.item

    return (
      <Button style={styles.challengeContainer} onPress={() => { navigate(item.name) }}>
        <View style={styles.challengeContent}>
          <Image source={{ uri: GAME_API_URL + item.eventImgPath }} style={styles.challengeImg} />
          <View style={styles.challengeContent2}>
            <Text style={styles.session}>{item.action_text}</Text>
            <Text numberOfLines={2} style={styles.challengeText}>{item.description}</Text>
          </View>
        </View>
        <Button onPress={() => { navigate(item.name) }} style={styles.startBtn}>
          <Text style={styles.startBtnText}>Start</Text>
        </Button>
      </Button>
    )
  }
}
