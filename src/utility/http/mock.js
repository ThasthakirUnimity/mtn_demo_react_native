import axios from 'axios'
import perf from '@react-native-firebase/perf'
import urlParse from 'url-parse'

import { MOCK_API_URL } from '@src/config/env'
import { store } from '@src/store'

const instance = axios.create({
  baseURL: MOCK_API_URL

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

  try {
    const httpMetric = perf().newHttpMetric(config.url, config.method)
    config.metadata = { httpMetric }

    // add any extra metric attributes, if required
    // httpMetric.putAttribute('userId', '12345678');

    await httpMetric.start()
  } finally {
    return config
  }
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
    } finally {
      return response
    }
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
    } finally {
      // Ensure failed requests throw after interception
      return Promise.reject(error)
    }
  }
)

export default instance
