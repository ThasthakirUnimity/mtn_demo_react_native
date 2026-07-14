import React, { createRef } from 'react'
import { Image, ScrollView, View } from 'react-native'
import { cloneDeep } from 'lodash'
import { connect } from 'react-redux'

import { Container, Content, Icon, Text } from '@src/component/Basic'
import Header from '@src/component/Header'
import { Button } from '@src/component/Form'
import { DarkStatusBar } from '@src/component/StatusBar'
import { URLS } from '@src/config/url'
import { navigate } from '@src/navigation'
import theme from '@src/theme/styles'
import { bind } from '@src/utility/component'
import http from '@src/utility/http'
import { __ } from '@src/utility/translation'
import List from './List'
import styles from './styles'
import BundleView from './BundleView'
import { asyncForEach } from '@src/utility/core'

class RechargePlanList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      profile: props.route.params.profile || {},

      categories: [],
      fetchingCategories: true,

      bundles: {},

      cart: {
        items: []
      }
    }

    bind(this)

    this.fetchCategories = this.fetchCategories.bind(this)
    this.fetchCategoryBundles = this.fetchCategoryBundles.bind(this)
    this.fetchBundles = this.fetchBundles.bind(this)
    this.selectCategory = this.selectCategory.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.buyNow = this.buyNow.bind(this)
    this.openView = this.openView.bind(this)
    this.navigateToCart = this.navigateToCart.bind(this)
    this.renderList = this.renderList.bind(this)
    this.renderProfile = this.renderProfile.bind(this)
    this.renderFooter = this.renderFooter.bind(this)

    this.refBundleView = createRef()
  }

  async componentDidMount () {
    await this.fetchCategories()
    await this.fetchCategoryBundles()
  }

  async fetchCategories () {
    try {
      const r = (await http.get(URLS.BUNDLE_CATEGORY)).data
      if (r?.responseData?.categories?.length) {
        await this.promisedSetState({
          categories: r.responseData.categories,
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
    await this.promisedSetState({ selectedCategory })
    this.fetchCategoryBundles()
  }

  async addToCart (bundle) {
    const items = [...this.state.cart.items]
    const index = items.findIndex(r => r.ProductID == bundle.ProductID)
    if (index === -1) {
      items.push(bundle)
      await this.promisedSetState({
        cart: {
          ...this.state.cart,
          items,
          total: items.reduce((t, v) => t + parseInt(v.Price, 10), 0)
        }
      })
    }
  }

  async buyNow (bundle) {
    navigate('UserPayment', {
      cart: {
        items: [bundle],
        total: parseInt(bundle.Price, 10)
      },
      profile: this.state.profile
    })
  }

  openView (item) {
    this.refBundleView.current.open(item)
  }

  async navigateToCart () {
    const cart = cloneDeep(this.state.cart)
    await this.promisedSetState({
      cart: {
        items: [],
        total: ''
      }
    })
    navigate('UserBundleCart', {
      cart,
      profile: this.state.profile
    })
  }

  renderList () {
    return (
      <View>
        {this.state.categories.map(category => {
          if (category.id != this.state.selectedCategory) {
            return null
          }
          return category.subcategory.map(subCategory => {
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
        })}
        {/* }
      <View style={styles.footerBg}>
        <View style={styles.footerAmt}>
          <Text style={styles.itemText}>{__('1 item')}</Text>
          <Text style={styles.price}>{__('$ 30')}</Text>
        </View>
        <Button style={styles.viewcartBtn} onPress={() => { navigate('') }}>
          <Text style={styles.viewcartBtnText}>{__('View Cart')}</Text>
          <Icon name='keyboard-arrow-right' type='MaterialIcons' style={styles.viewcartBtnIcon} />
        </Button>
      </View>
      { */}
      </View>
    )
  }

  renderProfile () {
    let img = require('@asset/icons/avatar-dark.png')
    if (this.state.profile.avatar) {
      img = { uri: this.state.profile.avatar }
    }
    return (
      <View style={styles.profileContainer}>
        <View style={styles.profileContent}>
          <View>
            <Image source={img} style={styles.profileImg} />
          </View>
          <View style={styles.profileDetail}>
            <View style={styles.profileCol}>
              <Text numberOfLines={1} style={styles.profileName}>{this.state.profile.name}</Text>
              <Text style={styles.profileNo}>{this.state.profile.mobilenumber}</Text>
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
          <Text style={styles.price}>{this.state.cart.total}</Text>
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
          title={__('Recharge')}
          titleColor='light'
          rightContent={
            <View style={styles.nav}>
              {/* <Button style={styles.rightBtn}>
                <Icon name='search1' type='AntDesign' style={styles.rightIcon} />
              </Button>
              <Button style={styles.rightBtn}>
                <Image source={require('@asset/icons/filters.png')} style={styles.miageImg} resizeMode='contain' />
              </Button> */}
            </View>
          }
        />
        <Content style={theme.layout}>
          <ScrollView style={styles.formContainer}>
            {this.renderProfile()}
            <ScrollView
              horizontal
              style={styles.bundle}
            >
              <View style={styles.bundleProf}>
                {this.state.categories.map(category => {
                  const selected = category.id == this.state.selectedCategory
                  const selectCategory = () => this.selectCategory(category.id)
                  return (
                    <Button
                      style={selected ? styles.bundleProfItemsActive : styles.bundleProfItems}
                      onPress={selectCategory}
                    >
                      <Icon
                        name='swap-vertical-circle-outline'
                        type='MaterialCommunityIcons'
                        style={selected ? styles.bundleIcon : styles.bundleIconActive}
                      />
                      <Text style={selected ? styles.bundleProfTagActive : styles.bundleProfTag}>{category.category}</Text>
                    </Button>
                  )
                })}
              </View>
            </ScrollView>
            {this.renderList()}
          </ScrollView>
        </Content>
        {this.renderFooter()}
        <BundleView ref={this.refBundleView} />
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(RechargePlanList)
