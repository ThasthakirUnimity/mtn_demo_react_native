import React from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'

import { Button, Icon } from '@src/component/Basic'
import Item from './Item'
import Placeholder from './Placeholder'
import styles from '../styles'
import theme from '@src/theme/styles'
import { __ } from '@src/utility/translation'

const TelcoList = ({ tab, isSearch, fetchingInitial, fetchingMore, list, total, defaultPageLimit, searchTypeIds, changeTabByIndex }) => {
  if (tab.id === searchTypeIds.ALL && !fetchingInitial && list.length === 0) {
    return null
  }

  const renderTemplate = () => (<Placeholder />)

  const renderItem = ({ item }) => (<Item item={item} />)

  const renderListFooterComponent = () => {
    if (tab.id === searchTypeIds.ALL) {
      return null
    }

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
    if (tab.id === searchTypeIds.ALL) {
      return null
    }

    if (fetchingInitial || fetchingMore) {
      return null
    }

    if (list.length === 0) {
      return (
        <View style={theme.emptyContainer}>
          <View style={theme.emptyContent}>
            <Icon name='emoji-sad' type='Entypo' style={theme.emptyIcon} />
            <Text style={theme.emptyTitle}>{__('Sorry')}</Text>
            <Text style={theme.emptyDesc}>{__('No data found')}</Text>
          </View>
        </View>
      )
    }
  }

  let viewMore
  if (tab.id === searchTypeIds.ALL && isSearch && !fetchingInitial && total > defaultPageLimit) {
    viewMore = (
      <View style={styles.viewMore}>
        <Button style={styles.viewBtn} onPress={() => changeTabByIndex(searchTypeIds.POST)}>
          <Text style={styles.viewBtnText}>View more</Text>
        </Button>
      </View>
    )
  }

  return (
    <View>
      <View style={styles.hashtagContainer}>
        <View>
          <View style={styles.hashtagHeader}>
            <Text style={styles.hashtagHeaderTitle}>Telco</Text>
          </View>
          <Text style={styles.hashtagHeaderText}>Displaying {list.length} results</Text>
        </View>

        <View>
          <FlatList
            data={fetchingInitial ? [1, 2, 3, 4] : list}
            renderItem={fetchingInitial ? renderTemplate : renderItem}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={renderListFooterComponent}
            ListEmptyComponent={renderListEmptyComponent}
          />

          {viewMore}
        </View>
      </View>
    </View>
  )
}

export default TelcoList
