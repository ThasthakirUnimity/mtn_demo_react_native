import React from 'react'
import { ScrollView } from 'react-native'

import Item from './Item'

const Categories = ({ selectedCategory, list, onSelect }) => {
  const renderItem = (item) => (<Item
    key={item.id}
    selectedCategory={selectedCategory}
    category={item}
    onSelect={onSelect}
                                />)

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {list.map(renderItem)}
    </ScrollView>
  )
}

export default Categories
