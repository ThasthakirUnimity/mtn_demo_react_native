import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { Container, Content, Icon, Text } from '@src/component/Basic'

import Item from './Item'
import styles from '../styles'
import Placeholder from './Placeholder'
import { __ } from '@src/utility/translation'

const List = (props) => {
  const renderItem = ({ item }) => (<Item
    item={item}
    addToCart={props.addToCart}
    buyNow={props.buyNow}
    openView={props.openView}
                                    />)

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }

    return (
      <FlatList
        data={props.list}
        contentContainerStyle={styles.rechargeContainer}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    )
  }

  if (!props.fetching && props.list.length === 0) {
    return null
  }

  return (
    <>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
        {renderList()}
      </View>
    </>
  )
}

export default List
