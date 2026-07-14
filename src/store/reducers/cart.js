import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

const initialState = {
  products: [],
  total: '',
  quantity: 0
}

const calculateTotal = (products) => {
  let total = 0
  let quantity = 0
  products.forEach(product => {
    quantity += product.quantity
    total += product.total
  })
  return { quantity, total }
}

const callbacks = {}

callbacks.cartProductUpdate = (state, action) => {
  let index = state.products.findIndex(p => (p.id == action.payload.id))
  const data = {
    image: action.payload.image,
    price_org: action.payload.price_org,
    price: action.payload.price,
    currency: action.payload.currency || ''
  }
  if (index === -1) {
    index = state.products.push({
      id: action.payload.id,
      name: action.payload.name,
      image: action.payload.image,
      type: action.payload.type,
      ...data,
      quantity: 0
    }) - 1
  } else {
    Object.keys(data).forEach(k => (
      state.products[index][k] = data[k]
    ))
  }
  state.products[index].quantity += action.payload.quantity

  state.products[index].total = parseInt(state.products[index].price, 10) * state.products[index].quantity

  const ct = calculateTotal(state.products)

  state.quantity = ct.quantity
  state.total = ct.total
  if (action.payload.currency) {
    state.currency = action.payload.currency
  }
}

callbacks.cartProductUpdateQuantity = (state, action) => {
  const index = state.products.findIndex(p => (p.id == action.payload.id))
  if (index > -1) {
    state.products[index].quantity = action.payload.quantity

    state.products[index].total = parseInt(state.products[index].price, 10) * state.products[index].quantity

    const ct = calculateTotal(state.products)

    state.quantity = ct.quantity
    state.total = ct.total
  }
}

callbacks.cartProductRemoveIndex = (state, action) => {
  if (state.products[action.payload]) {
    state.products.splice(action.payload, 1)
  }

  const ct = calculateTotal(state.products)

  state.quantity = ct.quantity
  state.total = ct.total
}

callbacks.cartReset = (state, action) => {
  return _.cloneDeep(initialState)
}

const slice = createSlice({
  name: 'cart',
  initialState: _.cloneDeep(initialState),
  reducers: callbacks
})

const { actions, reducer } = slice

export const {
  cartProductUpdate,
  cartProductUpdateQuantity,
  cartProductRemoveIndex,
  cartReset
} = actions

export default reducer
