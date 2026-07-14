import React from 'react'
import { FlatList, View, Text } from 'react-native'

import Item from './Item'
import Placeholder from './Placeholder'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { logClickEvent } from '@src/utility/analytics'

const Games = (props) => {
  if (!(props.selectedCategory === 'all' || props.selectedCategory === 'games')) {
    return null
  }
  const renderItem = ({ item }) => (<Item item={item} />)

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }

    return (
      <FlatList
        data={props.list}
        contentContainerStyle={styles.gamesContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => (item.id)}
      />
    )
  }
  return (
    <View>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>{__('Game Zone')}</Text>
        <Button
          onPress={() => {
            logClickEvent('PlayServiceGameZoneViewAll')
            navigate('PlayGameList')
          }}
        >
          <Text style={styles.headerBtnText}>{__('View All')}</Text>
        </Button>
      </View>
      {renderList()}
    </View>
  )
}

export default Games
