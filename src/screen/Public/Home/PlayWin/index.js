import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from '@src/component/Basic'

import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import Item from './Item'
import Placeholder from './Placeholder'
import styles from './../styles'
import { navigate } from '@src/navigation'
import { logClickEvent } from '@src/utility/analytics'

const PlayWin = (props) => {
  const renderItem = ({ item }) => (<Item item={item} />)

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }
    return (
      <FlatList
        data={props.list}
        contentContainerStyle={styles.planContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    )
  }

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.homeCol}>
          <Text style={styles.headerTitle}>{__('Play and Win')}</Text>
        </View>
        <Button
          onPress={() => {
            logClickEvent('HomeGamesViewAll')
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

export default PlayWin
