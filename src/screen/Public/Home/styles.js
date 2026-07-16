import { COLOR, FAMILY, SIZE } from '@src/theme/typography'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width

export default {
  /* header */
  navBar: {
    flexDirection: 'row',
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 15,
    height: 60,
    alignItems: 'center'
  },
  navLeft: {
    flex: 1,
    flexDirection: 'row'
  },
  navBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5
  },
  navRow: {
    flexDirection: 'row'
  },
  navName: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.LIGHT,
    textTransform: 'uppercase'
  },
  navNumber: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT
  },
  pickerSelect: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLOR.LIGHT,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15
  },
  pickerSelectIcon: {
    fontSize: SIZE.SIZE_8,
    color: COLOR.PRIMARY
  },
  navRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  navRightBtn: {
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  navBtnIcon: {
    fontSize: SIZE.SIZE_22,
    color: COLOR.LIGHT
  },
  searchBtnIcon: {
    marginRight: 15
  },

  bgImg: {
    width: '100%',
    height: 180,
    zIndex: 1,
    backgroundColor: COLOR.PRIMARY,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  mainContainer: {
    width: '100%',
    height: 320,
    zIndex: 2,
    position: 'absolute'
  },
  mainContent: {
    marginTop: 120
  },

  /* prepaid */
  mtnPrepaid: {
    width: '100%'
  },
  preContainer: {
    width: width - 30,
    minHeight: 260,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: COLOR.LIGHT,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    marginTop: 10,
    marginBottom: 30
  },
  preContent: {
    paddingHorizontal: 25,
    paddingVertical: 10
  },
  preTop: {
    flexDirection: 'row'
  },
  preCol: {
    flex: 1
  },
  preCol2: {
    flex: 1,
    alignItems: 'center'
  },
  waveContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  waveOverlay: {
    position: 'absolute',
    bottom: 25
  },
  waveText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_10,
    color: COLOR.LIGHT
  },
  preRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  preTitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BLACK,
    marginVertical: 10
  },
  preDivider: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.SMOKE_DARK,
    paddingHorizontal: 5
  },
  preBody: {
    flexDirection: 'row',
    marginVertical: 20
  },
  preBar: {
    marginVertical: 5
  },
  preBarBg: {
    width: '100%',
    height: 2,
    backgroundColor: COLOR.BLUE,
    borderRadius: 5,
    opacity: 0.5
  },
  preBarProgress: {
    position: 'absolute',
    height: 2,
    backgroundColor: COLOR.DEFAULT
  },
  preInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  preGb: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.BLACK
  },
  preLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BLACK,
    marginHorizontal: 5
  },
  preLeft: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    marginHorizontal: 5
  },
  preBalance: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  prePrice: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_22,
    color: COLOR.BLACK
  },
  preBalanceText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT
  },
  preBtn: {
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20
  },
  preBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BUTTON_TEXT,
    textAlign: 'center'
  },

  wave: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: '#BCD0E9'
  },

  prepaidContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  prepaidData: {
    flexDirection: 'row'
  },
  prepaidTitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BLACK,
    marginRight: 5
  },
  numbText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BLACK,
    marginLeft: 5
  },
  planlogo: {
    width: 140,
    height: 140
  },
  dataContent: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dataChart: {
    flex: 1
  },

  prepaidAvailaibilty: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  dataAvailaibilty: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dataValue: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BLACK,
    marginLeft: 10,
    marginTop: 3
  },
  gbData: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BLACK,
    marginLeft: 10,
    marginTop: 3
  },
  barImg: {
    width: 150,
    marginVertical: 5
  },
  planAvailaibilty: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  rechargeContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rechargeRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  rechargeBtn: {
    minWidth: '50%',
    paddingHorizontal: 15
  },

  /* coupon */
  couponItem: {
    width: 150,
    height: 150,
    marginHorizontal: 10
  },
  couponImg: {
    width: 150,
    height: 150,
    borderRadius: 13
  },

  /* Post Paid */
  post: {},
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  postHeaderCol: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  postHeaderType: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BLACK
  },
  postHeaderDiv: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    paddingHorizontal: 5
  },
  postHeaderNumber: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BLACK
  },
  postHeaderLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginHorizontal: 10
  },
  postHeaderPrice: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.BLACK
  },
  postBody: {},
  postGroup: {
  },
  postRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 1
  },
  postCol: {
    flexDirection: 'row'
  },
  postProgress: {
    marginBottom: 15
  },
  postProgressBg: {
    backgroundColor: COLOR.DEFAULT,
    opacity: 0.2,
    height: 3
  },
  postProgressBar: {
    backgroundColor: COLOR.DEFAULT,
    height: 3,
    position: 'absolute'
  },
  postLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },
  postValue: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },
  postValueNote: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT
  },
  postBot: {
    flexDirection: 'row'
  },
  postBotCol: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  postBtn: {
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  postBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT
  },
  postPayBtn: {
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 30
  },
  postPayBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BUTTON_TEXT
  },

  /* postPaid */
  postpaidData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -5
  },
  billText: {
    marginRight: 15
  },
  prepaidDataContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  postpaidAvailaibilty: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  postpaidRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  postpaidbarImg: {
    width: 330,
    marginTop: 10
  },

  /* Quick Links */
  quickBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10
  },
  quickBtnBg: {
    width: 70,
    minHeight: 70,
    backgroundColor: COLOR.SMOKE,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  quickBtnImg: {},
  quickBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    textAlign: 'center'
  },

  /* features */
  featureContent: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 5,
    marginBottom: 15
  },
  featureImg: {
    alignSelf: 'center',
    width: 30,
    height: 30
  },
  featureImgDisplay: {
    width: 76,
    height: 76,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.SMOKE
  },
  featureText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  /* header */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10
  },
  headerTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT
  },
  headerDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },
  headerBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.PRIMARY
  },

  /* offer */
  offerContainer: {
    marginHorizontal: 5
  },
  offerBtn: {
    flex: 1,
    width: 330,
    height: 180,
    borderRadius: 10,
    marginRight: 5,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: COLOR.PRIMARY,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  offerImg: {
    width: 330,
    height: 180,
    borderRadius: 10
  },
  offerContent: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  offerBox: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 20,
    justifyContent: 'space-between'
  },
  offerHeader: {
    flex: 1
  },
  offerBot: {

  },
  offerText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_20,
    color: COLOR.LIGHT
  },
  offerCashbackText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.LIGHT,
    marginTop: 50
  },
  offerExpiryText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT,
    marginTop: 10
  },
  /* promotion */
  promotion: {},
  promotionContainer: {
    paddingHorizontal: 10,
    marginTop: 15
  },
  headerPromotionRow: {
    paddingHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  promotionText: {
    marginTop: 20,
    marginBottom: 50
  },
  promotionContent: {
    marginRight: 20
  },
  promotionImg: {
    width: 150,
    height: 150
  },
  /* games */
  planContainer: {
    paddingHorizontal: 10
  },
  linearGameImg: {
    borderRadius: 13,
    paddingHorizontal: 20,
    paddingBottom: 30
  },
  gameContent: {
    width: 150,
    height: 100,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    backgroundColor: COLOR.LIGHT,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 13
  },
  gameImg: {
    width: '100%',
    height: 100,
    borderRadius: 13
  },
  gamesText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT,
    marginTop: 20
  },
  gamesText2: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT,
    marginVertical: 30,
    opacity: 0.7
  },
  gameAllBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  gameBtn: {
    backgroundColor: COLOR.LIGHT,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 8
  },
  gameBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BUTTON_TEXT
  },
  gameBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.LIGHT,
    marginHorizontal: 5
  },

  /* music */
  musicBg: {
    backgroundColor: COLOR.SMOKE,
    marginTop: 10
  },
  /* tab */
  musicContent: {
    marginVertical: 30,
    marginHorizontal: 10
  },
  musicImg: {
    width: 150,
    height: 150,
    borderRadius: 10
  },
  playVideo: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 10
  },
  videoBtn: {
    backgroundColor: COLOR.LIGHT,
    width: 22,
    height: 22,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 3
  },
  videoBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK
  },
  musicText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT,
    marginTop: 10,
    marginBottom: 30
  },

  musicVideo: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 10
  },
  musicBtn: {
    backgroundColor: COLOR.LIGHT,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  musicBtnIcon: {
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },

  /* movies */
  moviesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 10
  },
  moviesContent: {
    width: 112,
    marginTop: 10,
    marginHorizontal: 10
  },
  moviesImg: {
    width: 112,
    height: 150,
    borderRadius: 5
  },
  moviesText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    marginTop: 10
  },
  /* news */
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20
  },
  headerRow2: {
    flexDirection: 'row'
  },
  newContainer: {
    paddingHorizontal: 10
  },
  newContent: {
    width: 200,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    backgroundColor: COLOR.LIGHT,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    elevation: 5,
    shadowOffset: {
      width: 7,
      height: 7
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  newDisplay: {},
  newImg: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13
  },
  newPlaceholderImg: {
    width: '100%',
    height: 170,
    borderRadius: 13
  },
  events: {
    width: '100%',
    height: 100,
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  eventText: {
    backgroundColor: COLOR.PRIMARY,
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_8,
    color: COLOR.LIGHT,
    borderTopRightRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  newText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    marginTop: 10,
    padding: 15
  },
  /* callertunes */
  linearCallertuneImg: {
    height: 150,
    borderRadius: 13,
    paddingHorizontal: 20,
    paddingBottom: 10
  },
  callertuneContent: {
    width: 160,
    height: 150,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    backgroundColor: COLOR.LIGHT,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 13
  },
  callertuneCol: {
    flex: 1
  },
  callertunePlaceholder: {
    width: 160,
    height: 130,
    borderRadius: 13
  },
  callertuneImg: {
    width: 72,
    height: 72,
    marginRight: 20,
    alignSelf: 'flex-end'
  },
  callertunesText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    marginTop: 20
  },
  callertunesDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    marginVertical: 10
  },
  callertuneBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5
  },
  callertuneplayBtn: {
    backgroundColor: COLOR.LIGHT,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  callertuneplayBtnIcon: {
    fontSize: SIZE.SIZE_10,
    color: COLOR.DARK
  },

  /* live */
  liveContainer: {
    paddingHorizontal: 10
  },
  liveContent: {
    width: 250,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    backgroundColor: COLOR.LIGHT,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    elevation: 5,
    shadowOffset: {
      width: 7,
      height: 7
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  liveDisplay: {},
  livePlaceholder: {
    width: 250,
    height: 190,
    borderRadius: 13
  },
  liveImg: {
    width: 250,
    height: 100,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13
  },
  liveBtn: {
    position: 'absolute',
    width: 250,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  liveplayBtn: {
    width: 22,
    height: 22,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center'
  },
  liveplayBtnIcon: {
    fontSize: SIZE.SIZE_16
  },
  liveText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    marginTop: 10,
    padding: 15
  },
  dateText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginBottom: 20,
    marginHorizontal: 15
  },
  /* membership */
  membershipContent: {
    width: 300,
    height: 180,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    elevation: 10,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13
  },
  membershipPlaceholder: {
    width: 300,
    height: 180,
    borderRadius: 13
  },
  linearmembershipImg: {
    height: 180,
    borderRadius: 13,
    paddingHorizontal: 20,
    paddingBottom: 30
  },
  membershipContent2: {
    height: 180,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  membershipDetail: {
    height: 180,
    justifyContent: 'space-between'
  },
  membershipImg: {
    width: 80,
    height: 110,
    marginRight: 20,
    marginTop: 50
  },
  membershipText: {
    fontFamily: FAMILY.MTN_EXTRA_BOLD,
    fontSize: SIZE.SIZE_18,
    color: COLOR.LIGHT,
    marginTop: 20
  },
  membershipText2: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT,
    marginVertical: 20
  },

  quickCard: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },

  qtTooltipStyle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },

  quickTourText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  }
}
