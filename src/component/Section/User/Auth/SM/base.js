import Support from '@src/component/Support'
import { URLS } from '@src/config/url'
import http from '@src/utility/http'

export const loginServer = async (user, loginSocialMedia, registerSocialMedia) => {
  let cb = null
  await Support.showLoading()
  try {
    const values = { }
    if (user.loginMethod) {
      values.loginMethod = user.loginMethod
    }
    if (user.loginID) {
      values.loginID = encryptAes(user.loginID)
    }
    const r = (await http.post(URLS.USER_SSO_LOGIN, values)).data

    if (r.type == 'LOGIN') {
      cb = () => loginSocialMedia(user.loginType, user, r)
    } else if (r.type == 'REGISTRATION') {
      cb = () => registerSocialMedia(user.loginType, user, r)
    }
  } catch (e) {
    await Support.showServerError(e)
  }
  await Support.hideLoading()
  if (cb) {
    setTimeout(cb, 1000)
  }
}
