import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render() {
    return (
      <View style={styles.mobileContent}>
        <Placeholder
          Animation={Fade}
        >
          <View>
            <PlaceholderMedia style={styles.mobileDisplay}>
            </PlaceholderMedia>
          </View>
        </Placeholder>
      </View>
    )
  }
}
