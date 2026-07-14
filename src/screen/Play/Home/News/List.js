import React from 'react'
import { FlatList } from 'react-native'

import { __ } from '@src/utility/translation'
import Item from './Item'
import styles from '../styles'

const List = ({list}) => {
    const renderItem = ({ item }) => (<Item item={item} />)
  return (
    <FlatList
        data={list}
        contentContainerStyle={styles.newsContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => (item.id)}
    />
  )
}

export default List