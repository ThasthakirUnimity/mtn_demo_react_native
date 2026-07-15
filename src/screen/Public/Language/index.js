import React, {Component} from 'react';
import {Platform, Text, View, ImageBackground, ScrollView} from 'react-native';

import {Container, Content, Image} from '@src/component/Basic';
import {Button, Picker} from '@src/component/Form';
import {
  __,
  changeLanguage as i18ChangeLanguage,
} from '@src/utility/translation';
import {LightStatusBar} from '@src/component/StatusBar';

import styles from './styles';
import {bind} from '@src/utility/component';
import Support from '@src/component/Support';
import {fetchLanguages} from '@src/helper/language';
import {connect} from 'react-redux';
import {changeLanguage} from '@src/store/reducers/setting';
import theme from '@src/theme/styles';
import {logClickEvent} from '@src/utility/analytics';
import { CURRENCY, APP_DETAILS } from '@src/theme/typography';
import { navigate } from '@src/navigation';


class Language extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetching: true,
      languages: [],
      languageCode: 'id_ID',
    };

    bind(this);

    this.fetch = this.fetch.bind(this);
    this.update = this.update.bind(this);
  }

  async componentDidMount() {
    await this.fetch();
  }

  async fetch() {
    await Support.showLoading();
    await fetchLanguages();
    await this.promisedSetState({
      fetching: false,
      languages: this.props.setting.languages.map(l => ({
        label: l.name,
        value: l.code,
      })),
      languageCode: 'id_ID'
      // languageCode:
      //   this.props.setting.languageCode ||
      //   this.props.setting.languageCodeDefault,
    });
    await Support.hideLoading();

    console.log(this.state)
  }

  async update() {
    if (!this.state.languageCode) {
      Support.showError({
        message: 'Please select a language',
      });
      return;
    }

    await Support.showLoading();
    logClickEvent('LanguageSelection', {
      locale: this.state.languageCode,
    });
    await this.props.changeLanguage(this.state.languageCode);
    await i18ChangeLanguage(this.state.languageCode);
    await Support.hideLoading();
    navigate('PublicBrand');
  }

  render() {
    return (
      <Container>
        <LightStatusBar />
        <Content style={theme.layout}>
          <ScrollView style={styles.lang}>
            <ImageBackground
              source={require('@asset/images/bg.png')}
              style={styles.langBg}>
              <View style={styles.langTop}>
                <View style={styles.langLogo}>
                  {/* <Image
                    source={require('@asset/images/logo-vodafone.png')}
                    style={styles.langLogoImg}
                    resizeMode="contain"
                  /> */}
                </View>
                <View style={styles.langTopRow}>
                  <Text style={styles.langTitle}>
                    {/* {__('Welcome To My '+ APP_DETAILS.APP_NAME +'')} */}
                    Welcome
                  </Text>
                </View>
              </View>
              <View style={styles.langContainer}>
                <View style={styles.langForm}>
                  <View style={styles.langRow}>
                    <Text style={styles.langDesc}>
                      {__('Please select your language')}
                    </Text>
                  </View>
                  <View style={styles.langPicker}>
                    <Picker
                      items={this.state.languages}
                      onChange={v => this.setState({languageCode: v})}
                      value={this.state.languageCode}
                      showHeader
                      showArrow
                    />
                  </View>
                  <View style={styles.langRow}>
                    <Button style={styles.langBtn} onPress={this.update}>
                      <Text style={styles.langBtnText}>{__('Save')}</Text>
                    </Button>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default connect(({setting}) => ({setting}), {changeLanguage})(Language);
