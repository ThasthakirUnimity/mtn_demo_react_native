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
        <PlaceholderMedia>
          <PlaceholderLine style={styles.winImg} />
        </PlaceholderMedia>
        <PlaceholderLine width={80} style={styles.winText} />
      </Placeholder>
    )
  }
}
