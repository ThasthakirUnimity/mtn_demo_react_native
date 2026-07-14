import React from 'react'
import { View, Image, Text, Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'

import {  Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { goBack, openDrawer } from '@src/navigation'
import { COLOR, FAMILY, SIZE } from '@src/theme/typography'
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context'
import { getDefaultHeaderHeight } from './utils'
import { throttle } from 'lodash'
import { THROTTLE_EVENT_DURATION } from '@src/config/env'

const isTablet = DeviceInfo.isTablet()

const leftStyle = isTablet || Platform.isPad ? { width: 60 } : { flex: 1.5 }

const Left = (props) => {
  const goBackNav = throttle(goBack, THROTTLE_EVENT_DURATION)
  const openDrawerNav = throttle(openDrawer, THROTTLE_EVENT_DURATION)

  if (props.leftHide) {
    return null
  }
  let C
  if (props.leftContent) {
    C = props.leftContent
  } else if (props.leftType === 'menu') {
    C = (
      <Button style={styles.btn} onPress={openDrawerNav}>
        <Icon name='sort' type='MaterialIcons' style={styles.btnIcon} />
      </Button>
    )
  } else if (props.leftType === 'back') {
    C = (
      <Button style={styles.btn} onPress={goBackNav}>
        <Icon name='chevron-left' type='Feather' style={styles.btnIcon} />
      </Button>
    )
  }
  return (
    <View style={props.leftStyle ? [styles.left, props.leftStyle] : styles.left}>
      {C}
    </View>
  )
}

const Middle = (props) => {
  let C
  if (props.middleContent) {
    C = props.middleContent
  } else if (props.title) {
    const titleStyle = []
    if (props.titleAlign) {
      titleStyle.push(styles[props.titleAlign])
    }
    if (props.titleColor) {
      titleStyle.push(styles[props.titleColor])
    }
    if (props.titleStyle) {
      titleStyle.push(props.titleStyle)
    }
    C = <Text style={titleStyle}>{props.title}</Text>
  }
  const middleStyle = [props.rightHide ? styles.middle2 : styles.middle]
  if (props.middleStyle) {
    middleStyle.push(props.middleStyle)
  }
  return (
    <View style={middleStyle}>
      {C}
    </View>
  )
}

const Right = (props) => {
  if (props.rightHide) {
    return null
  }
  let C
  if (props.rightContent) {
    C = props.rightContent
  }
  return (
    <View style={props.rightStyle ? [styles.right, props.rightStyle] : styles.right}>
      {C}
    </View>
  )
}

const Header = (props) => {
  const insets = useSafeAreaInsets()
  const frame = useSafeAreaFrame()

  const defaultHeight = getDefaultHeaderHeight(
    frame,
    false,
    insets.top
  )

  const cs = { ...styles.container }
  if (props.default) {
    cs.backgroundColor = COLOR.PRIMARY
  }
  cs.height = defaultHeight

  return (
    <View style={props.style ? [cs, props.style] : cs}>
      <Left {...props} />
      <Middle {...props} />
      <Right {...props} />
    </View>
  )
}

const styles = {
  container: {
    flexDirection: 'row',
    // backgroundColor: COLOR.DEFAULT
    backgroundColor: COLOR.PRIMARY
  },
  left: {
    ...leftStyle,
    alignItems: 'center',
    justifyContent: 'center'
  },
  middle: {
    flex: 6.5,
    justifyContent: 'center'
  },
  middle2: {
    flex: 8.5,
    justifyContent: 'center'
  },
  right: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  start: {

  },
  center: {

  },
  end: {

  },
  light: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.LIGHT
  },
  dark: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK
  },
  btn: {
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT
  }
}

export default Header
