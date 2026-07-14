import React, { createRef, Fragment } from 'react'
import { Image, ScrollView, View } from 'react-native'
import { Container, Content, Text } from '@src/component/Basic'
import { connect } from 'react-redux'
import Modal from 'react-native-modalbox'

import Header from '@src/component/Header'
import { Button } from '@src/component/Form'
import { bind } from '@src/utility/component'

import { goBack, navigate } from '@src/navigation'
import theme from '@src/theme/styles'
import styles from './styles'
import { DarkStatusBar } from '@src/component/StatusBar'

import Tariff from './Tariff'
import http from '@src/utility/http'
import { URLS } from '@src/config/url'
import Support from '@src/component/Support'
import PlanConfirm from './PlanConfirm'
import { logClickEvent, logSuccessEvent } from '@src/utility/analytics'
import { __ } from '@src/utility/translation'

class Plan extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedNumber: null,

      categories: [],
      fetchingCategories: true,

      plans: [],
      fetchingPlans: true,

      selectedPlan: null
    }

    bind(this)

    this.fetchCategories = this.fetchCategories.bind(this)
    this.fetchPlans = this.fetchPlans.bind(this)
    this.activatePlan = this.activatePlan.bind(this)
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
      await this.promisedSetState({ selectedNumber })
      await this.fetchCategories()
      await this.fetchPlans()
    } else {
      Support.showError({
        message: __('Postpaid plans are not available for a prepaid number'),
        hideDelay: 3500,
        onHide: () => {
          goBack()
        }
      })
    }
  }

  async fetchCategories () {
    try {
      const r = (await http.get(URLS.POSTPAID_CATEGORY)).data
      if (r?.response?.rows?.length) {
        await this.promisedSetState({
          categories: r.response.rows
        })
      }
    } catch (e) { }
    await this.promisedSetState({
      fetchingCategories: false
    })
  }

  async fetchPlans () {
    try {
      const r = (await http.get(URLS.POSTPAID)).data
      if (r?.response?.rows?.length) {
        await this.promisedSetState({
          plans: r.response.rows
        })
      }
    } catch (e) { }
    await this.promisedSetState({
      fetchingPlans: false
    })
  }

  async activatePlan (plan) {
    await this.promisedSetState({ selectedPlan: plan })
    this.refPlanConfirm.current.open()
  }

  async submitConfirm () {
    await Support.showLoading()
    try {
      const values = {
        id: this.state.selectedPlan?.id,
        mobilenumber: this.state.selectedNumber?.number
      }

      logClickEvent('PostpaidActivation', {
        id: this.state.selectedPlan?.title,
        mobilenumber: this.state.selectedNumber?.number
      })

      const r = (await http.post(URLS.POSTPAID_PLAN, values)).data

      logSuccessEvent('PostpaidActivation')

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
          title='Postpaid Plans'
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            {this.state.categories.map(category => {
              return (
                <Fragment key={category.id}>
                  <View style={styles.headerRow}>
                    <View>
                      <Text style={styles.tariffHeader}>{category.name}</Text>
                    </View>
                  </View>
                  <View>
                    <Tariff
                      list={this.state.plans}
                      fetching={this.state.fetchingPlans}
                      activatePlan={this.activatePlan}
                    />
                  </View>
                </Fragment>
              )
            })}
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
