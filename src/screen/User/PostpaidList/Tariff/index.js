import React from 'react'
import { FlatList, View } from 'react-native'

import { __ } from '@src/utility/translation'
import styles from '../styles'
import Item from './Item'
import Placeholder from './Placeholder'

const List = (props) => {
  const renderItem = ({ item }) => (<Item item={item} activatePlan={props.activatePlan} />)

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }
    return (
      <FlatList
        data={props.list}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    )
  }

  return (
    <View style={styles.leaderboard}>
      {renderList()}
    </View>
  )
}

export default List