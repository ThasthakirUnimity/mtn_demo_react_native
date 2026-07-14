import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default () => {
  const [list] = useState([1, 2, 3, 4])

  const renderItem = () => <View style={styles.featureContent}>
    <Placeholder
      Animation={Fade}
    >
      <View>
        <PlaceholderMedia>
          <PlaceholderLine style={styles.featureImg} />
        </PlaceholderMedia>
      </View>
      <PlaceholderLine width={80} style={styles.featureDesc} />
    </Placeholder>
  </View>

  return (
    <View>
      <FlatList
        data={list}
        contentContainerStyle={styles.storeContent}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={i => (i)}
      />
    </View>
  )
}
