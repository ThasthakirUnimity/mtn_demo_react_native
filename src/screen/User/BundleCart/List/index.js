import React from 'react'
import { FlatList, View } from 'react-native'

import { __ } from '@src/utility/translation'
import Item from './Item'
import styles from './../styles'

const List = ({ cart, removeFromCart }) => {
  const renderItem = ({ item }) => (<Item item={item} removeFromCart={removeFromCart} />)
  return (
    <View>
      <FlatList
        data={cart.items}
        contentContainerStyle={styles.gamesContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => (item.ProductID)}
      />
    </View>
  )
}

export default List