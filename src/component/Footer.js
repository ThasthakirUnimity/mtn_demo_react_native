import React from 'react'
import { Text, View } from 'react-native'

import { Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { COLOR, SIZE, FAMILY } from '@src/theme/typography'
import { logClickEvent } from '@src/utility/analytics'
import { __ } from '@src/utility/translation'

const isActive = (currentScreen, name) => (currentScreen == name)

const Item = (props) => {
  return (
    <Button
      style={props.isActive ? [styles.btn, styles.btnActive] : styles.btn}
      onPress={() => {
        props.logName && logClickEvent('Footer' + props.logName)
        navigate(props.routeName)
      }}
    >
      {
        props.icon
          ? (<Icon name={props.icon.name} type={props.icon.type} style={props.isActive ? [styles.icon, styles.iconActive] : styles.icon} />)
          : null
      }
      {
        props.text
          ? (<Text style={props.isActive ? [styles.text, styles.textActive] : styles.text}>{__(props.text.name)}</Text>)
          : null
      }
    </Button>
  )
}

const Footer = (props) => {
  const playBtn = (
    <Item
      isActive={isActive(props.currentScreen, 'PlayHome')}
      routeName='PlayHome'
      logName='Play'
      icon={{ name: 'ios-play-outline', type: 'Ionicons' }}
      text={{ name: 'Play' }}
    />
  )
  const moreBtn = (
    <Item
      isActive={isActive(props.currentScreen, 'UserHome')}
      routeName='UserHome'
      logName='Menu'
      icon={{ name: 'grid', type: 'SimpleLineIcons' }}
      text={{ name: 'Menu' }}
    />
  )
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Item
          isActive={isActive(props.currentScreen, 'PublicHome')}
          routeName='PublicHome'
          logName='Home'
          icon={{ name: 'home', type: 'Foundation' }}
          text={{ name: 'Home' }}
        />
        <Item
          isActive={isActive(props.currentScreen, 'ShopHome')}
          routeName='ShopHome'
          logName='Shop'
          icon={{ name: 'handbag', type: 'SimpleLineIcons' }}
          text={{ name: 'Shop' }}
        />
        {props.renderQuickTour
          ? props.renderQuickTour({
            category: 'Play',
            shape: 'circle',
            children: playBtn,
            style: {
              flex: 1
            }
          })
          : playBtn}
        {props.renderQuickTour
          ? props.renderQuickTour({
            category: 'More',
            shape: 'circle',
            children: moreBtn,
            style: {
              flex: 1
            }
          })
          : playBtn}
      </View>
    </View>
  )
}

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 0
    // zIndex: 1
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  btn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  btnActive: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  icon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.GREY_LIGHT,
    marginBottom: 5
  },
  iconActive: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.PRIMARY,
    marginBottom: 5
  },
  text: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    marginHorizontal: 5
  },
  textActive: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.PRIMARY
  }
}

export default Footer
