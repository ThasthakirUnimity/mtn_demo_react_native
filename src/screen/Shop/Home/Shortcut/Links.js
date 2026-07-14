import React, { useEffect, useState } from 'react'
import { Image, ScrollView, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import { navigate } from '@src/navigation'
import styles from './../styles'
import { logClickEvent } from '@src/utility/analytics'

const links = [
  {
    icon: require('@asset/icons/shop/recharge.png'),
    title: 'Recharge',
    route: 'UserRechargeHome',
    simType: 'prepaid',
    log: 'Recharge'
  },
  {
    icon: require('@asset/icons/shop/bundles.png'),
    title: 'Bundles',
    route: 'UserBundleList',
    simType: 'prepaid',
    log: 'Bundles'
  },
  {
    icon: require('@asset/icons/shop/tariff-plan.png'),
    title: 'Tariff Plan',
    route: 'UserTariffPlan',
    simType: 'postpaid',
    log: 'TariffPlan'
  },
  {
    icon: require('@asset/icons/shop/topup.png'),
    title: 'Topup',
    route: 'UserTopup',
    simType: 'prepaid',
    log: 'Topup'
  }
]

const Item = ({ item }) => {
  return (
    <View style={styles.featureContent}>
      <Button
        style={styles.featureImgDisplay}
        onPress={() => {
          logClickEvent('Shop' + item.log)
          navigate(item.route)
        }}
      >
        <Image source={item.icon} style={styles.featureImg} resizeMode='contain' />
      </Button>
      <Text text='medium' size='text12' color='default' style={styles.featureText}>{__(item.title)}</Text>
    </View>
  )
}

const Links = ({ session }) => {
  const [list, setList] = useState([])

  useEffect(() => {
    if (session.numbers[session.numberIndex]) {
      const selectedNumber = session.numbers[session.numberIndex]
      if (selectedNumber.type == 'Prepaid') {
        setList(links.filter(r => (!r.simType || r.simType == 'prepaid')))
      } else if (selectedNumber.type == 'Postpaid') {
        setList(links.filter(r => (!r.simType || r.simType == 'postpaid')))
      }
    }
  }, [session.numbers, session.numberIndex])

  const renderItem = (item) => <Item item={item} />

  return (
    <ScrollView horizontal style={styles.featureContainer}>
      {list.map(renderItem)}
    </ScrollView>
  )
}

export default Links
