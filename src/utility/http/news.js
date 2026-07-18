import axios from 'axios'
import perf from '@react-native-firebase/perf'
import urlParse from 'url-parse'

import { NEWS_API_TOKEN, NEWS_API_URL } from '@src/config/env'

const _str = (data, max = Infinity) => {
  if (data == null) return '-'
  const s = typeof data === 'string' ? data : JSON.stringify(data)
  return s.length > max ? s.slice(0, max) + '…' : s
}

// Add URL substrings here to silence their logs entirely
const LOG_SKIP_URLS = [
  // '/some/noisy/endpoint',
]

const _shouldSkipLog = (url = '') => LOG_SKIP_URLS.some((skip) => url.includes(skip))

const instance = axios.create({
  baseURL: NEWS_API_URL,
  withCredentials: false,
  xsrfCookieName: 'XSRF-TOKEN-API',
  xsrfHeaderName: 'X-XSRF-TOKEN-API'
})

instance.defaults.headers.common.Accept = 'application/json'

instance.interceptors.request.use(async (config) => {
  config.headers['X-Api-Key'] = NEWS_API_TOKEN
  config.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
  config.headers.Pragma = 'no-cache'
  config.headers.Expires = 0

  const parsed = urlParse(config.url, true)

  const query = { ...parsed.query }
  query.language = 'en'

  parsed.set('query', query)

  config.url = parsed.href

  if (__DEV__ && !_shouldSkipLog(config.baseURL + config.url)) {
    console.log(
      `\n🚀 ──────────── NEWS REQUEST ────────────\n` +
      `   Method  : ${config.method?.toUpperCase()}\n` +
      `   URL     : ${config.baseURL}${config.url}\n` +
      `   Params  : ${_str(config.params)}\n` +
      `   Payload : ${_str(config.data)}\n` +
      `   ────────────────────────────────────`
    )
  }

  try {
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
        `\n✅ ──────────── NEWS SUCCESS ─────────────\n` +
        `   Method   : ${response.config.method?.toUpperCase()}\n` +
        `   URL      : ${response.config.baseURL}${response.config.url}\n` +
        `   Status   : ${response.status}\n` +
        `   Response : ${_str(response.data)}\n` +
        `   ────────────────────────────────────`
      )
    }

    try {

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
        `\n❌ ──────────── NEWS ERROR ───────────────\n` +
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
