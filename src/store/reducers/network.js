import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

const initialState = {
  connectionType: '',
  isConnected: false,
  isInternetReachable: false
}

const callbacks = {}

callbacks.updateConnectionState = (state, action) => {
  state.connectionType = action.payload.connectionType
  state.isConnected = action.payload.isConnected
  state.isInternetReachable = action.payload.isInternetReachable
}

const slice = createSlice({
  name: 'network',
  initialState: _.cloneDeep(initialState),
  reducers: callbacks
})

const { actions, reducer } = slice

export const { updateConnectionState } = actions

export default reducer
