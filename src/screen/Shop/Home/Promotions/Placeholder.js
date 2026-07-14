import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

const Template = () => {
  const [list] = useState([1,2,3])

  const renderItem = () => (
    <View style={styles.promotionContent}>
      <Placeholder
        Animation={Fade}
      >
        <PlaceholderMedia>
          <PlaceholderLine style={styles.promotionImg} />
        </PlaceholderMedia>
      </Placeholder>
    </View>
  )

  return (
    <FlatList
      data={list}
      horizontal
      contentContainerStyle={styles.promotionContainer}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={item => (item)}
    />
  )
}

export default Template
