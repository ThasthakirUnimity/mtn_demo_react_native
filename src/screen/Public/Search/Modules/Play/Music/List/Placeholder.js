import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Fade, Placeholder } from 'rn-placeholder'

import styles from './../styles'

const Template = () => {
  const [list] = useState([1, 2, 3])

  const renderItem = () => (
    <View style={styles.rechargeContent2}>
      <Placeholder
        Animation={Fade}
      />
    </View>
  )

  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(v) => (v)}
    />
  )
}

export default Template
