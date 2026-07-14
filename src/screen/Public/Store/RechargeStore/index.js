import React from 'react'
import { FlatList, View } from 'react-native'

import Item from './Item'
import Placeholder from './Placeholder'
import { __ } from '@src/utility/translation'
import styles from '../styles'

export default (props) => {
  if (props.fetchingInitial) {
    return <Placeholder />
  }

  const renderItem = ({ item }) => <Item
    item={item}
    selectStore={props.selectStore}
  />

  return (
    <View>
      <FlatList
        data={props.list}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => (item.id)}
      />
    </View>
  )
}