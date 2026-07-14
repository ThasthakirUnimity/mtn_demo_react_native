import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  bill: {
    flex: 1,
    marginVertical: 5
  },
  billItem: {
    width: '22%',
    marginHorizontal: 5,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  billGroup: {
    backgroundColor: COLOR.SMOKE,
    width: '100%',
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    marginBottom: 10
  },
  placeholderImg: {
    width: 75,
    height: 75,
    alignSelf: 'center',
    borderRadius: 13,
    marginBottom: 10
  },
  billImg: {
    width: 36,
    height: 36
  },
  billTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    textAlign: 'center'
  },

  /* buy */
  buy: {
  },

  /* form */
  form: {
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginHorizontal: 15,
    marginVertical: 20,
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
  formRow: {
    flexDirection: 'row'
  },
  formLabel: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginBottom: 10
  },
  formGroup: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLOR.DEFAULT,
    borderRadius: 5
  },
  formInputGroup: {
    flex: 1
  },
  formInput: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  formBtn: {
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },

  eb: {
  },
  ebHeader: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  ebHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },

  ebItem: {
    flexDirection: 'row',
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 15,
    marginVertical: 20,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 13,
    alignItems: 'center'
  },
  ebCheck: {},
  ebCheckIcon: {
    color: COLOR.DEFAULT,
    marginRight: 10
  },
  ebCol: {
    flex: 1
  },
  ebRow: {
    flexDirection: 'row'
  },
  ebItemName: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    marginBottom: 10
  },
  ebItemNo: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_LIGHT
  },
  ebBtn: {
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10
  },
  ebBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK
  },

  /* pay */
  pay: {
    flex: 1
  },
  payContent: {
    flex: 1,
    paddingVertical: 15
  },
  payBox: {
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 15,
    marginVertical: 20,
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
  payRow: {
    flexDirection: 'row',
    marginBottom: 15
  },
  payTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK
  },
  payGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR.DEFAULT,
    borderRadius: 8
  },
  paySymbol: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRightWidth: 1,
    borderColor: COLOR.DEFAULT
  },
  paySymbolText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  payInputGroup: {
    flex: 1
  },
  payInput: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },

  payBot: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  payBtn: {
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 30
  },
  payBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT,
    textAlign: 'center'
  },

  payPlaceholder: {
    marginHorizontal: 15,
    marginVertical: 5
  },
  payPlaceholderImg: {
    width: '100%',
    height: 80,
    borderRadius: 13
  }

}
