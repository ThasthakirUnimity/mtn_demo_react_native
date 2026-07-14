import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { Fade, Placeholder, PlaceholderLine, PlaceholderMedia } from 'rn-placeholder'

import styles from '../styles'

const Template = () => {
  const [list] = useState([1, 2, 3])

  const renderItem = () => (
    <View style={styles.cashbackContent}>
      <Placeholder
        Animation={Fade}
      >
        <View>
          <View style={styles.imgBg}>
            <View style={styles.imgBgLine} />
            <PlaceholderMedia width={50} style={styles.rewardImg} />
            <PlaceholderMedia width={30} style={styles.rewardText} />
          </View>
        </View>
        <View style={styles.rewardContent2}>
          <PlaceholderLine width={50} />
          <View style={styles.redeemBtn} width={50}>

          </View>
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

