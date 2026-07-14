import React from 'react'
import { Image, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import { navigate } from '@src/navigation'
import styles from './../styles'
import Links from './Links'
import { logClickEvent } from '@src/utility/analytics'

const Shortcut = ({ session }) => {
  return (
    <>
      <View style={styles.shopContent}>
        <View style={styles.shopService}>
          <Button
            onPress={() => {
              logClickEvent('ShopMobilesDevices')
              navigate('ShopMobileList')
            }}
            style={styles.shopServiceBtn}
          >
            <Image source={require('@asset/icons/mobile.png')} style={styles.shopServiceBtnImg} />
            <Text text='regular' size='text14' color='default' style={styles.shopServiceBtnText}>{__('Mobile Devices')}</Text>
          </Button>
          <Button
            onPress={() => {
              logClickEvent('ShopPlayService')
              navigate('PlayHome')
            }}
            style={styles.shopServiceBtn}
          >
            <Image source={require('@asset/icons/entertainment.png')} style={styles.shopServiceBtnImg} />
            <Text text='regular' size='text14' color='default' style={styles.shopServiceBtnText}>{__('Entertainment')}</Text>
          </Button>
        </View>
      </View>
      <Links session={session} />
    </>
  )
}

export default Shortcut
