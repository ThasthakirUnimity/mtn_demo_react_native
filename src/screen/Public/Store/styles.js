import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* login */
  formContainer: {
    flex: 1,
    backgroundcolor: COLOR.LIGHT
  },
  storeHeader: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 20
  },
  storeHeaderIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.BLACK
  },
  propLocationMap: {
    flex: 1,
    height: 900
  },

  /* modal */
  modalSearch: {
    height: '50%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 50
  },
  /* flatlist */
  storeContent: {
    paddingLeft: 20
  },
  storeContain: {
    flex: 1,
    marginBottom: 10
  },
  storeImg: {
    width: 147,
    height: 94,
    borderRadius: 5,
    marginRight: 15
  },
  rechargeImg: {
    width: 55,
    height: 55,
    borderRadius: 5
  },
  rechargeRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  rechargeCol: {
    flex: 1
  },
  rechargeIcon: {
    fontSize: SIZE.SIZE_32,
    color: COLOR.DARK
  },
  rechargeText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.BLACK,
    marginBottom: 10,
    marginLeft: 20
  },
  rechargeRow2: {
    flexDirection: 'row'
  },
  storeAddress: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginLeft: 20,
    marginRight: 20
  },
  mapBtn: {
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 30,
    alignSelf: 'center',
    marginBottom: 20,
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  mapBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BUTTON_TEXT
  },

  /* map */
  modalMap: {
    height: '40%',
    width: '85%',
    borderRadius: 20,
    paddingTop: 50
  },
  imgRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  mapItem: {
    marginHorizontal: 30,
    marginTop: 20
  },
  openText: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_20,
    color: COLOR.BLACK,
    textAlign: 'center'
  },
  navigateText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_DARK,
    textAlign: 'center',
    marginVertical: 20
  },

  /* recharge */
  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLOR.SMOKE_DARK,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginBottom: 30
  },
  formCol: {
    flex: 1
  },
  formInputIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.BLACK
  },
  formInput: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  nearText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    lineHeight: 20,
    marginHorizontal: 20,
    marginBottom: 30
  },
  modalRecharge: {
    height: '70%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20
  },
  storeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: COLOR.SMOKE_DARK,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingBottom: 20
  },
  storeRow2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  storeInfo: {
    flex: 1,
    marginLeft: 20
  },
  rechargeStoreImg: {
    width: 46,
    height: 46,
    borderRadius: 5
  },
  storeName: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    marginBottom: 10
  },
  storeTime: {
    flexDirection: 'row'
  },
  storeTimeText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },
  storeDistance: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginHorizontal: 20
  },
  storeIcon: {
    fontSize: SIZE.SIZE_30,
    color: COLOR.BLACK
  },

  /* alert */
  modalAlert: {
    height: '50%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 50
  },
  alert: {
    alignItems: 'center'
  },
  alertText: {
    paddingVertical: 30
  },
  alertNote: {
    textAlign: 'center',
    lineHeight: 20,
    paddingBottom: 30,
    paddingHorizontal: 30
  },
  doneBtn: {
    paddingHorizontal: 50
  },
  warningIcon: {
    fontSize: 80,
    color: COLOR.default
  },
  /* footer */
  footerBg: {
    backgroundColor: '#FFF'
  },
  footer: {
    paddingBottom: 10
  },
  footerBtn: {
    marginHorizontal: 20
  },
  footerAccepted: {
    display: 'none',
    backgroundColor: '#FFF',
    borderTopWidth: 0,
    marginTop: 30,
    paddingVertical: 10
  }
}
