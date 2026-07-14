import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render () {
    return (
      <View style={styles.placeholder}>
        <Placeholder
          Animation={Fade}
        >
          <PlaceholderMedia style={styles.placeholderImg} />
        </Placeholder>
      </View>
    )
  }
}
