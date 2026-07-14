import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

const Template = () => {
  const [list] = useState([1, 2, 3])

  const renderItem = () => (
    <View style={styles.trendingContent}>
      <Placeholder
        Animation={Fade}
      >
        <PlaceholderMedia style={styles.trendingImg} />
      </Placeholder>
    </View>
  )

  return (
    <FlatList
      data={list}
      contentContainerStyle={styles.trendingContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={item => (item)}
    />
  )
}

export default Template