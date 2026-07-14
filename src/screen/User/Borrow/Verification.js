import React, { useRef, useState } from 'react'
import { Image, View } from 'react-native'
import Modal from 'react-native-modalbox'

import { Text } from '@src/component/Basic'
import { Button, TextInput } from '@src/component/Form'
import styles from './styles'
import { __ } from '@src/utility/translation'

const codeLength = 4

const Verification = ({ shareType, submitVerification, onClosed }) => {
  const [otpCodes, setOtpCodes] = useState(() => {
    const codes = []
    codes.length = codeLength
    codes.forEach((v, i) => (codes[i] = ''))
    return codes.fill('')
  })

  const references = useRef({})

  const onChangeOtpCode = (v, i) => {
    if (v.length === 1) {
      const next = i + 1
      const codes = [...otpCodes]
      codes[i] = v
      setOtpCodes(codes)
      if (next === codeLength) {
        submitVerification(codes.join(''))
      } else {
        references.current['otpCode' + next].focus()
      }
    }
  }

  const focusNextField = (id) => {
    if (references.current[id]) {
      if (references.current[id]._root) {
        references.current[id]._root.focus && references.current[id]._root.focus()
      } else {
        references.current[id].focus && references.current[id].focus()
      }
    }
  }

  const renderCodeInput = () => {
    return otpCodes.map((value, i) => (
      <View key={i} style={styles.otpGroup}>
        <TextInput
          key={i}
          autoCapitalize='none'
          blurOnSubmit={false}
          // editable={verified !== 1}
          keyboardType='numeric'
          maxLength={1}
          placeholder=''
          placeholderTextColor='rgba(0, 0, 0, 1)'
          returnKeyType='next'
          selectTextOnFocus
          value={(value || '').toString()}
          onChangeText={v => onChangeOtpCode(v, i)}
          onSubmitEditing={() => focusNextField('otpCode' + (i + 1))}
          ref={r => (references.current['otpCode' + i] = r)}
          style={styles.otpInput}
        />
      </View>
    ))
  }
  let typeName = ''
  if (shareType.id == 'airtime') {
    typeName = 'airtime'
  } else if (shareType.id == 'data') {
    typeName = 'data'
  }
  return (
    <Modal
      isOpen
      position='bottom'
      swipeDirection='down'
      style={styles.modalConfirm}
      onClosed={onClosed}
    >
      <View style={styles.otp}>
        <View style={styles.otpHeader}>
          <View style={styles.otpHeaderRow}>
            <Text style={styles.otpHeaderTitle}>{__('Authenticate')}</Text>
          </View>
          <View style={styles.otpHeaderRow}>
            <Text style={styles.otpHeaderSubTitle}>{__('To borrow ' + typeName + ', you need to authenticate. \n Use your four digit transaction pin')}</Text>
          </View>
        </View>
        <View style={styles.otpContent}>
          <View style={styles.otpRow}>
            <Text style={styles.otpTitle}>{__('Enter your transaction pin')}</Text>
          </View>
          <View style={styles.otpCol}>
            {renderCodeInput()}
          </View>
          {/* }
          <Button style={styles.otpBtn}>
            <Text style={styles.otpBtnText}>{__('Forgot PIN?')}</Text>
          </Button>
          { */}
        </View>
      </View>
    </Modal>
  )
}

export default Verification
