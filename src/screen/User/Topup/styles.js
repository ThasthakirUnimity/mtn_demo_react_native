import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* Card */
  card: {
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 25,
    paddingVertical: 20,
    paddingBottom: 30,
    borderRadius: 13,
    marginTop: 30,
    margin: 20,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },
  cardSpace: {
    marginTop: 0
  },
  cardRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: COLOR.SMOKE_DARK2,
    borderBottomWidth: 1
  },
  cardCol: {
    flex: 1
  },
  cardInput: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  cardText: {
    marginTop: 30
  },
  cardImg: {
  },
  orText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    alignSelf: 'center',
    marginVertical: 20
  },

  /* Price Tab */
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15
  },
  priceBtnActive: {
    flexDirection: 'row',
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: 'center',
    borderRadius: 18,
    borderColor: COLOR.PRIMARY,
    borderWidth: 1
  },
  priceBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderColor: COLOR.DEFAULT,
    borderWidth: 1
  },
  priceBtnTextActive: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT
  },
  priceBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    marginLeft: 10
  },

  /* Recent Topup */
  recent: {
    marginVertical: 15
  },
  recentHeader: {
    marginHorizontal: 20
  },
  recentHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT
  },

  recentItem: {
    width: 120,
    height: 100,
    backgroundColor: COLOR.LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 13,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },
  recentPrice: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_20,
    color: COLOR.DARK
  },
  recentBtn: {
    width: 100,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: COLOR.DEFAULT,
    borderRadius: 15,
    marginTop: 5
  },
  recentBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    textAlign: 'center'
  },

  /* Footer */
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  footerBtn: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLOR.DEFAULT,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    paddingVertical: 12,
    marginHorizontal: 15,
    borderWidth: 2,
    borderColor: COLOR.DEFAULT
  },
  footerBtnIcon: {
    marginHorizontal: 10
  },
  footerBtnPrimary: {
    backgroundColor: COLOR.LIGHT
  },
  footerBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    color: COLOR.LIGHT
  },
  footerBtnPrimaryText: {
    color: COLOR.DEFAULT
  },

  /* modalScan */
  modalScan: {
    height: '90%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 50
  },
  scanHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 24
  },
  scanHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK,
    lineHeight: 40
  },
  scanHeaderSubTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  scanContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scanCode: {
    width: 230,
    height: 240,
    marginBottom: 50
  },
  scanDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },

  scanFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  scanBtn: {
    minWidth: 150,
    backgroundColor: COLOR.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25
  },
  scanBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },

  /* modalSuccess */
  modalSuccess: {
    height: '80%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  confirm: {
    marginVertical: 15
  },
  confirmImg: {
    marginVertical: 20
  },
  confirmHeader: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK,
    textAlign: 'center'
  },
  confirmHeaderSubTitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'center',
    lineHeight: 30
  },
  confirmHeaderRow: {
    flexDirection: 'row'
  },
  confirmBox: {
    backgroundColor: COLOR.LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 50,
    marginVertical: 20,
    borderRadius: 13,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },
  confirmTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'center'
  },
  confirmRow: {
    flexDirection: 'row',
    marginBottom: 20
  },
  confirmCol: {
    flex: 1
  },
  confirmLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    marginBottom: 5
  },
  confirmValue: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },

  confirmFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
  },
  confirmBtn: {
    minWidth: 150,
    backgroundColor: COLOR.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  confirmBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  }

}
