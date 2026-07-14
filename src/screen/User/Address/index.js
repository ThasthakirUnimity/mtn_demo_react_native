import React from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { Container, Content, Icon, Text } from '@src/component/Basic'
import { connect } from 'react-redux'
import Modal from 'react-native-modalbox'

import Header from '@src/component/Header'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'

import { navigate } from '@src/navigation'
import theme from '@src/theme/styles'
import styles from './styles'
import { DarkStatusBar } from '@src/component/StatusBar'

const RadioButton = ({ variant = 'default', ...props }) => {
  const { style, checked, onChange, prefix, color, ...p } = props

  p.onPress = () => {
    onChange && onChange(!checked)
  }

  const iconStyle = { color: color || 'black' }
  if (prefix) {
    iconStyle.paddingHorizontal = 5
  }

  return (
    <Button style={props.style ? [styles.container, props.style] : styles.container} {...p}>
      <Icon size='text28' color='dark' name={checked ? 'radio-btn-active' : 'radio-btn-passive'} type='Fontisto' style={styles.iconStyle} />
      {prefix}
    </Button>
  )
}

class Address extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      payment: 'P',
    }
  }
  render() {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={'Select Address'}
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.address}>
              <View style={styles.addressContainer}>
                <View style={styles.addressContainer2}>
                  <View style={styles.addressBg} />
                  <Text style={styles.addressBgNum}>1</Text>
                </View>
                <View style={styles.line} />
                <View>
                  <View style={styles.addressContainer2}>
                    <View style={styles.addressBgLine} />
                    <Text style={styles.addressBgNum}>2</Text>
                  </View>
                </View>
                <View style={styles.line} />
                <View style={styles.addressContainer2}>
                  <View style={styles.addressBgLine} />
                  <Text style={styles.addressBgNum}>3</Text>
                </View>
              </View>
              <View style={styles.orderS}>
                <Text style={styles.orderList}>{__('Address')}</Text>
                <Text style={styles.orderList}>{__('Order Summary')}</Text>
                <Text style={styles.orderList}>{__('Payment')}</Text>
              </View>

            </View>
            <View style={styles.addAddress}>
              <Icon name='pluscircle' type='AntDesign' style={styles.addIcon} />
              <Text text='medium' size='text16' color='default' style={styles.addNewAddress}>{__('Add New Address')}</Text>
            </View>
            <View style={styles.add}>
              <RadioButton
                variant='default'
                style={this.state.payment === 'P' ? styles.paymentRow : styles.paymentRowActive}
                checked={this.state.payment === 'P'}
                onChange={() => { this.setState({ payment: 'P' }) }}
                prefix={
                  <View>
                    <TouchableOpacity style={styles.payMethodRow}>
                      <View style={styles.addressRow}>
                        <Text style={styles.addressText}>{__('Address 01')}</Text>
                        <Text style={styles.homeText}>{__('Home')}</Text>
                      </View>
                      <Button>
                        <Text style={styles.editText}>{__('Edit')}</Text>
                      </Button>
                    </TouchableOpacity>
                    <View style={styles.addressRow2}>
                      <Text style={styles.addressText2}>{__('SAIBYA SENARY, Chikkanagamangala, Bengaluru, Karnataka - 560099')}</Text>
                      <Text style={styles.callText}>{__('+91 96063 83834')}</Text>
                    </View>
                  </View>
                }
              />
              <RadioButton
                variant='default'
                checked={this.state.payment === 'F'}
                style={this.state.payment === 'F' ? styles.paymentRow : styles.paymentRowActive}
                onChange={() => { this.setState({ payment: 'F' }) }}
                prefix={
                  <View>
                    <TouchableOpacity style={styles.payMethodRow}>
                      <View style={styles.addressRow}>
                        <Text style={styles.addressText}>{__('Address 02')}</Text>
                        <Text style={styles.homeText}>{__('Work')}</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.addressRow2}>
                      <Text style={styles.addressText2}>{__('The Hub - SJR Primecorp, Ground Floor, Near Iblur, Junction, Bengaluru, Karnataka 560103')}</Text>
                      <Text style={styles.callText}>{__('+91 96063 83834')}</Text>
                    </View>
                  </View>
                }
              />
              <RadioButton
                variant='default'
                checked={this.state.payment === 'W'}
                style={this.state.payment === 'W' ? styles.paymentRow : styles.paymentRowActive}
                onChange={() => { this.setState({ payment: 'W' }) }}
                prefix={
                  <View>
                    <TouchableOpacity style={styles.payMethodRow}>
                      <View style={styles.addressRow}>
                        <Text style={styles.addressText}>{__('Address 03')}</Text>
                        <Text style={styles.homeText}>{__('Work')}</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.addressRow2}>
                      <Text style={styles.addressText2}>{__('1288, 3rd Floor, 17th Cross Road, Sector 7, \n HSR Layout, Bengaluru, Karnataka - 560102')}</Text>
                      <Text style={styles.callText}>{__('+91 96063 83834')}</Text>
                    </View>
                  </View>
                }
              />
            </View>
          </ScrollView>
        </Content>
        <View style={styles.footerBg}>
          <Button style={styles.footerBtn}
            onPress={() => this.refs.modalAccount.open()}>
            <Text style={styles.footerBtnText}>{__('Deliver Here')}</Text>
          </Button>
        </View>

      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Address)


