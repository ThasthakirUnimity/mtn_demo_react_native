import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { Container, Content, Icon, Text } from '@src/component/Basic'
import { connect } from 'react-redux'
import { SliderBox } from 'react-native-image-slider-box'
import { compile } from 'path-to-regexp'

import Header from '@src/component/Header'
import { Button } from '@src/component/Form'
import { DarkStatusBar } from '@src/component/StatusBar'
import { URLS } from '@src/config/url'
import { cartProductUpdate } from '@src/store/reducers/cart'
import theme from '@src/theme/styles'
import { httpCms } from '@src/utility/http'
import { __ } from '@src/utility/translation'
import { bind } from '@src/utility/component'
import styles from './styles'
import Placeholder from './Placeholder'
import Support from '@src/component/Support'
import { navigate } from '@src/navigation'
import { shopBuyNow } from '@src/helper/cart'

class ProductView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fetchingProduct: true,
      product: {},
      pageError: false
    }

    bind(this)

    this.fetchProduct = this.fetchProduct.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.buyNow = this.buyNow.bind(this)
    this.renderRating = this.renderRating.bind(this)
    this.renderView = this.renderView.bind(this)
    this.renderLoading = this.renderLoading.bind(this)
    this.renderError = this.renderError.bind(this)
  }

  async componentDidMount () {
    await this.fetchProduct()
  }

  async fetchProduct () {
    await this.promisedSetState({
      fetchingProduct: true
    })
    try {
      const url = compile(URLS.PRODUCT_ID)({ id: this.props.route.params.id })
      const product = (await httpCms.get(url)).data
      if (typeof product === 'object') {
        product.field_product_price_number = parseInt(product.field_product_price_number, 10)
        product.field_product_revised_price_number = parseInt(product.field_product_revised_price_number, 10)
        product.field_product_rating = parseInt(product.field_product_rating)
        await this.promisedSetState({
          product
        })
      } else {
        await this.promisedSetState({
          pageError: true
        })
      }
    } catch (e) {
      await this.promisedSetState({
        pageError: true
      })
    }
    await this.promisedSetState({
      fetchingProduct: false
    })
  }

  async addToCart () {
    await this.props.cartProductUpdate({
      id: this.state.product.id,
      name: this.state.product.title,
      image: this.state.product.field_product_image_slider[0],
      type: this.state.product.type,
      price_org: this.state.product.field_product_revised_price,
      price: this.state.product.field_product_price,
      currency: this.state.product.field_currency,
      quantity: 1
    })

    await Support.showSuccess({
      layout: 'toast',
      message: this.state.product.title + ' added into cart',
      hideDelay: 1500
    })
    navigate('ShopCart')
  }

  buyNow () {
    shopBuyNow(this.state.product)
  }

  renderRating () {
    const rating = []
    for (let i = 1; i <= 5; i++) {
      const iconStyle = {}
      if (this.state.product.field_product_rating >= i) {
        iconStyle.color = ''
      }
      rating.push(<Icon key={i} name='star' type='Entypo' style={styles.favIconColor} />)
    }
    return (<View style={styles.favIcon}>{rating}</View>)
  }

  renderView () {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mobDetail}>
          <Text style={styles.productTitle}>{this.state.product.title}</Text>
          <View style={styles.favRow}>
            <Text style={styles.productFeatures} numberOfLines={1}>{this.state.product.field_product_description.substring(0, 10)}</Text>
            {this.renderRating()}
          </View>
        </View>
        <SliderBox
          ImageComponentStyle={styles.sliderImg}
          images={this.state.product.field_product_image_slider}
          resizeMode='contain'
          sliderBoxHeight={275}
          dotColor='rgba(10, 51, 103, 1)'
          inactiveDotColor='rgba(135, 135, 135, 1)'
        />
        <View style={styles.details}>
          <View style={styles.favRow}>
            <Text style={styles.colorHeader}>{__('Color')}</Text>
            <Text style={styles.storageText}>{__('Storage & RAM')}</Text>
          </View>
          <View style={styles.colorRow}>
            {this.state.product.field_product_color.map(color => (<View key={color} style={[styles.gryColor, { backgroundColor: color }]} />))}
          </View>
          <View style={styles.priceDetail}>
            <Text style={styles.price}>{this.state.product.field_currency}{this.state.product.field_product_price}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.dealPrice}>{__('Deal Price')}: </Text>
              <Text style={styles.revisedPrice}>{this.state.product.field_currency}{this.state.product.field_product_revised_price}</Text>
            </View>
          </View>
          <Text style={styles.productDescription}>{this.state.product.field_product_description}</Text>
          <View style={styles.orderDetails}>
            <Text style={styles.deliveryEstimation}>{this.state.product.field_delivery_estimation}</Text>
            <Text style={styles.orderText}>{__('Order within 12 hrs and 11 mins')}</Text>
          </View>
          <View style={styles.btnRow}>
            <Button style={styles.cartBtn} onPress={this.addToCart}>
              <Text style={styles.cartText}>{__('Add to Cart')}</Text>
            </Button>
            <Button style={styles.buyBtn} onPress={this.buyNow}>
              <Text style={styles.cartText}>{__('Buy Now')}</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    )
  }

  renderLoading () {
    return <Placeholder />
  }

  renderError () {
    return null
  }

  render () {
    let content
    if (this.state.pageError) {
      content = this.renderError()
    } else if (this.state.fetchingProduct) {
      content = this.renderLoading()
    } else {
      content = this.renderView()
    }

    return (
      <Container>
        <DarkStatusBar />
        <Header
          primary
          leftType='back'
        />
        <Content style={theme.layout}>
          {content}
        </Content>
      </Container>
    )
  }
}

export default connect(({ session, cart }) => ({ session, cart }), { cartProductUpdate })(ProductView)
