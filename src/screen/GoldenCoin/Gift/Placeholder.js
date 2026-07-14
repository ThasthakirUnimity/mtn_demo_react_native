import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { Fade, Placeholder, PlaceholderLine, PlaceholderMedia } from 'rn-placeholder'

import styles from '../styles'

const Template = () => {
  const [list] = useState([1, 2, 3])

  const renderItem = () => (
    <View style={styles.giftContent}>
      <Placeholder
        Animation={Fade}
      >
        <View style={styles.giftDisplay} >
          <PlaceholderMedia width={50} style={styles.giftImg} />
        </View>
        <PlaceholderLine width={50} style={styles.giftText} />
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

export default Template
