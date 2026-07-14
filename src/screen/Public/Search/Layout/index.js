import React from 'react'
import { View } from 'react-native'

const Layout = ({ tabSelected, session }) => {
  const renderContent = () => {
    if (tabSelected.component) {
      const C = tabSelected.component
      return <C session={session} />
    }
    return null
  }
  return (
    <View>
      {renderContent()}
    </View>
  )
}

export default Layout
