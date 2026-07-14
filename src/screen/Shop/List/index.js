import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
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
import Listing from './Listing'
import { navigate } from '@src/navigation'
import { logClickEvent } from '@src/utility/analytics'

class ShopMobile extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      mobiles: [],
      fetchingMobiles: true,

      images: [],
      fetchingImagesList: true
    }

    bind(this)

    this.fetchBannerBlock = this.fetchBannerBlock.bind(this)
    this.fetchMobileList = this.fetchMobileList.bind(this)
  }

  async componentDidMount () {
    await this.fetchBannerBlock()
    await this.fetchMobileList()
  }

  async fetchBannerBlock () {
    try {
      const r = (await httpCms.get(URLS.PRODUCTS_MOBILE_BANNER)).data

      await this.promisedSetState({
        images: r
      })
    } catch (e) {}
    await this.promisedSetState({
      fetchingImagesList: false
    })
  }

  async fetchMobileList () {
    try {
      const r = (await httpCms.get(URLS.PRODUCT_MOBILES_LIST)).data

      await this.promisedSetState({
        mobiles: r.rows
      })
    } catch (e) {}
    await this.promisedSetState({
      fetchingMobiles: false
    })
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title='Mobiles'
          titleColor='light'
          rightContent={
            <View style={styles.rightCol}>
              <Button
                style={styles.rightBtn}
                onPress={() => {
                  logClickEvent('ShopListSearch')
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
            <Listing
              list={this.state.mobiles}
              fetching={this.state.fetchingMobiles}
            />
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(ShopMobile)
