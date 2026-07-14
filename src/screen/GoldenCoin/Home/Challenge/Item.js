import React from 'react'
import { Image, View } from 'react-native'
import { Text } from '@src/component/Basic'
import { navigate } from '@src/navigation'
import { Button } from '@src/component/Form'

import styles from '../styles'
import { GAME_API_URL } from '@src/config/env'
import { __ } from '@src/utility/translation'

export default class extends React.Component {
  render () {
    const item = this.props.item

    const openItem = () => {
      if (item.name == 'spin_the_wheel') {
        navigate('GoldenCoinSpinTheWheel')
      } else if (item.name == 'play_quiz') {
        navigate('GoldenCoinQuizChallenge')
      }
    }

    return (
      <Button style={styles.challengeContainer} onPress={openItem}>
        <View style={styles.challengeContent}>
          <Image source={{ uri: GAME_API_URL + item.eventImgPath }} style={styles.challengeImg} />
          <View style={styles.challengeContent2}>
            <Text style={styles.session}>{item.action_text}</Text>
            <Text numberOfLines={2} style={styles.challengeText}>{item.description}</Text>
          </View>
        </View>
        <Button onPress={openItem} style={styles.startBtn}>
          <Text style={styles.startBtnText}>{__('Start')}</Text>
        </Button>
      </Button>
    )
  }
}
