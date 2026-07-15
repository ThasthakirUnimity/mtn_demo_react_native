import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import _ from 'lodash'
import { fetchDesignTokenByBrand } from '@src/utility/http/designToken'
import { applyDesignTokens } from '@src/theme/applyTheme'
import { COLOR } from '@src/theme/typography'

export const BRANDS = [
  { label: 'Vodafone', value: 'vodafone', primary: '#E60000', flag: '🇦🇺' },
  { label: 'MyTPG',    value: 'mytpg',    primary: '#0072CE', flag: '🇦🇺' },
  { label: 'iinet',    value: 'iinet',    primary: '#F47920', flag: '🇦🇺' },
]

const initialState = {
  brandId: '',
  brandLabel: '',
  primary: '#c38014',
  designTokens: null,
  tokenFetching: false,
  tokenError: null,
  pendingLogin: false,
}

/* Async thunk — saves brand then fetches design tokens from CMS */
export const saveBrandAndFetchTokens = createAsyncThunk(
  'brand/saveBrandAndFetchTokens',
  async (brandValue, { dispatch, rejectWithValue }) => {
    dispatch(changeBrand(brandValue))
    try {
      const tokens = await fetchDesignTokenByBrand(brandValue)
      const css =
  typeof tokens?.data?.css === 'string'
    ? JSON.parse(tokens.data.css)
    : tokens?.data?.css;

console.log('CMS Tokens:', css);
console.log('Before:', COLOR.PRIMARY);

applyDesignTokens(css);

console.log('After:', COLOR.PRIMARY);
      return tokens
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message || err.message || 'Failed to fetch design tokens')
    }
  }
)

const callbacks = {}

callbacks.changeBrand = (state, action) => {
  const brand = BRANDS.find(b => b.value === action.payload)
  if (brand) {
    state.brandId    = brand.value
    state.brandLabel = brand.label
    state.primary    = brand.primary
  }
}

callbacks.resetBrand = (state) => {
  Object.assign(state, _.cloneDeep(initialState))
}

callbacks.clearTokens = (state) => {
  state.designTokens  = null
  state.tokenFetching = false
  state.tokenError    = null
}

callbacks.clearPendingLogin = (state) => {
  state.pendingLogin = false
}

const slice = createSlice({
  name: 'brand',
  initialState: _.cloneDeep(initialState),
  reducers: callbacks,
  extraReducers: (builder) => {
    builder
      .addCase(saveBrandAndFetchTokens.pending, (state) => {
        state.tokenFetching = true
        state.tokenError    = null
      })
      .addCase(saveBrandAndFetchTokens.fulfilled, (state, action) => {
        state.tokenFetching = false
        state.designTokens  = action.payload?.data?.css || null
        state.pendingLogin  = true
      })
      .addCase(saveBrandAndFetchTokens.rejected, (state, action) => {
        state.tokenFetching = false
        state.tokenError    = action.payload
      })
  },
})

const { actions, reducer } = slice

export const { changeBrand, resetBrand, clearTokens, clearPendingLogin } = actions

export default reducer
