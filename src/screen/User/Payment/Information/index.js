import React from 'react'
import Bill from './Bill'
import Plan from './Plan'
import Shop from './Shop'
import Topup from './Topup'

const Information = ({ cart }) => {
  switch (cart.productType) {
    case 'recharge':
    case 'bundle':
      return <Plan cart={cart} />

    case 'shop':
      return <Shop cart={cart} />

    case 'topup':
      return <Topup cart={cart} />

    case 'bills':
      return <Bill cart={cart} />
  }
  return null
}

export default Information
