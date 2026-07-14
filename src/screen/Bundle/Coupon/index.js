import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {Container, Content, Icon, Text} from '@src/component/Basic';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '@src/component/Header';
import {Button, TextInput} from '@src/component/Form';
import {__} from '@src/utility/translation';
import {bind} from '@src/utility/component';
import request from '@src/utility/request';
import {URLS} from '@src/config/url';
import http, {httpCms} from '@src/utility/http';

import {navigate} from '@src/navigation';
import theme from '@src/theme/styles';
import styles from './styles';
import {DarkStatusBar} from '@src/component/StatusBar';

import Coupon from './Coupon';
import couponList from './data/coupon';

class Couponpromotion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      couponList: [],
      fetchingCouponList: true,
    };
    bind(this);

    this.fetchingCouponList = this.fetchingCouponList.bind(this);
  }

  async componentDidMount() {
    const language = await AsyncStorage.getItem('language');
    await this.promisedSetState({
      language,
    });
    await this.fetchingCouponList();
  }

  async fetchingCouponList() {
    await this.promisedSetState({
      fetchingCouponList: true,
    });
    const list = await request(couponList);
    await this.promisedSetState({
      couponList: list,
      fetchingCouponList: false,
    });
  }
  render() {
    return (
      <Container>
        <DarkStatusBar />
        <Header default leftType="back" title={'Coupon'} titleColor="light" />
        <Content style={theme.layout}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.input}>
              <TextInput
                placeholder="Enter Coupon Code"
                placeholderTextColor="#999"
                blurOnSubmit={false}
                style={styles.formInput}
              />
            </View>
            <Coupon
              language={this.state.language}
              list={this.state.couponList}
              fetching={this.state.fetchingCouponList}
            />
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default connect(({session}) => ({session}))(Couponpromotion);
