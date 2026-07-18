import axios from 'axios'
import perf from '@react-native-firebase/perf'
import urlParse from 'url-parse'

import { CMS_API_TOKEN, CMS_API_URL } from '@src/config/env'
import { URLS } from '@src/config/url'
import { notifySessionExpired } from '@src/helper/user'
import { store } from '@src/store'

const _str = (data, max = Infinity) => {
  if (data == null) return '-'
  const s = typeof data === 'string' ? data : JSON.stringify(data)
  return s.length > max ? s.slice(0, max) + '…' : s
}

// Add URL substrings here to silence their logs entirely
const LOG_SKIP_URLS = [
  'selfcare.betabasket.net/logs',
  // '/some/noisy/endpoint',
]

const _shouldSkipLog = (url = '') => LOG_SKIP_URLS.some((skip) => url.includes(skip))

const instance = axios.create({
  baseURL: CMS_API_URL,
  withCredentials: false,
  xsrfCookieName: 'XSRF-TOKEN-API',
  xsrfHeaderName: 'X-XSRF-TOKEN-API'
})

instance.defaults.headers.common.Accept = 'application/json'

instance.interceptors.request.use(async (config) => {
  const state = store.getState()

  config.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
  config.headers.Pragma = 'no-cache'
  config.headers.Expires = 0

  config.headers.Authorization = CMS_API_TOKEN

  const parsed = urlParse(config.url, true)

  if (!config.params) {
    config.params = {}
  }
  config.params._format = 'json'

  if (state.setting.languageCode && state.setting.languageCode != state.setting.languageCodeDefault) {
    config.params.lang = state.setting.languageCode
  }

  // ────────────────────────────────────────────────────────────────

  config.url = parsed.href

  /* if (state.setting.languageCode && state.setting.languageCode != state.setting.languageCodeDefault) {
    if (config.url.indexOf('http://') === -1 && config.url.indexOf('https://') === -1) {
      config.url = '/' + state.setting.languageCode + (config.url.indexOf('/') === 0 ? '' : '/') + config.url
    }
  } */

  if (__DEV__ && !_shouldSkipLog(config.baseURL + config.url)) {
    console.log(
      `\n🚀 ──────────── CMS REQUEST ────────────\n` +
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
    if (__DEV__ && !_shouldSkipLog(response.config.baseURL + response.config.url)) {
      console.log(
        `\n✅ ──────────── CMS SUCCESS ─────────────\n` +
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
    if (__DEV__ && !_shouldSkipLog((error.config?.baseURL ?? '') + (error.config?.url ?? ''))) {
      console.error(
        `\n❌ ──────────── CMS ERROR ───────────────\n` +
        `   Method   : ${error.config?.method?.toUpperCase()}\n` +
        `   URL      : ${error.config?.baseURL}${error.config?.url}\n` +
        `   Status   : ${error.response?.status ?? 'NO_RESPONSE'}\n` +
        `   Message  : ${error.message}\n` +
        `   Payload  : ${_str(error.config?.data)}\n` +
        `   Response : ${_str(error.response?.data)}\n` +
        `   ────────────────────────────────────`
      )
    }

    try {
      // Request failed, e.g. HTTP code 500
      if (error.response.status == '401') {
        if (error.response.config.url == URLS.USER_SESSION_INFORMATION) {
        } else {
          notifySessionExpired()
        }
      }

      const { httpMetric } = error.config.metadata

      // add any extra metric attributes if needed
      // httpMetric.putAttribute('userId', '12345678');

      httpMetric.setHttpResponseCode(error.response.status)
      httpMetric.setResponseContentType(error.response.headers['content-type'])
      await httpMetric.stop()
    } catch (e) {}
    return Promise.reject(error)
  }
)

export default instance
