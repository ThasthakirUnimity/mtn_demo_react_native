import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Placeholder, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

const Template = () => {
  const [list] = useState([1, 2, 4])

  const renderItem = () => (
    <View style={styles.newsContent}>
      <Placeholder>
        <PlaceholderLine style={styles.newsContentPlaceholder} />
      </Placeholder>
    </View>
  )

  return (
    <FlatList
      data={list}
      contentContainerStyle={styles.newsContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={item => (item)}
    />
  )
}

export default Template