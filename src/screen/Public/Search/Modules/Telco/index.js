import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import Bundle from './Bundle'

import Tabs from './Tabs'
import Tariff from './Tariff'

const searchTypeIds = {
  BUNDLE: 'bundle',
  TARIFF: 'tariff'
}

const searchTypes = [
  {
    id: searchTypeIds.BUNDLE,
    title: 'Bundles',
    component: Bundle
  },
  {
    id: searchTypeIds.TARIFF,
    title: 'Tariff Plans',
    component: Tariff
  }
]

const Telco = ({ session }) => {
  const [tabs, setTabs] = useState([])
  const [tabSelected, selectTab] = useState(null)
  const [selectedNumber, setSelectedNumber] = useState(null)

  useEffect(() => {
    const _selectedNumber = session.numbers[session.numberIndex]
    if (_selectedNumber) {
      let _tabs = []
      if (_selectedNumber?.type == 'Postpaid') {
        _tabs = searchTypes.filter(r => (r.id !== searchTypeIds.BUNDLE))
      } else if (_selectedNumber?.type == 'Prepaid') {
        _tabs = searchTypes.filter(r => (r.id !== searchTypeIds.TARIFF))
      }
      setSelectedNumber(_selectedNumber)
      setTabs(_tabs)
      selectTab(_tabs[0])
    }
  }, [])

  const renderContent = () => {
    if (tabSelected?.component) {
      const C = tabSelected.component
      return <C session={session} selectedNumber={selectedNumber} />
    }
    return null
  }

  return (
    <View>
      <View>
        <Tabs searchTypes={tabs} tabSelected={tabSelected} selectTab={selectTab} />
      </View>

      {renderContent()}
    </View>
  )
}

export default Telco
