import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Fade, Placeholder } from 'rn-placeholder'

import styles from '../styles'

const Template = () => {
  const [list] = useState([1,2,3])

  const renderItem = () => (
    <View style={styles.postpaidContent}>
      <Placeholder
        Animation={Fade}
      >
        <View style={styles.postpaidDisplay}>
        </View>
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