import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* Header */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  headerTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  headerCol: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerPrice: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_20,
    color: COLOR.DARK,
    marginHorizontal: 10
  },
  headerIcon: {
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },

  /* Bank Logo */
  logo: {
    paddingHorizontal: 15,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImg: {
    width: 200,
    height: 90
  },

  /* Account */
  account: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  accountRow: {
  },
  accountCol: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  accountLabel: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  accountGroup: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK2,
    marginBottom: 20
  },
  accountInput: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    paddingVertical: 10
  },
  accountCheck: {
    fontSize: SIZE.SIZE_20,
    color: COLOR.DEFAULT
  },
  accountSave: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginHorizontal: 10
  },

  accountBtn: {
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  accountBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BUTTON_TEXT,
    textAlign: 'center'
  },

  /* Footer */
  footer: {
    paddingHorizontal: 15,
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
    fontSize: SIZE.SIZE_14,
    color: COLOR.BUTTON_TEXT,
    textAlign: 'center'
  }

}
