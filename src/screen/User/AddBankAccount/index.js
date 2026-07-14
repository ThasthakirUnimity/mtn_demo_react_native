import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Container, Content, Icon, Text } from '@src/component/Basic'
import Header from '@src/component/Header'
import { Button, TextInput } from '@src/component/Form'
import { __ } from '@src/utility/translation'

import { navigate } from '@src/navigation'
import theme from '@src/theme/styles'
import styles from './styles'
import { DarkStatusBar } from '@src/component/StatusBar'

class EditProfile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tx_ref: "MC-1585dshdhdsdv5050e81",
      amount: "1",
      account_bank: "044",
      account_number: "0690000037",
      currency: "USD",
      email: "viay@flw.com",
      phone_number: "0902620185",
      fullname: "vijay Obafunmiso"
    }
    AsyncStorage.getItem('recharge', (error, result) => {
      if (result) {
        const rechargeItem = JSON.parse(result)
        this.setState({
          Number_called: rechargeItem['get:Number_called'][0],
          Charged_amount: rechargeItem['get:Charged_amount'][0]
        })
      }
    })
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('Add Bank Account')}
          titleColor='light'
        />
        <Content>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >

            <View style={styles.header}>
              <Text style={styles.headerTitle}>{__('Use Another Bank')}</Text>
              <View style={styles.headerCol}>
                <Text style={styles.headerPrice}>{this.state.Charged_amount}</Text>
                <Icon name='checkcircle' type='AntDesign' style={styles.headerIcon} />
              </View>
            </View>

            <View style={styles.logo}>
              <Image source={{ uri: 'https://www.prestigenewsonline.com/wp-content/uploads/2019/09/Wema-Bank-Logo.png' }} resizeMode='contain' style={styles.logoImg} />
            </View>

            <View style={styles.account}>
              <View style={styles.accountRow}>
                <View style={styles.accountCol}>
                  <Text style={styles.accountLabel}>{__('Account Number')}</Text>
                </View>
                <View style={styles.accountGroup}>
                  <TextInput
                    placeholder='016751899876'
                    placeholderTextColor='rgba(0, 0, 0, 1)'
                    onChangeText={(text) => this.setState({ account_number: text })}
                    value={this.state.account_number}
                    style={styles.accountInput}
                  />
                </View>
              </View>
              <View style={styles.accountRow}>
                <View style={styles.accountCol}>
                  <Text style={styles.accountLabel}>{__('Region')}</Text>
                </View>
                <View style={styles.accountGroup}>
                  <TextInput
                    placeholder='Lagos, Nigeria'
                    placeholderTextColor='rgba(0, 0, 0, 1)'
                    onChangeText={(text) => this.setState({ currency: text })}
                    value={this.state.currency}
                    style={styles.accountInput}
                  />
                </View>
              </View>
              <View style={styles.accountRow}>
                <View style={styles.accountCol}>
                  <Text style={styles.accountLabel}>{__('Name')}</Text>
                </View>
                <View style={styles.accountGroup}>
                  <TextInput
                    placeholder='Keystone'
                    placeholderTextColor='rgba(0, 0, 0, 1)'
                    onChangeText={(text) => this.setState({ fullname: text })}
                    value={this.state.fullname}
                    style={styles.accountInput}
                  />
                </View>
              </View>
              <View style={styles.accountRow}>
                <View style={styles.accountCol}>
                  <Text style={styles.accountLabel}>{__('IFSC')}</Text>
                </View>
                <View style={styles.accountGroup}>
                  <TextInput
                    placeholder='KINI346784'
                    placeholderTextColor='rgba(0, 0, 0, 1)'
                    onChangeText={(text) => this.setState({ account_number: text })}
                    value={this.state.account_number}
                    style={styles.accountInput}
                  />
                </View>
              </View>
              <View style={styles.accountCol}>
                <Icon name='checkcircle' type='AntDesign' style={styles.accountCheck} />
                <Text style={styles.accountSave}>{__('Save for Later')}</Text>
              </View>
            </View>
          </ScrollView>
        </Content>

        <View style={styles.footer}>
          <Button style={styles.footerBtn}>
            <Text style={styles.footerBtnText}>{__('Add Account')}</Text>
          </Button>
        </View>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(EditProfile)
