import React from 'react'
import { FlatList, Text, View } from 'react-native'

import theme from '@src/theme/styles'
import { __ } from '@src/utility/translation'
import Item from './Item'
import styles from '../styles'

const Recommended = (props) => {
  if (props.list.length == 0) {
    return null
  }

  const renderItem = ({ item }) => (<Item item={item} />)

  return (
    <>
      <View style={[styles.topDeals, theme.row]}>
        <Text style={styles.topDealsText}>{__('Recommended plans')}</Text>
      </View>
      <View>
        <FlatList
          data={props.list}
          horizontal
          contentContainerStyle={styles.offerContainer}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => (item.id)}
        />
      </View>
    </>
  )
}

export default Recommended
