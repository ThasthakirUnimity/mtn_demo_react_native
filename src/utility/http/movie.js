import axios from 'axios'
import perf from '@react-native-firebase/perf'
import urlParse from 'url-parse'

import { CMS_API_TOKEN, CMS_API_URL, MOVIE_API_TOKEN, MOVIE_API_URL, PLAY_URL } from '@src/config/env'
import { URLS } from '@src/config/url'
import { notifySessionExpired } from '@src/helper/user'
import { store } from '@src/store'

const instance = axios.create({
  baseURL: MOVIE_API_URL,
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

  const parsed = urlParse(config.url, true)

  const query = { ...parsed.query }
  query.api_key = MOVIE_API_TOKEN
  query.language = 'en'

  if (state.setting.languageLocale) {
    query.language = state.setting.languageLocale
  }

  parsed.set('query', query)

  config.url = parsed.href

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
