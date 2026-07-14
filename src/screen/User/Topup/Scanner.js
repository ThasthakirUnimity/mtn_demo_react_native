import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Modal from 'react-native-modalbox'
import { Camera, useCameraDevices } from 'react-native-vision-camera'
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner'

import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from './styles'

const Scanner = ({ close, onRead }) => {
  const [hasPermission, setHasPermission] = useState(false)
  const [selectedBarcode, setBarcode] = useState(null)

  const devices = useCameraDevices()
  const device = devices.back

  const [frameProcessor, barcodes] = useScanBarcodes(
    [BarcodeFormat.QR_CODE],
    {
      checkInverted: true
    }
  )

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission()
      setHasPermission(status === 'authorized')
    })()
  }, [])

  useEffect(() => {
    // console.log(JSON.stringify(barcodes, null, 2));
    if (barcodes.length) {
      const code = barcodes[0].rawValue.toString()
      if (code != selectedBarcode) {
        setBarcode(code)
        onRead(code)
      }
    }
  }, [barcodes])

  const onClosed = async () => {
    await close()
  }

  const renderCamera = () => {
    if (!hasPermission) {
      return (
        <View style={{
          width: 230,
          height: 240,
          marginBottom: 50
        }}
        >
          <Text>Camera Permission needed</Text>
        </View>
      )
    }
    return (
      <Camera
        style={styles.scanCode}
        device={device}
        isActive
        frameProcessor={frameProcessor}
        frameProcessorFps={5}
      />
    )
  }

  return (
    <Modal
      isOpen
      position='bottom'
      swipeDirection='down'
      style={styles.modalScan}
      onClosed={onClosed}
    >

      <View style={styles.scanHeader}>
        <Text style={styles.scanHeaderTitle}>{__('Scan QR Code')}</Text>
        <Text style={styles.scanHeaderSubTitle}>{__('Align QR Code within fram to scan')}</Text>
      </View>

      <View style={styles.scanContent}>
        {renderCamera()}
        <Text style={styles.scanDesc}>{__('Scanning Code')}</Text>
      </View>

      <View style={styles.scanFooter}>
        <Button style={styles.scanBtn} onPress={close}>
          <Text style={styles.scanBtnText}>{__('Cancel')}</Text>
        </Button>
      </View>
    </Modal>
  )
}

export default Scanner
