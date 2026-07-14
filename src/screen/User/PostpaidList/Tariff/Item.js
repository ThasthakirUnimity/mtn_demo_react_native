import React from 'react'
import { View } from 'react-native'

import { Text, Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from '../styles'

const Item = ({ item, activatePlan }) => {
  const select = () => activatePlan(item)

  return (
    <Button style={styles.planContainer}>
      <Text style={styles.primaryText}>{item.label}</Text>
      <View style={styles.planContent}>
        <View style={styles.planDetail}>
          <View style={{ flex: 1 }}>
            <Text style={styles.mtnText}>{item.title}</Text>
            <Text style={styles.planPrice}>{item.currency}{item.price}/{item.plantype}</Text>
            <Text style={styles.annualPlan}>{item.annualPlan}</Text>
          </View>
          <Button style={styles.activatBtn} onPress={select}>
            <Text style={styles.activatBtnText}>{__('Select')}</Text>
          </Button>
        </View>
        <View style={styles.planFacility}>
          <View style={styles.planFacilityRow}>
            <Icon name='wifi' type='Feather' style={styles.facilityIcon} />
            <Text style={styles.facilityText}>{__('Data')}</Text>
          </View>
          <Text style={styles.tariffPlans}>{item.data} {item.data_type}</Text>
        </View>
        <View style={styles.planFacility}>
          <View style={styles.planFacilityRow}>
            <Icon style={styles.facilityIcon} name='ios-speedometer-outline' type='Ionicons' />
            <Text style={styles.facilityText}>{__('Speed')}</Text>
          </View>
          <Text style={styles.tariffPlans}>{item.speed}</Text>
        </View>

        <Text style={styles.benefitText}>{item.desc}</Text>
      </View>
    </Button>
  )
}

export default Item
