import React from 'react'
import { FlatList, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'

import Item from './Item'
import styles from '../styles'
import Placeholder from './Placeholder'
import { logClickEvent } from '@src/utility/analytics'

const Product = (props) => {
  const renderItem = ({ item }) => <Item item={item} />

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }
    return (
      <FlatList
        data={props.list}
        numColumns={4}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    )
  }
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{__('Product and services')}</Text>
        <Button
          onPress={() => {
            logClickEvent('HomeMTNProductsViewAll')
            navigate('ShopHome')
          }}
        >
          <Text style={styles.headerBtnText}>{__('View All')}</Text>
        </Button>
      </View>
      {renderList()}
    </View>
  )
}

export default Product
