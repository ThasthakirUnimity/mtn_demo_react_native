import React from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'

import Header from '@src/component/Header'
import { Container, Content } from '@src/component/Basic'
import { __ } from '@src/utility/translation'
import theme from '@src/theme/styles'
import { DarkStatusBar } from '@src/component/StatusBar'
import Home from './Home'
import { bind } from '@src/utility/component'
import Layout from './Layout'
import Support from '@src/component/Support'
import http from '@src/utility/http'
import { URLS } from '@src/config/url'
import { goBack, navigateCurrent } from '@src/navigation'
import Confirmation from './Confirmation'
import Success from './Success'
import { compile } from 'path-to-regexp'
import Verification from './Verification'
import SectionProvider from '@src/component/Section/Provider'
import { logClickEvent, logSuccessEvent } from '@src/utility/analytics'

const shareTypes = [
  {
    id: 'data',
    icon: require('@asset/icons/data.png'),
    title: 'Data',
    description: '* You can share min 50MB and max 500 \n MB data per transaction in a day'
  },
  {
    id: 'airtime',
    icon: require('@asset/icons/airtime.png'),
    title: 'Airtime',
    description: '* You can share min 5000 and max 5000 airtime per transaction in a day'
  }
]

class Borrow extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      shareTypes: [...shareTypes],
      shareType: null,

      selectedNumber: '',
      borrowNumber: '',
      borrowProfile: null,
      selectedPlan: null,
      plans: [],

      visibleConfirmation: false,
      visibleVerification: false,
      visibleSuccess: false,

      successResponse: null
    }

    bind(this)

    this.selectType = this.selectType.bind(this)
    this.onChangeBorrowNumber = this.onChangeBorrowNumber.bind(this)
    this.selectBorrowNumber = this.selectBorrowNumber.bind(this)
    this.selectPlan = this.selectPlan.bind(this)
    this.onChangeSelection = this.onChangeSelection.bind(this)
    this.openContacts = this.openContacts.bind(this)
    this.onContactSelected = this.onContactSelected.bind(this)
    this.fetchProfile = this.fetchProfile.bind(this)
    this.fetchAirtimePlans = this.fetchAirtimePlans.bind(this)
    this.fetchDataPlans = this.fetchDataPlans.bind(this)
    this.onSubmitNo = this.onSubmitNo.bind(this)
    this.submitConfirmation = this.submitConfirmation.bind(this)
    this.onClosedConfirmation = this.onClosedConfirmation.bind(this)
    this.submitVerification = this.submitVerification.bind(this)
    this.onClosedVerification = this.onClosedVerification.bind(this)
    this.onClosedSuccess = this.onClosedSuccess.bind(this)
    this.renderContent = this.renderContent.bind(this)
  }

  async componentDidMount () {
    let isFeed = false
    let selectedNumber = null
    if (this.props.session.numbers[this.props.session.numberIndex]) {
      selectedNumber =
        this.props.session.numbers[this.props.session.numberIndex]
      isFeed = selectedNumber?.type == 'Prepaid'
    }
    if (isFeed) {
      this.setState({ selectedNumber })
    } else {
      Support.showError({
        message: __('Borrow is not available for a postpaid number'),
        hideDelay: 3500,
        onHide: () => {
          goBack()
        }
      })
    }
  }

  async selectType (id) {
    const shareType = this.state.shareTypes.find(t => t.id == id)
    if (shareType) {
      await this.promisedSetState({ shareType })
      await Support.showLoading()
      if (shareType.id == 'airtime') {
        this.fetchAirtimePlans()
      } else if (shareType.id == 'data') {
        this.fetchDataPlans()
      }
      await Support.hideLoading()
    }
  }

  async onChangeBorrowNumber (borrowNumber) {
    await this.promisedSetState({ borrowNumber })
    if (this.state.borrowNumber?.length == 10) {
      this.fetchProfile()
    }
  }

  async selectBorrowNumber (item) {
    await this.promisedSetState({ borrowNumber: item.number })
    console.log('selectBorrowNumber', this.state.borrowNumber, this.state.borrowNumber?.length)
    if (this.state.borrowNumber?.length == 10) {
      this.fetchProfile()
    }
  }

  async selectPlan (item) {
    await this.promisedSetState({ selectedPlan: item })
    this.onChangeSelection()
  }

  onChangeSelection () {
    if (this.state.selectedPlan?.id && this.state.borrowNumber?.length == 10) {
      this.onSubmitNo()
    }
  }

  openContacts () {
    logClickEvent('BorrowContactList')
    SectionProvider.showContactSelection({
      onSelected: this.onContactSelected
    })
  }

  async onContactSelected (contact) {
    await this.promisedSetState({ borrowNumber: contact.number })
    this.fetchProfile()
  }

  async fetchProfile () {
    if (this.state.borrowNumber?.length == 10) {
      let cb = null
      await Support.showLoading()
      try {
        const url = compile(URLS.USER_PROFILE_FROM_MOBILE)({ number: this.state.borrowNumber })
        const r = (await http.get(url)).data
        if (r?.response?.records?.id) {
          const profile = r.response.records
          if (profile.type != 'Prepaid') {
            throw new Error('This recharge feature is not available for postpaid number')
          }
          await this.promisedSetState({ borrowProfile: profile })
          cb = this.onChangeSelection
        } else {
          throw new Error('Record not found')
        }
      } catch (e) {
        await this.promisedSetState({ borrowNumber: '', borrowProfile: null })
        await Support.showServerError(e)
      }
      await Support.hideLoading()
      cb && cb()
    }
  }

  async fetchAirtimePlans () {
    await this.promisedSetState({
      fetchingPlans: true
    })
    try {
      const r = (await http.get(URLS.BORROW_AIRTIME)).data
      if (r?.rows?.length) {
        await this.promisedSetState({
          plans: r.rows
        })
      }
    } catch (e) { }
    await this.promisedSetState({
      fetchingPlans: false
    })
  }

  async fetchDataPlans () {
    await this.promisedSetState({
      fetchingPlans: true
    })
    try {
      const r = (await http.get(URLS.BORROW_DATA)).data
      if (r?.rows?.length) {
        await this.promisedSetState({
          plans: r.rows
        })
      }
    } catch (e) { }
    await this.promisedSetState({
      fetchingPlans: false
    })
  }

  async onSubmitNo () {
    logClickEvent('BorrowRequest', {
      mobilenumber: this.state.borrowNumber,
      plan: this.state.selectedPlan?.title
    })
    await Support.showLoading()
    try {
      const values = {
        mobilenumber: this.state.selectedNumber?.number,
        from: this.state.borrowNumber,
        data: this.state.selectedPlan.data || '',
        airtime: this.state.selectedPlan.airtime || '',
        plan: this.state.selectedPlan.id
      }
      const result = (await http.post(URLS.BORROW_REQUEST, values)).data

      await this.promisedSetState({
        insertId: result.insertId,
        visibleConfirmation: true
      })
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
  }

  submitConfirmation () {
    logClickEvent('BorrowConfirmation')
    this.promisedSetState({
      visibleConfirmation: false,
      visibleVerification: true
    })
  }

  onClosedConfirmation () {
    this.promisedSetState({
      visibleConfirmation: false
    })
  }

  async submitVerification (code) {
    logClickEvent('BorrowAuthentication')
    await Support.showLoading()
    try {
      const values = {
        insertId: this.state.insertId,
        code
      }
      const r = (await http.post(URLS.BORROW_RESPONSE, values)).data

      logSuccessEvent('Borrow')

      await this.promisedSetState({
        successResponse: r?.rows?.message ? r.rows : {},
        visibleVerification: false,
        visibleSuccess: true
      })
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
  }

  onClosedVerification () {
    this.promisedSetState({
      visibleVerification: false
    })
  }

  async onClosedSuccess () {
    await this.promisedSetState({
      visibleSuccess: false
    })
    navigateCurrent('PublicHome')
  }

  renderContent () {
    return this.state.shareType
      ? (<Layout
          shareType={this.state.shareType}
          session={this.props.session}
          plans={this.state.plans}
          borrowNumber={this.state.borrowNumber}
          selectedPlan={this.state.selectedPlan}
          onChangeBorrowNumber={this.onChangeBorrowNumber}
          selectBorrowNumber={this.selectBorrowNumber}
          selectPlan={this.selectPlan}
          openContacts={this.openContacts}
         />)
      : (<Home
          shareTypes={this.state.shareTypes}
          select={this.selectType}
         />)
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('Borrow')}
          titleColor='light'
        />
        <Content style={theme.layoutBg}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            {this.renderContent()}
          </ScrollView>
        </Content>

        {this.state.visibleConfirmation && <Confirmation
          shareType={this.state.shareType}
          selectedPlan={this.state.selectedPlan}
          borrowProfile={this.state.borrowProfile}
          submitConfirmation={this.submitConfirmation}
          onClosed={this.onClosedConfirmation}
                                           />}

        {this.state.visibleVerification && <Verification
          shareType={this.state.shareType}
          submitVerification={this.submitVerification}
          onClosed={this.onClosedVerification}
                                           />}
        {this.state.visibleSuccess && <Success
          shareType={this.state.shareType}
          borrowProfile={this.state.borrowProfile}
          successResponse={this.state.successResponse}
          onClosed={this.onClosedSuccess}
                                      />}
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Borrow)
