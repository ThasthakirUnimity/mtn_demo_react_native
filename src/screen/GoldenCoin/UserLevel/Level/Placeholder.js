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
        <View style={styles.workItem}>
          <PlaceholderMedia style={{width: 64, height: 64, borderRadius: 32}} />
          <View style={styles.workCol}>
            <PlaceholderLine width={100} />
            <PlaceholderLine width={80} />
            <PlaceholderLine width={60} />
          </View>
        </View>
      </Placeholder>
        )
      }
    }
