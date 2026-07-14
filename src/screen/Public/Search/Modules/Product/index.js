import React from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { URLS } from '@src/config/url'
import { bind } from '@src/utility/component'
import { httpCms } from '@src/utility/http'
import List from './List'
import { Context } from '../../context'

class Product extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fetchingInitial: true,
      fetchingMore: false,
      isPageMore: false,
      pageNumber: 1,
      products: []
    }

    bind(this)

    this.fetchProducts = this.fetchProducts.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }

  async componentDidMount () {
    this.context.setRefSearch(this)
    this.fetchProducts()
  }

  async fetchProducts () {
    try {
      let url = URLS.PRODUCTS_SEARCH
      if (this.context?.searchKey) {
        url = url + '/' + this.context.searchKey
      }
      const r = (await httpCms.get(url)).data

      const state = {
      }
      if (r.rows && r.rows.length > 0) {
        const records = r.rows
        if (this.state.pageNumber === 1) {
          state.products = records
        } else {
          state.products = [...state.products, ...records]
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
      products: []
    })
    this.fetchProducts()
  }

  renderContent () {
    return (
      <List
        list={this.state.products}
        fetchingInitial={this.state.fetchingInitial}
        fetchingMore={this.state.fetchingMore}
      />
    )
  }

  render () {
    return (
      <ScrollView>
        {this.renderContent()}
      </ScrollView>
    )
  }
}

Product.contextType = Context

export default connect(({ session }) => ({ session }))(Product)
