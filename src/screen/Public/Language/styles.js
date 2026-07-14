import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  lang: {
    flex: 1
  },
  langBg: {
    flex: 1
  },
  langTop: {
  },
  langTopRow: {
    justifyContent: 'center',
    marginBottom: 20
  },
  langLogo: {
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  langLogoImg: {
    width: '100%',
    height: 150
  },
  langRow: {
    flexDirection: 'row'
  },
  langTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.BLACK,
    textAlign: 'center'
  },

  langContainer: {
    flex: 1
  },
  langForm: {
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 30,
    paddingVertical: 40,
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
  langDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  langPicker: {
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK,
    paddingVertical: 10,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  langPickerText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK
  },
  langBtn: {
    flex: 1,
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  langBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.BUTTON_TEXT
  }
}
