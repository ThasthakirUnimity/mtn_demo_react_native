import React from 'react'
import { Image, View } from 'react-native'
import Modal from 'react-native-modalbox'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from './styles'
import moment from 'moment'
import { CURRENCY, APP_DETAILS } from '@src/theme/typography'


const Success = ({ selectedPlan, selectedNumber, toProfile, recentlySharedSelected, transaction, close }) => {
  const plan = {}
  const fromUser = {}
  const toUser = {}
  if (recentlySharedSelected) {
    plan.label = recentlySharedSelected.shared
    fromUser.name = recentlySharedSelected.senderName
    fromUser.number = recentlySharedSelected.senderNumber
    toUser.name = recentlySharedSelected.receivername
    toUser.number = recentlySharedSelected.recieverNumber
  } else {
    plan.label = selectedPlan.label.toUpperCase()
    fromUser.name = selectedNumber.name
    fromUser.number = selectedNumber.number
    toUser.name = toProfile.nick_name
    toUser.number = toProfile.mobilenumber
  }
  return (
    <Modal
      isOpen
      position='bottom'
      swipeDirection='down'
      style={styles.modalSuccess}
      onClosed={close}
    >
      <View style={styles.successHeader}>
        <Image source={require('@asset/icons/success.png')} resizeMode='contain' style={styles.successImg} />
        <View style={styles.successHeaderRow}>
          <Text style={styles.successHeaderTitle}>{__('Successful')}</Text>
        </View>
        <View style={styles.successHeaderRow}>
          <Text style={styles.successHeaderSubTitle}>{__('Thank you for using My '+ APP_DETAILS.APP_NAME +'')}</Text>
        </View>
      </View>

      <View style={styles.successContent}>
        <View style={styles.successBox}>
          <View style={styles.successRow}>
            <View style={styles.successCol}>
              <Text style={styles.successTitle}>{__('Transaction Details')}</Text>
            </View>
            <Button>
              <Image source={require('@asset/icons/transaction-download.png')} resizeMode='contain' />
            </Button>
          </View>
          <View style={styles.successRow}>
            <View style={styles.successCol}>
              <Text style={styles.successLabel}>{__('Date')}</Text>
              <Text style={styles.successValue}>{moment(transaction.date).format('MMM, DD, YYYY')}</Text>
            </View>
            <View style={styles.successCol}>
              <Text style={styles.successLabel}>{__('Transaction ID')}</Text>
              <Text style={styles.successValue}>{transaction.transactionId}</Text>
            </View>
          </View>
          <View style={styles.successRow}>
            <View style={styles.successCol}>
              <Text style={styles.successLabel}>{__('From')}</Text>
              <Text style={styles.successValue}>{fromUser.name}</Text>
              <Text style={styles.successValue}>{fromUser.number}</Text>
            </View>
            <View style={styles.successCol}>
              <Text style={styles.successLabel}>{__('To')}</Text>
              <Text style={styles.successValue}>{toUser.name}</Text>
              <Text style={styles.successValue}>{toUser.number}</Text>
            </View>
          </View>
          <View style={styles.successRow}>
            <View style={styles.successCol}>
              <Text style={styles.successLabel}>{__('Shared Data')}</Text>
              <Text style={styles.successValue}>{toUser.name}</Text>
              <Text style={styles.successValue}>{plan.label}</Text>
            </View>
            <View style={styles.successCol} />
          </View>
        </View>
      </View>

      <View style={styles.successFooter}>
        <Button style={styles.successBtn} onPress={close}>
          <Text style={styles.successBtnText}>{__('Back to Home')}</Text>
        </Button>
      </View>
    </Modal>
  )
}

export default Success
