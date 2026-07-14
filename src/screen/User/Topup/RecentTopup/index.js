import React from 'react'
import { FlatList, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { __ } from '@src/utility/translation'
import Item from './Item'
import Placeholder from './Placeholder'
import styles from './../styles'

const RecentTopup = ({ fetching, list, selectRecentTopup }) => {
  if (!fetching && list.length == 0) {
    return null
  }

  const renderItem = ({ item }) => (<Item item={item} selectRecentTopup={selectRecentTopup} />)

  const renderList = () => {
    if (fetching) {
      return <Placeholder />
    }

    return (
      <FlatList
        data={list}
        horizontal
        contentContainerStyle={styles.topupContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => (item.id)}
      />
    )
  }

  return (
    <View style={styles.recent}>
      <View style={styles.recentHeader}>
        <Text style={styles.recentHeaderTitle}>{__('Recent Topups')}</Text>
      </View>
      <View>
        {renderList()}
      </View>
    </View>
  )
}

export default RecentTopup