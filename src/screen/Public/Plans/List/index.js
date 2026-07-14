import React from 'react'
import { FlatList, Text, View } from 'react-native'

import theme from '@src/theme/styles'
import { __ } from '@src/utility/translation'
import Item from './Item'
import styles from '../styles'

const List = (props) => {
  if (props.list.length == 0) {
    return null
  }

  const renderItem = ({ item }) => (<Item item={item} />)

  return (
    <>
      <View style={[styles.topDeals, theme.row]}>
        <Text style={styles.topDealsText}>{__('Plans only for you')}</Text>
      </View>
      <FlatList
        data={props.list}
        contentContainerStyle={styles.offerContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => (item.id)}
      />
    </>
  )
}

export default List
