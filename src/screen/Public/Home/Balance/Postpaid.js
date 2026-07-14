import React from 'react'
import { Text, View } from 'react-native'
import Wave from 'react-native-waveview'

import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'

import { CURRENCY, APP_DETAILS } from '@src/theme/typography'


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
            <Text style={styles.postValue}>{plan.data_balance || '-'}</Text>
            <Text style={styles.postValueNote}>/{plan.data || '-'}</Text>
            <Text style={styles.postValue}> {plan.data_type}</Text>
          </View>
        </View>
        <View style={styles.postProgress}>
          <View style={styles.postProgressBg} />
          <View style={[styles.postProgressBar, { width: plan.data_percentage + '%' }]} />
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
            <Text style={styles.postLabel}>{__('Voice')}</Text>
          </View>
          <View style={styles.postCol}>
            <Text style={styles.postValue}>{plan.restVoiceData || '-'}</Text>
            <Text style={styles.postValueNote}>/{plan.voice || '-'}</Text>
          </View>
        </View>
        <View style={styles.postProgress}>
          <View style={styles.postProgressBg} />
          <View style={[styles.postProgressBar, { width: plan.voice_percentage + '%' }]} />
        </View>
      </View>
    )
  }

  const payment = () => {
    navigate("UserPayment", {
      profile: 'thisstate',
      cart: {
        productType: 'Paybill',
        currency: CURRENCY.SYMBOL,
        total: '135',
        items: []
      },
    });
  }

  const renderSms = () => {
    /* if (!plan.sms) {
      return null
    } */
    return (
      <View style={styles.postGroup}>
        <View style={styles.postRow}>
          <View style={styles.postCol}>
            <Text style={styles.postLabel}>{__('SMS Messages')}</Text>
          </View>
          <View style={styles.postCol}>
            <Text style={styles.postValue}>{plan.restSms || '-'}</Text>
            <Text style={styles.postValueNote}>/{plan.sms || '-'}</Text>
          </View>
        </View>
        <View style={styles.postProgress}>
          <View style={styles.postProgressBg} />
          <View style={[styles.postProgressBar, { width: plan.sms_percentage + '%' }]} />
        </View>
      </View>
    )
  }
  const item = (
    <>
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <View style={styles.postHeaderCol}>
            <Text style={styles.postHeaderType}>{plan.type}</Text>
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
        <View style={styles.postBot}>
          <View style={styles.postBotCol}>
            <Button style={styles.postBtn} onPress={() => navigate('UserTariffPlan')}>
              <Text style={styles.postBtnText}>{__('View Plans')}</Text>
            </Button>
          </View>
          <View style={styles.postBotCol}>
            <Button style={styles.postPayBtn} onPress={payment}>
              <Text style={styles.postPayBtnText}>{__('Pay Bill')}</Text>
            </Button>
          </View>
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

export default Postpaid
