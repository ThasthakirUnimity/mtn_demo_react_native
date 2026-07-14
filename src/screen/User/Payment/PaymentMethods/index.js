import React from 'react'
import { View } from 'react-native'

import { Text } from '@src/component/Basic'
import { __ } from '@src/utility/translation'
import styles from './../styles'
import Item from './Item'

const PaymentMethods = ({
  paymentMethods,
  cardNumbers,
  bankAccounts,
  values,
  selectedPaymentMethod,
  selectPaymentMethod,
  selectCard,
  onChangeCardCvv,
  validateCardCvv,
  selectBank
}) => {
  const renderItem = (item, index) => (<Item
    key={item.id}
    item={item}
    index={index}
    cardNumbers={cardNumbers}
    bankAccounts={bankAccounts}
    values={values}
    selectedPaymentMethod={selectedPaymentMethod}
    selectPaymentMethod={selectPaymentMethod}
    selectCard={selectCard}
    onChangeCardCvv={onChangeCardCvv}
    validateCardCvv={validateCardCvv}
    selectBank={selectBank}
                                       />)

  return (
    <View style={styles.pay}>
      <View style={styles.payHeader}>
        <Text style={styles.payHeaderTitle}>{__('Payment Methods')}</Text>
      </View>
      {paymentMethods.map(renderItem)}
    </View>
  )
  /* (
        <View style={styles.pay}>

            <Button style={styles.payBtn}>
                <View style={styles.payCol}>
                    <Icon name='record-circle-outline' type='MaterialCommunityIcons' style={styles.payBtnIconActive} />
                    <Text style={styles.payBtnText}>{__('Bank Account')}</Text>
                </View>
            </Button>
            <View style={styles.payOpen}>
                <Button style={styles.paySubBtn}>
                    <View style={styles.paySubCol}>
                        <Image source={require('@asset/icons/bank/hsbc.png')} resizeMode='contain' style={styles.paySubImg} />
                        <Text style={styles.paySubBtnText}>0004531XXXX543</Text>
                    </View>
                    <Icon name='record-circle-outline' type='MaterialCommunityIcons' style={styles.paySubBtnIconActive} />
                </Button>
                <Button style={styles.payAddBtn} onPress={() => {
                    navigate('UserBankAccount')
                }}>
                    <Icon name='pluscircleo' type='AntDesign' style={styles.payAddBtnIcon} />
                    <Text style={styles.payAddBtnText}>{__('Add Bank Account')}</Text>
                </Button>
            </View>
        </View>
    ) */
}

export default PaymentMethods
