import React from 'react'

import Item from './Item'

const Shop = ({ cart }) => {
  const renderItem = (item, index) => (<Item key={index} item={item} />)
  return cart.items.map(renderItem)
}

export default Shop
