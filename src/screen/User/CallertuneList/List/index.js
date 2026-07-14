import React from 'react'
import { FlatList, View } from 'react-native'

import Item from './Item'
import Placeholder from './Placeholder'

const List = (props) => {
  const renderItem = ({ item, index }) => (<Item item={item} index={index} />)

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }

    return (
      <FlatList
        data={props.list}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => (item.id)}
      />
    )
  }

  return (
    <View>
      {renderList()}
    </View>
  )
}

export default List
