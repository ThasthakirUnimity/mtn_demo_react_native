import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default () => {
  const [list] = useState([1, 2, 3])

  const renderItem = () => (
    <View style={styles.liveContent}>
      <Placeholder
        Animation={Fade}
      >
          <PlaceholderMedia style={styles.livePlaceholder} />
      </Placeholder>
    </View>
  )

  return (
    <FlatList
      data={list}
      horizontal
      contentContainerStyle={styles.liveContainer}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={item => (item)}
    />
  )
}
