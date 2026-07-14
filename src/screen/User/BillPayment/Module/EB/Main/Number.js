import React, { useState } from 'react'
import { Text, View } from 'react-native'

import styles from '../../../styles'
import http from '@src/utility/http'
import { URLS } from '@src/config/url'
import { Button, TextInput } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import Support from '@src/component/Support'
import { logClickEvent } from '@src/utility/analytics'

const Number = ({ onVerified }) => {
  const [number, setNumber] = useState('')

  const onVerify = async () => {
    if (number?.length == 10) {
      logClickEvent('PayBillEBNumberAdd', {
        number
      })
      await Support.showLoading()
      try {
        const r = (await http.post(URLS.BILLS_EB, { meternumber: number })).data
        if (r?.response?.meternumber) {
          onVerified(r.response)
        } else {
          throw new Error('Record not found')
        }
      } catch (e) {
        Support.showServerError(e)
      }
      await Support.hideLoading()
    }
  }

  return (
    <View style={styles.form}>
      <View style={styles.formRow}>
        <Text style={styles.formLabel}>{__('Buy Prepaid eletricity')}</Text>
      </View>
      <View style={styles.formGroup}>
        <View style={styles.formInputGroup}>
          <TextInput
            placeholder={__('Enter a Meter Number')}
            placeholderTextColor='rgba(0,0,0,0.5)'
            style={styles.formInput}
            value={number}
            onChangeText={setNumber}
            onSubmitEditing={onVerify}
          />
        </View>
        <Button onPress={onVerify} style={styles.formBtn}>
          <Text style={styles.formBtnText}>{__('Add')}</Text>
        </Button>
      </View>
    </View>
  )
}

export default Number
