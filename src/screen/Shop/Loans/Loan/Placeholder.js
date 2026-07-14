import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render() {
    return (
      <View style={styles.insuranceContent}>
        <Placeholder
          Animation={Fade}
        >
          <View style={styles.insuranceContent2}>
            <View style={styles.insuranceDetail}>
              <View width={250}>
                <PlaceholderLine width={80} style={styles.insuranceText} />
                <PlaceholderLine width={50} style={styles.insuranceDesc} />
              </View>
              <View style={styles.priceDetail}>
                <PlaceholderLine width={50} style={styles.insurancePremium} />
              </View>

            </View>
          </View>
        </Placeholder>
      </View>
    )
  }
}
