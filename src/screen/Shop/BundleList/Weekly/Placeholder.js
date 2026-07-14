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
        <View style={styles.placeholderContent}>
          <View>
            <PlaceholderLine style={styles.PlaceholderGroup} />
          </View>
        </View>
      </Placeholder>
    )
  }
}
