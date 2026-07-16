import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  pin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pinLock: {
    width: 92,
    height: 92
  },
  pinHeader: {
    flexDirection: 'row',
    marginVertical: 30
  },
  pinHeaderTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.BLACK
  },

  pinStatus: {
    flexDirection: 'row'
  },
  pinIcon: {
    fontSize: SIZE.SIZE_18,
    marginHorizontal: 5,
    color: COLOR.GREY
  },

  pinContent: {
    width: 320,
    paddingVertical: 30
  },
  pinGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  pinBtn: {
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: COLOR.SMOKE_DARK3,
    borderRadius: 36
  },
  pinBtnEmpty: {
    borderWidth: 0
  },
  pinBtnImg: {
    width: 24,
    height: 24
  },
  pinBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_32,
    color: COLOR.DARK
  },

  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  loginTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.BLACK
  },
  loginDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },

  pinNote: {

  },
  pinNoteText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_16,
    color: COLOR.GREY_LIGHT,
    textAlign: 'center'
  },

  loginForm: {
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
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
  loginBtn: {
    flex: 1,
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    FontSize: SIZE.SIZE_26,
    color: COLOR.DARK,
    textTransform: 'uppercase'
  }
}
