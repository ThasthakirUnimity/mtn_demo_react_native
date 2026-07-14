import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render() {
    return (
      <View style={styles.featureContent}>
      <Placeholder
        Animation={Fade}
      >
          <View>
            <PlaceholderMedia>
              <PlaceholderLine style={styles.featureImg} />
            </PlaceholderMedia>
          </View>
          <PlaceholderLine width={80} style={styles.featureDesc} />
      </Placeholder>
      </View>
    )
  }
}
