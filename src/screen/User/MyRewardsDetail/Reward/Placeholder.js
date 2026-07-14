import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { Fade, Placeholder, PlaceholderLine, PlaceholderMedia } from 'rn-placeholder'

import styles from '../styles'

const Template = () => {
  const [list] = useState([1, 2, 3])

  const renderItem = () => (
    <Placeholder
      Animation={Fade}
    >
      <View style={styles.rewardContainer}>
        <PlaceholderLine style={styles.placeholderGroup} />
      </View>
    </Placeholder>
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

export default Template



