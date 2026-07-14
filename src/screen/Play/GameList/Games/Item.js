import React from 'react'
import { Image, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import { Button } from '@src/component/Form'
import { Rating } from 'react-native-ratings'
import { logClickEvent } from '@src/utility/analytics'

export default class extends React.Component {
  render () {
    const item = this.props.item

    return (
      <View style={styles.gamesContent}>
        <Button
          onPress={() => {
            logClickEvent('PlayServiceGameListItem', {
              title: item.title
            })
            navigate('PlayGameView', { url: item.url })
          }}
        >
          <Image source={{ uri: item.images }} style={styles.gamesBigImg} resizeMode='cover' />
        </Button>
        <View style={styles.gamesContent2}>
          <View>
            <Text style={styles.gamesText}>{item.title}</Text>
            <View style={styles.favIcon}>
              <Rating
                type='star'
                startingValue={item.rating}
                ratingCount={5}
                showRating={false}
                imageSize={15}
                isDisabled
                readonly
              />
            </View>
          </View>
          <View style={styles.buyPrice}>
            <Text style={styles.priceText}>{item.currency} {item.price}</Text>
            <Button style={styles.buyBtn}>
              <Text style={styles.buyBtnText}>{__('Play')}</Text>
            </Button>
          </View>
        </View>
      </View>
    )
  }
}
