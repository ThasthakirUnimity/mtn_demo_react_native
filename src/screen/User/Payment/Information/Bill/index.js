import React from 'react'
import EB from './EB'

const Bill = ({ cart }) => {
  switch (cart.productSubType) {
    case 'eb':
      return <EB cart={cart} />
  }
  return null
}

export default Bill
