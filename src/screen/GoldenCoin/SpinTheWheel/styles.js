import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  // Golden Coin //

  /* Header */
  rightBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },

  /* Profile */
  profile: {
    flexDirection: 'row',
    marginHorizontal: 20,
    elevation: 10,
    backgroundColor: COLOR.LIGHT,
    marginVertical: 30,
    padding: 20,
    borderRadius: 13
  },
  profileContainer: {
    width: '75%'
  },
  profileAvatarPic: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  profileRowContent: {
    marginTop: 10
  },
  profileCol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10
  },
  profileTitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  selectCoin: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT,
    marginTop: 5
  },
  goldenImg: {
    height: 56,
    width: 56,
    borderRadius: 28
  },
  profileBadge: {
    width: 230,
    marginTop: 20,
    marginLeft: 10
  },
  earnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    marginTop: 15,
    marginLeft: 10
  },
  progressbar: {
    flex: 1,
    backgroundColor: '#D4E4F7',
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 10
  },
  progressLine: {
    borderWidth: 2,

    backgroundColor: COLOR.DEFAULT,
    borderRadius: 10
  },
  /* Points */
  points: {
    flexDirection: 'row',
    marginHorizontal: 10
  },
  pointsItem: {
    width: '27.5%',
    height: 114,
    marginHorizontal: 10,
    borderRadius: 12,
    elevation: 10,
    backgroundColor: COLOR.LIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pointNum: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_22,
    color: COLOR.DARK
  },
  pointText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'center',
    marginTop: 10
  },
  /* header */
  headerTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT
  },
  viewBtn: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.PRIMARY
  },
  /* Daily Challenges */
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 30
  },
  challengeContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 12,
    elevation: 10,
    backgroundColor: COLOR.LIGHT,
    padding: 15,
    paddingTop: 25
  },
  challengeContent: {
    flexDirection: 'row'
  },
  challengeContent2: {
    marginHorizontal: 20
  },
  session: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK
  },
  challengeText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    marginVertical: 10
  },
  challengeImg: {
    width: 97,
    height: 88,
    borderRadius: 12
  },
  challengeBar: {
    width: 200,
    marginTop: 15
  },
  completeChallenge: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginTop: 10
  },
  startBtn: {
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 25,
    padding: 15,
    marginTop: 20,
    marginBottom: 15,
    marginHorizontal: 15,
    alignItems: 'center'
  },
  startBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK
  },
  /* Participate to win */
  participateContent: {
    marginHorizontal: 10,
    alignItems: 'center'
  },
  participateImg: {
    width: 84,
    height: 84,
    borderRadius: 42
  },
  participateText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 30
  },

  /* Your Active Offer */
  offerContent: {
    marginHorizontal: 10,
    alignItems: 'center'
  },
  offerImg: {
    width: 172,
    height: 156,
    borderRadius: 10
  },
  /* Your Rewards */
  rewardContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 12,
    elevation: 10,
    backgroundColor: COLOR.LIGHT,
    padding: 15,
    paddingTop: 25
  },
  rewardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 20,
    borderColor: COLOR.SMOKE,
    borderBottomWidth: 1
  },
  rewardContent2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 15
  },
  imgBg: {
    width: 60,
    height: 60,
    backgroundColor: COLOR.SMOKE,
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgBgLine: {
    width: 50,
    height: 50,
    borderColor: COLOR.LIGHT,
    borderWidth: 2
  },
  rewardImg: {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: COLOR.PRIMARY,
    padding: 5
  },
  rewardText: {
    flex: 1,
    flexWrap: 'wrap',
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    marginLeft: 10
  },
  expireText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },
  redeemBtn: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 17,
    backgroundColor: COLOR.DEFAULT
  },
  redeemBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT
  },
  /* Online Shopping */
  shopContent: {
    width: 176,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    elevation: 10,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13
  },
  shopDisplay: {
    width: '100%',
    height: 129
  },
  shopImg: {
    width: 176,
    height: '100%',
    borderRadius: 13
  },
  shopText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'center',
    marginVertical: 15,
    paddingHorizontal: 15
  },
  /* Popular Subscriptions */
  popularContent: {
    width: 176,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    elevation: 10,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13
  },
  popularDisplay: {
    width: '100%',
    height: 129
  },
  popularImg: {
    width: 176,
    height: '100%',
    borderRadius: 13
  },
  popularText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'center',
    marginVertical: 15,
    paddingHorizontal: 15
  },
  /*  Slider */
  cashbackBanner: {
    width: '90%',
    height: 156,
    marginHorizontal: 20,
    marginVertical: 30
  },

  /* Cashback Points Offer */
  cashbackContent: {
    width: 185,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    elevation: 10,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13
  },
  cashbackDisplay: {
    width: '100%',
    height: 129
  },
  cashbackImg: {
    width: 185,
    height: '100%',
    borderRadius: 13
  },
  cashbackGroup: {
    paddingBottom: 20
  },
  cashbackText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginTop: 15,
    paddingHorizontal: 15
  },
  pointsText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY_LIGHT,
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 20,
    lineHight: 22
  },
  /* Momo Wallet Offer */
  walletContent: {
    width: 176,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    elevation: 10,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13
  },
  walletDisplay: {
    width: '100%',
    height: 129,
    backgroundColor: COLOR.bgColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  walletImg: {
    width: 44,
    height: 44
  },
  walletGroup: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  walletRow: {
    flexDirection: 'row'
  },
  walletText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  walletDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },

  /* E - Gifts */
  giftContent: {
    width: 176,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    elevation: 10,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13
  },
  giftDisplay: {
    width: '100%',
    height: 129,

    justifyContent: 'center',
    alignItems: 'center'
  },
  giftImg: {
    width: 130,
    height: 130,
    backgroundColor: COLOR.bgColor
  },
  giftText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginTop: 15,
    marginBottom: 20,
    paddingHorizontal: 15
  },

  /* Participate to win */
  winContent: {
    marginHorizontal: 10,
    alignItems: 'center'
  },
  winImg: {
    width: 84,
    height: 84,
    borderRadius: 42
  },
  winText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30
  },

  /* Recharge & Bills */
  rechargeContent: {
    width: 176,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    elevation: 10,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13
  },
  rechargeDisplay: {
    width: '100%',
    height: 129,
    backgroundColor: COLOR.bgColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rechargeImg: {
    width: 176,
    height: '100%',
    borderRadius: 13
  },
  rechargeText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    paddingHorizontal: 15,
    paddingTop: 15
  },
  /* Postpaid Offers */
  postpaidContent: {
    width: 176,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    elevation: 10,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13
  },
  postpaidDisplay: {
    width: '100%',
    height: 129,
    backgroundColor: COLOR.bgColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  postpaidImg: {
    width: 176,
    height: '100%',
    borderRadius: 13
  },
  postpaidText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    paddingHorizontal: 15,
    paddingTop: 10
  },
  newContainer: {
    paddingHorizontal: 10,
    marginTop: 15
  },

  formCol: {
    flexDirection: 'row',
    marginTop: 10
  },
  radioRow: {
    flexDirection: 'row',
    marginRight: 15
  },
  accountBtn: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    elevation: 8,
    shadowOffset: {
      width: 15,
      height: 15
    },
    shadowColor: '#999',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    backgroundcolor: COLOR.LIGHT
  },
  accountTitle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.smokeDark
  },
  accountCol: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10

  },
  accountCol2: {
    flex: 1
  },
  accountRow: {
    flexDirection: 'row',
    marginLeft: 10
  },

  answerContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 12,
    elevation: 10,
    backgroundColor: COLOR.LIGHT,
    padding: 15,
    paddingTop: 20
  },

  placeholder: {
    width: 176,
    height: 150,
    borderRadius: 13
  },
  placeholderCircle: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
}
