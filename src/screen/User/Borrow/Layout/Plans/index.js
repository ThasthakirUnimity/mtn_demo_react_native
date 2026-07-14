import React from 'react'
import { View } from 'react-native'

import { Text } from '@src/component/Basic'
import styles from './../../styles'
import { __ } from '@src/utility/translation'
import Item from './Item'

const Plans = ({ shareType, plans, selectedPlan, selectPlan }) => {
  const renderPlan = (item) => (<Item item={item} shareType={shareType} selectedPlan={selectedPlan} selectPlan={selectPlan} />)
  return (
    <>
      <View style={styles.planHeader}>
        <Text style={styles.planHeaderTitle}>{__('Select the Plan you\'d like to borrow')}</Text>
      </View>
      {plans.map(renderPlan)}
    </>
  )
}

export default Plans
