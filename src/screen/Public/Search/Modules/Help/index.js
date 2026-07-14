import React from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { URLS } from '@src/config/url'
import { bind } from '@src/utility/component'
import { httpCms } from '@src/utility/http'
import List from './List'
import { pageIds } from '@src/config/page'
import { navigate } from '@src/navigation'
import { Context } from '../../context'

class Help extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fetchingInitial: true,
      fetchingMore: false,
      isPageMore: false,
      pageNumber: 1,
      contents: []
    }

    bind(this)

    this.fetchProducts = this.fetchProducts.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.onClickContent = this.onClickContent.bind(this)
  }

  async componentDidMount () {
    this.context.setRefSearch(this)
    this.fetchProducts()
  }

  async fetchProducts () {
    try {
      let url = URLS.CONTENT_SEARCH
      if (this.context?.searchKey) {
        url = url + '/' + this.context.searchKey
      }
      const r = (await httpCms.get(url)).data

      const state = {
      }
      if (r.rows && r.rows.length > 0) {
        const records = r.rows
        if (this.state.pageNumber === 1) {
          state.contents = records
        } else {
          state.contents = [...state.contents, ...records]
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
      contents: []
    })
    this.fetchProducts()
  }

  onClickContent (item) {
    if (item.field_reference_type == 'Content') {
      const keySelected = Object.keys(pageIds).find(k => (pageIds[k].url.indexOf('/api/v1/content/terms/' + item.field_terms_category) > -1))
      if (keySelected) {
        navigate('PublicPageView', { id: keySelected })
      }
    } else if (item.field_reference_type == 'Faq') {
      navigate('PublicHelpCentre')
    }
  }

  renderContent () {
    return (
      <List
        list={this.state.contents}
        fetchingInitial={this.state.fetchingInitial}
        fetchingMore={this.state.fetchingMore}
        onClick={this.onClickContent}
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

Help.contextType = Context

export default connect(({ session }) => ({ session }))(Help)
