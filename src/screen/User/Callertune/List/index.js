import React from 'react'
import { FlatList, View } from 'react-native'

import Item from './Item'
import Placeholder from './Placeholder'

const List = (props) => {
  const renderItem = ({ item }) => (<Item item={item} changeTrack={props.changeTrack} />)

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }

    return (
      <FlatList
        data={props.list}
        showsHorizontalScrollIndicator={false}
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
