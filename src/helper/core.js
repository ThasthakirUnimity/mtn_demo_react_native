import { httpCms } from '@src/utility/http'
import { URLS } from '@src/config/url'

let helpContents = []
export const fetchHelpContent = async (ID) => {
  const __get = () => (helpContents.find(r => (r.flag == ID)) || {})
  if (helpContents.length) {
    return __get()
  }
  try {
    const result = (await httpCms.get(URLS.HELP_CONTENT)).data
    if (Array.isArray(result.rows) && result.rows.length) {
      helpContents = result.rows
    }
  } catch (e) {}
  return __get()
}
