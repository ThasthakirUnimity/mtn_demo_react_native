import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Icon, Text } from '@src/component/Basic'

import styles from '../styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import { Button } from '@src/component/Form'
import { Rating, AirbnbRating } from 'react-native-ratings'

export default class extends React.Component {
  render () {
    const item = this.props.item

    return (
      <View style={styles.gamesContent}>
        <Button onPress={() => {

        }}
        >
          <Image source={{ uri: item.field_product_image_banner || item.field_product_image_small }} style={styles.gamesImg} />
        </Button>
        <View style={styles.gamesContent2}>
          <View>
            <Text style={styles.gamesText}>{item['title_' + this.props.language] || item.title}</Text>
            <View style={styles.favIcon}>
              <Rating
                type='star'
                startingValue={item.field_product_rating}
                ratingCount={5}
                showRating={false}
                imageSize={15}
                isDisabled
                readonly
              />
            </View>
          </View>
          <View style={styles.buyPrice}>
            <Text style={styles.priceText}>{item.field_currency} {item.field_product_price}</Text>
            <Button style={styles.buyBtn}>
              <Text style={styles.buyBtnText}>{__('Buy Now')}</Text>
            </Button>
          </View>
        </View>
      </View>
    )
  }
}
