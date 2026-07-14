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

const Music = (props) => {
  const renderItem = ({ item }) => (<Item item={item} />)

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }
    return (
      <FlatList
        data={props.list}
        horizontal
        contentContainerStyle={{ paddingLeft: 10 }}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => (item.id)}
      />
    )
  }

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.homeCol}>
          <Text style={styles.headerTitle}>{__('Music you may like')}</Text>
        </View>
        <Button
          onPress={() => {
            logClickEvent('HomeMusicsViewAll')
            navigate('PlayMusicList', { type: 'music' })
          }}
        >
          <Text style={styles.headerBtnText}>{__('View All')}</Text>
        </Button>
      </View>
      <View style={styles.musicBg}>
        {renderList()}
      </View>
    </View>
  )
}

export default Music
