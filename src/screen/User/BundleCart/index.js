import React from 'react'
import { Image, ScrollView, View } from 'react-native'

import { Container, Content, Text } from '@src/component/Basic'
import Header from '@src/component/Header'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import { bind } from '@src/utility/component'
import theme from '@src/theme/styles'
import { DarkStatusBar } from '@src/component/StatusBar'
import styles from './styles'
import List from './List'
import { navigateCurrent } from '@src/navigation'
import { logClickEvent } from '@src/utility/analytics'

class Cart extends React.Component {
  constructor (props) {
    super(props)

    const cart = Array.isArray(props.route.params?.cart?.items) ? props.route.params.cart : { items: [] }

    this.state = {
      profile: props.route.params?.profile || {},
      cart
    }

    bind(this)

    this.proceedToPayment = this.proceedToPayment.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.renderFooter = this.renderFooter.bind(this)
  }

  proceedToPayment () {
    logClickEvent('BundleCartPayment')
    const cart = {
      productType: this.state.cart.productType,
      items: this.state.cart.items.map(item => ({
        id: item.ProductID,
        title: item.ProductName,
        type: item.Category,
        quantity: 1,
        currency: item.currency,
        price: item.Price,
        _original: item
      })),
      currency: this.state.cart.currency,
      total: this.state.cart.total
    }
    navigateCurrent('UserPayment', {
      profile: this.state.profile,
      cart
    })
  }

  async removeFromCart (id) {
    const items = [...this.state.cart.items]
    const index = items.findIndex(r => r.ProductID == id)
    if (index > -1) {
      items.splice(index, 1)
    }
    await this.promisedSetState({
      cart: {
        ...this.state.cart,
        items,
        total: items.reduce((t, v) => (t + parseInt(v.Price, 10)), 0)
      }
    })
  }

  renderFooter () {
    if (this.state.cart.items.length === 0) {
      return null
    }
    return (
      <>
        <View style={styles.amtRow}>
          <Text style={styles.amtText}>{__('Amount Payable')}</Text>
          <Text style={styles.amtPrice}>{this.state.cart.currency}{this.state.cart.total}</Text>
        </View>
        <Button style={styles.footerBtn} onPress={this.proceedToPayment}>
          <Text text='semiBold' size='text16' color='default' style={styles.footerBtnText}>{__('Proceed to Payment')}</Text>
        </Button>
      </>
    )
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('View Cart')}
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.viewCart}>
              <View style={styles.profileContent}>
                <View>
                  <Image source={require('@asset/icons/avatar-light.png')} resizeMode='contain' style={styles.profileImg} />
                </View>
                <View style={styles.profileDetail}>
                  <View>
                    <View style={theme.row}>
                      <Text style={styles.profileName}>{this.state.profile.name}</Text>
                    </View>
                    <View style={theme.row}>
                      <Text style={styles.profileName}>{this.state.profile.mobilenumber}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <List
                cart={this.state.cart}
                removeFromCart={this.removeFromCart}
              />
            </View>
          </ScrollView>
          {this.renderFooter()}
        </Content>
      </Container>
    )
  }
}

export default Cart
