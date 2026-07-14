import React from 'react'
import { Dimensions, View } from 'react-native'
import { COLOR } from '@src/theme/typography'

const Content = (props) => {
  return (
    <View style={props.style ? [styles.container, props.style] : styles.container}>{props.children}</View>
  )
}

const deviceHeight = Dimensions.get('window').height

const styles = {
  container: {
    flex: 1,
    backgroundcolor: COLOR.LIGHT
  }
}

export default Content
