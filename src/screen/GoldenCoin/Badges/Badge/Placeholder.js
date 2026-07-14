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
        <View style={styles.badgeContainer}>
          <View style={styles.badgeContent}>
            <PlaceholderMedia style={styles.badgeImage} />
            <View width={80}  style={styles.badgeInfo}>
              <PlaceholderLine width={20} />
              <PlaceholderLine width={20} />
            </View>
          </View>
          <PlaceholderLine width={10} />
        </View>
      </Placeholder>
    )
  }
}
