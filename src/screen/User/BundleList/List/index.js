import React from 'react'
import { FlatList, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { __ } from '@src/utility/translation'
import styles from './../styles'
import Item from './Item'
import Placeholder from './Placeholder'

const List = ({ title, fetching, list, addToCart, buyNow, openView }) => {
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        addToCart={addToCart}
        buyNow={buyNow}
        openView={openView}
      />
    )
  }

  const renderList = () => {
    if (fetching) {
      return <Placeholder />
    }
    return (
      <FlatList
        data={list}
        contentContainerStyle={styles.rechargeContainer}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    )
  }

  if (!fetching && list.length === 0) {
    return null
  }

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      {renderList()}
    </View>
  )
}

export default List
