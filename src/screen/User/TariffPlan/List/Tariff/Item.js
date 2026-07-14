import React from 'react'
import { View } from 'react-native'

import { Text, Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from './../../styles'

const Item = ({ item, activatePlan }) => {
  const _activatePlan = () => activatePlan(item)
  return (
    <View style={styles.planContainer}>
      <Text style={styles.primaryText}>{item.label}</Text>
      <View style={styles.planContent}>
        <View style={styles.planDetail}>
          <View style={styles.planCol}>
            <Text style={styles.mtnText}>{item.title}</Text>
            <Text style={styles.planPrice}>{item.currency} {item.price}/{item.plantype}</Text>
            <Text style={styles.annualPlan}>{item.info}</Text>
          </View>
          <View>
            <Button style={styles.activatBtn} onPress={_activatePlan}>
              <Text style={styles.activatBtnText}>{__('Activate')}</Text>
            </Button>
          </View>
        </View>
        <View style={styles.planFacility}>
          <View style={styles.planFacilityRow}>
            <Icon name='wifi' type='Feather' style={styles.facilityIcon} />
            <Text style={styles.facilityText}>{__('Internet')}</Text>
          </View>
          <Text style={styles.tariffPlans}>{item.internet}</Text>
        </View>
        <View style={styles.planFacility}>
          <View style={styles.planFacilityRow}>
            <Icon style={styles.facilityIcon} name='ios-speedometer-outline' type='Ionicons' />
            <Text style={styles.facilityText}>{__('Speed')}</Text>
          </View>
          <Text style={styles.tariffPlans}>{item.speed}</Text>
        </View>
      </View>
    </View>
  )
}

export default Item