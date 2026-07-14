import React from 'react'
import { Image, ScrollView, View, Text } from 'react-native'
import { connect } from 'react-redux'

import { Container, Content } from '@src/component/Basic'
import Header from '@src/component/Header'
import { Button } from '@src/component/Form'
import { DarkStatusBar } from '@src/component/StatusBar'
import SectionProvider from '@src/component/Section/Provider'
import { navigate } from '@src/navigation'
import theme from '@src/theme/styles'
import { __ } from '@src/utility/translation'

import styles from './styles'
import { logClickEvent } from '@src/utility/analytics'
import { openChatBot } from '@src/utility/supportChat'

class Menu extends React.Component {
  render () {
    let userName = 'Guest'
    let phone = ''
    let img = require('@asset/icons/avatar-dark.png')
    let simType = ''
    let isPrimary = false
    if (this.props.session.isLoggedIn) {
      if (this.props.session.numbers[this.props.session.numberIndex]) {
        const selectedNumber =
          this.props.session.numbers[this.props.session.numberIndex]
        isPrimary = selectedNumber.isPrimary

        userName = selectedNumber.name
        phone = selectedNumber.number
        if (selectedNumber.profile_image) {
          img = { uri: selectedNumber.profile_image }
        }
      }

      simType = this.props.session.numbers[this.props.session.numberIndex] ? this.props.session.numbers[this.props.session.numberIndex].type : ''
    }
    return (
      <Container>
        <DarkStatusBar />
        <Header default leftType='back' title={__('Home')} titleColor='light' />
        <Content style={theme.layout}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.profile}>
              <View style={styles.profileAvatar}>
                <Image
                  source={require('@asset/images/king.png')}
                  style={styles.profileAvatarIcon}
                  resizeMode='contain'
                />
                <View style={styles.profileAvatarBg}>
                  <Image source={img} style={styles.profileAvatarImg} />
                </View>
              </View>
              <Button
                style={styles.profileInfo}
                onPress={() => {
                  if (isPrimary) {
                    logClickEvent('MenuProfile')
                    navigate('UserProfile')
                  }
                }}
              >
                <View style={styles.profilePlan}>
                  <Text style={styles.profilePlanText}>
                    {__('Gold Member')}
                  </Text>
                </View>
                <View style={styles.profileRow}>
                  <Text style={styles.profileName}>{userName}</Text>
                </View>
                <View style={styles.profileRow}>
                  <Text style={styles.profileText}>{phone}</Text>
                </View>
              </Button>
              <View style={styles.profileLast}>
                <Button
                  style={styles.profileBtn}
                  onPress={() => SectionProvider.showUserNumberSelection()}
                >
                  <Text style={styles.profileBtnText}>{__('Switch User')}</Text>
                </Button>
              </View>
            </View>

            <View style={styles.menuContainer}>
              <View style={styles.menuRow}>
                <Text style={styles.menuHeader}>{__('My Account')}</Text>
              </View>
              <Button
                style={styles.menuItem}
                onPress={() => {
                  logClickEvent('MenuPlanUsage')
                  navigate('UserPlanUsage')
                }}
              >
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/plan-usage.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>{__('Plan & Usage')}</Text>
              </Button>

              <Button
                style={styles.menuItem}
                onPress={() => {
                  logClickEvent('CreditUsage')
                  navigate('CreditLimit')
                }}
              >
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/plan-usage.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>{__('Credit limit')}</Text>
              </Button>
              <Button
                style={styles.menuItem}
                onPress={() => {
                  logClickEvent('MenuTransactionList')
                  navigate('UserTransactionList')
                }}
              >
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/transaction-history.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>
                  {__('Transaction History')}
                </Text>
              </Button>
              {/* }
              <Button
                style={styles.menuItem}
                onPress={() => {
                  logClickEvent('MenuPayment')
                  navigate('UserPayment')
                }}
              >
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/manage-payment.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>{__('Manage Payment')}</Text>
              </Button>
              { */}
              {
                simType == 'Prepaid'
                  ? (
                    <Button
                      style={styles.menuItem}
                      onPress={() => {
                        logClickEvent('MenuEmergencyRecharge')
                        navigate('UserRechargeHome')
                      }}
                    >
                      <View style={styles.menuCol}>
                        <Image
                          source={require('@asset/icons/menu/emergency-recharge.png')}
                          style={styles.menuItemImg}
                        />
                      </View>
                      <Text style={styles.menuItemText}>
                        {__('Emergency Recharge')}
                      </Text>
                    </Button>
                    )
                  : null
              }
              {
                simType == 'Prepaid'
                  ? (
                    <Button
                      style={styles.menuItem}
                      onPress={() => {
                        logClickEvent('MenuBorrow')
                        navigate('UserBorrow')
                      }}
                    >
                      <View style={styles.menuCol}>
                        <Image
                          source={require('@asset/icons/menu/share-borrow.png')}
                          style={styles.menuItemImg}
                        />
                      </View>
                      <Text style={styles.menuItemText}>{__('Share & Borrow')}</Text>
                    </Button>
                    )
                  : null
              }

              <Button
                style={styles.menuItem}
                onPress={() => {
                  logClickEvent('MenuServiceRequest')
                  navigate('PublicHelpCentre')
                }}
              >
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/service-request.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>{__('Service Request')}</Text>
              </Button>
              <Button
                style={styles.menuItem}
                onPress={() => {
                  logClickEvent('MenuMyRewards')
                  navigate('UserMyRewards')
                }}
              >
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/my-rewards.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>{__('My Rewards')}</Text>
              </Button>
              <Button
                style={styles.menuItem}
                onPress={() => {
                  logClickEvent('MenuSubscription')
                  navigate('UserSubscription')
                }}
              >
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/play-services.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>
                  {__('My Subscriptions')}
                </Text>
              </Button>
              <Button
                style={styles.menuItem}
                onPress={() => {
                  logClickEvent('MenuPlayHome')
                  navigate('PlayHome')
                }}
              >
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/play-services.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>{__('Play Services')}</Text>
              </Button>
            </View>

            <View style={styles.menuContainer}>
              <Text style={styles.menuHeader}>{__('Shop')}</Text>
              <Button
                style={styles.menuItem}
                onPress={() => {
                  logClickEvent('MenuOffers')
                  navigate('PublicOffers')
                }}
              >
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/offers-promotion.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>
                  {__('Offers & Promotion')}
                </Text>
              </Button>
              <Button
                style={styles.menuItem}
                onPress={() => {
                  logClickEvent('MenuNewProductServices')
                  navigate('ShopHome')
                }}
              >
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/product-services.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>
                  {__('New Product & Services')}
                </Text>
              </Button>
              {
                simType == 'Prepaid'
                  ? (
                    <Button
                      style={styles.menuItem}
                      onPress={() => {
                        logClickEvent('MenuRecharge')
                        navigate('UserRechargeHome')
                      }}
                    >
                      <View style={styles.menuCol}>
                        <Image
                          source={require('@asset/icons/menu/recharge.png')}
                          style={styles.menuItemImg}
                        />
                      </View>
                      <Text style={styles.menuItemText}>{__('Recharge')}</Text>
                    </Button>
                    )
                  : null
              }
              <Button
                style={styles.menuItem}
                onPress={() => {
                  logClickEvent('MenuShop')
                  navigate('ShopHome')
                }}
              >
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/shopping.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>{__('Shopping')}</Text>
              </Button>
              {
                simType == 'Prepaid'
                  ? (
                    <Button
                      style={styles.menuItem}
                      onPress={() => {
                        logClickEvent('MenuBundles')
                        navigate('UserBundleList')
                      }}
                    >
                      <View style={styles.menuCol}>
                        <Image
                          source={require('@asset/icons/menu/bundles.png')}
                          style={styles.menuItemImg}
                        />
                      </View>
                      <Text style={styles.menuItemText}>{__('Bundles')}</Text>
                    </Button>
                    )
                  : null
              }
              <Button
                style={styles.menuItem}
                onPress={() => {
                  logClickEvent('MenuCart')
                  navigate('ShopCart')
                }}
              >
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/mycart.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>{__('My Cart')}</Text>
              </Button>
            </View>

            <View style={styles.menuContainer}>
              <Text style={styles.menuHeader}>{__('More Options')}</Text>
              <Button
                style={styles.menuItem}
                onPress={() => {
                  logClickEvent('MenuStoreLocator')
                  navigate('PublicStore')
                }}
              >
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/store-locator.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>{__('Store Locator')}</Text>
              </Button>
              <Button
                style={styles.menuItem}
                onPress={() => {
                  logClickEvent('MenuHelpCenter')
                  navigate('PublicHelpCentre')
                }}
              >
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/help-center.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>{__('Help Center')}</Text>
              </Button>
              <Button
                style={styles.menuItem}
                onPress={() => {
                  logClickEvent('MenuReferralInvites')
                  navigate('PublicReferralInvite')
                }}
              >
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/invities.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>{__('Invites')}</Text>
              </Button>
              <Button style={styles.menuItem} onPress={() => {}}>
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/notification.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>
                  {__('Notification Preferences')}
                </Text>
              </Button>
              <Button
                style={styles.menuItem}
                onPress={() => {
                  logClickEvent('MenuLanguage')
                  navigate('PublicLanguage')
                }}
              >
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/language.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>{__('Choose Language')}</Text>
              </Button>
              <Button style={styles.menuItem} onPress={()=>openChatBot}>
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/chat-us.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>{__('Chat with Us')}</Text>
              </Button>
              <Button
                style={styles.menuItem}
                onPress={() => {
                  logClickEvent('MenuRateApp')
                  SectionProvider.showFeedback()
                }}
              >
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/rate-app.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>{__('Rate the App')}</Text>
              </Button>
              <Button
                style={styles.menuItem}
                onPress={() => {
                  logClickEvent('MenuAboutUs')
                  navigate('PublicPageView', { id: 'about' })
                }}
              >
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/about-us.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>{__('About Us')}</Text>
              </Button>
              <Button
                style={styles.menuItem}
                onPress={() => {
                  logClickEvent('MenuLogout')
                  navigate('UserLogout')
                }}
              >
                <View style={styles.menuCol}>
                  <Image
                    source={require('@asset/icons/menu/logout.png')}
                    style={styles.menuItemImg}
                  />
                </View>
                <Text style={styles.menuItemText}>{__('Logout')}</Text>
              </Button>
            </View>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Menu)
