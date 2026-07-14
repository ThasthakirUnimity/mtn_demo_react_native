import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { Text } from '@src/component/Basic'

import Item from './Item'
import styles from '../styles'
import Placeholder from './Placeholder'
import { __ } from '@src/utility/translation'
import { navigate } from '@src/navigation'
import { Button } from '@src/component/Form'
import { logClickEvent } from '@src/utility/analytics'

const Offers = (props) => {
  const renderItem = ({ item }) => (<Item item={item} />)

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }
    return (
      <FlatList
        data={props.list}
        contentContainerStyle={styles.offerContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    )
  }

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.homeCol}>
          <Text style={styles.headerTitle}>{__('Offers')}</Text>
        </View>
        <Button
          onPress={() => {
            logClickEvent('HomeOffersViewAll')
            navigate('PublicOffers')
          }}
        >
          <Text style={styles.headerBtnText}>{__('View All')}</Text>
        </Button>
      </View>
      {renderList()}
    </View>
  )
}

export default Offers
