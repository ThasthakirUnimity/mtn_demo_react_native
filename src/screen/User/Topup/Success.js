import React from 'react'
import { Image, View, Text } from 'react-native'
import Modal from 'react-native-modalbox'

import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from './styles'
import { navigate } from '@src/navigation'
import moment from 'moment'
import { CURRENCY, APP_DETAILS } from '@src/theme/typography'

const Success = ({ profile, amount, close }) => {
  const onClosed = async () => {
    await close()
    navigate('PublicHome')
  }
  return (
    <Modal
      isOpen
      position='bottom'
      swipeDirection='down'
      style={styles.modalSuccess}
      onClosed={onClosed}
    >
      <View style={styles.confirmHeader}>
        <Image source={require('@asset/icons/success.png')} resizeMode='contain' style={styles.confirmImg} />
        <View style={styles.confirmHeaderRow}>
          <Text style={styles.confirmHeaderTitle}>{__('Successful')}</Text>
        </View>
        <View style={styles.confirmHeaderRow}>
          <Text style={styles.confirmHeaderSubTitle}>{__('Thank you for using My '+ APP_DETAILS.APP_NAME +'')}</Text>
        </View>
      </View>

      <View style={styles.confirmContent}>
        <View style={styles.confirmBox}>
          <View style={styles.confirmRow}>
            <View style={styles.confirmCol}>
              <Text style={styles.confirmTitle}>{__('Transaction Details')}</Text>
            </View>
            <Button>
              <Image source={require('@asset/icons/transaction-download.png')} resizeMode='contain' />
            </Button>
          </View>
          <View style={styles.confirmRow}>
            <View style={styles.confirmCol}>
              <Text style={styles.confirmLabel}>{__('Date')}</Text>
              <Text style={styles.confirmValue}>{moment().format('MMM DD, YYYY')}</Text>
            </View>
            <View style={styles.confirmCol}>
              <Text style={styles.confirmLabel}>{__('Transaction ID')}</Text>
              <Text style={styles.confirmValue}>B00012345</Text>
            </View>
          </View>
          <View style={styles.confirmRow}>
            <View style={styles.confirmCol}>
              <Text style={styles.confirmLabel}>{__('To')}</Text>
              <Text style={styles.confirmValue}>{profile?.nick_name}</Text>
              <Text style={styles.confirmValue}>{profile?.mobilenumber}</Text>
            </View>
          </View>
          <View style={styles.confirmRow}>
            <View style={styles.confirmCol}>
              <Text style={styles.confirmLabel}>{__('Amount')}</Text>
              <Text style={styles.confirmValue}>{amount}</Text>
            </View>
            <View style={styles.confirmCol} />
          </View>
        </View>
      </View>

      <View style={styles.confirmFooter}>
        <Button style={styles.confirmBtn} onPress={onClosed}>
          <Text style={styles.confirmBtnText}>{__('Back to Home')}</Text>
        </Button>
      </View>
    </Modal>
  )
}

export default Success
