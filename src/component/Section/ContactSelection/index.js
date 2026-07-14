import React from 'react'
import { ScrollView, ActivityIndicator, Platform, PermissionsAndroid } from 'react-native'
import Modal from 'react-native-modalbox'
import Contacts from 'react-native-contacts'

import styles from './styles'
import { bind } from '@src/utility/component'
import { COLOR } from '@src/theme/typography'
import Item from './Item'

class ContactSelection extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpened: false,
      fetching: true
    }

    bind(this)

    this.onOpened = this.onOpened.bind(this)
    this.onClosed = this.onClosed.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.requestList = this.requestList.bind(this)
    this.loadList = this.loadList.bind(this)
    this.selectContact = this.selectContact.bind(this)
    this.renderContact = this.renderContact.bind(this)
    this.renderContent = this.renderContent.bind(this)

    this.onSelected = null
  }

  onOpened () {
    this.setState({
      isOpened: true
    })
  }

  onClosed () {
    this.onSelected = null
    this.setState({
      isOpened: false
    })
  }

  async open (options) {
    await this.promisedSetState({
      fetching: true
    })
    this.onSelected = options.onSelected
    await this.refModal.open()
    this.requestList()
  }

  async close () {
    await this.refModal.close()
  }

  requestList () {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.'
      }).then(() => {
        this.loadList()
      })
    } else {
      this.loadList()
    }
  }

  loadList () {
    Contacts.getAll()
      .then(contacts => {
        this.setState({ contacts: contacts.filter(c => (!!c?.phoneNumbers?.length)), fetching: false })
      })
      .catch(e => {
        this.setState({ fetching: false })
      })

    Contacts.getCount().then(count => {
      this.setState({ searchPlaceholder: `Search ${count} contacts` })
    })

    Contacts.checkPermission()
  }

  selectContact (contact) {
    const matched = contact.phoneNumbers[0].number.match(/(\d+)/g)
    console.log(matched, matched.join(''))
    this.onSelected && this.onSelected({
      name: contact.givenName + ' ' + contact.familyName,
      avatar: contact.hasThumbnail ? contact.thumbnailPath : null,
      number: matched.join('')
    })
    this.close()
  }

  renderContact (contact) {
    return (
      <Item
        key={contact.recordID}
        contact={contact}
        select={this.selectContact}
      />
    )
  }

  renderContent () {
    if (this.state.fetching) {
      return <ActivityIndicator color={COLOR.PRIMARY} size='large' animating />
    }
    return (
      <ScrollView style={styles.scroll}>
        {this.state.contacts.map(this.renderContact)}
      </ScrollView>
    )
  }

  render () {
    return (
      <Modal
        ref={c => (this.refModal = c)}
        position='bottom'
        backButtonClose
        backdropPressToClose
        swipeToClose={false}
        style={styles.modal}
        onOpened={this.onOpened}
        onClosed={this.onClosed}
      >
        {this.state.isOpened ? this.renderContent() : null}
      </Modal>
    )
  }
}

export default ContactSelection
