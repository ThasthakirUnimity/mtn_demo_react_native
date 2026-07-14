import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Fade, Placeholder as PlaceholderNative, PlaceholderMedia } from 'rn-placeholder'

import styles from '../styles'

const Placeholder = () => {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7, 8])

  const renderItem = () => (

    <View style={styles.placeholderItem}>
      <PlaceholderNative
        Animation={Fade}
      >
        <PlaceholderMedia style={{ width: '100%', height: 150, borderRadius: 13 }} />
      </PlaceholderNative>
    </View>

  )

  return (
    <FlatList
      data={list}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={item => (item)}
    />
  )
}

export default Placeholder
