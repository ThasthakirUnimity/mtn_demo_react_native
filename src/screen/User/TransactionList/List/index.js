import React from 'react'
import { FlatList, Text, View } from 'react-native'

import styles from './../styles'
import Item from './Item'
import Placeholder from './Placeholder'

const List = props => {
  const renderItem = ({ item }) => <Item item={item} openView={props.openView} />

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No transactions</Text>
    </View>
  )

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }

    return (
      <FlatList
        data={props.list}
        contentContainerStyle={styles.topupContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={renderEmpty}
      />
    )
  }

  return <View>{renderList()}</View>
}

export default List
