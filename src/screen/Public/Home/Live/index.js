import React from 'react'
import { FlatList, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import Item from './Item'
import Placeholder from './Placeholder'
import styles from '../styles'
import { logClickEvent } from '@src/utility/analytics'

const Live = (props) => {
  const renderItem = ({ item }) => (<Item item={item} />)

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }

    return (
      <FlatList
        data={props.list}
        horizontal
        contentContainerStyle={styles.liveContainer}
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
          <Text style={styles.headerTitle}>{__('Live TV')}</Text>
        </View>
        <Button
          onPress={() => {
            logClickEvent('HomeLiveTvViewAll')
            navigate('PlayLiveTvList', { type: 'movie' })
          }}
        >
          <Text style={styles.headerBtnText}>{__('View All')}</Text>
        </Button>
      </View>
      {renderList()}
    </View>
  )
}

export default Live
