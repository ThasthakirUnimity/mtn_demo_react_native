import React from 'react'
import { View } from 'react-native'

import { Text } from '@src/component/Basic'
import { __ } from '@src/utility/translation'
import styles from './../styles'
import Placeholder from './Placeholder'

const CurrentPlan = ({ currentPlan, fetching }) => {
  if (fetching === false && currentPlan === null) {
    return null
  }
  if (fetching) {
    return <Placeholder />
  }
  return (
    <>
      <Text style={styles.header}>{__('Your Current Plan')}</Text>
      <View style={styles.profileContent}>
        <View style={styles.profilePlans}>
          <View style={styles.layout}>
            <Text style={styles.planValidity}>{__('Validity')}</Text>
            <Text style={styles.validityDays}>{currentPlan.Validity}</Text>
          </View>
          <View style={styles.layout}>
            <Text style={styles.planValidity}>{__('Data')}</Text>
            <Text style={styles.validityDays}>{currentPlan.data} {currentPlan.data_type}</Text>
          </View>
        </View>
        <View style={styles.packageContent}>
          <Text style={styles.dataPackage}>{currentPlan.calls}</Text>
          <Text style={styles.packagePrice}>{currentPlan.currency}{currentPlan.price}</Text>
        </View>
      </View>
    </>
  )
}

export default CurrentPlan
