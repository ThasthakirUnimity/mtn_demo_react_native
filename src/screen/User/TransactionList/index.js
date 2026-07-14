import React, { createRef } from 'react'
import { Image, Platform, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import RNFetchBlob from 'rn-fetch-blob'
import { cloneDeep } from 'lodash'

import { Container, Content, Icon, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import SectionProvider from '@src/component/Section/Provider'
import { SecondaryStatusBar } from '@src/component/StatusBar'
import Support from '@src/component/Support'
import { sortings } from '@src/config/filters/transaction'
import { URLS } from '@src/config/url'
import theme from '@src/theme/styles'
import { __ } from '@src/utility/translation'
import { bind } from '@src/utility/component'
import http from '@src/utility/http'

import List from './List'
import styles from './styles'
import Filter from './Filter'
import Calendar from './Calendar'
import InvoiceView from './InvoiceView'
import { useNumberBaseKey } from '@src/hooks/user'
import { goBack } from '@src/navigation'
import { logClickEvent } from '@src/utility/analytics'

import Header from '@src/component/Header'

class TransactionListUI extends React.Component {
  constructor (props) {
    super(props)

    let mobilenumber = ''
    if (props.session.numbers[props.session.numberIndex]) {
      mobilenumber =
        props.session.numbers[props.session.numberIndex]?.number || ''
    }

    const filters = props.route.params.filters || {}
    filters.latestFlag = 5
    filters.number = mobilenumber
    // filters.amount = 'desc'
    // filters.type = 'prepaid'
    // filters.shop = 'caller tunes'

    this.state = {
      mobilenumber,
      transactions: [],
      fetchingTransactionsInitial: true,
      fetchingTransactionsMore: false,
      defaultFilters: cloneDeep(filters),
      filters,
      normalizeFilters: {},
      visibleCalendar: false,
      visibleCalendarResult: false,

      transaction: 'last10',
      filter: 'All',
      validity: 'Caller Tunes',
      price: 'Low to High'
    }

    bind(this)

    this.applyFilter = this.applyFilter.bind(this)
    this.normalizeFilter = this.normalizeFilter.bind(this)
    this.fetchList = this.fetchList.bind(this)
    this.generateCalendarResult = this.generateCalendarResult.bind(this)
    this.sendMail = this.sendMail.bind(this)
    this.downloadFile = this.downloadFile.bind(this)
    this.openFilter = this.openFilter.bind(this)
    this.showCalendar = this.showCalendar.bind(this)
    this.openView = this.openView.bind(this)
    this.renderList = this.renderList.bind(this)
    this.renderToolbarDefault = this.renderToolbarDefault.bind(this)
    this.renderProfile = this.renderProfile.bind(this)
    this.renderLayoutCalendar = this.renderLayoutCalendar.bind(this)
    this.renderLayoutDefault = this.renderLayoutDefault.bind(this)

    this.refFilter = createRef()
    this.refInvoiceView = createRef()
  }

  async componentDidMount () {
    await this.applyFilter({ ...this.state.filters })
  }

  async applyFilter (filters) {
    filters.page = 1
    await this.promisedSetState({
      filters,
      fetchingPostsInitial: true,
      transactions: []
    })
    await this.normalizeFilter()
    await this.fetchList()
  }

  async normalizeFilter () {
    const normalizeFilters = {}
    Object.keys(this.state.filters).forEach(f_ => {
      let f = f_
      let v = this.state.filters[f_]
      switch (f_) {
        case 'latestFlag':
          normalizeFilters.limit = v
          normalizeFilters.sortKey = 'transactionDate'
          normalizeFilters.sortOrder = 'desc'
          return
        case 'sorting':
          if (sortings[v]) {
            normalizeFilters.sortKey = sortings[v].param
            normalizeFilters.sortOrder = sortings[v].order
          }
          return
        case 'dayFrom':
          f = 'fromdate'
          v = v.format('YYYY-MM-DD')
          break
        case 'dayTo':
          f = 'todate'
          v = v.format('YYYY-MM-DD')
          break
        case 'type':
          if (v == 'all') {
            return
          }
          break
        case 'shop':
          if (v == 'all') {
            return
          }
          f = 'flag'
          break
        default:
          break
      }
      normalizeFilters[f] = v
    })

    await this.promisedSetState({
      normalizeFilters
    })
  }

  async fetchList () {
    try {
      const r = (
        await http.post(URLS.USER_TRANSACTIONS, this.state.normalizeFilters)
      ).data
      if (r?.response?.length) {
        await this.promisedSetState({
          transactions: r.response
        })
      }
    } catch (e) { }
    await this.promisedSetState({
      fetchingTransactionsInitial: false
    })
  }

  async generateCalendarResult (dayFrom, dayTo) {
    const filters = cloneDeep(this.state.filters)
    filters.dayFrom = dayFrom
    filters.dayTo = dayTo
    if (filters.latestFlag) {
      delete filters.latestFlag
    }
    await this.promisedSetState({
      visibleCalendar: false,
      visibleCalendarResult: true,
      fetchingTransactionsInitial: true,
      transactions: []
    })
    this.applyFilter(filters)
  }

  async sendMail () {
    logClickEvent('TransactionListMail')
    await Support.showLoading()
    try {
      const r = (
        await http.post(
          URLS.USER_TRANSACTIONS_MAIL,
          this.state.normalizeFilters
        )
      ).data
      await Support.showSuccess({
        layout: 'toast',
        message: __('Successfully sent')
      })
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
  }

  async downloadFile () {
    logClickEvent('TransactionListDownload')
    const download = url => {
      Support.showSuccess({
        layout: 'toast',
        message: __('Downloading')
      })
      const dirs = RNFetchBlob.fs.dirs
      const path = dirs.DownloadDir + '/transaction_history.pdf'
      RNFetchBlob.config({
        path,
        overwrite: true
      })
        .fetch('GET', url)
        .then((res, res1) => {
          Support.showSuccess({
            layout: 'toast',
            message: 'The file saved to ' + res.path()
          })
          if (Platform.OS === 'ios') {
            RNFetchBlob.ios.openDocument(res.path())
          } else {
            RNFetchBlob.android.actionViewIntent(res.path(), 'application/pdf')
          }
        }, () => {
          console.log('REJECTED')
        }).catch(e => {
          console.log('dowonload ', e, url)
        })
    }
    await Support.showLoading()
    try {
      const r = (await http.post(URLS.USER_TRANSACTIONS_DOWNLOAD)).data
      if (r?.file) {
        download(r.file)
      } else {
        throw new Error('Failed')
      }
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
  }

  openFilter () {
    logClickEvent('TransactionListFilter')
    this.refFilter.current.open(this.state.filters)
  }

  showCalendar () {
    logClickEvent('TransactionListCalendar')
    this.setState({
      visibleCalendar: true,
      visibleCalendarResult: false,
      transactions: []
    })
  }

  openView (invoice) {
    this.refInvoiceView.current.open(invoice)
  }

  renderList () {
    return (
      <List
        list={this.state.transactions}
        fetching={this.state.fetchingTransactionsInitial}
        openView={this.openView}
      />
    )
  }

  renderToolbarDefault () {
    let listOptions
    if (this.state.transactions.length) {
      listOptions = (
        <>
          <Button style={styles.transactionBtn} onPress={this.sendMail}>
            <Icon style={styles.transactionBtnIcon} name='send' type='Feather' />
          </Button>
          <Button style={styles.transactionBtn} onPress={this.downloadFile}>
            <Icon style={styles.transactionBtnIcon} name='download' type='AntDesign' />
          </Button>
        </>
      )
    }
    return (
      <View style={styles.lastTransaction}>
        {this.state.filters?.latestFlag == 5
          ? (
            <View style={theme.row}>
              <Text style={styles.shareHeader}>{__('Last 5 Transactions')}</Text>
            </View>
            )
          : <View style={theme.row}><Text style={styles.shareHeader} /></View>}

        <View style={styles.lastTransactionRow}>
          <Button style={styles.transactionBtn} onPress={this.openFilter}>
            <Icon style={styles.transactionBtnIcon} name='filter' type='AntDesign' />
          </Button>
          <Button style={styles.transactionBtn} onPress={this.showCalendar}>
            <Icon style={styles.transactionBtnIcon} name='calendar' type='Feather' />
          </Button>
          {listOptions}
        </View>
      </View>
    )
  }

  renderProfile () {
    let userName = 'Guest'
    let phone = ''
    let img = require('@asset/icons/avatar-dark.png')
    if (this.props.session.numbers[this.props.session.numberIndex]) {
      const selectedNumber =
        this.props.session.numbers[this.props.session.numberIndex]
      userName = selectedNumber.name
      phone = selectedNumber.number
      if (selectedNumber.profile_image) {
        img = { uri: selectedNumber.profile_image }
      }
    }

    return (
      <View style={styles.profile}>
        <Image source={img} resizeMode='contain' style={styles.img} />
        <View style={styles.profileText}>
          <View style={theme.row}>
            <Text style={styles.profileName}>{userName}</Text>
          </View>
          <View style={theme.row}>
            <Text style={styles.profileNumber}>{phone}</Text>
          </View>
        </View>
        <Button
          style={styles.profileBtn}
          onPress={() => {
            logClickEvent('TransactionListSwitchNumber')
            SectionProvider.showUserNumberSelection()
          }}
        >
          <Icon
            name='arrow-drop-down'
            type='MaterialIcons'
            size='text24'
            color='dark'
            style={styles.profileBtnIcon}
          />
        </Button>
      </View>
    )
  }

  renderLayoutCalendar () {
    if (!this.state.visibleCalendar) {
      return null
    }
    return (<Calendar generate={this.generateCalendarResult} />)
  }

  renderLayoutDefault () {
    if (this.state.visibleCalendar) {
      return null
    }
    return (
      <>
        {this.renderProfile()}
        {this.renderToolbarDefault()}
        {this.renderList()}
      </>
    )
  }

  render () {
    return (
      <Container>
        <SecondaryStatusBar />
        <Header default leftType='back' title='Transaction History' titleColor='light' />
        {/* <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Button onPress={() => goBack()} style={styles.headerBtn}>
              <Icon name='chevron-left' type='Feather' style={styles.headerIcon} />
            </Button>
          </View>
          <View style={styles.headerMiddle}>
            <Text style={styles.headerTitle}>{__('Transaction History')}</Text>
          </View>
        </View> */}
        <Content style={styles.bgGrey}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            {this.renderLayoutDefault()}
            {this.renderLayoutCalendar()}
          </ScrollView>
        </Content>

        <Filter
          ref={this.refFilter}
          defaultFilters={this.state.defaultFilters}
          apply={this.applyFilter}
        />
        <InvoiceView ref={this.refInvoiceView} />
      </Container>
    )
  }
}

const TransactionList = (props) => {
  const key = useNumberBaseKey(props)

  return <TransactionListUI key={key} {...props} />
}

export default connect(({ session }) => ({ session }))(TransactionList)
