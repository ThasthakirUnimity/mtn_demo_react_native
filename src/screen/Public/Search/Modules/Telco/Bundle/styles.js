import { Dimensions } from 'react-native'
import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

const width = Dimensions.get('window').width

export default {
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

  /* Bundle View */
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
