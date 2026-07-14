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

const Channels = (props) => {
  const renderItem = ({ item, index }) => ((<Item index={index} item={item} />))

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
        <Text style={styles.headerTitle}>{__('Buy Channels')}</Text>
        <Button
          onPress={() => {
            logClickEvent('ShopChannelViewAll')
            navigate('ShopChannelList', { pageName: 'channels' })
          }}
        >
          <Text style={styles.headerBtnText}>{__('View All')}</Text>
        </Button>
      </View>
      {renderList()}
    </View>
  )
}

export default Channels
