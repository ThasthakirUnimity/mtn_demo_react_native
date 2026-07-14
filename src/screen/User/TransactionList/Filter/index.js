import React from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modalbox'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { applyComponentFeatures } from '@src/utility/core'
import { __ } from '@src/utility/translation'
import styles from './../styles'
import LatestFlags from './LatestFlags'
import Types from './Types'
import Shops from './Shops'
import Sorting from './Sorting'

class Filter extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpened: false,
      filters: {}
    }

    applyComponentFeatures(this)

    this.onClosed = this.onClosed.bind(this)
    this.open = this.open.bind(this)
    this.selectLatestFlag = this.selectLatestFlag.bind(this)
    this.selectType = this.selectType.bind(this)
    this.selectShop = this.selectShop.bind(this)
    this.selectSort = this.selectSort.bind(this)
    this.reset = this.reset.bind(this)
    this.apply = this.apply.bind(this)
    this.renderModal = this.renderModal.bind(this)
  }

  onClosed () {
    this.setState({
      isOpened: false
    })
  }

  open (filters) {
    this.promisedSetState({
      isOpened: true,
      filters
    })
  }

  selectLatestFlag (latestFlag) {
    const filters = { ...this.state.filters, latestFlag }
    if (filters.sorting) {
      delete filters.sorting
    }
    this.setState({ filters })
  }

  selectType (type) {
    this.setState({ filters: { ...this.state.filters, type } })
  }

  selectShop (shop) {
    this.setState({ filters: { ...this.state.filters, shop } })
  }

  selectSort (sorting) {
    const filters = { ...this.state.filters, sorting }
    if (filters.latestFlag) {
      delete filters.latestFlag
    }
    this.setState({ filters })
  }

  reset () {
    this.setState({ filters: { ...this.props.defaultFilters } })
  }

  async apply () {
    await this.promisedSetState({
      isOpened: false
    })
    await this.props.apply(this.state.filters)
  }

  renderModal () {
    return (
      <Modal
        position='bottom'
        swipeDirection='down'
        isOpen
        style={styles.modalFilter}
        onClosed={this.onClosed}
      >
        <View style={styles.filterContianer}>
          <Text style={styles.filterText}>{__('Filters')}</Text>
          <LatestFlags
            filters={this.state.filters}
            select={this.selectLatestFlag}
          />
          <Types filters={this.state.filters} select={this.selectType} />
          <Shops filters={this.state.filters} select={this.selectShop} />
          <Sorting filters={this.state.filters} select={this.selectSort} />

          <View style={styles.btns}>
            <Button onPress={this.reset}>
              <Text style={styles.btnText}>{__('Reset')}</Text>
            </Button>
            <Button style={styles.applyBtn} onPress={this.apply}>
              <Text style={styles.applyBtnText}>{__('Apply')}</Text>
            </Button>
          </View>
        </View>
      </Modal>
    )
  }

  render () {
    return this.state.isOpened ? this.renderModal() : null
  }
}

export default Filter
