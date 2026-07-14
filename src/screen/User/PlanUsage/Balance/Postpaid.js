import React from 'react'
import { Text, View } from 'react-native'
import Wave from 'react-native-waveview'

import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'

import styles from '../styles'

const Postpaid = ({ plan, index, renderQuickTour }) => {
  const renderData = () => {
    /* if (!plan.data) {
      return null
    } */
    return (
      <View style={styles.postGroup}>
        <View style={styles.postRow}>
          <View style={styles.postCol}>
            <Text style={styles.postLabel}>{__('Data')}</Text>
          </View>
          <View style={styles.postCol}>
            <Text style={styles.postValue}>{plan.data_balance || '-'}{plan.data_type}</Text>
            <Text style={styles.postValue}>/{plan.data || '-'}</Text>
          </View>
        </View>
        <View style={styles.postProgress}>
          <View style={styles.postProgressBg} />
          <View style={[styles.postProgressBar, { width: '75%' }]} />
        </View>
      </View>
    )
  }
  const renderAirtime = () => {
    /* if (!plan.voice) {
      return null
    } */
    return (
      <View style={styles.postGroup}>
        <View style={styles.postRow}>
          <View style={styles.postCol}>
            <Text style={styles.postLabel}>{__('VoIP')}</Text>
          </View>
          <View style={styles.postCol}>
            <Text style={styles.postValue}>{plan.restVoip || '-'}</Text>
            <Text style={styles.postValue}>/{plan.Voip || '-'}</Text>
          </View>
        </View>
        <View style={styles.postProgress}>
          <View style={styles.postProgressBg} />
          <View style={[styles.postProgressBar, { width: '50%' }]} />
        </View>
      </View>
    )
  }
  const renderSms = () => {
    /* if (!plan.sms) {
      return null
    } */
    return (
      <View style={styles.postGroup}>
        <View style={styles.postRow}>
          <View style={styles.postCol}>
            <Text style={styles.postLabel}>{__('Days to billing')}</Text>
          </View>
          <View style={styles.postCol}>
            <Text style={styles.postValue}>{plan.days_to_billing || '-'}</Text>
          </View>
        </View>
        <View style={styles.postProgress}>
          <View style={styles.postProgressBg} />
          <View style={[styles.postProgressBar, { width: '40%' }]} />
        </View>
      </View>
    )
  }
  const item = (
    <>
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <View style={styles.postHeaderCol}>
            <Text style={styles.postHeaderType}>Simple Internet</Text>
            <Text style={styles.postHeaderDiv}>|</Text>
            <Text style={styles.postHeaderNumber}>{plan.mobilenumber}</Text>
          </View>
          <View style={styles.postHeaderCol}>
            <Text style={styles.postHeaderLabel}>{__('Current Bill')}</Text>
            <Text style={styles.postHeaderPrice}>{plan.currency_code}{plan.currentBill}</Text>
          </View>
        </View>
        <View style={styles.postBody}>
          {renderData()}
          {renderAirtime()}
          {renderSms()}
        </View>
      </View>
    </>
  )
  return (
    <View style={styles.preContainer}>
      <View style={styles.preContent}>
        <View>
          {item}
        </View>
      </View>
    </View>
  )
}

export default Postpaid
