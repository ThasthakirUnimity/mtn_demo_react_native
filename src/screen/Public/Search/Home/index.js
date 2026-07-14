import React from 'react'
import { FlatList, View } from 'react-native'

import styles from './../styles'
import Item from './Item'

const Home = ({ searchTypes, select }) => {
  const renderItem = ({ item }) => (<Item item={item} select={select} />)

  return (
    <View style={styles.card}>
      <FlatList
        data={searchTypes}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={r => (r.id)}
      />
    </View>
  )
}

export default Home
