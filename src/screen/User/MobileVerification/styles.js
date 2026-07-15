import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  bg: {
    backgroundColor: COLOR.LIGHT
  },
  verify: {
    flex: 1
  },
  verifyBg: {
    flex: 1
  },
  verifyTop: {
  },
  verifyTopRow: {
    justifyContent: 'center',
    marginBottom: 20
  },
  verifyLogo: {
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  verifyLogoImg: {
    width: 200,
    height: 100,
    // marginVertical: 35
  },
  verifyRow: {
    flexDirection: 'row',
    marginBottom: 20
  },
  verifyTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.BLACK,
    textAlign: 'center'
  },

  verifyContainer: {
    flex: 1
  },
  verifyForm: {
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 30,
    paddingVertical: 40,
    marginHorizontal: 30,
    marginVertical: 20,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 20
  },
  verifySubTitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  verifyDesc: {
    fontFamily: FAMILY.MTN_LIGHT,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BLACK
  },
  verifyGroup: {
    flexDirection: 'row'
  },
  verifyNumber: {
    flex: 1,
    marginHorizontal: 10,
    borderBottomWidth: 1.5,
    borderColor: COLOR.SMOKE_DARK,
    marginBottom: 20
  },
  verifyInput: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK,
    textAlign: 'center',
    paddingVertical: 12
  },
  verifyOtp: {
    marginBottom: 40
  },
  verifyOtpText: {
    fontFamily: FAMILY.MTN_LIGHT,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BLACK
  },
  verifyBtn: {
    flex: 1,
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  verifyBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.BUTTON_TEXT
  }
}
