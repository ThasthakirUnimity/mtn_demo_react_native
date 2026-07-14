import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'

import Item from './Item'
import Placeholder from './Placeholder'
import { __ } from '@src/utility/translation'
import styles from '../styles'

import { navigate } from '@src/navigation'

const Popular = (props) => {
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
        data={props.fetching ? [1, 2] : props.list}
        horizontal
        contentContainerStyle={styles.newContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => (item.id)}
      />
    )
  }

  return (
    <View>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>{__('Popular Subscriptions')} </Text>
        <Button onPress={() => { navigate('UserMyRewards', { flag_type: props.flag_type, flag_title: props.flag_title }) }}>
          <Text style={styles.viewBtn}>{__('View All')}</Text>
        </Button>
      </View>
      {renderList()}
    </View>
  )
}

export default Popular
