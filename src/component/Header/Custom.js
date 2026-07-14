import React from 'react'
import { View } from 'react-native'

import { COLOR } from '@src/theme/typography'

const CustomHeader = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {props.middleContent}        
      </View>
    </View>
  )
}

const styles = {
  container: {
    backgroundColor: COLOR.PRIMARY
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20
  }
}

export default CustomHeader
