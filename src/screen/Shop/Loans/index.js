import React from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { Container, Content, Icon, Text } from '@src/component/Basic'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SliderBox } from 'react-native-image-slider-box'

import Header from '@src/component/Header'
import { Button, TextInput } from '@component/Form'
import { __ } from '@src/utility/translation'
import { bind } from '@src/utility/component'
import request from '@src/utility/request'

import { navigate } from '@src/navigation'
import theme from '@src/theme/styles'
import styles from './styles'
import { DarkStatusBar } from '@src/component/StatusBar'

import { httpCms, wso2http } from '@src/utility/http'
import { URLS } from '@src/config/url'

import Loan from './Loan'
import loanList from './data/loan'

class ShopLoan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      loanList: [],
      fetchingLoanList: true,
      images: [
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ]
    }
    bind(this)

    this.fetchLoanList = this.fetchLoanList.bind(this)
  }

  async componentDidMount() {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })
    await this.fetchLoanList()
  }

  async fetchLoanList() {
    await this.promisedSetState({
      fetchingLoanList: true
    })
    // const list = await request(loanList)
    const r = (await httpCms.get(URLS.USER_LOANS_AND_INSURANCE)).data

    await this.promisedSetState({
      loanList: r.rows,
      fetchingLoanList: false
    })
  }


  render() {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={'Loan & Insurance'}
          titleColor='light'
        />
        <Content style={theme.layout}>
        
          <ScrollView
            showsVerticalScrollIndicator={false}>


            <SliderBox
              ImageComponentStyle={styles.sliderImg}
              images={this.state.images}
              sliderBoxHeight={200}
              dotColor='rgba(10, 51, 103, 1)'
              inactiveDotColor='rgba(135, 135, 135, 1)'
            />


            <Loan
              language={this.state.language}
              list={this.state.loanList}
              fetching={this.state.fetchingLoanList}
            />

          </ScrollView>

        </Content>
      </Container >
    )
  }
}

export default connect(({ session }) => ({ session }))(ShopLoan)


