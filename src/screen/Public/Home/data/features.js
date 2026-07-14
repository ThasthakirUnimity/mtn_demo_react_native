const Entry = [
  {
    icon: require('@asset/icons/quick/recharge.png'),
    title: 'Recharge',
    route: 'UserRechargeHome',
    logName: 'QuickRecharge',
    simType: 'prepaid'
  },
  {
    icon: require('@asset/icons/quick/pay-bills.png'),
    title: 'Pay Bills',
    route: 'UserBillPayment',
    logName: 'QuickPayBill'
  },
  {
    icon: require('@asset/icons/quick/bundles.png'),
    title: 'Bundles',
    route: 'UserBundleList',
    logName: 'QuickBundles',
    simType: 'prepaid'
  },
  {
    icon: require('@asset/icons/quick/borrow.png'),
    title: 'Borrow',
    route: 'UserBorrow',
    logName: 'QuickBorrow',
    simType: 'prepaid'
  },
  {
    icon: require('@asset/icons/quick/share.png'),
    title: 'Share',
    route: 'UserShare',
    logName: 'QuickShare',
    simType: 'prepaid'
  },
  {
    icon: require('@asset/icons/quick/submit-nin.png'),
    title: 'Setup',
    route: 'UserConfiguration',
    logName: 'QuickConfiguration'
  },
  {
    icon: require('@asset/icons/quick/store-locator.png'),
    title: 'Store Locator',
    route: 'PublicStore',
    logName: 'QuickStoreLocator'
  },
  {
    icon: require('@asset/icons/quick/help-support.png'),
    title: 'Help & Support',
    route: 'PublicHelpCentre',
    logName: 'QuickHelpSupport'
  }
]

export default Entry
