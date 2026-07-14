import React from 'react'
import { FlatList, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import Item from './Item'
import Placeholder from './Placeholder'
import { logClickEvent } from '@src/utility/analytics'
import { navigate } from '@src/navigation'

const CallerTunes = (props) => {
  const renderItem = ({ item, index }) => (<Item item={item} index={index} />)

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }
    return (
      <FlatList
        data={props.list}
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
        <View style={styles.homeCol}>
          <Text style={styles.headerTitle}>{__('Caller Tunes')}</Text>
        </View>
        <Button
          onPress={() => {
            logClickEvent('HomeCallerTunesViewAll')
            navigate('UserCallertuneList')
          }}
        >
          <Text style={styles.headerBtnText}>{__('View All')}</Text>
        </Button>
      </View>
      {renderList()}
    </View>
  )
}

export default CallerTunes
