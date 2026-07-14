import React from 'react'
import { View } from 'react-native'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads'

const Banner = ({ placement }) => {
  return (
    <View style={styles.adContainer}>
      <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.MEDIUM_RECTANGLE}
      />
    </View>
  )
}

const styles = {
  adContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15
  },
}
export default Banner
