import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import Item from './Item'
import Placeholder from './Placeholder'
import styles from '../styles'
import { navigate } from '@src/navigation'
import { logClickEvent } from '@src/utility/analytics'

const Promotions = (props) => {
  const renderItem = ({ item }) => (<Item item={item} />)

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }
    return (
      <FlatList
        data={props.list}
        horizontal
        contentContainerStyle={styles.promotionContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => (item.id)}
      />
    )
  }

  return (
    <ScrollView horizontal style={styles.promotion}>
      <View style={styles.headerPromotionRow}>
        <View style={styles.promotionCol}>
          <Text style={styles.headerTitle}>{__('Promotion and \n Coupons')}</Text>
          <Text style={styles.headerDesc}>{__('Sed ut perspiciatis unde n omnis iste natus error')}</Text>
        </View>
        <Button
          onPress={() => {
            logClickEvent('ShopPromotionViewAll')
            navigate('PublicOffers')
          }}
        >
          <Text style={styles.headerBtnText}>{__('View All')}</Text>
        </Button>
      </View>
      {renderList()}
    </ScrollView>
  )
}

export default Promotions
