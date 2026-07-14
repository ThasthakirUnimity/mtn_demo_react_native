import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import styles from './../styles'
import Item from './Item'

const BuildBundles = ({ list, cart, addToCart, removeFromCart }) => {
  const [selectedList, setSelected] = useState({})

  useEffect(() => {
    const list = {}
    cart.items.forEach(item => {
      list[item.ProductID] = 1
    })
    setSelected(list)
  }, [cart.items])

  const renderItem = (item) => (
    <Item
      key={item.id}
      item={item}
      selectedList={selectedList}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  )

  return (
    <View style={styles.voiceContent}>
      {list.map(renderItem)}
    </View>
  )
}

export default BuildBundles
