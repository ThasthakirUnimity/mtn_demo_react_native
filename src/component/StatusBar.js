import React from 'react'
import { StatusBar, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { COLOR } from '@src/theme/typography'

const C = function (props) {
  const isFocused = useIsFocused()
  if (isFocused) {
    const insets = useSafeAreaInsets()
    const style = { height: insets.top }
    if (props.backgroundColor) {
      style.backgroundColor = props.backgroundColor
    }
    return (
      <View style={style}>
        <StatusBar animated {...props} />
      </View>
    )
  }
  return null
}

export const DarkStatusBar = function (props) {
  return <C backgroundColor={props.backgroundColor || COLOR.DEFAULT} barStyle='light-content' />
}

export const LightStatusBar = function (props) {
  return <C backgroundColor={props.backgroundColor || COLOR.PRIMARY} barStyle='dark-content' />
}

export const SecondaryStatusBar = function (props) {
  return <C backgroundColor={props.backgroundColor || COLOR.LIGHT} barStyle='dark-content' />
}

export const CustomStatusBar = function (props) {
  return <C {...props} />
}

export const TransparentStatusBar = function (props) {
  return <C backgroundColor={props.backgroundColor || COLOR.transparent} barStyle='dark-content' />
}
