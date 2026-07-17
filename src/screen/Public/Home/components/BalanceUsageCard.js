import React from 'react'
import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { COLOR } from '@src/theme/typography'

import { Icon } from '@src/component/Basic'
import { __ } from '@src/utility/translation'
import styles from '../styles'

/* ── Mini usage row for Postpaid (Data / SMS / Voice) ── */
const UsageRow = ({ label, balance, total, unit, percent }) => {
  const clamped = Math.min(Math.max(percent || 0, 0), 100)
  return (
    <View style={styles.busUsageRow}>
      <Text style={styles.busUsageLabel}>{label}</Text>
      <Text style={styles.busUsageText}>
        {balance}{unit ? ` ${unit}` : ''} / {total}{unit ? ` ${unit}` : ''}
      </Text>
      <View style={styles.busUsageMiniTrack}>
        <View style={[styles.busUsageMiniBar, { width: `${clamped}%` }]} />
      </View>
    </View>
  )
}

const BalanceUsageCard = ({
  isPostpaid,
  planPrice,
  dataBalance,
  dataTotal,
  dataUnit = 'GB',
  usedPercent = 0,
  smsBalance,
  smsTotal,
  smsPercent = 0,
  voiceBalance,
  voiceTotal,
  voicePercent = 0,
}) => {
  const clampedDataPercent = Math.min(Math.max(usedPercent, 0), 100)

  return (
    <LinearGradient
      colors={[COLOR.PRIMARY, COLOR.SECONDARY]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.busCard}
    >
      {isPostpaid ? (
        /* ────────── POSTPAID ────────── */
        <>
          <View style={styles.busTopRow}>
            <View>
              <Text style={styles.busLabel}>{__('Current Bill')}</Text>
              <Text style={styles.busBillAmt}>{planPrice}</Text>
            </View>
            <Icon name='chevron-right' type='Feather' style={styles.busChevron} />
          </View>
          <View style={styles.busUsageList}>
            <UsageRow
              label={__('Data')}
              balance={dataBalance}
              total={dataTotal}
              unit={dataUnit}
              percent={clampedDataPercent}
            />
            <UsageRow
              label={__('SMS')}
              balance={smsBalance}
              total={smsTotal}
              unit=''
              percent={smsPercent}
            />
            <UsageRow
              label={__('Voice')}
              balance={voiceBalance}
              total={voiceTotal}
              unit={__('Min')}
              percent={voicePercent}
            />
          </View>
        </>
      ) : (
        /* ────────── PREPAID ────────── */
        <>
          <View style={styles.busTopRow}>
            <View style={styles.busLeft}>
              <Text style={styles.busLabel}>{__('Used Data')}</Text>
              <View style={styles.busValueRow}>
                <Text style={styles.busValue} numberOfLines={1}>
                  {dataBalance} {dataUnit} / {dataTotal} {dataUnit}
                </Text>
                <View style={styles.busUsedBox}>
                  <Text style={styles.busUsedLabel}>{__('used')}</Text>
                  
                </View>
              </View>
            </View>
            <Icon name='chevron-right' type='Feather' style={styles.busChevron} />
          </View>

          <View style={styles.busTrack}>
            <View style={[styles.busFill, { width: `${clampedDataPercent}%` }]} />
          </View>

          {!!planPrice && (
            <View style={styles.busAirtimeRow}>
              <Text style={styles.busAirtimeLabel}>{__('Airtime Balance')}</Text>
              <Text style={styles.busAirtimeVal}>{planPrice}</Text>
            </View>
          )}
        </>
      )}
    </LinearGradient>
  )
}

export default BalanceUsageCard

