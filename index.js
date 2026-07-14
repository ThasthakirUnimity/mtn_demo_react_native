import 'react-native-gesture-handler'
import 'react-native-reanimated'

import { AppRegistry, LogBox } from 'react-native'
import Base from '@src/base'
import { name as appName } from './app.json'

// enableScreens(true)
// enableFreeze(true)

if (__DEV__) {
  const errors = [
    'Warning: ...',
    'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.',
    'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
    'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.'
  ]
  LogBox.ignoreLogs(errors)

  LogBox.ignoreAllLogs(true)

  const originalWarn = console.error
  console.error = (message, ...optionalParams) => {
    if (errors.findIndex(m => m.indexOf(m) > -1) > -1) {
      return
    }
    if (message) { originalWarn(message, ...optionalParams) }
  }

  console.reportErrorsAsExceptions = false
}

AppRegistry.registerComponent(appName, () => Base)
