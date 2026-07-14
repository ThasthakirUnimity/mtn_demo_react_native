import React, { createRef } from 'react'
import { Image, ScrollView, View } from 'react-native'
import { Container, Content, Icon, Text } from '@src/component/Basic'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Modal from 'react-native-modalbox'

import Header from '@src/component/Header'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import { bind } from '@src/utility/component'
import request from '@src/utility/request'

import { goBack, navigate } from '@src/navigation'
import theme from '@src/theme/styles'
import styles from './styles'
import { DarkStatusBar } from '@src/component/StatusBar'
import CurrentPlan from './CurrentPlan'
import { URLS } from '@src/config/url'
import http from '@src/utility/http'
import { cloneDeep } from 'lodash'
import List from './List'
import { asyncForEach } from '@src/utility/core'
import PlanConfirm from './PlanConfirm'
import ComparisonList from './ComparisonList'
import Support from '@src/component/Support'
import { logClickEvent, logSuccessEvent } from '@src/utility/analytics'

class Plan extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedNumber: null,

      currentPlan: null,
      fetchingCurrentPlan: true,

      categories: {},
      fetchingCategories: true,

      selectedCategories: {},
      tariffs: {},
      fetchingTariffs: {},

      selectedPlan: this.props.route?.params?.selectedPlan,

      isComparison: false,
      isComparisonShown: false,
      comparisonList: []
    }

    bind(this)

    this.fetchCurrentPlan = this.fetchCurrentPlan.bind(this)
    this.fetchCategories = this.fetchCategories.bind(this)
    this.fetchingTariffs = this.fetchingTariffs.bind(this)
    this.selectCategory = this.selectCategory.bind(this)
    this.activatePlan = this.activatePlan.bind(this)
    this.openComparison = this.openComparison.bind(this)
    this.openComparisonList = this.openComparisonList.bind(this)
    this.submitConfirm = this.submitConfirm.bind(this)
    this.openSuccess = this.openSuccess.bind(this)

    this.refPlanConfirm = createRef()
  }

  async componentDidMount () {
    let isFeed = false
    let selectedNumber = null
    if (this.props.session.numbers[this.props.session.numberIndex]) {
      selectedNumber =
        this.props.session.numbers[this.props.session.numberIndex]
      isFeed = selectedNumber?.type == 'Postpaid'
    }
    if (isFeed) {
      if (this.state.selectedPlan) {
        this.refPlanConfirm.current.open()
      }
      await this.promisedSetState({ selectedNumber })
      await this.fetchCurrentPlan()
      await this.fetchCategories()
    } else {
      Support.showError({
        message: __('Tariff plans are not available for a prepaid number'),
        hideDelay: 3500,
        onHide: () => {
          goBack()
        }
      })
    }
  }

  async fetchCurrentPlan () {
    try {
      const r = (await http.get(URLS.TARIFF_CURRENT_PLAN)).data
      if (Array.isArray(r?.response?.rows)) {
        await this.promisedSetState({
          currentPlan: r.response.rows[0]
        })
      }
    } catch (e) { }
    await this.promisedSetState({
      fetchingCurrentPlan: false
    })
  }

  async fetchCategories () {
    try {
      const r = (await http.get(URLS.TARIFF_CATEGORY)).data
      if (Array.isArray(r?.response?.rows)) {
        const rows = r.response.rows.map(c => ({
          ...c,
          parent: c.parent === 'Null' ? null : c.parent,
          childs: []
        }))
        const selectedCategories = {}
        const categories = {}
        const tariffs = {}
        const fetchingTariffs = {}
        rows.forEach(c => {
          if (c.parent) {
            if (categories[c.parent]) {
              if (categories[c.parent].childs.length === 0) {
                selectedCategories[c.parent] = c.id
              }
              categories[c.parent].childs.push(c)
            }
          } else {
            categories[c.id] = { ...c }

            selectedCategories[c.id] = null
            tariffs[c.id] = []
            fetchingTariffs[c.id] = true
          }
        })
        await this.promisedSetState({
          selectedCategories,
          categories,
          tariffs,
          fetchingTariffs
        })
        const keys = Object.keys(selectedCategories)
        const _fetchingTariffs = async key => {
          await this.fetchingTariffs(key, selectedCategories[key])
        }
        await asyncForEach(keys, _fetchingTariffs)
      }
    } catch (e) { }
    await this.promisedSetState({
      fetchingCategories: false
    })
  }

  async fetchingTariffs (categoryId, subCategoryId) {
    await this.promisedSetState({
      fetchingTariffs: { ...this.state.fetchingTariffs, [categoryId]: true }
    })
    try {
      const params = { categoryId, subCategoryId }
      const r = (await http.get(URLS.TARIFF_PLAN, { params })).data
      if (Array.isArray(r?.response?.rows)) {
        await this.promisedSetState({
          tariffs: { ...this.state.tariffs, [categoryId]: r.response.rows }
        })
      }
    } catch (e) { }
    await this.promisedSetState({
      fetchingTariffs: { ...this.state.fetchingTariffs, [categoryId]: false }
    })
  }

  async selectCategory (categoryId, subCategoryId) {
    await this.promisedSetState({
      selectedCategories: {
        ...this.state.selectedCategories,
        [categoryId]: subCategoryId
      }
    })
    await Support.showLoading()
    await this.fetchingTariffs(categoryId, subCategoryId)
    await Support.hideLoading()
  }

  async activatePlan (plan) {
    await this.promisedSetState({ selectedPlan: plan })
    this.refPlanConfirm.current.open()
  }

  openComparison () {
    this.setState({
      isComparison: true
    })
  }

  openComparisonList (list) {
    this.setState({
      isComparisonShown: true,
      comparisonList: cloneDeep(list)
    })
  }

  async submitConfirm () {
    await Support.showLoading()
    try {
      const values = {
        id: this.state.selectedPlan?.id,
        mobilenumber: this.state.selectedNumber?.number
      }

      logClickEvent('TariffActivation', {
        id: this.state.selectedPlan?.title,
        mobilenumber: this.state.selectedNumber?.number
      })

      const r = (await http.post(URLS.TARIFF_ACTIVATE, values)).data

      logSuccessEvent('TariffActivation')

      this.openSuccess()
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
  }

  openSuccess () {
    this.refs?.modalSuccess?.open()
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('Tariff Plans')}
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <CurrentPlan
              currentPlan={this.state.currentPlan}
              fetching={this.state.fetchingCurrentPlan}
            />

            {this.state.isComparisonShown
              ? (
                <ComparisonList
                  list={this.state.comparisonList}
                  fetching={false}
                  activatePlan={this.activatePlan}
                />
                )
              : (
                <List
                  categories={this.state.categories}
                  fetchingCategories={this.state.fetchingCategories}
                  selectedCategories={this.state.selectedCategories}
                  tariffs={this.state.tariffs}
                  fetchingTariffs={this.state.fetchingTariffs}
                  isComparison={this.state.isComparison}
                  selectCategory={this.selectCategory}
                  activatePlan={this.activatePlan}
                  openComparison={this.openComparison}
                  openComparisonList={this.openComparisonList}
                />
                )}
          </ScrollView>
        </Content>
        <PlanConfirm
          ref={this.refPlanConfirm}
          selectedPlan={this.state.selectedPlan}
          submitConfirm={this.submitConfirm}
        />
        <Modal
          ref='modalSuccess'
          position='bottom'
          swipeDirection='down'
          style={styles.modalSuccess}
          onClosed={() => navigate('PublicHome')}
        >
          <View style={styles.successContent}>
            <Image
              source={require('@asset/icons/success.png')}
              resizeMode='contain'
              style={styles.successImg}
            />
            <Text style={styles.successText}>Successful</Text>
            <Text
              text='regular'
              size='text14'
              color='dark'
              style={styles.successText2}
            >
              You have successfully Upgraded {'\n'}your plan to {this.state.selectedPlan?.title}
            </Text>
          </View>
          <Button
            style={styles.confirmBtn}
            onPress={() => (this.refs?.modalSuccess?.close())}
          >
            <Text style={styles.confirmBtnText}>{__('Back to Home')}</Text>
          </Button>
        </Modal>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Plan)
