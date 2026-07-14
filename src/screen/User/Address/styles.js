import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* add */
  address: {
    marginHorizontal: 5
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30
  },
  addressContainer2: {
    alignItems: 'center'
  },
  addressContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: -20
  },
  addressBg: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLOR.PRIMARY,
    marginBottom: 8
  },
  addressBgLine: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderColor: COLOR.primary,
    borderWidth: 1,
    marginBottom: 8
  },
  line: {
    postion: 'absolute',
    width: 110,
    marginBottom: 10,
    borderColor: COLOR.smoke,
    borderBottomWidth: 1,
    marginHorizontal: 10
  },
  addressBgNum: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT,
    position: 'absolute',
    width: 32,
    height: 32,
    textAlign: 'center',
    marginTop: 5
  },
  orderS: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  orderList: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  /* add address */
  addAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: COLOR.LIGHT,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 13
  },
  addIcon: {
    fontSize: SIZE.SIZE_28,
    color: COLOR.DEFAULT
  },
  addNewAddress: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT,
    marginLeft: 20
  },
  add: {
    margin: 20,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: COLOR.LIGHT,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 13
  },
  addressRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  paymentRow: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingBottom: 20,
    borderColor: COLOR.SMOKE,
    borderBottomWidth: 1
  },
  paymentRowActive: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingBottom: 20,
    borderColor: COLOR.SMOKE,
    borderBottomWidth: 1
  },
  addressText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    marginLeft: 10
  },
  editText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_10,
    color: COLOR.BLACK,
    textDecorationLine: 'underline'
  },
  homeText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_8,
    color: COLOR.GREY,
    backgroundColor: COLOR.SMOKE,
    marginLeft: 20,
    paddingHorizontal: 8,
    paddingVertical: 3
  },
  addressRow2: {
    marginLeft: 10,
    marginTop: 10
  },
  addressText2: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT
  },
  callText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    marginTop: 10
  },
  payMethodRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  recognitionRow: {
    flexDirection: 'row'
  },

  /* footer */
  footerBg: {
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 20
  },
  footerBtn: {
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 25,
    marginBottom: 20
  },
  footerBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT,
    textAlign: 'center',
    paddingVertical: 15
  }

}
