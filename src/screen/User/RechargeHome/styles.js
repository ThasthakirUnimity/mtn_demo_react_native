import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* Alert */
  alert: {
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 15,
    marginVertical: 30,
    borderRadius: 13,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  alertHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
  alertHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    marginHorizontal: 15
  },
  alertBtn: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  alertBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK
  },
  alertRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  alertDesc: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT
  },
  alertMore: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginVertical: 15
  },
  alertMoreIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK
  },

  /* Search */
  search: {
    marginHorizontal: 15,
    marginVertical: 20
  },
  searchHeader: {
    flexDirection: 'row'
  },
  searchHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK2
  },
  searchCol: {
    flex: 1
  },
  searchInput: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    paddingVertical: 12
  },

  /* Linked Account */
  linkedItem: {
    width: 200,
    flexDirection: 'row',
    backgroundColor: COLOR.LIGHT,
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 13,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderWidth: 1,
    borderColor: COLOR.LIGHT
  },
  linkedItemSelected: {
    borderWidth: 1,
    borderColor: COLOR.DEFAULT
  },
  linkedInitial: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLOR.SMOKE_DARK2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  linkedInitialText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT
  },
  linkedCol: {
    marginLeft: 10
  },
  linkedName: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  linkedNo: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },

  /* Plans */
  plan: {
  },
  planHeader: {
    marginVertical: 15,
    marginHorizontal: 15
  },
  planHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  planItem: {
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 15,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 13,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderWidth: 1,
    borderColor: COLOR.LIGHT
  },
  planItemSelected: {
    borderWidth: 1,
    borderColor: COLOR.DEFAULT
  },
  planTitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_16,
    color: COLOR.BLACK
  },
  planContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK,
    marginBottom: 10,
    paddingBottom: 10
  },
  planInitial: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLOR.SMOKE_DARK,
    justifyContent: 'center',
    alignItems: 'center'
  },
  planInfo: {
    flex: 1,
    paddingHorizontal: 10
  },

  planRow: {
    flexDirection: 'row'
  },
  planCol: {
    flex: 1,
    paddingBottom: 15,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK
  },
  planName: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_DARK,
    marginBottom: 5
  },
  planNo: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT
  },
  planBot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  planBotLink: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    textDecorationLine: 'underline'
  },
  planPrice: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_22,
    color: COLOR.DARK
  },
  planDetailBtn: {

  },
  planDetailBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT
  },
  planBtn: {
    backgroundColor: COLOR.DEFAULT,
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 8
  },
  planBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT
  },

  /* Borrowing */
  borrow: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  borrowHeader: {
    marginHorizontal: 20,
    marginTop: 20
  },
  borrowHeaderRow: {
    flexDirection: 'row'
  },
  borrowHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    marginBottom: 10
  },
  borrowHeaderSubTitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY
  },

  borrowCard: {
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 20,
    marginVertical: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 13,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  borrowRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  borrowRight: {
    flex: 1
  },
  borrowAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 20
  },
  borrowName: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginBottom: 5
  },
  borrowNo: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  borrowInfo: {
    flexDirection: 'row',
    marginVertical: 15,
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK,
    paddingBottom: 15
  },
  borrowCol: {
    flexGrow: 1
  },
  borrowLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginBottom: 5
  },
  borrowValue: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  borrowCount: {
  },
  borrowItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  borrowSubTotal: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  borrowTax: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  borrowTotal: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK
  },
  borrowTotalAmount: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_22,
    color: COLOR.DARK
  },

  borrowFooter: {
    paddingHorizontal: 20
  },
  borrowNote: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    textAlign: 'right'
  },
  borrowBtns: {
    marginVertical: 15
  },
  borrowBtn: {
    backgroundColor: COLOR.PRIMARY,
    minWidth: 150,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
    alignSelf: 'flex-end'
  },
  borrowBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'center'
  },

  /* OTP */
  modalView: {
    minHeight: '50%',
    height: 'auto',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  modalOtp: {
    minHeight: '50%',
    height: 'auto',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  otp: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  otpHeader: {
    marginTop: 20
  },
  otpHeaderRow: {
    flexDirection: 'row'
  },
  otpHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    marginBottom: 10
  },
  otpHeaderSubTitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY
  },
  otpContent: {
    marginVertical: 30
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  otpTitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'center'
  },
  otpCol: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  otpGroup: {
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 5,
    marginVertical: 20,
    shadowColor: COLOR.GREY,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10
  },
  otpInput: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK,
    textAlign: 'center'
  },
  otpBtn: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  otpBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    textAlign: 'center',
    textDecorationLine: 'underline'
  },

  /* Confirmation */
  modalConfirm: {
    minHeight: '50%',
    height: 'auto',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  confirm: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmImg: {
    width: 64,
    height: 64
  },
  confirmHeader: {
    marginTop: 20
  },
  confirmHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  confirmHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    marginVertical: 20
  },
  confirmHeaderSubTitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  confirmContent: {
    marginVertical: 20
  },
  confirmRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmTitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    textAlign: 'center',
    marginVertical: 10
  },
  confirmDate: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    textAlign: 'center',
    marginVertical: 20
  },
  confirmBtn: {
    backgroundColor: COLOR.PRIMARY,
    alignSelf: 'center',
    minWidth: 150,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 30,
    marginVertical: 10
  },
  confirmBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'center'
  },

  /* Recharge Inbox */
  rBox: {
    flexDirection: 'row',
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 15,
    marginVertical: 50,
    shadowColor: COLOR.GREY,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10,
    paddingHorizontal: 15
  },
  rBoxCol: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  rBoxRow: {

  },
  rBoxLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    marginBottom: 5
  },
  rBoxValue: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  }
}
