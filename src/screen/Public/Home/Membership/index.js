import React from 'react'
import { FlatList, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import Item from './Item'
import Placeholder from './Placeholder'
import styles from '../styles'
import { logClickEvent } from '@src/utility/analytics'
import { navigate } from '@src/navigation'
import { CURRENCY, APP_DETAILS } from '@src/theme/typography'

const Membership = (props) => {
  const renderItem = ({ item }) => (<Item item={item} />)

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
    <View style={{ marginBottom: 70 }}>
      <View style={styles.headerRow}>
        <View style={styles.homeCol}>
          <Text style={styles.headerTitle}>{__('My '+ APP_DETAILS.APP_NAME +' Membership')}</Text>
        </View>
        <Button
          onPress={() => {
            logClickEvent('HomeMTNMembershipViewAll')
            navigate('GoldenCoinUserLevel')
          }}
        >
          <Text style={styles.headerBtnText}>{__('View All')}</Text>
        </Button>
      </View>
      {renderList()}
    </View>
  )
}

export default Membership
