import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { __ } from '@src/utility/translation'
import Item from './Item'
import Placeholder from './Placeholder'
import styles from '../styles'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { logClickEvent } from '@src/utility/analytics'

const Coupon = (props) => {
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
    <>
      <ScrollView horizontal style={styles.promotion}>
        <View style={styles.headerPromotionRow}>
          <View>
            <View style={[styles.headerRow2, { marginBottom: 10 }]}>
              <Text style={styles.headerTitle}>{__('Promotion \nand Coupons')}</Text>
            </View>
            <View style={styles.headerRow2}>
              <Text style={styles.headerDesc}>{__('Sed ut perspiciatis unde \n omnis iste natus error...')}</Text>
            </View>
          </View>
          <Button
            style={{ marginBottom: 30 }}
            onPress={() => {
              logClickEvent('HomePromotionsViewAll')
              navigate('PublicCoupon')
            }}
          >
            <Text style={styles.headerBtnText}>{__('View All')}</Text>
          </Button>
        </View>
        {renderList()}
      </ScrollView>
    </>
  )
}

export default Coupon
