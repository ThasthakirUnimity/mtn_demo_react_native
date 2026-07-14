import { store } from '@src/store'
import { navigateCurrent } from '@src/navigation'

export const shopBuyNow = (product) => {
  const state = store.getState()
  const selectedNumber = state.session.numbers.find(r => r.isPrimary)
  const price = parseInt(product.field_product_price, 10)
  const cart = {
    productType: 'shop',
    items: [{
      id: product.id,
      title: product.title,
      type: product.type,
      quantity: 1,
      currency: product.field_currency,
      price,
      total: price
    }],
    currency: product.field_currency,
    total: price
  }
  navigateCurrent('UserPayment', {
    profile: {
      name: selectedNumber.name,
      mobilenumber: selectedNumber.number
    },
    cart
  })
}

export const shopCartToPayment = () => {
  const state = store.getState()
  const selectedNumber = state.session.numbers.find(r => r.isPrimary)
  const cart = {
    productType: 'shop',
    items: state.cart.products.map(item => ({
      id: item.id,
      title: item.name,
      type: item.type,
      quantity: item.quantity,
      currency: item.currency,
      price: item.price,
      total: item.total
    })),
    currency: state.cart.products[0].currency,
    total: state.cart.total
  }
  navigateCurrent('UserPayment', {
    profile: {
      name: selectedNumber.name,
      mobilenumber: selectedNumber.number
    },
    cart
  })
}
