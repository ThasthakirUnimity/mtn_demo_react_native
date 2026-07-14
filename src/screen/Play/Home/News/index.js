import React from 'react'
import { FlatList, View, Text } from 'react-native'

import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import Item from './List'
import Placeholder from './Placeholder'
import styles from '../styles'
import { logClickEvent } from '@src/utility/analytics'

const News = (props) => {
  if (!(props.selectedCategory === 'all' || props.selectedCategory === 'news')) {
    return null
  }
  const renderItem = ({ item }) => (<Item list={item} />)

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }

    return (
      <FlatList
        data={props.list}
        contentContainerStyle={styles.newsContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, i) => (i)}
      />
    )
  }

  return (
    <View>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>{__('Trending News')}</Text>
        <Button
          onPress={() => {
            logClickEvent('PlayServiceNewsViewAll')
            navigate('PlayNewsList')
          }}
        >
          <Text style={styles.headerBtnText}>{__('View All')}</Text>
        </Button>
      </View>
      {renderList()}
    </View>
  )
}

export default News
