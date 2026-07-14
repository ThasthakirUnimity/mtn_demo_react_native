import { FAMILY, SIZE, COLOR } from '@src/theme/typography'

export default {

  /* Layout */
  layout: {
    flexGrow: 1,
    backgroundColor: COLOR.LIGHT
  },
  layoutBg: {
    flexGrow: 1,
    backgroundColor: COLOR.BG
  },

  /* Header */
  nav: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: -15,
    marginRight: -15,
    elevation: 0
  },
  navTransparent: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: -15,
    marginRight: -15,
    backgroundColor: 'transparent'
  },
  navLeft: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navMiddle: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navRight: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navRightIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT
  },
  navMidLightText: {
    color: COLOR.DEFAULT
  },

  /* Avatar Sizes */
  avatarTiny: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2
  },
  avatarSmall: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2
  },
  avatarMedium: {
    width: 128,
    height: 128,
    borderRadius: 125 / 2
  },
  imgResponsive: {
    width: '100%',
    minHeight: 1
  },

  row: {
    flexDirection: 'row'
  },

  /* Label, TextInput, Picker, Placeholder */
  label: {

  },
  textInput: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  textInputMulti: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  picker: {

  },
  placeholder: {

  },

  /* Button */
  btnPrimary: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: COLOR.PRIMARY
  },
  btnDefault: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundcolor: COLOR.DEFAULT,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  btnDefaultIcon: {
    color: COLOR.DEFAULT
  },
  btnTransparent: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'transparent'
  },
  btnWarning: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnWarningText: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnDanger: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnSuccess: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },

  headerLight: {
    backgroundColor: COLOR.PRIMARY
  },
  headerDark: {
    backgroundColor: COLOR.DEFAULT
  },
  headerTransparent: {
    backgroundColor: 'transparent'
  },

  /* Colors */
  dark: {
    color: COLOR.DARK
  },
  light: {
    color: COLOR.DEFAULT
  },
  bgDark: {
    backgroundcolor: COLOR.DARK
  },
  bgLight: {
    backgroundColor: COLOR.DEFAULT
  },

  /* Sizes */
  tiny: {
    fontSize: SIZE.tiny
  },
  small: {
    fontSize: SIZE.small
  },
  medium: {
    fontSize: SIZE.SIZE_14,
    fontFamily: FAMILY.GEO_MEDIUM,
    textTransform: 'uppercase'
  },
  compact: {
    fontSize: SIZE.compact
  },
  large: {
    fontSize: SIZE.large
  },
  huge: {
    fontSize: SIZE.huge
  },
  higantic: {
    fontSize: SIZE.higantic
  },
  regular: {
    fontFamily: FAMILY.regular
  },
  bold: {
    fontFamily: FAMILY.MTN_MEDIUM
  },

  /* Footer */
  footer: {
    backgroundColor: COLOR.PRIMARY,
    borderWidthTop: 0
  },
  footerContainer: {
    backgroundcolor: COLOR.DEFAULT,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: COLOR.smoke,
    paddingVertical: 10,
    marginBottom: 15,
    marginHorizontal: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  fBtn: {
    flex: 1,
    alignItems: 'center'
  },
  fBtnActive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconFtabActive: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.DEFAULT
  },
  fBtnIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.GREY,
    paddingBottom: 5
  },
  fBtnActiveBg: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 25
  },
  fBtnActiveBgIcon: {
    color: COLOR.DEFAULT
  },
  iconFtabBgActive: {
    fontSize: 30,
    color: COLOR.DEFAULT,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    borderRadius: 84 / 2,
    marginBottom: 50,
    width: 84,
    height: 84,
    backgroundColor: COLOR.DEFAULT
  },
  cartCount: {
    position: 'absolute',
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    right: 15
  },
  cartCountText: {
    fontSize: SIZE.SIZE_14,
    fontFamily: FAMILY.semiBold,
    color: COLOR.DARK
  },
  ftrBtn: {
    backgroundcolor: COLOR.DEFAULT,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    padding: 15,
    margin: 10
  },
  ftrBtnText: {
    fontFamily: FAMILY.semiBold,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT
  },

  /* Empty Screen */
  emptyContainer: {
    flex: 1,
    paddingVertical: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyIcon: {
    fontSize: SIZE.SIZE_36,
    color: COLOR.RED,
    marginVertical: 15
  },
  emptyTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_20,
    color: COLOR.DARK,
    textAlign: 'center',
    marginVertical: 5
  },
  emptyDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    height: 24,
    textAlign: 'center'
  }
}
