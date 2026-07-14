import React, { createRef } from 'react'
import { Image, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import { cloneDeep } from 'lodash'

import { Container, Content, Icon, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import Header from '@src/component/Header'
import { DarkStatusBar } from '@src/component/StatusBar'
import { URLS } from '@src/config/url'
import { goBack, navigate } from '@src/navigation'
import theme from '@src/theme/styles'
import { bind } from '@src/utility/component'
import http from '@src/utility/http'
import { __ } from '@src/utility/translation'
import List from './List'
import BundleView from './BundleView'
import styles from './styles'
import Support from '@src/component/Support'
import { asyncForEach } from '@src/utility/core'
import BuildBundles from './BuildBundles'
import { BUILD_YOUR_BUNDLE_FLAG } from '@src/config/core'
import { logClickEvent } from '@src/utility/analytics'

class BundleList extends React.Component {
  constructor (props) {
    super(props)

    const profile = this.props.route.params.profile
    const isRecharge = !!this.props.route.params?.isRecharge

    this.state = {
      isRecharge,
      selectedNumber: null,
      profile,
      categories: [],
      fetchingCategories: true,
      bundles: {},

      fetchingBuildBundle: true,
      buildBundles: [],
      buildBundlesSelected: {},

      cart: {
        items: []
      }
    }

    bind(this)

    this.fetchCategories = this.fetchCategories.bind(this)
    this.fetchCategoryBundles = this.fetchCategoryBundles.bind(this)
    this.fetchBuildBundles = this.fetchBuildBundles.bind(this)
    this.fetchBundles = this.fetchBundles.bind(this)
    this.selectCategory = this.selectCategory.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.buyNow = this.buyNow.bind(this)
    this.openView = this.openView.bind(this)
    this.navigateToCart = this.navigateToCart.bind(this)
    this.renderBuildBundles = this.renderBuildBundles.bind(this)
    this.renderList = this.renderList.bind(this)
    this.renderContent = this.renderContent.bind(this)
    this.renderProfile = this.renderProfile.bind(this)
    this.renderFooter = this.renderFooter.bind(this)

    this.refBundleView = createRef()
  }

  async componentDidMount () {
    let isFeed = false
    if (this.state.isRecharge) {
      isFeed = true
    } else {
      const selectedNumber = this.props.session.numbers[this.props.session.numberIndex]

      isFeed = selectedNumber?.type == 'Prepaid'
      await this.promisedSetState({
        selectedNumber
      })
    }

    if (isFeed) {
      await this.fetchCategories()
      await this.fetchCategoryBundles()
    } else {
      Support.showError({
        message: 'Bundles feature is not available for a postpaid number',
        hideDelay: 3500,
        onHide: () => {
          goBack()
        }
      })
    }
  }

  async fetchCategories () {
    try {
      const r = (await http.get(URLS.BUNDLE_CATEGORY)).data
      if (r?.responseData?.categories?.length) {
        await this.promisedSetState({
          categories: r.responseData.categories.map(c => {
            c.isBuildYourBundle = c.flag == BUILD_YOUR_BUNDLE_FLAG
            if (c.isBuildYourBundle && this.state.isRecharge) {
              return null
            }
            return c
          }).filter(r => (!!r)),
          selectedCategory: r.responseData.categories[0].id
        })
      }
    } catch (e) { }
    await this.promisedSetState({
      fetchingCategories: false
    })
  }

  async fetchCategoryBundles () {
    const bundles = {}
    const selectedCategory = this.state.categories.find(c => (c.id == this.state.selectedCategory))
    if (selectedCategory) {
      if (selectedCategory.isBuildYourBundle) {
        return this.fetchBuildBundles()
      }
      selectedCategory.subcategory.forEach(sc => {
        bundles[sc.id] = {
          fetching: true,
          list: []
        }
      })
    }
    await this.promisedSetState({
      bundles
    })
    const keys = Object.keys(bundles)
    await asyncForEach(keys, async (id) => {
      await this.fetchBundles(id)
    })
  }

  async fetchBuildBundles () {
    try {
      await this.promisedSetState({
        fetchingBuildBundle: true
      })
      const r = (await http.get(URLS.BUNDLE_BUILD)).data
      if (r?.response?.categories?.length) {
        await this.promisedSetState({
          buildBundles: r.response.categories.map(b => {
            const d = {
              Action: '',
              BuyForOthers: '',
              Calls: '',
              Category: '',
              Data: '',
              DataShareDenomination: '',
              Description: b.description,
              FixedRenewalDate: '',
              GracePeriod: '',
              LastModifiedDate: '',
              OfferId: '',
              Parking: '',
              PaymentMode: '',
              Price: b.amount,
              ProductID: b.id,
              ProductName: b.title,
              Renewal: '',
              Status: '',
              SubCategory: '',
              Validity: '',
              currency: b.currency,
              data_type: '',
              deactivationId: '',
              isConsentRequired: '',
              optin: '',
              optout: '',
              promotionApplicable: '',
              type: ''
            }
            return d
          })
        })
      }
    } catch (e) {}
    await this.promisedSetState({
      fetchingBuildBundle: false
    })
  }

  async fetchBundles (id) {
    try {
      const params = {
        action: 'VIEW_CATALOGUE',
        type: this.state.selectedCategory,
        subtype: id
      }
      const r = (await http.get(URLS.BUNDLE_LIST, { params })).data
      if (r?.response?.ResponseData?.ProductDetails?.length) {
        await this.promisedSetState({
          bundles: {
            ...this.state.bundles,
            [id]: {
              list: r.response.ResponseData.ProductDetails.filter(r => (!!r)),
              fetching: false
            }
          }
        })
      } else {
        throw new Error('Error')
      }
    } catch (e) {
      await this.promisedSetState({
        bundles: {
          ...this.state.bundles,
          [id]: {
            list: [],
            fetching: false
          }
        }
      })
    }
  }

  async selectCategory (selectedCategory) {
    if (this.state.selectedCategory != selectedCategory) {
      const oCat = this.state.categories.find(c => (c.id == this.state.selectedCategory))
      const cCat = this.state.categories.find(c => (c.id == selectedCategory))
      const state = { selectedCategory }
      if (oCat?.flag == BUILD_YOUR_BUNDLE_FLAG || cCat.flag == BUILD_YOUR_BUNDLE_FLAG) {
        state.cart = {
          items: [],
          total: ''
        }
      }

      await this.promisedSetState(state)
      this.fetchCategoryBundles()
    }
  }

  async addToCart (bundle) {
    logClickEvent('BundleListAddToCart', {
      title: bundle.ProductName
    })
    const items = [...this.state.cart.items]
    const index = items.findIndex(r => r.ProductID == bundle.ProductID)
    if (index === -1) {
      items.push(bundle)
      let currency = this.state.cart?.currency || ''
      if (bundle?.currency) {
        currency = bundle.currency
      }
      await this.promisedSetState({
        cart: {
          ...this.state.cart,
          items,
          total: items.reduce((t, v) => t + parseInt(v.Price, 10), 0),
          currency
        }
      })
    }
  }

  async removeFromCart (bundle) {
    logClickEvent('BundleListRemoveFromCart', {
      title: bundle.ProductName
    })
    const items = [...this.state.cart.items]
    const index = items.findIndex(r => r.ProductID == bundle.ProductID)
    if (index !== -1) {
      items.splice(index, 1)
      await this.promisedSetState({
        cart: {
          ...this.state.cart,
          items,
          total: items.reduce((t, v) => t + parseInt(v.Price, 10), 0)
        }
      })
    }
  }

  openView (item) {
    logClickEvent('BundleListView', {
      title: item.ProductName
    })
    this.refBundleView.current.open(item)
  }

  async buyNow (bundle) {
    logClickEvent('BundleListBuyNow', {
      title: bundle.ProductName
    })

    const cart = {
      items: [{
        id: bundle.ProductID,
        title: bundle.ProductName,
        type: bundle.Category,
        quantity: 1,
        currency: bundle.currency,
        price: bundle.Price,
        _original: bundle
      }],
      total: parseInt(bundle.Price, 10),
      currency: bundle?.currency || ''
    }
    cart.isRecharge = this.state.isRecharge
    if (this.state.isRecharge) {
      cart.productType = 'recharge'
    } else {
      const oCat = this.state.categories.find(c => (c.id == this.state.selectedCategory))
      cart.productType = oCat.flag == BUILD_YOUR_BUNDLE_FLAG ? 'buildyourbundle' : 'bundle'
    }

    navigate('UserPayment', {
      cart,
      profile: this.state.isRecharge
        ? this.state.profile
        : {
            name: this.state.selectedNumber.name,
            mobilenumber: this.state.selectedNumber.number
          }
    })
  }

  async navigateToCart () {
    logClickEvent('BundleListCart')

    const cart = cloneDeep(this.state.cart)
    cart.isRecharge = this.state.isRecharge
    if (this.state.isRecharge) {
      cart.productType = 'recharge'
    } else {
      const oCat = this.state.categories.find(c => (c.id == this.state.selectedCategory))
      cart.productType = oCat.flag == BUILD_YOUR_BUNDLE_FLAG ? 'buildyourbundle' : 'bundle'
    }

    navigate('UserBundleCart', {
      cart,
      profile: this.state.isRecharge
        ? this.state.profile
        : {
            name: this.state.selectedNumber.name,
            mobilenumber: this.state.selectedNumber.number
          }

    })
  }

  renderBuildBundles () {
    return (
      <BuildBundles
        list={this.state.buildBundles}
        cart={this.state.cart}
        addToCart={this.addToCart}
        removeFromCart={this.removeFromCart}
      />
    )
  }

  renderList (category) {
    return (
      <View>
        {
         category.subcategory.map(subCategory => {
           const bundle = this.state.bundles[subCategory.id] || {}
           return (
             <List
               key={subCategory.id}
               title={subCategory.title}
               list={bundle?.list || []}
               fetching={bundle.fetching}
               addToCart={this.addToCart}
               buyNow={this.buyNow}
               openView={this.openView}
             />
           )
         })
      }
      </View>
    )
  }

  renderContent () {
    return this.state.categories.map(category => {
      if (category.id != this.state.selectedCategory) {
        return null
      }
      if (category.isBuildYourBundle) {
        return this.renderBuildBundles()
      }
      return this.renderList(category)
    })
  }

  renderProfile () {
    let img = require('@asset/icons/avatar-dark.png')
    let username = ''
    let mobilenumber = ''
    if (this.state.isRecharge) {
      if (this.state.profile.avatar) {
        img = { uri: this.state.profile.avatar }
      }
      username = this.state.profile.name
      mobilenumber = this.state.profile.mobilenumber
    } else {
      username = this.state.selectedNumber?.name
      mobilenumber = this.state.selectedNumber?.number
      if (this.state.selectedNumber?.profile_image) {
        img = { uri: this.state.selectedNumber?.profile_image }
      }
    }
    return (
      <View style={styles.profileContainer}>
        <View style={styles.profileContent}>
          <View>
            <Image source={img} style={styles.profileImg} />
          </View>
          <View style={styles.profileDetail}>
            <View style={styles.profileCol}>
              <Text numberOfLines={1} style={styles.profileName}>{username}</Text>
              <Text style={styles.profileNo}>{mobilenumber}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  renderFooter () {
    if (this.state.cart.items.length === 0) {
      return null
    }
    return (
      <View style={styles.footerBg}>
        <View style={styles.footerAmt}>
          <Text style={styles.itemText}>
            {this.state.cart.items.length + __(' item')}
          </Text>
          <Text style={styles.price}>{this.state.cart.currency}{this.state.cart.total}</Text>
        </View>
        <Button style={styles.viewcartBtn} onPress={this.navigateToCart}>
          <Text style={styles.viewcartBtnText}>{__('View Cart')}</Text>
          <Icon
            name='keyboard-arrow-right'
            type='MaterialIcons'
            style={styles.viewcartBtnIcon}
          />
        </Button>
      </View>
    )
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__(this.state.isRecharge ? 'Recharge' : 'Bundles')}
          titleColor='light'
          rightContent={
            <View style={styles.nav}>
              <Button style={styles.rightBtn}>
                <Icon
                  name='search1'
                  type='AntDesign'
                  style={styles.rightIcon}
                />
              </Button>
              {/* <Button style={styles.rightBtn}>
                <Image
                  source={require('@asset/icons/filters.png')}
                  style={styles.miageImg}
                  resizeMode='contain'
                />
              </Button> */}
            </View>
          }
        />
        <Content style={theme.layout}>
          <ScrollView style={styles.formContainer}>
            {this.renderProfile()}
            <ScrollView horizontal style={styles.bundle}>
              <View style={styles.bundleProf}>
                {this.state.categories.map(category => {
                  const selected = category.id == this.state.selectedCategory
                  const selectCategory = () => {
                    logClickEvent('BundleListCategoryTab', {
                      title: category.category
                    })
                    this.selectCategory(category.id)
                  }
                  return (
                    <Button
                      key={category.id}
                      style={
                        selected
                          ? styles.bundleProfItemsActive
                          : styles.bundleProfItems
                      }
                      onPress={selectCategory}
                    >
                      <Icon
                        name='swap-vertical-circle-outline'
                        type='MaterialCommunityIcons'
                        style={
                          selected ? styles.bundleIcon : styles.bundleIconActive
                        }
                      />
                      <Text
                        style={
                          selected
                            ? styles.bundleProfTagActive
                            : styles.bundleProfTag
                        }
                      >
                        {category.category}
                      </Text>
                    </Button>
                  )
                })}
              </View>
            </ScrollView>
            {this.renderContent()}
          </ScrollView>
        </Content>
        {this.renderFooter()}
        <BundleView ref={this.refBundleView} buyNow={this.buyNow} />
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(BundleList)
