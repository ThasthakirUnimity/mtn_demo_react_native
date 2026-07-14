import { Platform } from 'react-native'

import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  watchContainer: {
    width: '100%',
    height: 320
  },
  watchImg: {
    width: '100%',
    height: 320,
    opacity: 1
  },
  watchOverlay: {
    position: 'absolute',
    width: '100%',
    height: 320,
    justifyContent: 'space-between',
    zIndex: 1
  },
  watchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? 50 : 10
  },
  watchHeaderBtn: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  watchBot: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  watchBotBtn: {
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.LIGHT
  },
  watchBotBtnIcon: {
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },
  watchBotCol: {
    paddingHorizontal: 20
  },

  iconDisplay: {
    width: '100%',
    height: 320,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  backIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT
  },
  playBtnBg: {
    width: '100%',
    height: 320,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginHorizontal: 20,
    paddingBottom: 24
  },
  placeholderImg: {
    width: '100%',
    height: 275
  },
  playBtnIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    textAlign: 'center',
    backgroundColor: COLOR.LIGHT,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    paddingLeft: 5,
    paddingTop: 3
  },
  moviePlayContent: {
    marginLeft: 15
  },
  playWatch: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT
  },
  playDuration: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT,
    opacity: 0.8
  },
  formContainer: {
  },
  language: {
    backgroundColor: COLOR.SMOKE
  },
  fBtn: {
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  fBtnActive: {
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  fBtnTextActive: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  fBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY
  },
  watchContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20
  },
  movieImg: {
    flex: 1,
    marginRight: 15
  },
  watchMovieImg: {
    width: 175,
    height: 100,
    borderRadius: 13
  },
  watchContent1: {
    flex: 1,
    marginLeft: 20
  },
  movieTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_20,
    color: COLOR.BLACK
  },
  movieData: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginVertical: 3
  },
  movieText: {
    fontFamily: FAMILY.MTN_EXTRA_LIGHT,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_DARK,
    marginHorizontal: 20,
    marginTop: 25
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 30
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR.SMOKE_DARK,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8
  },
  btnIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK
  },
  btnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    marginLeft: 5
  },
  trailer: {
    marginHorizontal: 20,
    marginTop: 10
  },
  trailerText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_16,
    color: COLOR.BLACK,
    marginBottom: 15
  }
}
