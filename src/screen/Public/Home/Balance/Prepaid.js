import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Wave from 'react-native-waveview'

import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'

import styles from './../styles'
import { logClickEvent } from '@src/utility/analytics'

const Prepaid = ({ plan, index, renderQuickTour }) => {
  const [daysLeftInPerc] = useState(() => {
    let d = 0
    if (plan.days_left > 0 && plan.days_left < plan.total_days) {
      d = Math.round(plan.days_left / plan.total_days * 100)
    } else {
      d = 100
    }
    return isNaN(d) || !d ? 0 : d
  })
  const item = (
    <>
      <View style={styles.preTop}>
        <View style={styles.preCol}>
          <View style={styles.preRow}>
            <Text style={styles.preTitle}>{__('Prepaid')}</Text>
            <Text style={styles.preDivider}>|</Text>
            <Text style={styles.preTitle}>{plan.mobilenumber}</Text>
          </View>
        </View>
        <View style={[styles.preCol, { alignItems: 'flex-end' }]}>
          <Text style={styles.preTitle}>{plan.plan_name}</Text>
        </View>
      </View>
      <View style={styles.preBody}>
        <View style={styles.preCol2}>
          <View style={styles.waveContainer}>
            <Wave
              style={styles.wave}
              H={daysLeftInPerc}
              waveParams={[
                { A: 20, T: 120, fill: '#0A3367' }
              ]}
              animated={false}
            />
            <View style={styles.waveOverlay}>
              <Text style={styles.waveText}>{plan.days_left > 0 ? plan.days_left + (' ' + __('Days left')) : __('Expired')}</Text>
            </View>
          </View>
          <Button
            style={styles.preRow}
            onPress={() => {
              logClickEvent('DashboardViewPlans')
              navigate('UserBundleList')
            }}
          >
            <Text style={styles.preTitle}>{__('View Plans')}</Text>
          </Button>
        </View>

        <View style={styles.preCol}>
          <View style={styles.preInfo}>
            <Text style={styles.preGb}>{plan.data_balance}</Text>
            <Text style={styles.preLabel}>{__('GB Data')}</Text>
          </View>
          <View style={styles.preBar}>
            <View style={styles.preBarBg} />
            <View style={[styles.preBarProgress, { width: plan.data_percentage + '%' }]} />
          </View>
          <View style={styles.preInfo}>
            <Text style={styles.preLeft}>Left Of {plan.data} GB</Text>
          </View>
          <View style={styles.preBalance}>
            <Text style={styles.prePrice}>A${plan.airtime_balance}</Text>
            <Text style={styles.preBalanceText}>{__('Airtime Balance')}</Text>
          </View>
          <Button
            style={styles.preBtn}
            onPress={() => {
              logClickEvent('DashboardRecharge')
              navigate('UserRechargeHome')
            }}
          >
            <Text style={styles.preBtnText}>{__('Recharge Now')}</Text>
          </Button>
        </View>
      </View>
    </>
  )
  return (
    <View style={styles.preContainer}>
      <View style={styles.preContent}>
        <View>
          {index === 0
            ? renderQuickTour({
              category: 'Dashboard',
              shape: 'rectangle',
              children: item,
              style: styles.quickCard,
              props: {
                maskOffset: 15,
                verticalOffset: 0,
                borderRadius: 15
              }
            })
            : item}
        </View>
      </View>
    </View>
  )
}

export default Prepaid
