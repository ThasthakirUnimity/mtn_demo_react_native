import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

const initialState = {
  token: '',
  isLoggedIn: false,
  user: null,
  profileStatus: 0,
  termsAgreed: false,
  pin: '',
  numbers: [],
  numberIndex: null
}

const callbacks = {}

callbacks.updateToken = (state, action) => {
  state.token = action.payload.token
}

callbacks.login = (state, action) => {
  state.isLoggedIn = true
  state.token = action.payload.token
  state.user = action.payload.user
}

callbacks.logout = () => {
  return _.cloneDeep(initialState)
}

callbacks.updateUser = (state, action) => {
  state.user = action.payload.user
}

callbacks.updateProfileStatus = (state, action) => {
  state.profileStatus = action.payload.profileStatus
}

callbacks.updatePin = (state, action) => {
  state.pin = action.payload.pin
}

callbacks.updatePrimaryNumber = (state, action) => {
  const nos = [...state.numbers.filter(n => (!n.isPrimary))]
  state.numbers = [{ ...action.payload, isPrimary: true }, ...nos]
  if (!state.numbers[state.numberIndex]) {
    state.numberIndex = 0
  }
}

callbacks.updateNumbers = (state, action) => {
  const nos = [...state.numbers.filter(n => (n.isPrimary))]
  state.numbers = [...nos, ...action.payload]
  if (!state.numbers[state.numberIndex]) {
    state.numberIndex = 0
  }
}

callbacks.changeNumber = (state, action) => {
  if (state.numbers[action.payload]) {
    state.numberIndex = action.payload
  }
}

callbacks.agreeTerms = (state, action) => {
  state.termsAgreed = action.payload
}

const slice = createSlice({
  name: 'session',
  initialState: _.cloneDeep(initialState),
  reducers: callbacks
})

const { actions, reducer } = slice

export const {
  updateToken,
  login,
  logout,
  updateUser,
  updateProfileStatus,
  updatePin,
  updatePrimaryNumber,
  updateNumbers,
  changeNumber,
  agreeTerms
} = actions

export default reducer
