import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render() {
    return (
      <View style={styles.walkthroughContent}>
      <Placeholder
        Animation={Fade}
      >
          <View>
            <PlaceholderMedia style={styles.walkthroughDisplay}>
              <PlaceholderLine style={styles.walkthroughImg} />
            </PlaceholderMedia>
          </View>
          <PlaceholderLine width={80} style={styles.walkthroughText} />
      </Placeholder>
      </View>
    )
  }
}
