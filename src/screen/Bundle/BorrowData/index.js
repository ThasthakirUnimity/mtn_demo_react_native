import React from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import Modal from 'react-native-modalbox'

import Header from '@src/component/Header'
import { Container, Content, Icon, Text } from '@src/component/Basic'
import { Button, TextInput } from '@src/component/Form'
import Support from '@src/component/Support'
import { URLS } from '@src/config/url'
import http from '@src/utility/http'
import { navigate } from '@nsrc/avigation'
import theme from '@src/theme/styles'
import styles from './styles'
import { DarkStatusBar } from '@src/component/StatusBar'
import { bind } from '@src/utility/component'
import Otp from './Otp'
import { navigateCurrent } from '@src/navigation/'
import { __ } from '@src/utility/translation'

class Terms extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      values: {
      },
      datas: [
        {
          value: 50,
          title: '50 MB',
          calls: 'Unlimited',
          validity: '24 Hrs',
          price: '30'
        },
        {
          value: 150,
          title: '150 MB',
          calls: 'Unlimited',
          validity: '24 Hrs',
          price: '50'
        },
        {
          value: 150,
          title: '150 MB',
          calls: 'Unlimited',
          validity: '24 Hrs',
          price: '50'
        }
      ],
      numberSelected: null,
      dataSelected: null
    }

    bind(this)

    this.selectNumber = this.selectNumber.bind(this)
    this.selectPlan = this.selectPlan.bind(this)
    this.checkAndSubmit = this.checkAndSubmit.bind(this)
    this.onSubmitNo = this.onSubmitNo.bind(this)
    this.onSuccessOtp = this.onSuccessOtp.bind(this)
    this.renderLinkedNumber = this.renderLinkedNumber.bind(this)
    this.renderLinkedNumbers = this.renderLinkedNumbers.bind(this)
    this.renderPlan = this.renderPlan.bind(this)
    this.renderPlans = this.renderPlans.bind(this)
    this.renderModalConfirm = this.renderModalConfirm.bind(this)
  }

  selectNumber(index) {
    this.setState({ numberSelected: index }, this.checkAndSubmit)
  }

  selectPlan(index) {
    this.setState({ dataSelected: index }, this.checkAndSubmit)
  }

  checkAndSubmit() {
    if (
      this.state.datas[this.state.dataSelected] &&
      this.props.session.numbers[this.state.numberSelected]
    ) {
      this.refConfirm.open()
    }
  }

  async onSubmitNo() {
    const dataSelected = this.state.datas[this.state.dataSelected]
    if (!dataSelected) {
      await Support.showError({ message: __('Please select a data') })
      return
    }
    const numberSelected = this.props.session.numbers[this.state.numberSelected]
    if (!numberSelected) {
      await Support.showError({ message: __('Please select a linked number') })
      return
    }
    await Support.showLoading()
    try {
      const values = {
        mobilenumber: numberSelected.number,
        dataValue: dataSelected.value,
        airTimeValue: 1
      }
      const result = (await http.post(URLS.BORROW_REQUEST, values)).data

      await this.onChangeValue('insertId', result.insertId)

      this.refConfirm.close()
      this.refOtp.open()
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
  }

  onSuccessOtp() {
    this.refOtp.close()
    this.refSuccess.open()
  }

  async onClosedSuccess() {
    navigateCurrent('PublicHome')
  }

  renderLinkedNumber(r, index) {
    const selected = this.state.numberSelected === index
    const styleMain = [styles.linkedItem]
    if (selected) {
      styleMain.push(styles.linkedItemSelected)
    }
    const selectNumber = () => this.selectNumber(index)
    return (
      <Button style={styleMain} onPress={selectNumber}>
        <View style={styles.linkedInitial}>
          <Text style={styles.linkedInitialText}>S</Text>
        </View>
        <View style={styles.linkedCol}>
          <Text style={styles.linkedName}>{r.name}</Text>
          <Text style={styles.linkedNo}>{r.number}</Text>
        </View>
      </Button>
    )
  }

  renderLinkedNumbers() {
    const nodes = []
    this.props.session.numbers.forEach((r, index) => {
      if (r.linked) {
        nodes.push(this.renderLinkedNumber(r, index))
      }
    })
    if (nodes.length === 0) {
      return null
    }
    return (
      <>
        <View style={styles.linkHeader}>
          <Text style={styles.linkHeaderTitle}>{__('Choose from your linked account')}</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.linkedContent}
        >
          {nodes}
        </ScrollView>
      </>
    )
  }

  renderPlan(plan, index) {
    const selected = this.state.dataSelected === index
    const styleMain = [styles.planItem]
    if (selected) {
      styleMain.push(styles.planItemSelected)
    }
    const selectPlan = () => this.selectPlan(index)
    return (
      <Button style={styleMain} onPress={selectPlan}>
        <View style={styles.planRow}>
          <View style={styles.planCol}>
            <View style={styles.planRow}>
              <Text style={styles.planLabel}>{__('Validity')}</Text>
            </View>
            <View style={styles.planRow}>
              <Text style={styles.planValue}>{plan.validity}</Text>
            </View>
          </View>
          <View style={styles.planCol}>
            <View style={styles.planRow}>
              <Text style={styles.planLabel}>{__('Data')}</Text>
            </View>
            <View style={styles.planRow}>
              <Text style={styles.planValue}>{plan.title}</Text>
            </View>
          </View>
          <View style={styles.planCol}>
            <View style={styles.planRow}>
              <Text style={styles.planLabel}>{__('Calls')}</Text>
            </View>
            <View style={styles.planRow}>
              <Text style={styles.planValue}>{plan.calls}</Text>
            </View>
          </View>
        </View>
        <View style={styles.planBot}>
          <Text style={styles.planBotLink}>{__('Details')}</Text>
          <Text style={styles.planPrice}>{plan.price}</Text>
        </View>
      </Button>
    )
  }

  renderPlans() {
    return (
      <>
        <View style={styles.planHeader}>
          <Text style={styles.planHeaderTitle}>{__('Select the Plan you\'d like to borrow')}</Text>
        </View>
        {this.state.datas.map(this.renderPlan)}
      </>
    )
  }

  renderModalConfirm() {
    const dataSelected = this.state.datas[this.state.dataSelected]
    const numberSelected = this.props.session.numbers[this.state.numberSelected]
    if (!dataSelected || !numberSelected) {
      return null
    }
    return (
      <View style={styles.borrow}>
        <View style={styles.borrowHeader}>
          <View style={styles.borrowHeaderRow}>
            <Text style={styles.borrowHeaderTitle}>{__('Borrowing')} {dataSelected.title} {__('Data')}</Text>
          </View>
          <View style={styles.borrowHeaderRow}>
            <Text style={styles.borrowHeaderSubTitle}>{__('Review details')}</Text>
          </View>
        </View>

        <View style={styles.borrowCard}>
          <View style={styles.borrowRow}>
            <Image source={require('@asset/icons/avatar-light.png')} style={styles.borrowAvatar} resizeMode='contain' />
            <View style={styles.borrowRight}>
              <View style={styles.borrowRow}>
                <Text style={styles.borrowName}>{numberSelected.name}</Text>
              </View>
              <View style={styles.borrowRow}>
                <Text style={styles.borrowNo}>{numberSelected.number}</Text>
              </View>
            </View>
          </View>
          <View style={styles.borrowInfo}>
            <View style={styles.borrowCol}>
              <View style={styles.borrowRow}>
                <Text style={styles.borrowLabel}>{__('Validity')}</Text>
              </View>
              <View style={styles.borrowRow}>
                <Text style={styles.borrowValue}>{dataSelected.validity}</Text>
              </View>
            </View>
            <View style={styles.borrowCol}>
              <View style={styles.borrowRow}>
                <Text style={styles.borrowLabel}>{__('Data')}</Text>
              </View>
              <View style={styles.borrowRow}>
                <Text style={styles.borrowValue}>{dataSelected.title}</Text>
              </View>
            </View>
            <View style={styles.borrowCol}>
              <View style={styles.borrowRow}>
                <Text style={styles.borrowLabel}>{__('Calls')}</Text>
              </View>
              <View style={styles.borrowRow}>
                <Text style={styles.borrowValue}>{dataSelected.calls}</Text>
              </View>
            </View>
          </View>
          <View style={styles.borrowCount}>
            <View style={styles.borrowItem}>
              <Text style={styles.borrowSubTotal}>{__('Subtotal')}</Text>
              <Text style={styles.borrowSubTotal}>{dataSelected.price}</Text>
            </View>
            <View style={styles.borrowItem}>
              <Text style={styles.borrowTax}>{__('15% service charge')}</Text>
              <Text style={styles.borrowTax}>$5</Text>
            </View>
            <View style={styles.borrowItem}>
              <Text style={styles.borrowTotal}>{__('Amount Payable')}</Text>
              <Text style={styles.borrowTotalAmount}>{parseInt(dataSelected.price, 10) + 5}</Text>
            </View>
          </View>
        </View>

        <View style={styles.borrowFooter}>
          <View style={[styles.borrowRow, { justifyContent: 'flex-end' }]}>
            <Text style={styles.borrowNote}>{__('* This will be deducted on your next recharge')}</Text>
          </View>
          <View style={styles.borrowBtns}>
            <Button style={styles.borrowBtn} onPress={this.onSubmitNo}>
              <Text style={styles.borrowBtnText}>{__('Confirm')}</Text>
            </Button>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={'Borrow'}
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >

            <View style={styles.alert}>
              <View style={styles.alertHeader}>
                <Text style={styles.alertHeaderTitle}>{__('Borrow Now & Pay Later')}</Text>
                <Button style={styles.alertBtn}>
                  <Icon name='close' type='AntDesign' style={styles.alertBtnIcon} />
                </Button>
              </View>
              <View style={styles.alertRow}>
                <Text style={styles.alertDesc}>{__('Additional 15% service charge will be applied on your next recharge')}</Text>
              </View>
              <View style={styles.alertRow}>
                <Text style={styles.alertMore}>{__('Know More')}</Text>
                <Icon name='keyboard-arrow-right' type='MaterialIcons' style={styles.alertMoreIcon} />
              </View>
            </View>

            <View style={styles.search}>
              <View style={styles.searchHeader}>
                <Text style={styles.searchHeaderTitle}>{__('Borrow Now & Pay Later')}</Text>
              </View>
              <View style={styles.searchRow}>
                <View style={styles.searchCol}>
                  <TextInput
                    placeholder={__('Choose number to send request')}
                    placeholderTextColor='rgba(0, 0, 0, 0.3)'
                    style={styles.searchInput}
                  />
                </View>
                <Button>
                  <Image source={require('@asset/icons/addressbook.png')} style={styles.searchImg} resizeMode='contain' />
                </Button>
              </View>
            </View>

            {this.renderLinkedNumbers()}
            {this.renderPlans()}

          </ScrollView>
        </Content>

        <Modal
          ref={c => (this.refConfirm = c)}
          position='bottom'
          swipeDirection='down'
          style={styles.modalDataConfirm}
        >
          {this.renderModalConfirm()}
        </Modal>

        <Otp
          ref={c => (this.refOtp = c)}
          values={this.state.values}
          onSuccess={this.onSuccessOtp}
        />

        <Modal
          ref={c => (this.refSuccess = c)}
          position='bottom'
          swipeDirection='down'
          style={styles.modalConfirm}
          onClosed={this.onClosedSuccess}
        >
          <View style={styles.confirm}>
            <Image source={require('@asset/icons/success.png')} style={styles.confirmImg} resizeMode='contain' />
            <View style={styles.confirmHeader}>
              <View style={styles.confirmHeaderRow}>
                <Text style={styles.confirmHeaderTitle}>{__('Successful')}</Text>
              </View>
              <View style={styles.confirmHeaderRow}>
                <Text style={styles.confirmHeaderSubTitle}>{__('Thank you for using Airtime Borrow')}</Text>
              </View>
            </View>
            <View style={styles.confirmContent}>
              <View style={styles.confirmRow}>
                <Text style={styles.confirmTitle}>{__('John has accepted to lend you Airtime Data and will be processed soon.')}</Text>
              </View>
              <View style={styles.confirmRow}>
                <Text style={styles.confirmDate}>Sep 01, 2022 02:12 AM</Text>
              </View>
              <Button style={styles.confirmBtn}>
                <Text style={styles.confirmBtnText}>{__('Go to Home')}</Text>
              </Button>
            </View>
          </View>
        </Modal>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Terms)
