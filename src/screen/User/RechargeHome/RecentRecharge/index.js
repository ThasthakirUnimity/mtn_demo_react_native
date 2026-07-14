import React from 'react'
import { View } from 'react-native'

import { Text } from '@src/component/Basic'
import { __ } from '@src/utility/translation'
import styles from './../styles'
import Placeholder from './Placeholder'
import Item from './Item'

const RecentRecharge = ({list, fetching, openView, repeatRecharge}) => {
    if (fetching===false && list.length===0) {
        return null
    }

    const renderItem = (item) => {
        return <Item item={item} openView={openView} repeatRecharge={repeatRecharge} />
    }

    const renderList = () => {
        if (fetching) {
            return <Placeholder />
        }

        return list.map(renderItem)
    }

    return (
      <>
        <View style={styles.planHeader}>
          <Text style={styles.planHeaderTitle}>{__('Recent Recharge')}</Text>
        </View>
        {renderList()}
      </>
    )
  }

export default RecentRecharge
