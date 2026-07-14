import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  modal: {
    minHeight: '60%',
    maxHeight: '80%',
    height: 'auto',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 30
  },

  accountBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: COLOR.LIGHT,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 15
  },
  accountInitial: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.SMOKE_DARK
  },
  accountInitialText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT
  },
  accountCol: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20
  },
  accountCol2: {
    flex: 1
  },
  accountRow: {
    flexDirection: 'row'
  },
  accountName: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginBottom: 5
  },
  accountNo: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT
  },

  accountCount: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20
  },
  accountCountText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    textAlign: 'center'
  },
  accountFooter: {
  },
  accountFooterBtn: {
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 30
  },
  accountFooterBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BUTTON_TEXT,
    textAlign: 'center'
  },

}
