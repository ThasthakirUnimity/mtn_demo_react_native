import React from 'react'
import { ScrollView, View } from 'react-native'

import styles from './../../../styles'
import Item from './Item'

const Tabs = ({ searchTypes, tabSelected, selectTab }) => {
  const renderTab = (item) => (<Item item={item} tabSelected={tabSelected} selectTab={selectTab} />)
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.tabSelect}>
        {searchTypes.map(renderTab)}
      </View>
    </ScrollView>
  )
}

export default Tabs
