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
    backgroundColor: COLOR.BLUE
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

  /* ── Shortcut (premium redesign) ── */
  scItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4
  },
    scCardWrapper: {
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 16
  },
    scCardTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_18,
    color: COLOR.BLACK,
    marginBottom: 16
  },
    scCard: {
    backgroundColor: COLOR.LIGHT,
    borderRadius: 28,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    shadowColor: COLOR.BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 6
  },
  scIconWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLOR.LIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: COLOR.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2
  },
  scIconLabel: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    textAlign: 'center',
    lineHeight: 16
  },
  scListContent: {
    paddingBottom: 8
  },

  /* ── MTN Product and Services (Card Wrapper) ── */
  mpCardWrapper: {
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 16
  },
  mpCard: {
    backgroundColor: COLOR.LIGHT,
    borderRadius: 28,
    paddingHorizontal: 16,
    paddingVertical: 16,
    shadowColor: COLOR.BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 6
  },
  mpListContent: {
    paddingBottom: 8
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

  /* ── Games redesign (PlayWin) ── */
  /* ── Games section (PlayWin) ── */
  gmSection: {
    marginTop: 24,
    marginBottom: 0,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 28,
    marginHorizontal:20
  
  },
  gmSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 18
  },
  gmCardTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_22,
    color: COLOR.BLACK
  },
  gmFloatingGrid: {
    marginHorizontal: 20,
    paddingBottom: 52,
    zIndex: 2
  },
  gmGridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  gmThumb: {
    width: 100,
    height: 100,
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: COLOR.SMOKE_DARK,
    shadowColor: COLOR.BLACK,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 8
  },
  gmThumbEmpty: {
    width: 100,
    height: 100
  },
  gmThumbImg: {
    width: '100%',
    height: '100%'
  },
  gmThumbOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 48,
    justifyContent: 'flex-end',
    paddingHorizontal: 7,
    paddingBottom: 7
  },
  gmThumbTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_10,
    color: COLOR.LIGHT,
    lineHeight: 13
  },
  gmRedContainer: {
    marginTop: -52,
    zIndex: 1,
   
  },
  gmRedContent: {
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 28,
    paddingTop: 24,
    paddingBottom: 44,
    borderBottomLeftRadius:28,
    borderBottomRightRadius:28
  },
  gmPromoTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_38,
    color: COLOR.LIGHT,
    lineHeight: 48,
    letterSpacing: -0.5,
    marginBottom: 20
  },
  gmPromoSubtitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: 'rgba(255,255,255,0.90)',
    lineHeight: 26,
    maxWidth: 260,
    marginBottom: 32
  },
  gmPromoBtn: {
    backgroundColor: COLOR.SECONDARY,
    height: 56,
    borderRadius: 30,
    paddingHorizontal: 40,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gmPromoBtnText: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_18,
    color: COLOR.LIGHT
  },

  /* music */
  musicBg: {
    marginTop: 0
  },

  /* ── Music Hero Player (HeroCard) ── */
  mhpCard: {
    // borderRadius: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 18,
    marginBottom: 20,
    overflow: 'hidden'
  },
  mhpTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18
  },
  mhpLabel: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_18,
    color: COLOR.GREY_DARK
  },
  mhpDots: {
    flexDirection: 'row'
  },
  mhpDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: 'rgba(30,45,61,0.35)',
    marginLeft: 4
  },
  mhpMain: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  mhpArtWrap: {
    width: 90,
    height: 90,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.45)',
    marginRight: 16,
    shadowColor: COLOR.BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4
  },
  mhpArt: {
    width: '100%',
    height: '100%'
  },
  mhpArtPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.08)'
  },
  mhpInfo: {
    flex: 1
  },
  mhpSongTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_16,
    color: COLOR.GREY_DARK,
    marginBottom: 4
  },
  mhpArtist: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: 'rgba(30,45,61,0.60)',
    marginBottom: 14
  },
  mhpProgressTrack: {
    height: 5,
    backgroundColor: 'rgba(255,255,255,0.55)',
    borderRadius: 3,
    marginBottom: 16,
    overflow: 'hidden'
  },
  mhpProgressFill: {
    height: 5,
    backgroundColor: COLOR.GREY_DARK,
    borderRadius: 3
  },
  mhpControls: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  mhpCtrlBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mhpCtrlIcon: {
    fontSize: SIZE.SIZE_22,
    color: COLOR.GREY_DARK
  },
  mhpPlayBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: COLOR.GREY_DARK,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    shadowColor: COLOR.BLACK,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4
  },
  mhpPlayIcon: {
    fontSize: SIZE.SIZE_20,
    color: COLOR.LIGHT,
    paddingLeft: 3
  },

  /* ── Music section (premium card) ── */
  muSection: {
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 16
  },
  muCard: {
    backgroundColor: COLOR.LIGHT,
    borderRadius: 24,
    paddingBottom: 16,
    shadowColor: COLOR.BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 6
  },
  muHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16
  },
  muTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_26,
    color: COLOR.BLACK
  },
  muListContent: {
    paddingHorizontal: 14,
    paddingBottom: 4
  },
  /* tab */
  musicContent: {
    width: 148,
    marginHorizontal: 6
  },
  musicImgWrap: {
    width: 148,
    height: 148,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: COLOR.SMOKE_DARK,
    elevation: 4
  },
  musicImg: {
    width: 148,
    height: 148,
    borderRadius: 18
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
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 10
  },
  musicBtn: {
    backgroundColor: 'rgba(255,255,255,0.92)',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLOR.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3
  },
  musicBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.PRIMARY,
    paddingLeft: 2
  },
  musicItemTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    marginTop: 10,
    maxWidth: 148
  },
  musicItemArtist: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginTop: 3,
    maxWidth: 148
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
    shadowColor: COLOR.GREY_DARK,
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
    shadowOffset: { width: 0, height: 5 },
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

  /* ── Caller Tunes (premium card redesign) ── */
  ctSection: {
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 16
  },
  ctCard: {
    backgroundColor: COLOR.LIGHT,
    borderRadius: 24,
    paddingBottom: 16,
    shadowColor: COLOR.BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 6
  },
  ctHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16
  },
  ctTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_22,
    color: COLOR.BLACK
  },
  ctListContent: {
    paddingHorizontal: 14,
    paddingBottom: 4
  },
  ctContent: {
    width: 155,
    marginHorizontal: 5
  },
  ctGradient: {
    height: 165,
    borderRadius: 20,
    padding: 16,
    justifyContent: 'space-between'
  },
  ctAlbum: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_10,
    color: 'rgba(0,0,0,0.55)',
    textTransform: 'uppercase',
    letterSpacing: 0.5
  },
  ctTuneTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_16,
    color: 'rgba(0,0,0,0.75)',
    lineHeight: 22,
    flex: 1,
    marginTop: 6
  },
  ctPlayRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ctPlayBtn: {
    backgroundColor: 'rgba(255,255,255,0.92)',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    shadowColor: COLOR.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3
  },
  ctPlayBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK,
    paddingLeft: 2
  },
  ctDuration: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: 'rgba(0,0,0,0.55)'
  },
  ctHeroArtInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ctHeroNoteIcon: {
    fontSize: SIZE.SIZE_36,
    color: 'rgba(0,0,0,0.25)'
  },
  ctHeroAlbum: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_10,
    color: 'rgba(30,45,61,0.55)',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4
  },

  /* live */
  liveContainer: {
    paddingHorizontal: 10
  },

  /* ── Shared section card (Offers, Coupon, Movies, News, Live, Membership) ── */
  secCard: {
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 16,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 24,
    paddingTop: 20,
    paddingBottom: 16,
    shadowColor: COLOR.BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 6
  },
  secCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16
  },
  secCardTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_22,
    color: COLOR.BLACK,
    flex: 1,
    marginRight: 8
  },
  secListHPad: {
    paddingHorizontal: 14,
    paddingBottom: 4
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
    shadowColor: COLOR.GREY_DARK,
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
  },

  /* ── HomeHeader ── */
  hdrGradient: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 56,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  hdrTopRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  hdrIconBtn: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8
  },
  hdrIcon: {
    fontSize: 24,
    color: COLOR.DARK
  },
  hdrGreeting: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    marginTop: 20
  },
  hdrUsername: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_30,
    color: COLOR.BLACK,
    marginTop: 4
  },
  hdrPhoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8
  },
  hdrPhone: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK
  },
  hdrBadge: {
    backgroundColor: 'rgba(0,0,0,0.07)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginLeft: 12
  },
  hdrBadgeText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },

  /* ── BalanceCard ── */
  bcWrapper: {
    marginTop: -40,
    marginHorizontal: 20,
    marginBottom: 8
  },
  bcCard: {
    backgroundColor: COLOR.LIGHT,
    borderRadius: 24,
    padding: 22,
    shadowColor: COLOR.BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8
  },
  bcTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16
  },
  bcPlanLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT
  },
  bcPlanName: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    marginTop: 2
  },
  bcValidityLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    textAlign: 'right'
  },
  bcValidityValue: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    textAlign: 'right',
    marginTop: 2
  },
  bcItemsRow: {
    flexDirection: 'row',
    marginHorizontal: -5,
    marginBottom: 16
  },

  /* ── BalanceItem ── */
  biItem: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: COLOR.NEWS_BG,
    borderRadius: 18,
    padding: 14,
    height: 110,
    justifyContent: 'space-between'
  },
  biIcon: {
    fontSize: SIZE.SIZE_16,
    color: COLOR.ERROR
  },
  biTitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY_LIGHT
  },
  biValue: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  biSubtitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY_LIGHT
  },
  biProgressBg: {
    height: 3,
    backgroundColor: COLOR.SMOKE_DARK,
    borderRadius: 2,
    overflow: 'hidden'
  },
  biProgressFill: {
    height: 3,
    borderRadius: 2
  },

  /* ── QuickActionButtons ── */
  qaRow: {
    flexDirection: 'row',
    marginHorizontal: -4
  },
  qaBtn: {
    flex: 1,
    height: 46,
    borderRadius: 23,
    marginHorizontal: 4,
    overflow: 'hidden'
  },
  qaGradientFill: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  qaBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT
  },

  /* ── Screen background ── */
  homeBg: {
    flex: 1,
    backgroundColor: COLOR.NEWS_BG
  },

  /* ── Content below BalanceCard ── */
  newMainContent: {
    marginTop: 8
  },

  /* ── BalanceCard v2 (wireframe layout) ── */
  bcHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 14
  },
  bcPlanType: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT
  },
  bcPhoneNum: {
    flex: 1,
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    textAlign: 'center',
    paddingHorizontal: 8
  },
  bcPlanNameRight: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.PRIMARY,
    textAlign: 'right'
  },
  bcDivider: {
    height: 1,
    backgroundColor: COLOR.SMOKE_DARK,
    marginBottom: 16
  },
  bcBody: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16
  },
  bcLeftCol: {
    width: 110,
    alignItems: 'center'
  },
  bcCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: COLOR.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12
  },
  bcCircleVal: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_18,
    color: COLOR.BLACK,
    lineHeight: 22
  },
  bcCircleUnit: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY,
    lineHeight: 14
  },
  bcCircleSub: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY_LIGHT,
    lineHeight: 14
  },
  bcViewPlanBtn: {
    paddingVertical: 4
  },
  bcViewPlanText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.PRIMARY
  },
  bcRightCol: {
    flex: 1,
    paddingLeft: 16
  },
  bcDataBig: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_22,
    color: COLOR.BLACK,
    marginBottom: 8
  },
  bcProgBg: {
    height: 6,
    backgroundColor: COLOR.SMOKE_DARK,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 6
  },
  bcProgFill: {
    height: 6,
    borderRadius: 3
  },
  bcProgLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    marginBottom: 14
  },
  bcAirtimeBox: {
    borderTopWidth: 1,
    borderTopColor: COLOR.SMOKE_DARK,
    paddingTop: 10
  },
  bcAirtimeLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    marginBottom: 2
  },
  bcAirtimeVal: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_18,
    color: COLOR.BLACK
  },
  bcSeparator: {
    height: 1,
    backgroundColor: COLOR.SMOKE_DARK,
    marginBottom: 14
  },
  bcRechargeBtn: {
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bcRechargeBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BUTTON_TEXT
  },

  /* ── BalanceUsageCard ── */
  busCard: {
    borderRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 20,
    shadowColor: COLOR.BLACK,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8
  },
  busTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  busLeft: {
    flex: 1,
    marginRight: 12
  },
  busLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 4
  },
  busValueRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  busValue: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT,
    flexShrink: 1
  },
  busUsedBox: {
    marginLeft: 12,
    alignItems: 'center'
  },
  busUsedLabel: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.LIGHT,
    // lineHeight: 14
    marginLeft:10
  },
  busUsedVal: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 22
  },
  busChevron: {
    fontSize: SIZE.SIZE_22,
    color: COLOR.LIGHT,
  },
  busAirtimeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.25)'
  },
  busAirtimeLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: 'rgba(255,255,255,0.75)'
  },
  busAirtimeVal: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_18,
    color: COLOR.LIGHT
  },
  busBillAmt: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_28,
    color: COLOR.LIGHT,
    marginTop: 2
  },
  busUsageList: {
    marginTop: 14
  },
  busUsageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  busUsageLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: 'rgba(255,255,255,0.8)',
    width: 44
  },
  busUsageText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT,
    width: 96
  },
  busUsageMiniTrack: {
    flex: 1,
    height: 5,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 3,
    overflow: 'hidden'
  },
  busUsageMiniBar: {
    height: 5,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 3
  },
  busTrack: {
    height: 6,
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,0.25)',
    marginTop: 18,
    overflow: 'hidden'
  },
  busFill: {
    height: 6,
    borderRadius: 6,
    backgroundColor: COLOR.LIGHT
  },

  /* ── CurrentPlanCard ── */
  cpCard: {
    backgroundColor: COLOR.LIGHT,
    borderRadius: 28,
    padding: 24,
    marginTop: 20,
    shadowColor: COLOR.BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 6
  },
  cpTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20
  },
  cpSmallLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    marginBottom: 2
  },
  cpPlanName: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT,
    marginBottom: 2
  },
  cpPrice: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_26,
    color: COLOR.BLACK
  },
  cpExpiryCol: {
    alignItems: 'flex-end'
  },
  cpExpiryVal: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  cpBenRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.NEWS_BG,
    borderRadius: 16,
    paddingVertical: 16,
    marginBottom: 20
  },
  cpBenCol: {
    flex: 1,
    alignItems: 'center'
  },
  cpBenDivider: {
    width: 1,
    height: 40,
    backgroundColor: COLOR.SMOKE_DARK
  },
  cpBenEmoji: {
    fontSize: SIZE.SIZE_20,
    marginBottom: 4
  },
  cpBenVal: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    marginBottom: 2
  },
  cpBenLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY_LIGHT,
    textAlign: 'center'
  },
  cpBtnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cpRechargeBtn: {
    width: '48%',
    height: 50,
    borderRadius: 26,
    overflow: 'hidden'
  },
  cpRechargeGrad: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cpRechargeBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.LIGHT
  },
  cpChangePlanBtn: {
    width: '48%',
    height: 50,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: COLOR.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cpChangePlanText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.PRIMARY
  }
}
