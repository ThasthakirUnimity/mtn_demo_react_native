import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import i18nHttpLoader from 'i18next-http-backend'
import { API_URL } from '@src/config/env'

import http from '@src/utility/http'
import { store } from '@src/store'
import { updateTranslation } from '@src/store/reducers/setting'
import { I18nManager } from 'react-native'

i18n
  .use(initReactI18next)
  .use(i18nHttpLoader)
  .init({
    lng: '',
    fallbackLng: '',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    },
    backend: {
      loadPath: API_URL + '/lang/{{lng}}.json',
      parse: (data) => {
        console.log('parse', data)
        return data
      },
      request: async (options, url, payload, callback) => {
        http.get(url).then((r) => {
          callback(null, r)
          try {
            if (typeof r.data === 'object') {
              store.dispatch(updateTranslation({
                code: i18n.language,
                translation: r.data
              }))
            }
          } catch (e) {}
        }).catch(e => {
          const setting = store.getState().setting
          if (i18n.language && setting.translations[i18n.language]) {
            const r = {
              status: 200,
              data: setting.translations[i18n.language]
            }
            return callback(null, r)
          }
          callback(new Error('Failed'), null)
        })
      }
    }
  })

export const changeLanguage = async (locale) => {
  i18n.changeLanguage(locale)
  const rtl = i18n.dir(locale).toUpperCase()
  if (rtl !== (I18nManager.isRTL ? 'RTL' : 'LTR')) {
    I18nManager.forceRTL(rtl === 'RTL')
  }
}

export const __ = (name, params = {}) => i18n.t(name)

export default i18n
