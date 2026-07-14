import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder } from 'rn-placeholder'

import styles from './../styles'

const Template = () => {
  return (
    <View style={styles.profileContent}>
      <Placeholder
        Animation={Fade}
      >
      </Placeholder>
    </View>
  )
}

export default Template