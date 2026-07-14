import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Fade, Placeholder as PlaceholderNative, PlaceholderMedia } from 'rn-placeholder'

import styles from '../styles'

const Placeholder = () => {
  const [list] = useState([1, 2, 3])

  const renderItem = () => (
    <View style={styles.placeholderContent}>
      <PlaceholderNative
        Animation={Fade}
      >
        <View>
          <PlaceholderMedia style={styles.placeholderGroup} />
        </View>
      </PlaceholderNative>
    </View>
  )

  return (
    <FlatList
      data={list}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={item => (item)}
    />
  )
}

export default Placeholder
