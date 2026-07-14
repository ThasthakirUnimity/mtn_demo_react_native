import React from 'react'
import { FlatList, View } from 'react-native'

import styles from '../styles'
import Item from './Item'
import Placeholder from './Placeholder'

const List = (props) => {
  const renderItem = ({ item }) => (<Item item={item} />)

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }
    return (
      <FlatList
        numColumns={2}
        data={props.fetching ? [1, 2, 3, 4] : props.list}
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: 5 }}
        renderItem={renderItem}
      />
    )
  }

  return (
    <View style={styles.rewards}>
      {renderList()}
    </View>
  )
}

export default List
