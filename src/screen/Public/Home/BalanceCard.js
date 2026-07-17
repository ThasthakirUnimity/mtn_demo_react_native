import React from 'react'
import { View } from 'react-native'

import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import { CURRENCY } from '@src/theme/typography'
import { logClickEvent } from '@src/utility/analytics'
import BalanceUsageCard from './components/BalanceUsageCard'
import CurrentPlanCard from './components/CurrentPlanCard'
import styles from './styles'

const BalanceCard = ({ planDetails, renderQuickTour }) => {
  if (!planDetails || planDetails.length === 0) return null

  const plan = planDetails[0]
  const isPostpaid = plan.type === 'Postpaid'

  const dataUnit = plan.data_type || 'GB'
  const dataBalance = String(plan.data_balance || '0')
  const dataTotal = String(plan.data || '0')
  const usedPercent = typeof plan.data_percentage === 'number'
    ? Math.min(Math.max(plan.data_percentage, 0), 100)
    : 0

  const balanceCurrency = plan.currency_code || CURRENCY.SYMBOL
  const planPrice = isPostpaid
    ? `${balanceCurrency} ${plan.currentBill || '0'}`
    : `${balanceCurrency} ${plan.airtime_balance || '0'}`

  const planName = plan.plan_name || null

  const formatExpiry = (dateStr) => {
    if (!dateStr) return null
    // Normalize "YYYY-MM-DD HH:MM:SS" → "YYYY-MM-DDTHH:MM:SS" for reliable parsing
    const d = new Date(String(dateStr).replace(' ', 'T'))
    if (isNaN(d.getTime())) return null
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
  }
  const expiryInfo = formatExpiry(plan.expiry_date) ||
    plan.validity ||
    (plan.days_left > 0 ? `${plan.days_left} ${__('days left')}` : __('-'))

  const dataMonthly = `${dataTotal} ${dataUnit}`

  // Postpaid: remaining values; Prepaid: totals / Unlimited
  const smsVal = isPostpaid
    ? String(plan.restSms || plan.sms || '-')
    : String(plan.sms || __('Unlimited'))
  const smsLabel = isPostpaid ? __('SMS Left') : __('SMS Daily')

  const callsVal = isPostpaid
    ? String(plan.restVoiceData || plan.voice || '-')
    : (plan.voice ? String(plan.voice) : __('Unlimited'))
  const callsLabel = isPostpaid ? __('Voice Left') : __('Calls')

  // Postpaid usage for BalanceUsageCard rows
  const smsBalance = String(plan.restSms || '0')
  const smsTotal = String(plan.sms || '0')
  const smsPercent = (() => {
    const total = parseFloat(plan.sms) || 0
    const remaining = parseFloat(plan.restSms) || 0
    return total > 0 ? Math.min((total - remaining) / total * 100, 100) : 0
  })()

  const voiceBalance = String(plan.restVoiceData || '0')
  const voiceTotal = String(plan.voice || '0')
  const voicePercent = (() => {
    const total = parseFloat(plan.voice) || 0
    const remaining = parseFloat(plan.restVoiceData) || 0
    return total > 0 ? Math.min((total - remaining) / total * 100, 100) : 0
  })()

  const cardContent = (
    <View>
      <BalanceUsageCard
        isPostpaid={isPostpaid}
        planPrice={planPrice}
        dataBalance={dataBalance}
        dataTotal={dataTotal}
        dataUnit={dataUnit}
        usedPercent={usedPercent}
        smsBalance={smsBalance}
        smsTotal={smsTotal}
        smsPercent={smsPercent}
        voiceBalance={voiceBalance}
        voiceTotal={voiceTotal}
        voicePercent={voicePercent}
      />
      <CurrentPlanCard
        isPostpaid={isPostpaid}
        planName={planName}
        planPrice={planPrice}
        expiryInfo={expiryInfo}
        dataMonthly={dataMonthly}
        smsVal={smsVal}
        smsLabel={smsLabel}
        callsVal={callsVal}
        callsLabel={callsLabel}
        onRecharge={() => {
          logClickEvent(isPostpaid ? 'DashboardPayBill' : 'DashboardRecharge')
          if (isPostpaid) {
            navigate('UserPayment', {
              profile: 'thisstate',
              cart: {
                productType: 'Paybill',
                currency: balanceCurrency,
                total: plan.currentBill || '0',
                items: []
              }
            })
          } else {
            navigate('UserRechargeHome')
          }
        }}
        onChangePlan={() => {
          logClickEvent('DashboardViewPlans')
          navigate(isPostpaid ? 'UserTariffPlan' : 'UserBundleList')
        }}
      />
    </View>
  )

  return (
    <View style={styles.bcWrapper}>
      {renderQuickTour({
        category: 'Dashboard',
        shape: 'rectangle',
        children: cardContent,
        style: styles.quickCard,
        props: {
          maskOffset: 15,
          verticalOffset: 0,
          borderRadius: 15,
        },
      })}
    </View>
  )
}

export default BalanceCard
