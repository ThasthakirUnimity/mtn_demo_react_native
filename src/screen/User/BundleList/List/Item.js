import React from 'react'
import { View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from '../styles'

const Item = ({ item, addToCart, buyNow, openView }) => {
  const _openView = () => openView(item)
  const _buyNow = () => buyNow(item)
  const _addToCart = () => addToCart(item)

  const currency = item.currency || ''
  const price = item.Price || ''
  const planName = item.ProductName || item.Description || ''
  const data = item.Data ? `${item.Data}${item.data_type ? ' ' + item.data_type : ''}` : '-'
  const validity = item.Validity ? `${item.Validity}${item.validity_type ? ' ' + item.validity_type : ''}` : '-'
  const calls = item.Calls || '-'

  return (
    <View style={styles.bundleCard}>
      {/* Price + Plan name */}
      <Text style={styles.bundleCardPrice}>{currency}{price}</Text>
      {!!planName && (
        <Text style={styles.bundleCardPlanName} numberOfLines={2}>{planName}</Text>
      )}

      {/* Meta: Data | Validity | Calls */}
      <View style={styles.bundleCardMetaRow}>
        <View style={styles.bundleCardMetaCol}>
          <Text style={styles.bundleCardMetaLabel}>{__('Data')}</Text>
          <Text style={styles.bundleCardMetaValue}>{data}</Text>
        </View>
        <View style={styles.bundleCardMetaCol}>
          <Text style={styles.bundleCardMetaLabel}>{__('Validity')}</Text>
          <Text style={styles.bundleCardMetaValue}>{validity}</Text>
        </View>
        <View style={styles.bundleCardMetaCol}>
          <Text style={styles.bundleCardMetaLabel}>{__('Calls')}</Text>
          <Text style={styles.bundleCardMetaValue} numberOfLines={1}>{calls}</Text>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.bundleCardDivider} />

      {/* Actions: View Details | Add to Cart | Buy Now */}
      <View style={styles.bundleCardActions}>
        <Button onPress={_openView}>
          <Text style={styles.bundleCardViewDetails}>{__('View Details')}</Text>
        </Button>
        <View style={styles.bundleCardBtnRow}>
          <Button style={styles.bundleCardCartBtn} onPress={_addToCart}>
            <Text style={styles.bundleCardCartText}>{__('Add to Cart')}</Text>
          </Button>
          <Button style={styles.bundleCardBuyBtn} onPress={_buyNow}>
            <Text style={styles.bundleCardBuyText}>{__('Buy Now')}</Text>
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Item
