import Support from '@src/component/Support'
import http from '@src/utility/http'
import { URLS } from '@src/config/url'

export const addToSavedEbList = (data) => {
  const check = async () => {
    await Support.showLoading()
    try {
      const r = (await http.get(URLS.BILLS_EB_CHECK, {
        params: {
          meternumber: data.meternumber
        }
      })).data
      if (r?.response?.status != 'Available') {
        confirm()
      }
    } catch (e) {}
    await Support.hideLoading()
  }
  const confirm = () => {
    Support.showConfirm({
      title: 'Hold on!',
      message: 'Are you sure you want to add this into your saved list?',
      onYes: update
    })
  }
  const update = async () => {
    await Support.showLoading()
    try {
      const r = (await http.post(URLS.BILLS_EB_SAVE, {
        meternumber: data.meternumber,
        name: data.name
      })).data

      await Support.showSuccess({
        layout: 'toast',
        message: r?.response?.message || 'Updated',
        hideDelay: 2500
      })
    } catch (e) {}
    await Support.hideLoading()
  }
  check()
}
