import React, { createRef } from 'react'
import { ScrollView, View } from 'react-native'

import { URLS } from '@src/config/url'
import { bind } from '@src/utility/component'
import http from '@src/utility/http'
import List from './List'
import { Context } from '../../../context'
import BundleView from './BundleView'
import { logClickEvent } from '@src/utility/analytics'
import { navigate } from '@src/navigation'

class Bundle extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fetchingInitial: true,
      fetchingMore: false,
      isPageMore: false,
      pageNumber: 1,
      bundles: []
    }

    bind(this)

    this.fetchBundles = this.fetchBundles.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.openView = this.openView.bind(this)
    this.buyNow = this.buyNow.bind(this)

    this.refBundleView = createRef()
  }

  async componentDidMount () {
    this.context.setRefSearch(this)
    this.fetchBundles()
  }

  async fetchBundles () {
    try {
      const params = {}
      if (this.context?.searchKey) {
        params.plan = this.context.searchKey
      } else {
        params.plan = ''
      }
      const r = (await http.get(URLS.BUNDLE_SEARCH, { params })).data

      const state = {
      }
      if (r?.response?.ResponseData?.ProductDetails?.length) {
        const records = r.response.ResponseData.ProductDetails
        if (this.state.pageNumber === 1) {
          state.bundles = records
        } else {
          state.bundles = [...state.bundles, ...records]
        }
      }
      await this.promisedSetState(state)
    } catch (e) {}
    await this.promisedSetState({
      fetchingInitial: false,
      fetchingMore: false
    })
  }

  async onSearch () {
    await this.promisedSetState({
      fetchingInitial: true,
      pageNumber: 1,
      bundles: []
    })
    this.fetchBundles()
  }

  openView (item) {
    this.refBundleView.current.open(item)
  }

  async buyNow (bundle) {
    logClickEvent('SearchBundleBuyNow', {
      title: bundle.ProductName
    })
    const selectedNumber = this.props.selectedNumber

    const cart = {
      items: [{
        id: bundle.ProductID,
        title: bundle.ProductName,
        type: bundle.Category,
        quantity: 1,
        currency: bundle.currency,
        price: bundle.Price,
        _original: bundle
      }],
      total: parseInt(bundle.Price, 10),
      currency: bundle?.currency || ''
    }
    cart.isPrimary = true
    cart.productType = 'bundle'

    navigate('UserPayment', {
      cart,
      profile: {
        name: selectedNumber.name,
        mobilenumber: selectedNumber.number
      }
    })
  }

  renderContent () {
    return (
      <List
        list={this.state.bundles}
        fetchingInitial={this.state.fetchingInitial}
        fetchingMore={this.state.fetchingMore}
        openView={this.openView}
        buyNow={this.buyNow}
      />
    )
  }

  render () {
    return (
      <>
        <View>
          <ScrollView>
            {this.renderContent()}
          </ScrollView>
        </View>
        <BundleView ref={this.refBundleView} />
      </>
    )
  }
}

Bundle.contextType = Context

export default Bundle
