import React, { useEffect, useState } from 'react'
import { Image, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import moment from 'moment'

import { Container, Content, Icon, Text } from '@src/component/Basic'
import Header from '@src/component/Header'
import { Button, TextInput } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import { navigate, navigateCurrent } from '@src/navigation'
import theme from '@src/theme/styles'
import styles from './styles'
import { DarkStatusBar } from '@src/component/StatusBar'
import { removeAccountNumber } from '@src/helper/user'
import Support from '@src/component/Support'
import { CURRENCY, APP_DETAILS } from '@src/theme/typography'


const Location = ({ user }) => {
  const [address, setAddress] = useState('')
  useEffect(() => {
    const _address = []
    if (user.permanentAddress1) {
      _address.push(user.permanentAddress1)
    }
    if (user.permanentAddress2) {
      _address.push(user.permanentAddress2)
    }
    if (user.city) {
      _address.push(user.city)
    }
    if (user.state) {
      _address.push(user.state)
    }
    if (user.country) {
      _address.push(user.country)
    }
    if (user.zipCode) {
      _address.push(user.zipCode)
    }
    setAddress(_address.join(', '))
  }, [user])
  return (
    <View style={styles.profileGroup}>
      <View style={styles.profileRow}>
        <Text style={styles.profileLabel}>{__('Permanent  address')}</Text>
      </View>
      <View style={styles.profileRow}>
        <Text style={styles.profileValue}>{address}</Text>
      </View>
    </View>
  )
}

class Profile extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

    this.removeAccountNumber = this.removeAccountNumber.bind(this)
    this.renderLinkedAccounts = this.renderLinkedAccounts.bind(this)
  }

  async removeAccountNumber (number) {
    await Support.showLoading()
    await removeAccountNumber(number)
    await Support.hideLoading()
  }

  renderLinkedAccounts () {
    const nodes = []
    this.props.session.numbers.forEach(r => {
      if (!r.isPrimary) {
        const removeAccountNumber = () => {
          this.removeAccountNumber(r.number)
        }
        nodes.push(
          <View key={r.number} style={styles.linkedAcount}>
            <View style={styles.linkCol}>
              <View style={styles.linkCol2}>
                <View style={styles.linkedInitial}>
                  <Text style={styles.linkedInitialText}>{r.name.substring(0, 1).toUpperCase()}</Text>
                </View>
                <View style={styles.linkContentRow}>
                  <Text style={styles.linkName}>{r.name}</Text>
                  <Text style={styles.linkNumber}>{r.number}</Text>
                </View>
              </View>
              <View style={styles.linkCol3}>
                <Button onPress={removeAccountNumber}>
                  <Icon name='trash' type='Feather' style={styles.linkTrash} />
                </Button>
                <Text style={styles.linkText}>{__('My '+ APP_DETAILS.APP_NAME +' Xtraplan')}</Text>
              </View>
            </View>
          </View>
        )
      }
    })

    if (nodes.length == 0) {
      return null
    }

    return (
      <View>
        <Text style={styles.linkNumber}>{__('Linked Accounts')}</Text>
        {nodes}
      </View>
    )
  }

  render () {
    let user = {}
    let dob
    let img = require('@asset/icons/avatar-dark.png')
    if (this.props.session.isLoggedIn) {
      user = this.props.session.user
      const m = moment(user.dob, 'YYYY-MM-DD')
      if (m.isValid()) {
        dob = m.format('DD MMMM YYYY')
      }
      if (this.props.session.user.profileImage) {
        img = { uri: this.props.session.user.profileImage }
      }
    }
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title='Profile'
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >

            <View style={styles.profile}>
              <View style={styles.profileAvatar}>
                <Image source={require('@asset/images/king.png')} style={styles.profileAvatarIcon} resizeMode='contain' />
                <View style={styles.profileAvatarBg}>
                  <Image source={img} style={styles.profileAvatarImg} />
                </View>
              </View>
              <View style={styles.profileInfo}>
                <View style={styles.profilePlan}>
                  <Text style={styles.profilePlanText}>{__('Gold Member')}</Text>
                </View>
                {
                  user.First_name
                    ? <View style={styles.profileRow}>
                      <Text style={styles.profileName}>{user.First_name}</Text>
                    </View>
                    : null
                }
                {
                  user.emailID
                    ? <View style={styles.profileRow}>
                      <Text style={styles.profileText}>{user.emailID}</Text>
                    </View>
                    : null
                }
                {
                  user.altMobilenumber
                    ? <View style={styles.profileRow}>
                      <Text style={styles.profileText}>{user.altMobilenumber} | {__('Prepaid')}</Text>
                    </View>
                    : null
                }
              </View>
              <View style={styles.profileLast}>
                <Button style={styles.profileBtn} onPress={() => navigateCurrent('UserProfileEdit')}>
                  <Text style={styles.profileBtnText}>{__('Edit')}</Text>
                </Button>
              </View>
            </View>

            <View style={styles.profileDetail}>
              <View style={styles.profileGroup}>
                <View style={styles.profileRow}>
                  <Text style={styles.profileLabel}>{__('Gender')}</Text>
                </View>
                <View style={styles.profileRow}>
                  <Text style={styles.profileValue}>{user.gender}</Text>
                </View>
              </View>
              <View style={styles.profileGroup}>
                <View style={styles.profileRow}>
                  <Text style={styles.profileLabel}>{__('Date of Birth')}</Text>
                </View>
                <View style={styles.profileRow}>
                  <Text style={styles.profileValue}>{dob}</Text>
                </View>
              </View>
              <View style={styles.profileGroup}>
                <View style={styles.profileRow}>
                  <Text style={styles.profileLabel}>{__('Email Address')}</Text>
                </View>
                <View style={styles.profileRow}>
                  <Text style={styles.profileValue}>{user.emailID}</Text>
                </View>
              </View>
              <View style={styles.profileGroup}>
                <View style={styles.profileRow}>
                  <Text style={styles.profileLabel}>{__('Primary number')}</Text>
                </View>
                <View style={styles.profileRow}>
                  <Text style={styles.profileValue}>{user.altMobilenumber}</Text>
                </View>
              </View>
              <View style={styles.profileGroup}>
                <View style={styles.profileRow}>
                  <Text style={styles.profileLabel}>{__('Secondary number')}</Text>
                </View>
                <View style={styles.profileRow}>
                  <Text style={styles.profileValue}>{user.telePhonenumber}</Text>
                </View>
              </View>
              {this.renderLinkedAccounts()}
              <Location user={user} />
            </View>

          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Profile)
