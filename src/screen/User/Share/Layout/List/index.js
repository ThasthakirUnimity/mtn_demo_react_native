import React from 'react'

import { __ } from '@src/utility/translation'
import Item from './Item'

const List = ({ plans, selectedPlan, select }) => {
  const renderItem = (item) => (<Item key={item.value} item={item} selectedPlan={selectedPlan} select={select} />)
  return plans.map(renderItem)
}

export default List
