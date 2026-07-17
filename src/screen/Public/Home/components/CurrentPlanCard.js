import React from 'react'
import { View, Text } from 'react-native'
import { COLOR } from '@src/theme/typography'
import LinearGradient from 'react-native-linear-gradient'

import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from '../styles'

const BenefitCol = ({ icon, value, label }) => (
  <View style={styles.cpBenCol}>
    <Text style={styles.cpBenEmoji}>{icon}</Text>
    <Text style={styles.cpBenVal}>{value}</Text>
    <Text style={styles.cpBenLabel}>{label}</Text>
  </View>
)

const CurrentPlanCard = ({
  isPostpaid,
  planName,
  planPrice,
  expiryInfo,
  dataMonthly,
  smsVal,
  smsLabel,
  callsVal,
  callsLabel,
  onRecharge,
  onChangePlan,
}) => {
  const primaryLabel = isPostpaid ? __('Pay Bill') : __('Recharge Now')
  const secondaryLabel = isPostpaid ? __('View Plans') : __('View Plan')
  const expiryRowLabel = isPostpaid ? __('Billing') : __('Expires on')
   const current = isPostpaid ? __('Current Bill') : __('Current Plan')

  return (
    <View style={styles.cpCard}>
      {/* ── Top row ── */}
      <View style={styles.cpTopRow}>
        <View>
          <Text style={styles.cpSmallLabel}>{current}</Text>
          {!!planName && <Text style={styles.cpPlanName}>{planName}</Text>}
          <Text style={styles.cpPrice}>{planPrice}</Text>
        </View>
        <View style={styles.cpExpiryCol}>
          <Text style={styles.cpSmallLabel}>{expiryRowLabel}</Text>
          <Text style={styles.cpExpiryVal}>{expiryInfo}</Text>
        </View>
      </View>

      {/* ── Benefits row ── */}
      <View style={styles.cpBenRow}>
        <BenefitCol icon='🌐' value={dataMonthly} label={__('Data')} />
        <View style={styles.cpBenDivider} />
        <BenefitCol icon='💬' value={smsVal} label={smsLabel} />
        <View style={styles.cpBenDivider} />
        <BenefitCol icon='📞' value={callsVal} label={callsLabel} />
      </View>

      {/* ── Action buttons ── */}
      <View style={styles.cpBtnRow}>
        <Button style={styles.cpRechargeBtn} onPress={onRecharge}>
          <LinearGradient
            colors={[COLOR.PRIMARY, COLOR.SECONDARY]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.cpRechargeGrad}
          >
            <Text style={styles.cpRechargeBtnText}>{primaryLabel}</Text>
          </LinearGradient>
        </Button>

        <Button style={styles.cpChangePlanBtn} onPress={onChangePlan}>
          <Text style={styles.cpChangePlanText}>{secondaryLabel}</Text>
        </Button>
      </View>
    </View>
  )
}

export default CurrentPlanCard

