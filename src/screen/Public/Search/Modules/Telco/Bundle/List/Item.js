import React from 'react'
import { View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import theme from '@src/theme/styles'
import styles from './../styles'

const Item = ({ item, openView, buyNow }) => {
  const _openView = () => openView(item)
  const _buyNow = () => buyNow(item)
  return (
    <Button style={styles.rechargeContent2}>
      <View style={styles.rechargePlans}>
        <View style={styles.layout}>
          <View style={theme.row}>
            <Text style={styles.validityText}>{__('Validity')}</Text>
          </View>
          <View style={theme.row}>
            <Text style={styles.limitedText}>{item.Validity} {item.validity_type}</Text>
          </View>
        </View>
        <View style={styles.layout}>
          <View style={theme.row}>
            <Text style={styles.validityText}>{__('Data')}</Text>
          </View>
          <View style={theme.row}>
            <Text style={styles.limitedText}>{item.Data}{item.data_type}</Text>
          </View>
        </View>
        <View style={styles.layout}>
          <View style={theme.row}>
            <Text style={styles.validityText}>{__('Calls')}</Text>
          </View>
          <View style={theme.row}>
            <Text style={styles.limitedText}>{item.Calls}</Text>
          </View>
        </View>
        <Text style={styles.planText}>{item.currency}{item.Price}</Text>
      </View>
      <View style={styles.weeklyPrice}>
        <Button onPress={_openView}>
          <Text style={styles.detailText}>{__('Details')}</Text>
        </Button>
        <View style={styles.weeklyPriceInfo}>
          {/* }
          <Button
            style={styles.cartBtn}
            onPress={() => {

            }}
          >
            <Text style={styles.cartText}>{__('Add to Cart')}</Text>
          </Button>
          { */}
          <Button
            style={styles.buyBtn}
            onPress={_buyNow}
          >
            <Text style={styles.buyText}>{__('Buy Now')}</Text>
          </Button>
        </View>
      </View>
    </Button>
  )
}

export default Item
