import axios from 'axios'
import perf from '@react-native-firebase/perf'
import urlParse from 'url-parse'

import { GAME_API_URL } from '@src/config/env'
import { store } from '@src/store'

const _str = (data, max = Infinity) => {
  if (data == null) return '-'
  const s = typeof data === 'string' ? data : JSON.stringify(data)
  return s.length > max ? s.slice(0, max) + '…' : s
}

const instance = axios.create({
  baseURL: GAME_API_URL

})

instance.defaults.headers.common.Accept = 'application/json'

instance.interceptors.request.use(async (config) => {
  const state = store.getState()

  config.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
  config.headers.Pragma = 'no-cache'
  config.headers.Expires = 0

  const parsed = urlParse(config.url, true)

  const query = { ...parsed.query }
  query.language = 'en'

  if (state.setting.languageLocale) {
    query.language = state.setting.languageLocale
  }

  parsed.set('query', query)

  config.url = parsed.href

  if (__DEV__) {
    console.log(
      `\n🎮 ──────────── GAME API REQUEST ────────────\n` +
      `   Method  : ${config.method?.toUpperCase()}\n` +
      `   URL     : ${config.baseURL}${config.url}\n` +
      `   Params  : ${_str(config.params)}\n` +
      `   Payload : ${_str(config.data)}\n` +
      `   ────────────────────────────────────`
    )
  }

  try {
    const httpMetric = perf().newHttpMetric(config.url, config.method)
    config.metadata = { httpMetric }

    // add any extra metric attributes, if required
    // httpMetric.putAttribute('userId', '12345678');

    await httpMetric.start()
  } catch (e) {}
  return config
})

instance.interceptors.response.use(
  async function (response) {
    if (__DEV__) {
      console.log(
        `\n🎮 ──────────── GAME API SUCCESS ────────────\n` +
        `   Method   : ${response.config.method?.toUpperCase()}\n` +
        `   URL      : ${response.config.baseURL}${response.config.url}\n` +
        `   Status   : ${response.status}\n` +
        `   Response : ${_str(response.data)}\n` +
        `   ────────────────────────────────────`
      )
    }

    try {
      // Request was successful, e.g. HTTP code 200

      const { httpMetric } = response.config.metadata

      // add any extra metric attributes if needed
      // httpMetric.putAttribute('userId', '12345678');

      httpMetric.setHttpResponseCode(response.status)
      httpMetric.setResponseContentType(response.headers['content-type'])
      await httpMetric.stop()
    } catch (e) {}
    return response
  },
  async function (error) {
    if (__DEV__) {
      console.error(
        `\n🎮 ──────────── GAME API ERROR ──────────────\n` +
        `   Method   : ${error.config?.method?.toUpperCase()}\n` +
        `   URL      : ${error.config?.baseURL}${error.config?.url}\n` +
        `   Status   : ${error.response?.status ?? 'NO_RESPONSE'}\n` +
        `   Message  : ${error.message}\n` +
        `   Code     : ${error.code ?? 'UNKNOWN'}\n` +
        `   Payload  : ${_str(error.config?.data)}\n` +
        `   Response : ${_str(error.response?.data)}\n` +
        `   ────────────────────────────────────`
      )
    }

    try {
      // Request failed, e.g. HTTP code 500
      if (error.response && error.config?.metadata) {
        const { httpMetric } = error.config.metadata
        if (httpMetric) {
          httpMetric.setHttpResponseCode(error.response.status)
          httpMetric.setResponseContentType(error.response.headers['content-type'])
          await httpMetric.stop()
        }
      }
    } catch (e) {
      if (__DEV__) {
        console.error('Error in httpMetric:', e.message)
      }
    }
    return Promise.reject(error)
  }
)

export default instance
