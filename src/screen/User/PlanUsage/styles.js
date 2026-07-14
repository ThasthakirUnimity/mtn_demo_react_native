import { COLOR, FAMILY, SIZE } from '@src/theme/typography'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width

export default {
  mainContainer: {
    width: '100%',
    marginVertical: 20
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
    shadowColor: COLOR.GREY_DARK,
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
    color: COLOR.BLACK,
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

  /* Post Paid */
  post: {},
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  postHeaderCol: {
    flexDirection: 'row',
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
    marginTop: 10,
    marginBottom: 10
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
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 30
  },
  postPayBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
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
  }
}
