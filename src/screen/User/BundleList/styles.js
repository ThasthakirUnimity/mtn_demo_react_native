import { Dimensions, Platform } from 'react-native'
import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

const width = Dimensions.get('window').width

export default {
  /* ── Screen ── */
  screenBg: {
    flex: 1,
    backgroundColor: COLOR.NEWS_BG
  },

  /* ── Gradient Header ── */
  gradientHeader: {
    paddingTop: Platform.OS === 'ios' ? 52 : 28,
    paddingBottom: 32,
    paddingHorizontal: 24
  },
  gradHdrTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  gradBackBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center'
  },
  gradBackIcon: {
    fontSize: SIZE.SIZE_26,
    color: COLOR.LIGHT
  },
  gradHdrCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gradHdrPhone: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT,
    marginRight: 8
  },
  prepaidBadge: {
    backgroundColor: 'rgba(255,255,255,0.22)',
    borderRadius: 10,
    paddingHorizontal: 9,
    paddingVertical: 3
  },
  prepaidBadgeText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_10,
    color: COLOR.LIGHT
  },
  gradHdrTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_34,
    color: COLOR.LIGHT,
    marginTop: 20,
    marginBottom: 20
  },
  gradHdrSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.LIGHT,
    borderRadius: 26,
    paddingHorizontal: 20,
    height: 52
  },
  gradSearchInput: {
    flex: 1,
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    paddingVertical: 0
  },
  gradSearchIcon: {
    fontSize: SIZE.SIZE_22,
    color: COLOR.GREY_LIGHT
  },

  /* ── Floating Category + Chip Container ── */
  floatingCatCard: {
    backgroundColor: COLOR.LIGHT,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -25,
    paddingTop: 20,
    paddingBottom: 10,
    zIndex: 2
  },
  catTabContent: {
    paddingHorizontal: 16,
    alignItems: 'center'
  },
  catTabItem: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
    marginRight: 4
  },
  catTabText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_LIGHT
  },
  catTabTextActive: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.PRIMARY
  },
  catTabIndicator: {
    position: 'absolute',
    bottom: 0,
    width: 70,
    height: 3,
    borderRadius: 2,
    backgroundColor: COLOR.PRIMARY
  },
  catDivider: {
    height: 1,
    backgroundColor: COLOR.SMOKE_DARK,
    marginHorizontal: 16
  },
  chipContent: {
    paddingHorizontal: 20,
    paddingVertical: 12
  },
  chipActive: {
    backgroundColor: COLOR.DEFAULT,
    borderRadius: 20,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginRight: 10
  },
  chipInactive: {
    backgroundColor: COLOR.NEWS_BG,
    borderRadius: 20,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginRight: 10
  },
  chipTextActive: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.LIGHT
  },
  chipTextInactive: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_LIGHT
  },

  /* ── Content scroll ── */
  contentScroll: {
    flex: 1
  },
  contentScrollInner: {
    paddingTop: 8,
    paddingBottom: 32
  },

  /* ── Bundle Card (premium redesign) ── */
  bundleCard: {
    marginHorizontal: 20,
    marginBottom: 16,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 24,
    padding: 20,
    shadowColor: COLOR.BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 6
  },
  bundleCardPrice: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_38,
    color: COLOR.BLACK,
    lineHeight: 46
  },
  bundleCardPlanName: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT,
    marginTop: 4,
    marginBottom: 18
  },
  bundleCardMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18
  },
  bundleCardMetaCol: {
    flex: 1
  },
  bundleCardMetaLabel: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY_LIGHT,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 5
  },
  bundleCardMetaValue: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_16,
    color: COLOR.BLACK
  },
  bundleCardDivider: {
    height: 1,
    backgroundColor: COLOR.SMOKE_DARK,
    marginBottom: 16
  },
  bundleCardActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bundleCardBtnRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bundleCardViewDetails: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.PRIMARY
  },
  bundleCardCartBtn: {
    borderWidth: 1.5,
    borderColor: COLOR.PRIMARY,
    borderRadius: 21,
    height: 42,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8
  },
  bundleCardCartText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.PRIMARY
  },
  bundleCardBuyBtn: {
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 21,
    height: 42,
    paddingHorizontal: 28,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bundleCardBuyText: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.LIGHT
  },
  bundleListContent: {
    paddingTop: 8,
    paddingBottom: 8
  },
  bundleSubCatTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_18,
    color: COLOR.BLACK,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 4
  },

  nav: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rightBtn: {
    paddingRight: 20
  },
  miageImg: {
    width: 26,
    height: 26
  },
  rightIcon: {
    color: COLOR.LIGHT,
    fontSize: SIZE.SIZE_26,
    paddingRight: 5
  },

  /* profile  */
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: COLOR.LIGHT,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },
  profileContent: {
    flexDirection: 'row',
    paddingVertical: 10
  },
  profileImg: {
    width: 48,
    height: 48,
    borderRadius: 24
  },
  profileDetail: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  profileCol: {
    flex: 1
  },
  profileName: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_LIGHT,
    marginBottom: 5
  },
  profileNo: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },

  /* tab */
  bundle: {
    paddingTop: 30,
    // paddingLeft: 20,
    paddingBottom: 20
    
  },
  bundleProf: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  bundleProfItemsActive: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8
  },
  bundleProfItems: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8
  },
  bundleIcon: {
    color: COLOR.LIGHT,
    fontSize: SIZE.SIZE_22,
    marginRight: 5
  },
  bundleIconActive: {
    color: COLOR.DEFAULT,
    fontSize: SIZE.SIZE_22,
    marginRight: 5
  },
  bundleProfTagActive: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT
  },
  bundleProfTag: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },

  /* recharge flatlist */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 5
  },
  headerTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  headerText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.PRIMARY
  },
  rechargeContainer: {
    paddingHorizontal: 10
  },
  rechargeContent2: {
    width: width - 38,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 10,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginHorizontal: 10,
    marginVertical: 15,
    padding: 18
  },
  rechargePlans: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: COLOR.SMOKE_DARK2,
    borderBottomWidth: 1,
    paddingBottom: 20
  },
  rechargeRow: {
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  rechargeDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  rechargePrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20
  },
  detailText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    borderBottomWidth: 1,
    borderColor: COLOR.DEFAULT
  },
  validityText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginBottom: 3
  },
  limitedText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  planText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_22,
    color: COLOR.DARK
  },
  weeklyPriceInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cartBtn: {
    borderColor: COLOR.DEFAULT,
    borderWidth: 1,
    borderRadius: 13,
    marginRight: 15,
    paddingHorizontal: 20,
    paddingVertical: 9
  },
  cartText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT
  },
  buyBtn: {
    borderRadius: 13,
    backgroundColor: COLOR.DEFAULT,
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  buyText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT
  },
  /* weekly flatlist */
  weeklyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 5,
    marginTop: 30
  },
  weeklyContainer: {
    paddingHorizontal: 10
  },
  weeklyContent2: {
    width: 345,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 10,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginHorizontal: 10,
    marginVertical: 15,
    padding: 18
  },
  weeklyPlans: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: COLOR.SMOKE,
    borderBottomWidth: 1,
    paddingBottom: 20
  },
  weeklyPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 25
  },
  XtradataBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLOR.SMOKE,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  XtradataBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  XtradataBtnIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.DEFAULT
  },
  buildContent: {
    backgroundColor: COLOR.LIGHT,
    borderRadius: 10,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20
  },
  voiceContent: {
    backgroundColor: COLOR.LIGHT
  },
  voiceBundle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15
  },
  buildText: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK
  },
  voiceData: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginTop: 8
  },
  buildBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    elevation: 10,
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20
  },
  placeholderContent: {
    marginRight: 15,
    marginTop: 10
  },
  placeholderGroup: {
    width: 345,
    height: 130
  },
  /* footer */
  footerBg: {
    width: '100%',
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 20
  },
  footerAmt: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT
  },
  price: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_22,
    color: COLOR.LIGHT,
    marginLeft: 30
  },
  viewcartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 25,
    marginVertical: 20,
    paddingVertical: 8
  },
  viewcartBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT
  },
  viewcartBtnIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT
  },
  /* -- Accordion -- */

  accordion: {
    backgroundColor: COLOR.LIGHT,
    borderRadius: 10,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginHorizontal: 15,
    marginBottom: 15
  },
  accordionTitleActive: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  accordionTitleInactive: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  accordionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  accordionIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.DEFAULT
  },
  /* modalFilter */
  modalFilter: {
    height: '85%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  filterContianer: {
    paddingHorizontal: 30,
    paddingTop: 40
  },
  filterTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT
  },
  filterHeader: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginVertical: 20
  },
  filterContent: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  fBtnActive: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: COLOR.DEFAULT,
    borderRadius: 17,
    marginBottom: 10,
    marginRight: 10
  },
  fBtnTextActive: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT
  },
  fBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },
  fBtn: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderColor: COLOR.SMOKE_DARK,
    borderWidth: 1,
    borderRadius: 17,
    marginBottom: 10,
    marginRight: 10
  },
  btns: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 20
  },
  applyBtn: {
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
    marginLeft: 30
  },
  resetBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  applyBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT
  },

  /* modalSuccess */
  modalView: {
    height: '60%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },

  info: {
  },
  infoHeader: {
    backgroundColor: COLOR.SMOKE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  infoBar: {
    width: 80,
    height: 4,
    backgroundColor: COLOR.SMOKE_DARK3,
    marginBottom: 10
  },
  infoHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_22,
    color: COLOR.DARK,
    marginBottom: 5
  },
  infoHeaderDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_DARK
  },
  infoContent: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  infoLeft: {
    flex: 1
  },
  infoRight: {
    flex: 1,
    alignItems: 'flex-end'
  },
  infoLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  infoValue: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'right'
  },

  proceedBtn: {
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 13,
    paddingHorizontal: 20,
    paddingVertical: 9
  },
  proceedBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT,
    textAlign: 'center'
  }
}
