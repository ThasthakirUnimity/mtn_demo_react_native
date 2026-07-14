import React from 'react'
import { FlatList, View, Text } from 'react-native'

import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import Item from './Item'
import Placeholder from './Placeholder'
import styles from '../styles'
import { logClickEvent } from '@src/utility/analytics'

const Music = (props) => {
  if (!(props.selectedCategory === 'all' || props.selectedCategory === 'music')) {
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
        contentContainerStyle={styles.podcastContainer}
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
        <Text style={styles.headerTitle}>{__('Music')}</Text>
        <Button
          onPress={() => {
            logClickEvent('PlayServiceMusicViewAll')
            navigate('PlayMusicList', { type: 'music' })
          }}
        >
          <Text style={styles.headerBtnText}>{__('View All')}</Text>
        </Button>
      </View>
      {renderList()}
    </View>
  )
}

export default Music
