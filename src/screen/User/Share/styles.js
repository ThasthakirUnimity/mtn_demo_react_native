import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* Header */
  header: {
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  headerRow: {
    flexDirection: 'row'
  },
  headerTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT,
    marginBottom: 10
  },
  headerSubTitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },

  /* Data & Airtime */
  card: {
    flexDirection: 'row',
    marginHorizontal: 10
  },
  cardBtn: {
    flex: 1,
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 8,
    marginVertical: 15,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
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
  cardBtnImg: {
    marginVertical: 10
  },
  cardBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },

  cardDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_LIGHT,
    marginHorizontal: 15,
    marginVertical: 15
  },

  /* Data */
  share: {
    marginVertical: 20
  },
  shareHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 15
  },
  shareHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  shareData: {
    marginBottom: 20
  },
  shareItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLOR.SMOKE_DARK2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10
  },
  shareItemActive: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: COLOR.PRIMARY,
    borderWidth: 1,
    borderColor: COLOR.PRIMARY,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10
  },
  shareItemIcon: {
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY
  },
  shareItemActiveIcon: {
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  shareItemText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginHorizontal: 5
  },
  shareItemActiveText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    marginHorizontal: 5
  },
  shareNote: {
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  shareNoteText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
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

  /* Recently Shared */
  recent: {
    marginVertical: 20
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 15
  },
  recentHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  recentItems: {
  },
  recentItem: {
    flexDirection: 'row',
    backgroundColor: COLOR.LIGHT,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    marginVertical: 10,
    shadowColor: COLOR.GREY,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 15
  },
  recentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  recentContent: {
    flex: 1
  },
  recentCol: {
    flex: 1,
    marginHorizontal: 15
  },
  recentInitial: {
    backgroundColor: COLOR.SMOKE_DARK3,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center'
  },
  recentInitialText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT
  },
  recentName: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginBottom: 5
  },
  recentNo: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  recentData: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },

  /* Share Confirmation */
  modalConfirm: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '93%'
  },
  confirm: {
    flex: 1
  },
  confirmHeader: {
    marginHorizontal: 20,
    marginTop: 30
  },
  confirmHeaderRow: {
    flexDirection: 'row'
  },
  confirmHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    marginBottom: 15
  },
  confirmHeaderSubTitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY
  },
  confirmItems: {
  },
  confirmItem: {
    flexDirection: 'row',
    backgroundColor: COLOR.LIGHT,
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    shadowColor: COLOR.GREY,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 15
  },
  confirmRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  confirmLabel: {
    flexDirection: 'row'
  },
  confirmLabelTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT,
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 20
  },
  confirmContent: {
    flex: 1
  },
  confirmCol: {
    flex: 1,
    marginHorizontal: 20
  },
  confirmInitial: {
    backgroundColor: COLOR.SMOKE_DARK3,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmInitialText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT
  },
  confirmName: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginBottom: 5
  },
  confirmNo: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  confirmData: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  confirmGroup: {
    marginHorizontal: 20
  },
  confirmInput: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    borderWidth: 1,
    borderColor: COLOR.SMOKE_DARK2,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 10,
    borderRadius: 15,
    textAlignVertical: 'top'
  },
  confirmNote: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY
  },
  confirmFooter: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  confirmBtn: {
    backgroundColor: COLOR.PRIMARY,
    minWidth: 150,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 30,
    marginVertical: 5
  },
  confirmBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'center'
  },

  /* Footer */
  footer: {
    backgroundColor: COLOR.BG
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

  /* Success */
  modalSuccess: {
    height: '80%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  success: {
    marginVertical: 15
  },
  successImg: {
    marginVertical: 20
  },
  successHeader: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  successHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK,
    textAlign: 'center'
  },
  successHeaderSubTitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'center',
    lineHeight: 30
  },
  successHeaderRow: {
    flexDirection: 'row'
  },
  successBox: {
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
  successTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'center'
  },
  successRow: {
    flexDirection: 'row',
    marginBottom: 20
  },
  successCol: {
    flex: 1
  },
  successLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    marginBottom: 5
  },
  successValue: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },

  successFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
  },
  successBtn: {
    minWidth: 150,
    backgroundColor: COLOR.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  successBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  }
}
