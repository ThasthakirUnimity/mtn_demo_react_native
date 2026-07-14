import React from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'

import { Button, Icon } from '@src/component/Basic'
import Item from './Item'
import Placeholder from './Placeholder'
import styles from './../../../../styles'
import theme from '@src/theme/styles'
import { __ } from '@src/utility/translation'

const List = ({ fetchingInitial, fetchingMore, list }) => {
  const renderItem = ({ item }) => (<Item item={item} />)

  const renderListFooterComponent = () => {
    if (fetchingMore) {
      return (
        <View style={{ height: 20 }}>
          <ActivityIndicator animating color='grey' size='small' />
        </View>
      )
    }

    return <View style={{ height: 20 }} />
  }

  const renderListEmptyComponent = () => {
    if (fetchingInitial || fetchingMore) {
      return null
    }

    if (list.length === 0) {
      return (
        <View style={theme.emptyContainer}>
          <View style={theme.emptyContent}>
            <Icon name='emoji-sad' type='Entypo' style={theme.emptyIcon} />
            <Text style={theme.emptyTitle}>{__('Sorry')}</Text>
            <Text style={theme.emptyDesc}>{__('No products found')}</Text>
          </View>
        </View>
      )
    }
  }

  const renderList = () => {
    if (fetchingInitial) {
      return <Placeholder />
    }

    return (
      <FlatList
        data={list}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={renderListFooterComponent}
        ListEmptyComponent={renderListEmptyComponent}
        keyExtractor={(r) => (r.product_id)}
      />
    )
  }

  return (
    <View>
      <View style={styles.hashtagContainer}>
        <View>
          <View style={styles.hashtagHeader}>
            <Text style={styles.hashtagHeaderTitle}>{__('Music')}</Text>
          </View>
          <Text style={styles.hashtagHeaderText}>{__('Displaying')} {list.length} {__('results')}</Text>
        </View>

        <View>
          {renderList()}
        </View>
      </View>
    </View>
  )
}

export default List
