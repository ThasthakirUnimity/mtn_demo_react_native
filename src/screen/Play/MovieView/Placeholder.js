import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from './styles'

export default class extends React.Component {
  render() {
    return (
      <Placeholder
        Animation={Fade}
        style={styles.placeholder}
      >
        <View >
          <PlaceholderMedia style={styles.watchImg} />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.language}>
            <PlaceholderLine width={50} />
          </View>
          <View style={styles.watchContent}>
            <View style={styles.movieImg}>
              <PlaceholderMedia width={30} style={styles.watchMovieImg} />
            </View>
            <View style={styles.watchContent1}>
              <View style={theme.row}>
                <PlaceholderLine style={styles.movieTitle} width={30} />
              </View>
            </View>
            <PlaceholderLine style={styles.movieText} width={90} />
            <View style={styles.btnRow}>
              <PlaceholderLine style={styles.btnIcon} width={10} />
              <PlaceholderLine style={styles.btnText} width={10} />
            </View>
            <View style={styles.trailer}>
              <PlaceholderMedia style={styles.watchMovieImg} />
            </View>
          </View>
        </View>
      </Placeholder>
    )
  }
}
