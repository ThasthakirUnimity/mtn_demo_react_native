import React from 'react'
import { Image, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import styles from './styles'
import { __ } from '@src/utility/translation'
import Modal from 'react-native-modalbox'
import moment from 'moment'
import date from '@src/utility/date'

const Success = ({ shareType, borrowProfile, successResponse, onClosed }) => {
  let typeTitle = ''
  if (shareType.id == 'airtime') {
    typeTitle = 'Airtime'
  } else if (shareType.id == 'data') {
    typeTitle = 'Data'
  }
  return (
    <Modal
      isOpen
      position='bottom'
      swipeDirection='down'
      style={styles.modalConfirm}
      onClosed={onClosed}
    >
      <View style={styles.confirm}>
        <Image source={require('@asset/icons/success.png')} style={styles.confirmImg} resizeMode='contain' />
        <View style={styles.confirmHeader}>
          <View style={styles.confirmHeaderRow}>
            <Text style={styles.confirmHeaderTitle}>{__('Successful')}</Text>
          </View>
          <View style={styles.confirmHeaderRow}>
            <Text style={styles.confirmHeaderSubTitle}>{successResponse?.message}</Text>
          </View>
        </View>
        <View style={styles.confirmContent}>
          <View style={styles.confirmRow}>
            <Text style={styles.confirmTitle}>{successResponse?.desc}</Text>
          </View>
          <View style={styles.confirmRow}>
            <Text style={styles.confirmDate}>{date.formatFull(successResponse?.date)}</Text>
          </View>
          <Button style={styles.confirmBtn} onPress={onClosed}>
            <Text style={styles.confirmBtnText}>{__('Go to Home')}</Text>
          </Button>
        </View>
      </View>
    </Modal>
  )
}

export default Success
