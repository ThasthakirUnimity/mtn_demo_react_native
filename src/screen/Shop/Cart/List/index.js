import React from 'react'
import { FlatList, View } from 'react-native'

import Item from './Item'
import Placeholder from './Placeholder'
import { __ } from '@src/utility/translation'

export default (props) => {
  const renderItem = ({ item, index }) => (<Item item={item} index={index} 
    removeProduct={props.removeProduct} updateQuantity={props.updateQuantity} />)

  return (
    <View>
      <FlatList
        data={props.list}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  )
}