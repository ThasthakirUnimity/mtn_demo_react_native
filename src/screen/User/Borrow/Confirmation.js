import React from 'react'
import { Image, View } from 'react-native'
import Modal from 'react-native-modalbox'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import styles from './styles'
import { __ } from '@src/utility/translation'

const Confirmation = ({ shareType, borrowProfile, selectedPlan, submitConfirmation, onClosed }) => {
  let userImg = require('@asset/icons/avatar-light.png')
  if (borrowProfile.profile_image) {
    userImg = { uri: borrowProfile.profile_image }
  }

  let colName = ''
  let colVal = ''
  if (shareType.id == 'airtime') {
    colName = 'Airtime'
    colVal = selectedPlan.airtime
  } else if (shareType.id == 'data') {
    colName = 'Data'
    colVal = selectedPlan.data
  }

  return (
    <Modal
      isOpen
      position='bottom'
      swipeDirection='down'
      style={styles.modalConfirm}
      onClosed={onClosed}
    >
      <View style={styles.borrow}>
        <View style={styles.borrowHeader}>
          <View style={styles.borrowHeaderRow}>
            <Text style={styles.borrowHeaderTitle}>{__('Borrowing')} {selectedPlan.title} {__(colName)}</Text>
          </View>
          <View style={styles.borrowHeaderRow}>
            <Text style={styles.borrowHeaderSubTitle}>{__('Review details')}</Text>
          </View>
        </View>

        <View style={styles.borrowCard}>
          <View style={styles.borrowRow}>
            <Image source={userImg} style={styles.borrowAvatar} resizeMode='contain' />
            <View style={styles.borrowRight}>
              <View style={styles.borrowRow}>
                <Text style={styles.borrowName}>{borrowProfile.nick_name}</Text>
              </View>
              <View style={styles.borrowRow}>
                <Text style={styles.borrowNo}>{borrowProfile.mobilenumber}</Text>
              </View>
            </View>
          </View>
          <View style={styles.borrowInfo}>
            <View style={styles.borrowCol}>
              <View style={styles.borrowRow}>
                <Text style={styles.borrowLabel}>{__('Validity')}</Text>
              </View>
              <View style={styles.borrowRow}>
                <Text style={styles.borrowValue}>{selectedPlan.validity}</Text>
              </View>
            </View>
            <View style={styles.borrowCol}>
              <View style={styles.borrowRow}>
                <Text style={styles.borrowLabel}>{__(colName)}</Text>
              </View>
              <View style={styles.borrowRow}>
                <Text style={styles.borrowValue}>{colVal}</Text>
              </View>
            </View>
            <View style={styles.borrowCol}>
              <View style={styles.borrowRow}>
                <Text style={styles.borrowLabel}>{__('Calls')}</Text>
              </View>
              <View style={styles.borrowRow}>
                <Text style={styles.borrowValue}>{selectedPlan.calls}</Text>
              </View>
            </View>
          </View>
          <View style={styles.borrowCount}>
            <View style={styles.borrowItem}>
              <Text style={styles.borrowSubTotal}>{__('Subtotal')}</Text>
              <Text style={styles.borrowSubTotal}>{selectedPlan.currency} {selectedPlan.price}</Text>
            </View>
            <View style={styles.borrowItem}>
              <Text style={styles.borrowTax}>{__('15% service charge')}</Text>
              <Text style={styles.borrowTax}>{selectedPlan.currency} 5</Text>
            </View>
            <View style={styles.borrowItem}>
              <Text style={styles.borrowTotal}>{__('Amount Payable')}</Text>
              <Text style={styles.borrowTotalAmount}>{selectedPlan.currency} {parseInt(selectedPlan.price, 10) + 5}</Text>
            </View>
          </View>
        </View>

        <View style={styles.borrowFooter}>
          <View style={[styles.borrowRow, { justifyContent: 'flex-end' }]}>
            <Text style={styles.borrowNote}>{__('* This will be deducted on your next recharge')}</Text>
          </View>
          <View style={styles.borrowBtns}>
            <Button style={styles.borrowBtn} onPress={submitConfirmation}>
              <Text style={styles.borrowBtnText}>{__('Confirm')}</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default Confirmation
