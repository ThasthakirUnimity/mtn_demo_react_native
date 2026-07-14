import { Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { openChatBot } from '@src/utility/supportChat'
import { __ } from '@src/utility/translation'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import styles from './styles'

const Success = () => {
  return (
    <View style={styles.wifi}>
      <View style={styles.wifiHeader}>
        <Icon name='check-circle' type='Feather' style={styles.wifiHeaderIcon} />
        <Text style={styles.wifiHeaderTitle}>{__('There are no outages')}</Text>
      </View>
      <ScrollView>
        <View style={styles.wifiInfo}>
          <View style={styles.wifiRow}>
            <Text style={styles.wifiTitle}>{__('General Info')}</Text>
          </View>
          <View style={styles.wifiRow}>
            <View style={styles.wifiCol}>
              <Text style={styles.wifiLabel}>{__('Modem')}</Text>
              <Text style={styles.wifiValue}>{__('C3000Z - Connected')}</Text>
            </View>
            <View style={styles.wifiCol}>
              <Text style={styles.wifiLabel}>{__('Service Utilization')}</Text>
              <Text style={styles.wifiValue}>{__('Normal')}</Text>
            </View>
          </View>
        </View>
        <View style={styles.wifiInfo}>
          <View style={styles.wifiSpeedRow}>
            <Text style={styles.wifiSpeedLabel}>{__('Speed Test')}</Text>
            <Text style={styles.wifiSpeedValue}>{__('Plan: 100.128 Mbps')}</Text>
          </View>
          <View style={styles.wifiGroup}>
            <Text style={styles.wifiGroupLabel}>{__('Download Speed')}</Text>
            <Text style={styles.wifiGroupValue}>{__('Sorry, data is temporarily unavailable.')}</Text>
          </View>
          <View style={styles.wifiGroup}>
            <Text style={styles.wifiGroupLabel}>{__('Upload Speed')}</Text>
            <Text style={styles.wifiGroupValue}>{__('10.82 Mbps')}</Text>
          </View>
          <Text style={styles.wifiNote}>{__('If you\'re having a service issue, try troubleshooting.')}</Text>
        </View>
        <View style={styles.wifiInfo}>
          <View style={styles.wifiHelpRow}>
            <Text style={styles.wifiHelpTitle}>{__('Troubleshoot')}</Text>
          </View>
          <View style={styles.wifiContent}>
            <Button style={styles.wifiHelpBtn} onPress={openChatBot}>
              <Text style={styles.wifiHelpBtnText}>{__('I don\'t have an internet connection')}</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Success
