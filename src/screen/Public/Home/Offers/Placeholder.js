import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

const Template = () => {
  const [list] = useState([1, 2, 3])

  const renderItem = () => (
    <View style={styles.layout}>
      <Placeholder
        Animation={Fade}
      >
        <View style={styles.offerContent}>
          <PlaceholderMedia style={styles.offerImg} />
          <View style={styles.offerContent2}>
            <PlaceholderLine width={30} style={styles.offerText} />
            <PlaceholderLine width={50} style={styles.offerCashbackText} />
            <PlaceholderLine width={30} style={styles.offerExpiryText} />
          </View>
        </View>
      </Placeholder>
    </View>
  )

  return (
    <FlatList
      data={list}
      contentContainerStyle={styles.offerContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={item => item}
    />
  )
}

export default Template