import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'

import Item from './Item'
import Placeholder from './Placeholder'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import { navigate } from '@src/navigation'

const Shop = (props) => {
  const renderItem = ({ item }) => (<Item item={item} />)

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
        <Text style={styles.headerTitle}>{__('Online Shopping')} </Text>
        <Button onPress={() => { navigate('GoldenCoinOnlineShopping') }}>
          <Text style={styles.viewBtn}>{__('View All')}</Text>
        </Button>
      </View>
      {renderList()}
    </View>
  )
}

export default Shop
