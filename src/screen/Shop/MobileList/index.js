import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SliderBox } from 'react-native-image-slider-box'

import { Container, Content, Icon } from '@src/component/Basic'
import Header from '@src/component/Header'
import { Button } from '@src/component/Form'
import { bind } from '@src/utility/component'
import { httpCms } from '@src/utility/http'
import { URLS } from '@src/config/url'
import theme from '@src/theme/styles'
import { DarkStatusBar } from '@src/component/StatusBar'
import styles from './styles'

import Categories from './Categories'
import Mobile from './Mobile'
import Deals from './Deals'
import { navigate } from '@src/navigation'
import { logClickEvent } from '@src/utility/analytics'
import { __ } from '@src/utility/translation'

class ShopMobile extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      categories: [],
      fetchingCategories: true,

      deals: [],
      fetchingDeals: true,

      mobileList: [],
      fetchingMobileList: true,

      images: [],
      fetchingImagesList: true
    }
    bind(this)

    this.fetchBannerBlock = this.fetchBannerBlock.bind(this)
    this.fetchCategories = this.fetchCategories.bind(this)
    this.fetchDeals = this.fetchDeals.bind(this)
    this.fetchMobileList = this.fetchMobileList.bind(this)
    this.filterByCategory = this.filterByCategory.bind(this)
  }

  async componentDidMount () {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })
    await this.fetchBannerBlock()
    await this.fetchCategories()
    await this.fetchDeals()
    await this.fetchMobileList()
  }

  async fetchBannerBlock () {
    try {
      await this.promisedSetState({
        fetchingImagesList: true
      })
      const r = (await httpCms.get(URLS.PRODUCTS_MOBILE_BANNER)).data

      await this.promisedSetState({
        images: r,
        fetchingImagesList: false
      })
    } catch (e) {
    }
  }

  async fetchCategories () {
    try {
      const r = (await httpCms.get(URLS.PRODUCT_MOBILE_CATEGORIES)).data
      if (r?.length) {
        await this.promisedSetState({
          categories: r
        })
      }
    } catch (e) {}
    await this.promisedSetState({
      fetchingCategories: false
    })
  }

  async fetchDeals () {
    try {
      const r = (await httpCms.get(URLS.PRODUCT_DEALS)).data
      if (r?.length) {
        await this.promisedSetState({
          deals: r
        })
      }
    } catch (e) {}
    await this.promisedSetState({
      fetchingDeals: false
    })
  }

  async fetchMobileList () {
    try {
      await this.promisedSetState({
        fetchingMobileList: true
      })
      const r = (await httpCms.get(URLS.PRODUCT_MOBILES_LIST)).data
      console.log(r)
      await this.promisedSetState({
        mobileList: r.rows,
        fetchingMobileList: false
      })
    } catch (e) {
      console.log(e)
    }
    await this.promisedSetState({
      fetchingMobileList: false
    })
  }

  filterByCategory () {}

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('Mobiles & Devices')}
          titleColor='light'
          rightContent={
            <View style={styles.rightCol}>
              <Button
                style={styles.rightBtn}
                onPress={() => {
                  logClickEvent('ShopMobilesDevicesSearch')
                  navigate('PublicSearch', { tabId: 'product' })
                }}
              >
                <Icon name='search1' type='AntDesign' style={styles.rightIcon} />
              </Button>
              <Button style={styles.rightBtn}>
                <Image source={require('@asset/icons/filters.png')} style={styles.filterImg} resizeMode='contain' />
              </Button>
            </View>
          }
        />
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.sliderContent}>
              <SliderBox
                ImageComponentStyle={styles.sliderImg}
                images={this.state.images}
                resizeMode='contain'
                sliderBoxHeight={180}
                dotColor='rgba(10, 51, 103, 1)'
                inactiveDotColor='rgba(135, 135, 135, 1)'
              />
            </View>
            <Categories
              list={this.state.categories}
              fetching={this.state.fetchingCategories}
              filterByCategory={this.filterByCategory}
            />
            <Deals
              list={this.state.deals}
              fetching={this.state.fetchingDeals}
            />
            <Mobile
              language={this.state.language}
              list={this.state.mobileList}
              fetching={this.state.fetchingMobileList}
            />
          </ScrollView>

        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(ShopMobile)
