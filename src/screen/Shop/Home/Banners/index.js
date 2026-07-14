import React from 'react'
import { View } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'

import { __ } from '@src/utility/translation'
import styles from './../styles'
import Placeholder from './Placeholder'

const Banners = ({ banners, fetching }) => {
  if (fetching) {
    return <Placeholder />
  }
  return (
    <View style={styles.slideContent}>
      <SliderBox
        ImageComponentStyle={styles.sliderImg}
        images={banners}
        sliderBoxHeight={190}
        resizeMode='contain'
        dotColor='rgba(10, 51, 103, 1)'
        inactiveDotColor='rgba(135, 135, 135, 1)'
      />
    </View>
  )
}

export default Banners
