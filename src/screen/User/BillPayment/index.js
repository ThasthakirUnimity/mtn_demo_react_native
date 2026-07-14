import React from 'react'

import { Container, Content } from '@src/component/Basic'
import Header from '@src/component/Header'
import { bind } from '@src/utility/component'
import Categories from './Categories'
import ModuleEB from './Module/EB'
import { DarkStatusBar } from '@src/component/StatusBar'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './styles'
import { View } from 'react-native'
import { navigate } from '@src/navigation'
import { connect } from 'react-redux'
import { logClickEvent } from '@src/utility/analytics'
import { __ } from '@src/utility/translation'

class BillPayment extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedCategory: null
    }

    bind(this)

    this.openCategory = this.openCategory.bind(this)
    this.submitPayment = this.submitPayment.bind(this)
    this.renderView = this.renderView.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
  }

  openCategory (selectedCategory) {
    if (selectedCategory?.flag == 'eb') {
      logClickEvent('PayBillCategory', {
        title: selectedCategory.title
      })
      this.setState({ selectedCategory })
    }
  }

  submitPayment (productSubType, payload, price) {
    const selectedNumber = this.props.session.numbers.find(r => r.isPrimary)

    const cart = {
      items: [payload],
      productType: 'bills',
      productSubType,
      total: parseInt(price, 10),
      currency: payload?.currency || ''
    }

    navigate('UserPayment', {
      cart,
      profile: {
        name: selectedNumber.name,
        mobilenumber: selectedNumber.number
      }
    })
  }

  renderView () {
    if (this.state.selectedCategory) {
      switch (this.state.selectedCategory?.flag) {
        case 'eb':
          return <ModuleEB submitPayment={this.submitPayment} />
      }
    }
    return (
      <Categories
        openCategory={this.openCategory}
      />
    )
  }

  renderHeader () {
    let title = __('Pay Bill')
    if (this.state.selectedCategory) {
      title = this.state.selectedCategory.title + ' Bill'
    }
    return (
      <Header
        leftType='back'
        title={title}
        titleColor='light'
      />
    )
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        {this.renderHeader()}
        <Content style={{ backgroundColor: '#FFF' }}>
          <View style={styles.bill}>
            {this.renderView()}
          </View>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(BillPayment)
