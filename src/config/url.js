/**
 * Maps the brand string value (from Redux brand.brandId) to the
 * numeric brand_id expected by the API.
 *   Vodafone  → 1
 *   My TPG    → 2
 *   iinet     → 3
 *   (others)  → 4
 */
export const BRAND_ID_MAP = {
  vodafone: 1,
  mytpg:    2,
  iinet:    3,
}

export const URLS = {
  LOGS: '/logs',

  COUNTRIES: '/country/list',
  LANGUAGES: '/api/language_api',

  HELP_CONTENT: '/api/cms/helpcontent',
  PAGE_ABOUT: '/api/v1/content/terms/aboutus',

  PAGE_TERMS_GENERAL: '/api/v1/content/terms/general',
  PAGE_TERMS_LEGAL: '/api/v1/content/terms/legal',
  PAGE_TERMS_SECURITY: '/api/v1/content/terms/security',
  PAGE_TERMS_COVID19: '/api/v1/content/terms/covid-19',
  PAGE_TERMS_COMPLAINTS: '/api/v1/content/terms/complaints',
  PAGE_PUK: '/api/v1/content/terms/puk',
  PAGE_WHISTLE_BLOWING_HOTLINE: '/api/v1/content/terms/whistleblowing-hotline',
  PAGE_WIFI: '/api/cms/content/wifi',

  CONTENT_FAQ: '/api/v1/content/faq',
  CONTENT_CONTACT_US: '/api/v1/content/contact-us',
  // CONTENT_SEARCH: '/api/cms/content-search',
  // CONTENT_SEARCH: '/api/cms/content/help-search',
  CONTENT_SEARCH: '/api/cms/help',

  SERVICE_REQUEST: '/help/servicerequest',

  FEEDBACK_FIELDS: '/webform_rest/feedback_1/fields',
  FEEDBACK_SUBMIT: '/webform_rest/submit',

  COUPONS: '/api/v1/content/coupons',
  OFFERS: '/api/v1/content/offers',
  BRAND_OFFERS: (brandId) => `/api/v1/content/offers-test/${brandId}`,

  QUICK_TOUR: '/cms/content/quick-tour',
  // STORE: '/api/v1/content/store',
  STORE: '/api/cms/content/nearby-location-param',

  WALKTHROUGH: '/api/v1/content/walkthrough',

  POSTPAID_CATEGORY: '/postpaid/category',
  POSTPAID: '/postpaid',
  POSTPAID_PLAN: '/postpaid/plan',

  // PRODUCTS_SEARCH: '/api/cms/products-search',
  PRODUCTS_SEARCH: '/api/cms/product',
  PRODUCTS_BANNER: '/api/cms/products/shop-banner',
  PRODUCTS_BANNER_SPECIAL: '/api/cms/products/shop-banner-special',
  PRODUCTS_MOBILE_BANNER: '/api/cms/products/mobiles-banner',
  PRODUCT_TYPES: '/api/cms/products/product-type',
  PRODUCT_LATEST: '/api/cms/products/whatsnew',
  PRODUCT_MOBILES: '/api/cms/products/mobiles-list',
  PRODUCT_MOBILES_LIST: '/api/cms/products/mobiles-list',
  PRODUCT_MOBILE_CATEGORIES: '/api/cms/products/mobiles-categories',
  PRODUCT_DEALS: '/api/cms/products/deal',
  PRODUCT_GAMES: '/api/cms/products/shop-buy-games',
  PRODUCT_GAMES_BY_CATEGORY: '/api/cms/products/games-list/:category',
  // PRODUCT_GAME_CATEGORIES: '/api/cms/products/channels-list',
  PRODUCT_GAME_CATEGORIES: '/api/cms/products/games-categories',
  PRODUCT_CHANNELS: '/api/cms/products/shop-buy-channels',
  PRODUCT_CHANNEL_LIST: '/api/cms/products/channels-list',
  PLAY_PRODUCT_CHANNELS: '/api/cms/products/channel',
  PRODUCT_ID: '/api/cms/products/:id',

  BILLS_CATEGORY: '/bills/category',
  BILLS_EB: '/bills/eb',
  BILLS_EB_LIST: '/bills/eb/list',
  BILLS_EB_CHECK: '/bills/eb/checkmeternumber',
  BILLS_EB_SAVE: '/bills/eb/save',

  USER_INVITE: '/user/referral/invitemessage',

  USER_LOGIN: '/getSubscriberDetails/create',
  USER_LOGIN_VERIFY: '/getSubscriberDetails/verify',
  USER_LOGIN_RESEND: '/getSubscriberDetails/resendotp',
  USER_SESSION_INITIATE: '/getSubscriberDetails/tokenverify',
  USER_PROFILE_INITIATE: '/getSubscriberDetails/chatdata',

  USER_FCM_TOKEN: '/user/storedeviceinfo',

  USER_BALANCE_PREPAID: '/balance/data',

  // USER_NUMBER_LINKED: '/nin/link/number/list',
  USER_NUMBER_LINKED: '/getSubscriberDetails/addlinklist',
  USER_NUMBER_LINKED_CREATE: '/getSubscriberDetails/addlink',
  USER_NUMBER_LINKED_VERIFY: '/getSubscriberDetails/addlink/verify',
  USER_NUMBER_LINKED_REMOVE: '/getSubscriberDetails/unlink',
  USER_NIN_CREATE: '/nin/create',
  USER_NIN_VERIFY: '/nin/verify',

  USER_PROFILE: '/getSubscriberDetails/update',
  USER_PROFILE_PHOTO: '/getSubscriberDetails/photo',

  USER_PROFILE_FROM_MOBILE: '/user/profile/:number',

  USER_TRANSACTIONS: '/payment/filters',
  USER_TRANSACTIONS_MAIL: '/payment/sendEmail',
  USER_TRANSACTIONS_DOWNLOAD: '/payment/download',

  USER_SUBSCRIPTIONS: '/dashboard/mysubscription',
  USER_SUBSCRIPTION_VIEW: '/getSubscriberDetails/subscriptionDetails',

  MTN_PRODUCT_SERVICE: '/api/cms/content/mtn-product-service',

  MOVIE_SEARCH: '/3/search/movie',
  MOVIE_LIST: '/3/discover/movie',
  MOVIE_POPULAR: '/3/movie/popular',
  MOVIE_LIVE_TV: '/3/tv/on_the_air',
  MOVIE_ID: '/3/movie/:id',
  MOVIE_ID_VIDEOS: '/3/movie/:id/videos',

  MUSIC_SEARCH: '/api/cms/album',
  MUSIC_LIST: '/api/cms/content/music',

  GAME_CATEGORIES: '/game/category',
  GAMES: '/game/list',
  GAME_SEARCH: '/game/search',

  NEWS_SEARCH: '/v2/everything',
  NEWS_LIVE: '/v2/live',
  NEWS: '/v2/top-headlines',
  NEWS_HEADLINES: '/v2/top-headlines',

  CALLER_TUNES: '/callertune',
  CALLER_TUNE_SUBSCRIBED: '/callertune/subscription/:number',
  CALLER_TUNE_SUBSCRIPTION: '/callertune/subscribtion',

  TARIFF_CURRENT_PLAN: '/tariff/currentplan',
  TARIFF_CATEGORY: '/tariff/category',
  TARIFF_PLAN: '/tariff/plan',
  TARIFF_SEARCH: '/tariff/search',
  TARIFF_ACTIVATE: '/tariff/activate',

  BUNDLE_CATEGORY: '/bundle/category',
  BUNDLE_LIST: '/bundle/viewCatalogue',
  BUNDLE_BUILD: '/bundle/build',
  BUNDLE_SEARCH: '/bundle/search',
  RECHARGE: '/recharge/plan',
  RECENT_RECHARGE: '/recharge/recentRecharge',
  TOPUP_AMOUNT: '/topup/amount',
  RECENT_TOPUPS: '/topup/recentRecharge/:number',
  TOPUP: '/topup/topupRecharge',

  SHARE_AIRTIME: '/share/airtime',
  SHARE_DATA: '/share/data',
  SHARE_REQUEST: '/share/request',
  SHARE_RECENT: '/share/recentlyShared',

  BORROW_AIRTIME: '/borrow/airtime',
  BORROW_DATA: '/borrow/data',
  BORROW_REQUEST: '/borrow/request',
  BORROW_RESPONSE: '/borrow/response',

  PAYMENT_VERIFICATION: '/payment/verification',

  /** */
  GAME_EVENTS: '/events',
  TRIGGER: '/triggers',
  REWARDS_SPIN_WHEEL: '/app/unlock?type=spinwheel',
  REWARDS_QUIZ: '/quiz/validate',
  GOLD_COIN_PROFILE: '/profile/users',
  GOLD_COIN_LEADERBOARD: '/game/gamification',
  /** */

  LOYALTY_BASED_OFFERS: '/api/cms/content/loyalty-based-offers/',
  LOYALTY_BASED_OFFERS_DETAILS: '/api/cms/content/loyalty-based-offers-detail/',
  LOYALTY_BASED_OFFERS_BANNER: '/api/cms/content/loyalty-based-offers-banner',
  LOYALTY_REWARD_POINTS: '/api/cms/content/loyalty-rewards-points',

  USER_MEMBERSHIP: '/api/cms/content/mtn-membership',

  USER_LEADER_BOARD_LEVEL: '/api/cms/content/user-level-help-content',
  USER_LEADER_BOARD_LEVEL_POINTS: '/api/cms/content/user-level-points',

  USER_REWARDS: '/api/cms/content/rewards',
  USER_REWARDS_DETAILS: '/api/cms/content/rewards-detail/',
  USER_REWARDS_HELP_CONTENT: '/api/cms/content/reward-help-content',
  USER_REWARDS_POINTS: '/api/cms/content/reward-points',

  USER_LOANS_AND_INSURANCE: '/api/cms/content/loans-and-insurance',
  USER_LOANS_AND_INSURANCE_BANNER: '/api/cms/content/loans-and-insurance-banner',


  MOCK_GET_MSISDN: '/fetchunusedmsisdn?limit=5&type=all',

  USER_PROFILE_INITIATE: '/getSubscriberDetails/chatdata',

  OUTSTANDING_CREDIT_LIMIT: '/selfCare/creditLimitChangeOS',
  ROAMING_CREDIT_LIMIT: '/selfCare/creditLimitChange',

  MOCKNEW_ADDON_BUNDLE: '/api/line/AddOnBundle/'
  
}
