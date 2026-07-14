import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default () => {
  const [list] = useState([1, 2, 3])

  const renderItem = () => (
    <View style={styles.callertuneContent}>
      <Placeholder
        Animation={Fade}
      >
        <PlaceholderMedia style={[styles.callertunePlaceholder, {height: 150}]} />
      </Placeholder>
    </View>
  )

  return (
    <FlatList
      data={list}
      horizontal
      contentContainerStyle={styles.newContainer}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={item => (item)}
    />
  )
}
