import React, { useEffect, useState } from 'react'
import { FlatList, View,Text } from 'react-native'
import { COLOR } from '@src/theme/typography'
import styles from '../styles'

import Item from './Item'
import { __ } from '@src/utility/translation'

import links from './../data/features'

export default ({ session }) => {
  const [list, setList] = useState([])

  useEffect(() => {
    if (session.numbers[session.numberIndex]) {
      const selectedNumber = session.numbers[session.numberIndex]
      if (selectedNumber.type == 'Prepaid') {
        setList(links.filter(r => (!r.simType || r.simType == 'prepaid')))
      } else if (selectedNumber.type == 'Postpaid') {
        setList(links.filter(r => (!r.simType || r.simType == 'postpaid')))
      }
    }
  }, [session.numbers, session.numberIndex])

  const renderItem = ({ item }) => <Item item={item} session={session} />
  return (
    <View style={styles.scCardWrapper}>
      <View style={styles.scCard}>
        <Text style={styles.scCardTitle}>{__('Quick Actions')}</Text>
        <FlatList
          data={list}
          numColumns={4}
          contentContainerStyle={styles.scListContent}
          scrollEnabled={false}
          renderItem={renderItem}
          keyExtractor={item => String(item.id)}
        />
      </View>
    </View>
  )
}

