import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

const initialState = {
  languages: [],
  languageIndex: -1,
  languageCode: '',
  languageCodeDefault: '',

  translations: {},

  quicktourShown: false
}

const callbacks = {}

callbacks.updateLanguages = (state, action) => {
  state.languages = action.payload.languages.map(r => {
    const isDefault = r?.default?.toString() === '1'
    if (isDefault) {
      state.languageCodeDefault = r.langcode
    }
    return {
      code: r.langcode,
      name: r.name,
      direction: r.direction,
      default: isDefault
    }
  })
}

callbacks.changeLanguage = (state, action) => {
  const languageIndex = state.languages.findIndex(
    r => r.code === action.payload
  )

  if (state.languages[languageIndex]) {
    const language = state.languages[languageIndex]
    state.languageIndex = languageIndex
    state.languageCode = language.code
  }
}

callbacks.updateTranslation = (state, action) => {
  state.translations = {}
  state.translations[action.payload.code] = action.payload.translation
}

callbacks.updateQuicktourShown = (state, action) => {
  state.quicktourShown = action.payload
}

const slice = createSlice({
  name: 'setting',
  initialState: _.cloneDeep(initialState),
  reducers: callbacks
})

const { actions, reducer } = slice

export const {
  updateLanguages,
  changeLanguage,
  updateTranslation,
  updateQuicktourShown
} = actions

export default reducer
