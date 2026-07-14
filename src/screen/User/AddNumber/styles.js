
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

  /* Primary Number */
  card: {
    backgroundColor: COLOR.LIGHT,
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
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardHeaderCol: {
    backgroundColor: COLOR.SMOKE_DARK2,
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 8
  },
  cardPrimary: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT
  },
  cardSpecial: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    marginHorizontal: 15,
    marginVertical: 10
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  cardInitial: {
    backgroundColor: COLOR.SMOKE_DARK2,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardInitialText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT
  },
  cardCol: {
    paddingHorizontal: 20
  },
  cardRow: {
    flexDirection: 'row',
    marginBottom: 5
  },
  cardName: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  cardNo: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT
  },

  /* Alert */
  alert: {
    backgroundColor: COLOR.LIGHT,
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
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
  alertCol: {
    flex: 1,
    paddingHorizontal: 10
  },
  alertImg: {
    marginHorizontal: 10
  },
  alertTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginBottom: 15
  },
  alertDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT
  },
  alertDivider: {
    borderTopWidth: 1,
    borderColor: COLOR.SMOKE_DARK2,
    marginTop: 15,
    marginBottom: 15
  },
  alertNote: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT
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
    color: COLOR.BUTTON_TEXT,
    textAlign: 'center'
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
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_LIGHT,
    textAlign: 'center',
    marginVertical: 40
  },
  confirmBtn: {
    minWidth: 150,
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 30
  },
  confirmBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BUTTON_TEXT,
    textAlign: 'center'
  }

}
