import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { Container, Content } from '@src/component/Basic'
import { DarkStatusBar, LightStatusBar } from '@src/component/StatusBar'
import { URLS } from '@src/config/url'
import theme from '@src/theme/styles'
import { applyComponentFeatures } from '@src/utility/core'
import http from '@src/utility/http'

import styles from './styles'
import Balance from './Balance'
import Header from '@src/component/Header'
import { __ } from '@src/utility/translation'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      planDetails: [],
      fetchingPlans: true
    }

    applyComponentFeatures(this)

    this.fetchPlanDetails = this.fetchPlanDetails.bind(this)
    this.renderPlans = this.renderPlans.bind(this)
  }

  async componentDidMount () {
    await this.fetchPlanDetails()
  }

  async fetchPlanDetails () {
    try {
      let phone = ''
      if (this.props.session.numbers[this.props.session.numberIndex]) {
        const selectedNumber =
          this.props.session.numbers[this.props.session.numberIndex]
        phone = selectedNumber.number
      }
      const params = { mobilenumber: phone }
      const r = (await http.post(URLS.USER_BALANCE_PREPAID)).data
      if (r?.result?.type) {
        const data = {}
        if (r.result.type == 'Prepaid') {
          const _data = parseInt(r.result.data, 10) || 0
          const _dataBalance = parseInt(r.result.data_balance, 10) || 0
          const _dataCompleted = (_data - _dataBalance) || 0
          data.data_percentage = _dataCompleted / _data * 100
        } else if (r.result.type == 'Postpaid') {
          const _data = parseInt(r.result.data, 10) || 0
          const _dataBalance = parseInt(r.result.data_balance, 10) || 0
          const _dataCompleted = (_data - _dataBalance) || 0
          data.data_percentage = _dataCompleted / _data * 100

          const _voice = parseInt(r.result.voice, 10) || 0
          const _voiceBalance = parseInt(r.result.voice_balance, 10) || 0
          const _voiceCompleted = (_voice - _voiceBalance) || 0
          data.voice_percentage = _voiceCompleted / _voice * 100

          const _sms = parseInt(r.result.sms, 10) || 0
          const _smsBalance = parseInt(r.result.sms_balance, 10) || 0
          const _smsCompleted = (_sms - _smsBalance) || 0
          data.sms_percentage = _smsCompleted / _sms * 100
        }
        const planDetails = [{ ...r.result, ...data }]
        await this.promisedSetState({
          planDetails,
          fetchingPlans: false
        })
      }
    } catch (e) {}
  }

  renderPlans () {
    return (
      <Balance
        planDetails={this.state.planDetails}
      />
    )
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('Plans & Usage')}
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView keyboardShouldPersistTaps='always' nestedScrollEnabled>
            <View style={styles.mainContainer}>{this.renderPlans()}</View>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session, setting }) => ({ session, setting }))(Home)
