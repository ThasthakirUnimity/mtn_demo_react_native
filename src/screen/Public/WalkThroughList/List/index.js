import React from 'react'
import { FlatList, View } from 'react-native'

import styles from '../styles'
import Item from './Item'

const List = (props) => {
  if (props.list.length == 0) {
    return null
  }

  const renderItem = ({ item }) => (
    <Item
      item={item}
      openView={props.openView}
    />
  )

  return (
    <View>
      <FlatList
        data={props.list}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => (item.id)}
        style={{ marginHorizontal: 10, marginVertical: 10 }}
      />
    </View>
  )
}

export default List
