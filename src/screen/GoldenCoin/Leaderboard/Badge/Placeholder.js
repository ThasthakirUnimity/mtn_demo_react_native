import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render() {
    return (
      <Placeholder
        Animation={Fade}
      >
        <View style={styles.leaderboardContainer}>
          <View style={styles.leaderboardContent}>
            <PlaceholderMedia style={styles.leaderboardImage} />
            <View style={{flex: 1, marginLeft: 15}}>
              <PlaceholderLine width={80} />
              <PlaceholderLine width={40} />
            </View>
          </View>
        </View>
      </Placeholder>
    )
  }
}
