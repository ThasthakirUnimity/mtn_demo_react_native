import React from 'react'
import { FlatList, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import Item from './Item'
import Placeholder from './Placeholder'
import { logClickEvent } from '@src/utility/analytics'

const Movies = (props) => {
  const renderItem = ({ item }) => (<Item item={item} />)

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }
    return (
      <FlatList
        data={props.list}
        horizontal
        contentContainerStyle={styles.secListHPad}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => (item.id)}
      />
    )
  }

  return (
    <View style={styles.secCard}>
      <View style={styles.secCardHeader}>
        <Text style={styles.secCardTitle}>{__('Movies or Shows you may like')}</Text>
        <Button
          onPress={() => {
            logClickEvent('HomeMoviesViewAll')
            navigate('PlayMovieList', { type: 'movie' })
          }}
        >
          <Text style={styles.headerBtnText}>{__('View All')}</Text>
        </Button>
      </View>
      {renderList()}
    </View>
  )
}

export default Movies
