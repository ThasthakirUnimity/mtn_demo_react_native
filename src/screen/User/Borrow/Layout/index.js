import React from 'react'
import { Image, View } from 'react-native'

import { Icon, Text } from '@src/component/Basic'
import { Button, TextInput } from '@src/component/Form'
import styles from './../styles'
import { __ } from '@src/utility/translation'
import LinkedNumbers from './LinkedNumbers'
import Plans from './Plans'
import Notification from './Notification'

const Layout = ({ shareType, session, borrowNumber, plans, selectedPlan, onChangeBorrowNumber, selectBorrowNumber, selectPlan, openContacts }) => {
  return (
    <>
      <Notification />

      <View style={styles.search}>
        <View style={styles.searchHeader}>
          <Text style={styles.searchHeaderTitle}>{__('Borrow Now & Pay Later')}</Text>
        </View>
        <View style={styles.searchRow}>
          <View style={styles.searchCol}>
            <TextInput
              placeholder={__('Choose number to send request')}
              placeholderTextColor='rgba(0, 0, 0, 0.3)'
              style={styles.searchInput}
              value={borrowNumber}
              onChangeText={onChangeBorrowNumber}
            />
          </View>
          <Button onPress={openContacts}>
            <Image source={require('@asset/icons/addressbook.png')} style={styles.searchImg} resizeMode='contain' />
          </Button>
        </View>
      </View>

      <LinkedNumbers session={session} selectNumber={selectBorrowNumber} />
      <Plans shareType={shareType} plans={plans} selectedPlan={selectedPlan} selectPlan={selectPlan} />

      {/* }
      <Modal
        ref={c => (this.refConfirm = c)}
        position='bottom'
        swipeDirection='down'
        style={styles.modalDataConfirm}
      >
        {this.renderModalConfirm()}
      </Modal>

      <Otp
        ref={c => (this.refOtp = c)}
        values={this.state.values}
        onSuccess={this.onSuccessOtp}
      />

      <Modal
        ref={c => (this.refSuccess = c)}
        position='bottom'
        swipeDirection='down'
        style={styles.modalConfirm}
        onClosed={this.onClosedSuccess}
      >
        <View style={styles.confirm}>
          <Image source={require('@asset/icons/success.png')} style={styles.confirmImg} resizeMode='contain' />
          <View style={styles.confirmHeader}>
            <View style={styles.confirmHeaderRow}>
              <Text style={styles.confirmHeaderTitle}>{__('Successful')}</Text>
            </View>
            <View style={styles.confirmHeaderRow}>
              <Text style={styles.confirmHeaderSubTitle}>{__('Thank you for using Airtime Borrow')}</Text>
            </View>
          </View>
          <View style={styles.confirmContent}>
            <View style={styles.confirmRow}>
              <Text style={styles.confirmTitle}>{__('John has accepted to lend you Airtime Data and will be processed soon.')}</Text>
            </View>
            <View style={styles.confirmRow}>
              <Text style={styles.confirmDate}>Sep 01, 2022 02:12 AM</Text>
            </View>
            <Button style={styles.confirmBtn}>
              <Text style={styles.confirmBtnText}>{__('Go to Home')}</Text>
            </Button>
          </View>
        </View>
      </Modal>
  { */}
    </>
  )
}

export default Layout
