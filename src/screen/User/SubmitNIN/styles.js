import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {

  /* Header */
  header: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 20
  },
  headerTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT
  },

  /* Form */

  form: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  formRow: {
    marginBottom: 20
  },
  formCol: {
    flex: 1
  },
  formGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK2
  },
  formLabel: {
    flexDirection: 'row'
  },
  formLabelText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  formInput: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    paddingVertical: 10
  },

  /* Footer */
  footer: {
  },
  footerBtn: {
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 30,
    marginHorizontal: 15,
    marginVertical: 15
  },
  footerBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'center'
  },

  /* OTP */
  modalOTP: {
    minHeight: '50%',
    height: 'auto',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  otpContent: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  otpTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK,
    textAlign: 'center',
    marginBottom: 20
  },
  otpDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    textAlign: 'center',
    marginBottom: 20
  },
  otpTime: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    textAlign: 'center'
  },
  otpForm: {
  },
  otpFormContent: {
    flexDirection: 'row'
  },
  otpGroup: {
    backgroundColor: COLOR.LIGHT,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 30
  },
  otpInput: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK,
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  otpResendtext: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },

  /* Modal */
  modalSuccess: {
    minHeight: '50%',
    height: 'auto',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 50
  },
  confirm: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmImg: {
    marginBottom: 20
  },
  confirmTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.BLACK,
    marginVertical: 10
  },
  confirmDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    textAlign: 'center',
    marginVertical: 40
  },
  confirmBtn: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 30
  },
  confirmBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'center',
    textDecorationLine: 'underline'
  }
}
