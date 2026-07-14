import React from 'react'
import { Alert, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'

import { Container, Content, Icon, Text } from '@src/component/Basic'
import Header from '@src/component/Header'
import { DarkStatusBar } from '@src/component/StatusBar'
import { cartProductRemoveIndex, cartProductUpdateQuantity } from '@src/store/reducers/cart'
import theme from '@src/theme/styles'
import { __ } from '@src/utility/translation'

import styles from './styles'
import List from './List'
import { Button } from '@src/component/Form'
import { navigateCurrent } from '@src/navigation'
import { shopCartToPayment } from '@src/helper/cart'

class Cart extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

    this.onCheckout = this.onCheckout.bind(this)
    this.removeProduct = this.removeProduct.bind(this)
    this.updateQuantity = this.updateQuantity.bind(this)
  }

  onCheckout () {
    shopCartToPayment()
  }

  async removeProduct (index) {
    await this.props.cartProductRemoveIndex(index)
  }

  async updateQuantity (data) {
    await this.props.cartProductUpdateQuantity(data)
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('My Cart')}
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.container}>
              <List
                list={this.props.cart.products}
                removeProduct={this.removeProduct}
                updateQuantity={this.updateQuantity}
              />
              {
                this.props.cart?.products?.length
                  ? (
                    <View style={styles.save}>
                      <Button style={styles.saveInfo} onPress={this.onCheckout}>
                        <Icon name='shoppingcart' type='AntDesign' size='text20' color='dark' />
                        <Text style={styles.saveBtnText}>{__('Checkout')}</Text>
                      </Button>
                    </View>
                    )
                  : null
              }
            </View>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}
export default connect(({ cart, session }) => ({ cart, session }), { cartProductRemoveIndex, cartProductUpdateQuantity })(Cart)
