import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import { Button } from '@src/component/Form'

export default class extends React.Component {
  render() {
    const item = this.props.item

    return (
      <View style={styles.deviceContent}>
        <Button style={styles.deviceDisplay} onPress={() => {
          navigate('ShopView', { id: item.id })
        }}>
          <Image source={{ uri: item.field_product_image_small }} style={styles.deviceImg} resizeMode='cover' />
        </Button>
        <View style={styles.deviceCol}>
          <View>
            <Text style={styles.deviceText}>{item.title}</Text>
          </View>
          <View>
            <Text style={styles.priceText}>{item.field_product_price_currency_code} {item.field_product_revised_price}</Text>
          </View>
        </View>
        {/* <Text text='regular' size='text12' color='grey' style={styles.offerText}>{item.offer}</Text> */}
      </View>
    )
  }
}
