import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Fade, Placeholder, PlaceholderLine, PlaceholderMedia } from 'rn-placeholder'

import styles from '../styles'


const Template = () => {
  const [list] = useState([1, 2, 3])

  const renderItem = () => (
    <View style={styles.walletContent}>
      <Placeholder
        Animation={Fade}
      >
        <View style={styles.walletDisplay} >
          <PlaceholderMedia width={50} style={styles.walletImg} />
        </View>
        <PlaceholderLine width={50} style={styles.walletText} />
        <PlaceholderLine width={50} style={styles.pointsText} />
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


