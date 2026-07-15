import React, { Component } from 'react'
import { Text, View, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import RNRestart from 'react-native-restart'

import { Container, Content, Image } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { LightStatusBar } from '@src/component/StatusBar'
import { __ } from '@src/utility/translation'
import { bind } from '@src/utility/component'
import Support from '@src/component/Support'
import { connect } from 'react-redux'
import { saveBrandAndFetchTokens, BRANDS } from '@src/store/reducers/brand'
import { logClickEvent } from '@src/utility/analytics'
import theme from '@src/theme/styles'

import styles from './styles'

class Brand extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedBrand: this.props.brand.brandId || '',
    }

    bind(this)
    this.update = this.update.bind(this)
  }

  async update() {
    if (!this.state.selectedBrand) {
      Support.showError({ message: 'Please select a brand' })
      return
    }

    await Support.showLoading()
    logClickEvent('BrandSelection', { brandId: this.state.selectedBrand })

    const result = await this.props.saveBrandAndFetchTokens(this.state.selectedBrand)

    if (saveBrandAndFetchTokens.fulfilled.match(result)) {
      await Support.hideLoading()
      // SplashScreen.show()
      RNRestart.Restart()
    } else {
      await Support.hideLoading()
      Support.showError({ message: result.payload || 'Failed to load brand theme' })
    }
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
                  <Text style={styles.langTitle}>Select Brand</Text>
                </View>
              </View>

              <View style={styles.langContainer}>
                <View style={styles.langForm}>
                  <View style={styles.langRow}>
                    <Text style={styles.langDesc}>
                      {__('Please select your brand')}
                    </Text>
                  </View>

                  <View style={styles.brandList}>
                    {BRANDS.map(brand => {
                      const isSelected = this.state.selectedBrand === brand.value
                      return (
                        <TouchableOpacity
                          key={brand.value}
                          style={[styles.brandItem, isSelected && styles.brandItemSelected]}
                          onPress={() => this.setState({ selectedBrand: brand.value })}
                          activeOpacity={0.7}>
                          <Text style={styles.brandFlag}>{brand.flag}</Text>
                          <Text style={[styles.brandLabel, isSelected && styles.brandLabelSelected]}>
                            {brand.label}
                          </Text>
                          <View style={[styles.brandRadio, isSelected && styles.brandRadioSelected]}>
                            {isSelected && <View style={styles.brandRadioDot} />}
                          </View>
                        </TouchableOpacity>
                      )
                    })}
                  </View>

                  <View style={[styles.langRow, { marginTop: 10 }]}>
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
    )
  }
}

export default connect(({ brand }) => ({ brand }), { saveBrandAndFetchTokens })(Brand)
