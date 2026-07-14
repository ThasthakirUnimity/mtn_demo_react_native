import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

const Template = () => {
  const [list] = useState([1, 2, 3])

  const renderItem = () => (
    <View style={styles.moviesContent}>
      <Placeholder
        Animation={Fade}
      >
          <PlaceholderMedia style={styles.moviesImg} />
      </Placeholder>
    </View>
  )

  return (
    <FlatList
      data={list}
      horizontal
      contentContainerStyle={{ paddingLeft: 8, paddingVertical: 15 }}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={item => (item)}
    />
  )
}

export default Template