import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default () => {
  const [list] = useState([1,2,3])

  const renderItem = () => (<View style={styles.placeholderContent}>
     <Placeholder
          Animation={Fade}
        >
          <View>
            <PlaceholderMedia style={styles.placeholderGroup} />
          </View>
        </Placeholder>
  </View>)

  return (
    <FlatList
      data={list}
      contentContainerStyle={styles.topupContainer}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={item => (item)}
    />
  )
}
