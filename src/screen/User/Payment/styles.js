import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* Profile, Validity, Data, Calls */
  card: {
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 15,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10
  },
  cardRow: {
    flexDirection: 'row',
    marginBottom: 20
  },
  cardAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18
  },
  cardRight: {
    flex: 1,
    paddingHorizontal: 10
  },
  cardName: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  cardNo: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  cardCol: {
    flexDirection: 'row'
  },
  cardGroup: {
    flexGrow: 1,
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK2,
    paddingBottom: 20,
    marginBottom: 15
  },
  cardLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  cardValue: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  cardPay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardPayText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK
  },
  cardPayAmount: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_22,
    color: COLOR.DARK
  },

  /* Coupons, Points */
  btnGroup: {
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical: 10,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10
  },
  btnCol: {
    flex: 1,
    flexDirection: 'row'
  },
  btnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    marginHorizontal: 15
  },
  btnIcon: {
    fontSize: SIZE.SIZE_20,
    color: COLOR.DARK
  },

  /* Paymnt Methods */
  pay: {
    marginVertical: 10
  },
  payHeader: {
    marginHorizontal: 15,
    marginVertical: 10
  },
  payHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  payBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: COLOR.SMOKE_DARK2
  },
  payBtnEmpty: {
    borderTopWidth: 0
  },
  payCol: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  payBtnIcon: {
    fontSize: SIZE.SIZE_28,
    color: COLOR.GREY_LIGHT
  },
  payBtnIconActive: {
    fontSize: SIZE.SIZE_28,
    color: COLOR.DARK
  },
  payBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK,
    marginHorizontal: 15
  },
  payBtnAmount: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_LIGHT
  },

  payOpen: {

  },
  paySubBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  paySubCol: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  paySubImg: {
    width: 30,
    height: 20
  },
  paySubBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginHorizontal: 15
  },
  paySubBtnIcon: {
    fontSize: SIZE.SIZE_22,
    color: COLOR.GREY_LIGHT
  },
  paySubBtnIconActive: {
    fontSize: SIZE.SIZE_22,
    color: COLOR.DEFAULT
  },

  payCard: {
    flexDirection: 'row',
    paddingHorizontal: 15
  },
  payCardSpace: {
    width: 45
  },
  payCardRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  payCardCol: {
  },
  payCardInput: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    borderWidth: 1,
    borderColor: COLOR.DEFAULT,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 10
  },
  payCardBtn: {
    backgroundColor: COLOR.DEFAULT,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10
  },
  payCardBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT
  },
  payCardIcon: {
    fontSize: SIZE.SIZE_30,
    color: COLOR.DEFAULT
  },

  payAddBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    marginHorizontal: 20
  },
  payAddBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginHorizontal: 15,
    textTransform: 'uppercase'
  },
  payAddBtnIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK
  },

  /* MoMo */
  modalMoMo: {
    minHeight: '50%',
    height: 'auto',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  momoTop: {
    marginHorizontal: 15,
    marginVertical: 30
  },
  momoTopTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT,
    textAlign: 'center'
  },
  momoContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  momoHeader: {

  },
  momoHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  momoHeaderBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  momoHeaderBtnIcon: {
    fontSize: SIZE.SIZE_22,
    paddingHorizontal: 5
  },
  momoHeaderBtnIconActive: {
    fontSize: SIZE.SIZE_22,
    paddingHorizontal: 5
  },
  momoHeaderBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  momoTitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'center',
    marginVertical: 15
  },
  momoRow: {
    flexDirection: 'row'
  },
  momoCol: {
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 5,
    marginVertical: 10,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10
  },
  momoInput: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK,
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: 'center'
  },
  forgotBtn: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  forgotBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },

  momoItems: {
    width: '100%'
  },
  momoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical: 15,
    backgroundColor: COLOR.LIGHT,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10
  },
  momoItemCol: {
    flex: 1,
    paddingHorizontal: 15
  },
  momoInitial: {
    width: 56,
    height: 56,
    backgroundColor: COLOR.SMOKE_DARK3,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center'
  },
  momoInitialText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT
  },
  momoItemName: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  momoItemNo: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_LIGHT
  },
  momoItemData: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },

  momoBot: {
    marginHorizontal: 15,
    marginVertical: 20
  },
  momoBtn: {
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 30
  },
  momoBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    textAlign: 'center'
  },

  /* Footer */
  footer: {
    backgroundColor: COLOR.BG,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  footerBtn: {
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 30
  },
  footerBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    textAlign: 'center'
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
    paddingVertical: 20,
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
