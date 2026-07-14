import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render() {
    return (
      <View style={styles.placeholderContent}>

        <Placeholder
          Animation={Fade}
        >
          <View>
            <PlaceholderMedia style={styles.placeholderGroup}/>
          </View>
        </Placeholder>
      </View>

    )
  }
}
