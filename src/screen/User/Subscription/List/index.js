import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from '@src/component/Basic'

import Item from './Item'
import Placeholder from './Placeholder'
import { __ } from '@src/utility/translation'
import styles from './../styles'

const List = props => {
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        type={props.type}
        openedItem={props.openedItem}
        toggleView={props.toggleView}
      />
    )
  }

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }
    return (
      <FlatList
        data={props.list}
        contentContainerStyle={styles.movieContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    )
  }

  return (
    <>
      <Text style={styles.headerTitle}>{props.title}</Text>
      {renderList()}
    </>
  )
}

export default List
