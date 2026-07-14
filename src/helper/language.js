
import { store } from '@src/store'
import { httpCms } from '@src/utility/http'
import { URLS } from '@src/config/url'
import { updateLanguages } from '@src/store/reducers/setting'

export const fetchLanguages = async () => {
  try {
    const result = (await httpCms.get(URLS.LANGUAGES)).data
    if (Array.isArray(result.rows) && result.rows.length) {
      await store.dispatch(updateLanguages({ languages: result.rows }))
    }
  } catch (e) {}
}
