import React, { useState } from 'react'
import { Text, View } from 'react-native'

import styles from '../../styles'
import { Button, TextInput } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import { logClickEvent } from '@src/utility/analytics'

const Form = ({ seleted, submitPayment }) => {
  const [amount, setAmount] = useState(0.00)

  const onSubmit = () => {
    const price = parseFloat(amount)
    if (!isNaN(price) && price > 0) {
      logClickEvent('PayBillEBProceed', {
        number: seleted.meternumber,
        name: seleted.name,
        price
      })
      const payload = {
        id: 'eb',
        title: 'Prepaid Bills',
        type: 'Electricity',
        meternumber: seleted.meternumber,
        name: seleted.name,
        quantity: 1,
        currency: 'N',
        price
      }
      submitPayment('eb', payload, price)
    }
  }

  return (
    <View style={styles.pay}>
      <View style={styles.payContent}>
        <View style={styles.payBox}>
          <View style={styles.payRow}>
            <Text style={styles.payTitle}>{__('How much would you like to pay?')}</Text>
          </View>
          <View style={styles.payGroup}>
            <View style={styles.paySymbol}>
              <Text style={styles.paySymbolText}>{__('R')}</Text>
            </View>
            <View style={styles.payInputGroup}>
              <TextInput
                keyboardType='decimal-pad'
                placeholder='0.00'
                placeholderTextColor='rgba(0,0,0,0.5)'
                returnKeyType='done'
                style={styles.payInput}
                value={amount}
                onChangeText={setAmount}
                onSubmitEditing={onSubmit}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.payBot}>
        <Button onPress={onSubmit} style={styles.payBtn}>
          <Text style={styles.payBtnText}>{__('Pay')}</Text>
        </Button>
      </View>
    </View>
  )
}

export default Form
