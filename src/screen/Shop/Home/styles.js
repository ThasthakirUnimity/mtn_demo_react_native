
import { Dimensions } from 'react-native'

import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

const width = Dimensions.get('window').width

export default {

  
  /* shop  */
  topBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  miageImg: {
    width: 26,
    height: 26,
    marginHorizontal: 8
  },
  filterImg: {
    width: 24,
    height: 24,
    marginHorizontal: 8
  },
  rightIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT,
    paddingHorizontal: 8
  },
  slideContent: {
    flex: 1
  },
  sliderImg: {
    borderRadius: 15,
    width: width - 30,
    marginVertical: 30
  },
  shopContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20
  },
  shopService: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  shopServiceBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  shopServiceBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT
  },
  shopServiceBtnImg: {
    marginHorizontal: 10
  },
  serviceText: {
    marginLeft: 15
  },
  /* features */
  featureContainer: {
    paddingLeft: 10,
    marginTop: 30
  },
  featureContent: {
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: 'center'
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
    marginBottom: 30,
    textAlign: 'center'
  },
  /* banner */
  slide: {
    marginHorizontal: 15,
    marginVertical: 20
  },
  slideImg: {
    width: '100%',
    height: 172
  },
  /* new */
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20
  },
  headerTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT
  },
  headerDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginVertical: 10
  },
  headerBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.PRIMARY
  },
  /* what's New */
  newContainer: {
    paddingHorizontal: 10,
    marginTop: 15
  },
  newContent: {
    width: 176,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13
  },
  newDisplay: {
    width: '100%',
    height: 129
  },
  newImg: {
    width: 176,
    height: '100%',
    borderRadius: 13
  },
  newText: {
    flex: 1,
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BLACK,
    marginBottom: 8,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 5
  },
  priceText: {
    flex: 1,
    alignSelf: 'flex-end',
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    paddingRight: 15,
    paddingBottom: 10
  },
  /* games */
  linearGameImg: {
    height: 240,
    borderRadius: 13,
    // paddingHorizontal: 20,
    paddingBottom: 20
  },
  gameContent: {
    width: 175,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13
  },
  gamePicture: {
    flex: 1,
    alignItems: 'center'
  },
  gameImg: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13
  },
  gameCol: {
    paddingHorizontal: 20
  },
  gamesText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    marginVertical: 10
  },
  gamesText2: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    opacity: 0.6
  },
  playAllBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  playBtn: {
    backgroundColor: COLOR.LIGHT,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 8
  },
  playBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.PINK
  },
  playBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.LIGHT
  },

  /* channel */
  linearChannelImg: {
    borderRadius: 13,
    // paddingHorizontal: 20,
    paddingBottom: 30
  },
  channelContent: {
    width: 190,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13
  },
  channelName: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    marginTop: 30
  },
  channelsText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    marginTop: 20
  },
  channelsText2: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT,
    opacity: 0.6,
    marginTop: 20,
    marginBottom: 40
  },
  /* postpaid */
  postpaidContainer: {
    paddingHorizontal: 10,
    marginTop: 15
  },
  postpaidContent: {
    width: 320,
    height: 200,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13
  },
  postpaidDisplay: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  postpaidText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.BLACK,
    marginTop: 20
  },
  planText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    width: 200,
    marginVertical: 20
  },
  postpaidPlan: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    marginBottom: 20
  },
  postpaidImg: {
    width: 70,
    height: 110,
    marginRight: 40,
    marginTop: 60
  },
  postpaidScheme: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_22,
    color: COLOR.DEFAULT,
    marginBottom: 30
  },
  /* promotion */
  promotion: {
    paddingBottom: 50,
    paddingTop: 20,
    marginLeft: 10
  },
  promotionContainer: {
    paddingHorizontal: 10,
    marginTop: 15
  },
  headerPromotionRow: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20
  },
  promotionCol: {
    width: 150
  },
  promotionText: {
    marginTop: 20
  },
  promotionContent: {
    marginRight: 20
  },
  promotionImg: {
    width: 150,
    height: 150
  }
}
