import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Fade, Placeholder as PlaceholderNative, PlaceholderMedia } from 'rn-placeholder'

import styles from '../styles'

const Placeholder = () => {
  const [list] = useState([1, 2, 3])

  const renderItem = () => (
    <View style={styles.mobileContent}>
      <PlaceholderNative Animation={Fade}>
        <View>
          <PlaceholderMedia style={styles.mobileDisplay} />
        </View>
      </PlaceholderNative>
    </View>
  )

  return (
    <FlatList
      data={list}
      numColumns={2}
      contentContainerStyle={styles.mobileContainer}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={item => (item)}
    />
  )
}

export default Placeholder
