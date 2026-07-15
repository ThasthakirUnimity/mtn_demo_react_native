import axios from 'axios'

const DESIGN_TOKEN_BASE_URL = 'https://selfcarecms.betabasket.net/api/design-token/global'
const DESIGN_TOKEN_API_KEY  = 'DTNCsVypikXJCItN2FqkYmLJyLNsX1MVge'

const instance = axios.create({
  baseURL: DESIGN_TOKEN_BASE_URL,
  withCredentials: false,
})

instance.defaults.headers.common['Accept']    = 'application/json'
instance.defaults.headers.common['X-API-Key'] = DESIGN_TOKEN_API_KEY

export const fetchDesignTokenByBrand = async (brandValue) => {
  const response = await instance.get(`/${brandValue}`)
  console.log('fetchDesignTokenByBrand response:', JSON.stringify(response.data, null, 2))
  return response.data
}

export default instance
