import React, { useState } from 'react'
import { ActivityIndicator, Image, Switch, View } from 'react-native'
import { Text } from '@src/component/Basic'

import { __ } from '@src/utility/translation'
import styles from './../styles'
import { Button } from '@src/component/Form'

const Content = ({ item }) => {
  const [autoRenewalOn, toggleAutoRenewal] = useState(false)
  const [reminderOn, toggleReminder] = useState(false)

  return (
    <View style={styles.package}>
      <View style={styles.packageHeader}>
        <Image
          source={{
            uri: item.image
          }}
          resizeMode='contain'
          style={styles.packageImg}
        />
        <View style={styles.packageCol}>
          <Text style={styles.packageName}>{item.title}</Text>
          <Text style={styles.packageDesc}>{item.description}</Text>
        </View>
      </View>
      <View style={styles.packageBody}>
        <View style={styles.packageRow}>
          <Text style={styles.packageLabel}>{__('Amount')}</Text>
          <Text style={styles.packageValue}>{item.currency} {item.amount}</Text>
        </View>
        <View style={styles.packageRow}>
          <Text style={styles.packageLabel}>{__('Cycle')}</Text>
          <Text style={styles.packageValue}>{item.cycle}</Text>
        </View>
        <View style={styles.packageRow}>
          <Text style={styles.packageLabel}>{__('Autorenew')}</Text>
          <Text style={styles.packageValue}><Switch value={autoRenewalOn} onValueChange={(v) => { toggleAutoRenewal(v) }} /></Text>
        </View>
        <View style={styles.packageRow}>
          <Text style={styles.packageLabel}>{__('Reminder')}</Text>
          <Text style={styles.packageValue}><Switch value={reminderOn} onValueChange={(v) => { toggleReminder(v) }} /></Text>
        </View>
        <View style={styles.packageRow}>
          <Text style={styles.packageLabel}>{__('First Bill')}</Text>
          <Text style={styles.packageValue}>{item.firstBill}</Text>
        </View>
        <View>
          <Button style={styles.packageBtn}>
            <Text style={styles.packageBtnText}>{__('Renew now')}</Text>
          </Button>
        </View>
      </View>
    </View>
  )
}
export default Content
