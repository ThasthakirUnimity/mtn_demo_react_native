import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import Item from './Item'
import Placeholder from './Placeholder'

import theme from '@src/theme/styles'
import { __ } from '@src/utility/translation'

const Rewards = (props) => {
  const renderItem = ({ item }) => {
    item.flag_type = props.flag_type
    item.flag_title = props.flag_title
    return (
      <Item
        language={props.language}
        flag_type={props.flag_type}
        item={item}
      />
    )
  }

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }
    return (
      
      <FlatList
        numColumns={2}
        data={props.fetching ? [1, 2, 3, 4] : props.list}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    )
  }

  return (
    <View style={styles.rewards}>
      {renderList()}
    </View>
  )
}

export default Rewards

