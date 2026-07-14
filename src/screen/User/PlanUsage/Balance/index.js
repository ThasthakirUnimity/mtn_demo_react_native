import React from 'react'
import { ScrollView, View } from 'react-native'

import Prepaid from './Prepaid'
import Postpaid from './Postpaid'

const Balance = ({ planDetails }) => {
  const renderItem = (item, index) => {
    const C = item.type == 'Postpaid' ? Postpaid : Prepaid
    return (
      <C
        key={index}
        plan={item}
        index={index}
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
