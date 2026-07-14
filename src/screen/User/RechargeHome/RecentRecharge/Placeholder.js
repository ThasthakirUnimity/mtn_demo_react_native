import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from './../styles'

const Template = () => {
  const [list] = useState([1, 2, 3])

  const renderItem = (item) => (
    <View key={item} style={styles.musicContent}>
      <Placeholder
        Animation={Fade}
      >
        <PlaceholderMedia style={styles.musicImg} />
      </Placeholder>
    </View>
  )

  return list.map(renderItem)
}

export default Template