import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia } from 'rn-placeholder'

import styles from '../styles'

const Template = () => {
  const [list] = useState([1, 2, 3, 4, 5, 6])

  const renderItem = () => (
    <View style={styles.infoPlaceholder}>
      <Placeholder
        Animation={Fade}
      >
        <PlaceholderMedia style={styles.infoPlaceholderImg} />
      </Placeholder>
    </View>
  )

  return (
    <FlatList
      numColumns={2}
      data={list}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={item => (item)}
    />
  )
}

export default Template
