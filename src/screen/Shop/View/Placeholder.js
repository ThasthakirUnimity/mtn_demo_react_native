import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from './styles'

export default class extends React.Component {
  render() {
    return (
      <>
        <Placeholder
          Animation={Fade}
          style={styles.placeholder}
        >
          <View style={styles.mobDetail}>
            <PlaceholderLine style={styles.productTitle} width={90} />
            <PlaceholderLine style={styles.productFeatures} width={60} />
            <PlaceholderMedia style={[styles.sliderImg, styles.placeholderImg]} />
          </View>
          <View style={styles.placeholderSpace} />
          <View style={styles.details}>
            <View style={styles.favRow}>
              <PlaceholderLine style={styles.colorHeader} width={50} />
              <PlaceholderLine style={styles.storageText} width={30} />
            </View>
            <View style={styles.colorRow}>
              <PlaceholderLine style={styles.gryColor} width={10} />
            </View>
            <View style={styles.priceDetail}>
              <PlaceholderLine style={styles.price} width={40} />
              <View style={styles.priceRow}>
                <PlaceholderLine style={styles.dealPrice} width={60} />
              </View>
            </View>
            <PlaceholderLine style={styles.productDescription} width={60} />
            <PlaceholderLine style={styles.productDescription} width={40} />
            <PlaceholderLine style={styles.productDescription} width={20} />
            <View style={styles.orderDetails}>
              <PlaceholderLine style={styles.deliveryEstimation} width={60} />
              <PlaceholderLine style={styles.orderText} width={50} />
            </View>
            <View style={styles.btnRow}>
              <View style={styles.cartBtn} onPress={this.addToCart}>
                <PlaceholderLine style={styles.cartText} width={30} />
              </View>
              <View style={styles.buyBtn} onPress={this.addToCart}>
                <PlaceholderLine style={styles.cartText} width={30} />
            </View>
            </View>
          </View>
        </Placeholder>
      </>
    )
  }
}
