import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  bg: {
    backgroundColor: COLOR.LIGHT
  },
  loginBg: {
    flex: 1
  },
  login: {
    flexGrow: 1
  },
  loginTop: {
  },
  loginTopRow: {
    justifyContent: 'center',
    marginBottom: 20
  },
  loginLogo: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginLogoImg: {
    width: 150,
    height: 60,
    // marginVertical: 35
  },
  loginRow: {
    flexDirection: 'row',
    marginBottom: 30
  },
  loginTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.BLACK,
    textAlign: 'center'
  },

  loginContainer: {
    flex: 1
  },
  loginForm: {
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 30,
    paddingVertical: 40,
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 30,
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
  loginDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  loginLabel: {
    flexDirection: 'row'
  },
  loginLabelText: {
    fontFamily: FAMILY.MTN_LIGHT,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BLACK
  },
  loginGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK
  },
  loginCode: {
  },
  loginDivider: {
    height: 16,
    marginHorizontal: 10,
    borderRightWidth: 0.5,
    borderColor: COLOR.SMOKE_DARK2
  },
  loginNumber: {
    flex: 1
  },
  loginInput: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    paddingVertical: 12
  },
  loginPicker: {
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK,
    paddingVertical: 10,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginPickerText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK
  },
  loginOtp: {
    marginTop: 20,
    marginBottom: 40
  },
  loginOtpText: {
    fontFamily: FAMILY.MTN_LIGHT,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT
  },
  loginBtn: {
    flex: 1,
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.BUTTON_TEXT
  },

  loginBot: {
    marginHorizontal: 20
  },
  explore: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  exploreBtn: {
    backgroundColor: COLOR.SMOKE,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 13
  },
  exploreBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'center'
  },
  loginOr: {
    marginVertical: 15
  },
  loginOrLine: {
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK
  },
  loginCol: {
    position: 'absolute',
    left: '45%',
    top: -20,
    width: 40,
    height: 40,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginOrText: {
    fontFamily: FAMILY.MTN_LIGHT,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_LIGHT
  },
  loginOrRow: {
    alignItems: 'center',
    marginTop: 20
  },
  loginOrDesc: {
    fontFamily: FAMILY.MTN_LIGHT,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_LIGHT
  },

  /* Social Login */
  loginSocial: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15
  },
  loginSocialBtn: {
    backgroundColor: COLOR.LIGHT,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 25
  },
  loginSocialBtnImg: {
    width: 24,
    height: 24
  },

  flagImg: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  formNumbInput: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  }
}
