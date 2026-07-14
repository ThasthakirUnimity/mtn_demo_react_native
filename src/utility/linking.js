/* version 1.0 */

import { Linking, Platform } from 'react-native'

import { navigate, getIsAppReady } from '@src/navigation'

export const getRoute = async (url) => {
  let routeData = {
    routeName: '',
    params: {}
  }

  if (url) {
    const link = url.replace(dlDomainLinkFull, '').replace(dlDomainLink, '').replace(dlDomainApp, '')

    if (link.indexOf('/post/') !== -1) {
      routeData = {}
      routeData.routeName = 'PublicPostView'
      routeData.params = { id: url.match(/\d+/)[0] }
    } else if (link.indexOf('/live/') !== -1) {
      routeData = {}
      routeData.routeName = 'LiveView'
      routeData.params = { id: url.match(/\d+/)[0] }
    } else if (link.indexOf('/article/') !== -1) {
      routeData = {}
      routeData.routeName = 'PublicPostView'
      routeData.params = { id: url.match(/\d+/)[0] }
    } else if (link.indexOf('/video/') !== -1) {
      routeData = {}
      routeData.routeName = 'PremiumVideoView'
      routeData.params = { id: url.match(/\d+/)[0] }
    }
  }

  return routeData
}

let linkingRemoveEvent

export const initiate = async () => {
  let routeData = {}
  const link = await Linking.getInitialURL()
  console.log('Linking', link)
  if (link) {
    routeData = await getRoute(link)
  }

  linkingRemoveEvent = Linking.addEventListener('url', handleOpenURL)

  return routeData
}

export const terminate = async () => {
  linkingRemoveEvent && linkingRemoveEvent.remove()
}

const handleOpenURL = async ({ url }) => {
  const { routeName, params } = await getRoute(url)
  if (routeName) {
    if (getIsAppReady()) {
      navigate(routeName, params)
    }
  }
}

export const openPhone = (phone) => {
  if (phone) {
    let phoneNumber = ''

    if (Platform.OS === 'android') {
      phoneNumber = `tel:${phone}`
    } else {
      phoneNumber = `telprompt:${phone}`
    }
    Linking.openURL(phoneNumber)
  }
}

export const openWhatsApp = (phone, text = '') => {
  if (phone) {
    const url = `whatsapp://send?text=${text}&phone=${phone}`
    Linking.openURL(url)
  }
}

export const openEmail = (email) => {
  if (email) {
    const url = `mailto:${email}`
    Linking.openURL(url)
  }
}

export const openUrl = (url) => {
  if (url) {
    Linking.openURL(url)
  }
}
export const openSms = (phone, body) => {
  const sep = Platform.OS === 'ios' ? '&' : '?'
  return openUrl(`sms:${phone}${sep}body=${body}`)
}
