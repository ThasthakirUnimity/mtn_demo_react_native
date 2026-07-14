import React, { useState } from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

const Template = () => {
  const [list] = useState([1, 2, 3])

  const renderItem = () => (
    <View style={styles.featureContent}>
      <Placeholder
        Animation={Fade}
      >
        <PlaceholderMedia style={styles.featureImgDisplay} />
      </Placeholder>
    </View>
  )

  return (
    <FlatList
      data={list}
      numColumns={4}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
    />
  )
}

export default Template