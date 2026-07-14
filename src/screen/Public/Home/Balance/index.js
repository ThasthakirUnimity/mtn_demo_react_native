import React from 'react'
import { ScrollView, View } from 'react-native'

import { __ } from '@src/utility/translation'
import Prepaid from './Prepaid'
import Postpaid from './Postpaid'

const Balance = ({ planDetails, renderQuickTour }) => {
  const renderItem = (item, index) => {
    const C = item.type == 'Postpaid' ? Postpaid : Prepaid
    return (
      <C
        key={index}
        plan={item}
        index={index}
        renderQuickTour={renderQuickTour}
      />
    )
  }
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {planDetails.map(renderItem)}
      </ScrollView>
    </View>
  )
}

export default Balance
