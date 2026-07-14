import React from 'react'
import { View } from 'react-native'

import { Icon, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import styles from './../styles'
import { navigate } from '@src/navigation'

const Item = ({ item }) => {
  const _activatePlan = () => navigate('UserTariffPlan', { selectedPlan: item })
  return (
    <View style={styles.planContainer}>
      <Text style={styles.primaryText}>Best Seller</Text>
      <View style={styles.planContent}>
        <View style={styles.planDetail}>
          <View>
            <Text style={styles.mtnText}>{item.title}</Text>
            <Text style={styles.planPrice}>{item.currency} {item.price}/{item.plantype}</Text>
            <Text style={styles.annualPlan}>{item.info}</Text>
          </View>
          <Button style={styles.activatBtn} onPress={_activatePlan}>
            <Text style={styles.activatBtnText}>Activate</Text>
          </Button>
        </View>
        <View style={styles.planFacility}>
          <View style={styles.planFacilityRow}>
            <Icon name='wifi' type='Feather' style={styles.facilityIcon} />
            <Text style={styles.facilityText}>Internet</Text>
          </View>
          <Text style={styles.tariffPlans}>{item.internet}</Text>
        </View>
        <View style={styles.planFacility}>
          <View style={styles.planFacilityRow}>
            <Icon style={styles.facilityIcon} name='ios-speedometer-outline' type='Ionicons' />
            <Text style={styles.facilityText}>Speed</Text>
          </View>
          <Text style={styles.tariffPlans}>{item.speed}</Text>
        </View>
        <View style={styles.planFacility}>
          <View style={styles.planFacilityRow}>
            <Icon style={styles.facilityIcon} name='call-outline' type='Ionicons' />
            <Text style={styles.facilityText}>Calls</Text>
          </View>
          <Text style={styles.tariffPlans}>{item.calls}</Text>
        </View>

        <Text style={styles.benefitText}>{item.desc}</Text>
      </View>
    </View>
  )
}

export default Item
