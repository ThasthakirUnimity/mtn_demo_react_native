import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderLine , PlaceholderMedia} from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render() {
    return (
      <View style={styles.challengeContainer}>
        <Placeholder
          Animation={Fade}
        >
          <View style={styles.challengeContent}>
            <PlaceholderMedia width={50} style={styles.challengeImg} />
            <View style={styles.challengeContent2}>
              <PlaceholderLine width={50} />
              <PlaceholderLine width={50} style={styles.challengeText} />
              <View style={styles.startBtn} width={50}>
                  <PlaceholderLine width={20} />
              </View>
              </View>
            </View>
      </Placeholder>
    </View>
        )
      }
    }
