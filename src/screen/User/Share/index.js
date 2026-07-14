import React from 'react'
import { ScrollView, View } from 'react-native'
import { connect } from 'react-redux'

import Header from '@src/component/Header'
import { Container, Content, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { goBack, navigate } from '@src/navigation'
import theme from '@src/theme/styles'
import styles from './styles'
import { DarkStatusBar } from '@src/component/StatusBar'
import { bind } from '@src/utility/component'
import Support from '@src/component/Support'
import { URLS } from '@src/config/url'
import http from '@src/utility/http'
import Home from './Home'
import Layout from './Layout'
import Confirmation from './Confirmation'
import Success from './Success'
import { compile } from 'path-to-regexp'
import SectionProvider from '@src/component/Section/Provider'
import { logClickEvent, logSuccessEvent } from '@src/utility/analytics'
import { __ } from '@src/utility/translation'

const shareTypes = [
  {
    id: 'data',
    icon: require('@asset/icons/data.png'),
    title: 'Data',
    summary: 'Share upto 1GB daily',
    description: '* You can share min 50MB and max 500 MB data per transaction in a day'
  },
  {
    id: 'airtime',
    icon: require('@asset/icons/airtime.png'),
    title: 'Airtime',
    summary: 'Share upto 1000 daily',
    description: '* You can share min 5000 and max 5000 airtime per transaction in a day'
  }
]

class Share extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      shareTypes: [...shareTypes],
      shareType: null,

      fetchingPlans: false,
      plans: [],
      selectedPlan: null,
      selectedNumber: null,
      toMobileNumber: '',
      toProfile: null,
      recentlyShared: [],
      recentlySharedSelected: null,

      visibleConfirmation: false,
      visibleSuccess: false,
      message: '',
      transaction: null
    }

    bind(this)

    this.selectType = this.selectType.bind(this)
    this.selectPlan = this.selectPlan.bind(this)
    this.fetchRecentlyShared = this.fetchRecentlyShared.bind(this)
    this.fetchAirtimePlans = this.fetchAirtimePlans.bind(this)
    this.fetchDataPlans = this.fetchDataPlans.bind(this)
    this.onChangeToMobileNumber = this.onChangeToMobileNumber.bind(this)
    this.openContacts = this.openContacts.bind(this)
    this.onContactSelected = this.onContactSelected.bind(this)
    this.fetchProfile = this.fetchProfile.bind(this)
    this.repeatRecentlyShared = this.repeatRecentlyShared.bind(this)
    this.submit = this.submit.bind(this)
    this.onChangeMessage = this.onChangeMessage.bind(this)
    this.submitConfirmation = this.submitConfirmation.bind(this)
    this.onClosedConfirmation = this.onClosedConfirmation.bind(this)
    this.onClosedSuccess = this.onClosedSuccess.bind(this)
    this.renderFooter = this.renderFooter.bind(this)
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
        message: __('Sharing is not available for a postpaid number'),
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
      await this.fetchRecentlyShared()
      if (shareType.id == 'airtime') {
        this.fetchAirtimePlans()
      } else if (shareType.id == 'data') {
        this.fetchDataPlans()
      }
      await Support.hideLoading()
    }
  }

  async selectPlan (selectedPlan) {
    await this.promisedSetState({ selectedPlan })
  }

  async fetchRecentlyShared () {
    try {
      let type = ''
      if (this.state.shareType.id == 'airtime') {
        type = 'airtime'
      } else if (this.state.shareType.id == 'data') {
        type = 'data'
      }
      const r = (await http.get(URLS.SHARE_RECENT, { params: { type } })).data
      if (r?.rows?.length) {
        await this.promisedSetState({
          recentlyShared: r.rows
        })
      }
    } catch (e) { }
  }

  async fetchAirtimePlans () {
    await this.promisedSetState({
      fetchingPlans: true
    })
    try {
      const r = (await http.get(URLS.SHARE_AIRTIME)).data
      if (r?.rows?.length) {
        await this.promisedSetState({
          plans: r.rows.map(rec => ({ label: rec.airtime, value: rec.airtime }))
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
      const r = (await http.get(URLS.SHARE_DATA)).data
      if (r?.rows?.length) {
        await this.promisedSetState({
          plans: r.rows.map(rec => ({ label: rec.data, value: rec.data }))
        })
      }
    } catch (e) { }
    await this.promisedSetState({
      fetchingPlans: false
    })
  }

  async onChangeToMobileNumber (v) {
    await this.promisedSetState({ toMobileNumber: v })
    if (this.state.toMobileNumber?.length == 10) {
      this.fetchProfile()
    }
  }

  openContacts () {
    logClickEvent('ShareContactList')
    SectionProvider.showContactSelection({
      onSelected: this.onContactSelected
    })
  }

  async onContactSelected (contact) {
    await this.promisedSetState({ toMobileNumber: contact.number })
    this.fetchProfile()
  }

  async fetchProfile () {
    if (this.state.toMobileNumber?.length == 10) {
      await Support.showLoading()
      try {
        const url = compile(URLS.USER_PROFILE_FROM_MOBILE)({ number: this.state.toMobileNumber })
        const r = (await http.get(url)).data
        if (r?.response?.records?.id) {
          const profile = r.response.records
          if (profile.type != 'Prepaid') {
            throw new Error('This recharge feature is not available for postpaid number')
          }
          await this.promisedSetState({ toProfile: profile })
        } else {
          throw new Error('Record not found')
        }
      } catch (e) {
        Support.showServerError(e)
      }
      await Support.hideLoading()
    }
  }

  async repeatRecentlyShared (recentlySharedSelected) {
    logClickEvent('ShareRecent', {
      number: recentlySharedSelected.recieverNumber,
      name: recentlySharedSelected.receivername
    })
    await this.promisedSetState({ recentlySharedSelected, visibleConfirmation: true })
  }

  submit () {
    if (!this.state.selectedPlan) {
      Support.showError({ message: __('Please select a plan') })
      return
    }
    if (!this.state.toProfile) {
      Support.showError({ message: __('Please enter a to mobile number') })
      return
    }
    this.setState({ recentlySharedSelected: null, visibleConfirmation: true })
  }

  onChangeMessage (v) {
    this.setState({ message: v })
  }

  async submitConfirmation () {
    await Support.showLoading()
    try {
      const values = {
        from: '',
        to: '',
        data: '',
        airtime: '',
        message: ''
      }

      if (this.state.recentlySharedSelected) {
        logClickEvent('ShareConfirmation', {
          from: this.state.recentlySharedSelected.senderNumber,
          to: this.state.recentlySharedSelected.recieverNumber
        })

        values.from = this.state.recentlySharedSelected.senderNumber
        values.to = this.state.recentlySharedSelected.recieverNumber
        values.message = this.state.message

        if (this.state.shareType.id == 'airtime') {
          values.airtime = this.state.recentlySharedSelected.shared
        } else if (this.state.shareType.id == 'data') {
          values.data = this.state.recentlySharedSelected.shared
        }
      } else {
        logClickEvent('ShareConfirmation', {
          from: this.state.selectedNumber.number,
          to: this.state.toProfile.mobilenumber
        })

        values.from = this.state.selectedNumber.number
        values.to = this.state.toProfile.mobilenumber
        values.message = this.state.message

        if (this.state.shareType.id == 'airtime') {
          values.airtime = this.state.selectedPlan.value
        } else if (this.state.shareType.id == 'data') {
          values.data = this.state.selectedPlan.value
        }
      }

      const r = (await http.post(URLS.SHARE_REQUEST, values)).data

      logSuccessEvent('Share')

      await this.promisedSetState({
        transaction: r?.rows || {},
        visibleConfirmation: false,
        visibleSuccess: true
      })
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
  }

  onClosedConfirmation () {
    if (this.state.visibleConfirmation) {
      this.setState({ visibleConfirmation: false })
    }
  }

  onClosedSuccess () {
    if (this.state.visibleSuccess) {
      this.setState({ visibleSuccess: false })
      navigate('PublicHome')
    }
  }

  renderFooter () {
    if (!this.state.selectedPlan?.value) {
      return null
    }
    return (
      <View style={styles.footer}>
        <Button style={styles.footerBtn} onPress={this.submit}>
          <Text style={styles.footerBtnText}>Share {this.state.selectedPlan.label.toUpperCase()}</Text>
        </Button>
      </View>
    )
  }

  renderContent () {
    return this.state.shareType
      ? (<Layout
          shareType={this.state.shareType}
          plans={this.state.plans}
          selectedPlan={this.state.selectedPlan}
          selectedNumber={this.state.selectedNumber}
          toMobileNumber={this.state.toMobileNumber}
          toProfile={this.state.toProfile}
          recentlyShared={this.state.recentlyShared}
          repeatRecentlyShared={this.repeatRecentlyShared}
          selectPlan={this.selectPlan}
          onChangeToMobileNumber={this.onChangeToMobileNumber}
          openContacts={this.openContacts}
          fetchProfile={this.fetchProfile}
          submit={this.submit}
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
          title='Share'
          titleColor='light'
        />
        <Content style={theme.layoutBg}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            {this.renderContent()}
          </ScrollView>
        </Content>
        {this.renderFooter()}
        {
        this.state.visibleConfirmation &&
          <Confirmation
            shareType={this.state.shareType}
            selectedPlan={this.state.selectedPlan}
            selectedNumber={this.state.selectedNumber}
            toProfile={this.state.toProfile}
            recentlySharedSelected={this.state.recentlySharedSelected}
            message={this.state.message}
            onChangeMessage={this.onChangeMessage}
            submitConfirmation={this.submitConfirmation}
            onClosed={this.onClosedConfirmation}
          />
        }
        {
        this.state.visibleSuccess &&
          <Success
            selectedPlan={this.state.selectedPlan}
            selectedNumber={this.state.selectedNumber}
            toProfile={this.state.toProfile}
            recentlySharedSelected={this.state.recentlySharedSelected}
            transaction={this.state.transaction}
            close={this.onClosedSuccess}
          />
        }
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Share)
