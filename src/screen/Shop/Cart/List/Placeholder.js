import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render() {
    return (
      <View style={styles.cartContainer}>
        <Placeholder
          Animation={Fade}
        >
        </Placeholder>
      </View>
    )
  }
}
