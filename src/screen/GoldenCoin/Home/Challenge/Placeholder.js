import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderLine, PlaceholderMedia } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render () {
    return (
      <View style={styles.challengeContainer}>
        <Placeholder
          Animation={Fade}
        >
          <View style={styles.challengeContent}>
            <PlaceholderMedia width={50} style={styles.challengeImg} />
            <View style={{ flex: 1, marginLeft: 15 }}>
              <PlaceholderLine width={30} />
              <PlaceholderLine width={60} />
            </View>
          </View>
          <PlaceholderLine width={100} style={{ marginVertical: 10 }} />
        </Placeholder>
      </View>
    )
  }
}
