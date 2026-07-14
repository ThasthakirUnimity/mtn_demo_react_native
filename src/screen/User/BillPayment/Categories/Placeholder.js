import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

const Template = () => {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

  const renderItem = () => (
    <View style={styles.billItem}>
      <Placeholder
        Animation={Fade}
      >
        <PlaceholderMedia style={styles.placeholderImg} />
        <PlaceholderLine width={100} style={styles.billTitle} />

      </Placeholder>
    </View>
  )

  return (
    <FlatList
      data={list}
      numColumns={4}
      renderItem={renderItem}
    />
  )
}

export default Template
