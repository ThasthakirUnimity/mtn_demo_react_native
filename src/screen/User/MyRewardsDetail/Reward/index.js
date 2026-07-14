import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import Item from './Item'
import Placeholder from './Placeholder'

import theme from '@src/theme/styles'
import { __ } from '@src/utility/translation'

const Reward = (props) => {
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
        data={props.list}
        contentContainerStyle={styles.newContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => (item.id)}
      />
    )
  }

  return (
    <View>
      <View style={[styles.header, theme.row]}>
        <Text style={styles.rewardTitle}>{__('Offer Eligibility')}</Text>
      </View>
      {renderList()}
    </View>
  )
}

export default Reward
