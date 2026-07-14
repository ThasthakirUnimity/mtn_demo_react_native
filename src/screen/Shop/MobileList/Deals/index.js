import React from 'react'
import { Text, View } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'

import { __ } from '@src/utility/translation'
import styles from './../styles'
import Placeholder from './Placeholder'

const Deals = ({ list, fetching }) => {
  if (!fetching && list.length === 0) {
    return null
  }
  return (
    <View style={styles.slideContent}>
      <View style={styles.slideHeader}><Text style={styles.slideHeaderText}>{__('Top Deals of the Day')}</Text></View>
      {
        fetching
          ? <Placeholder />
          : <SliderBox
              ImageComponentStyle={styles.sliderImg}
              images={list}
              sliderBoxHeight={190}
              resizeMode='contain'
              dotColor='rgba(10, 51, 103, 1)'
              inactiveDotColor='rgba(135, 135, 135, 1)'
            />
      }

    </View>
  )
}

export default Deals
