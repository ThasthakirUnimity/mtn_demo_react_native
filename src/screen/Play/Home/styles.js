import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  box: {
    marginHorizontal: 20
  },
  boxHeader: {

  },
  boxHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT,
    marginBottom: 15
  },

  /* tab */
  boxTabs: {

  },
  boxTabActive: {
    flexDirection: 'row',
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 5
  },
  boxTab: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 5
  },
  boxTabActiveText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT,
    paddingLeft: 5
  },
  boxTabText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    // opacity: 0.5,
    paddingLeft: 10
  },
  boxTabActiveImg: {
    opacity: 1
  },
  boxTabImg: {
    opacity: 0.5
  },

  boxSlider: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  boxSliderImg: {
    flex: 1,
    height: 230
  },
  boxSliderActiveImg: {
    flex: 1,
    height: 230
  },

  boxSliderView: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLOR.BLACK,
    opacity: 0.6,
    justifyContent: 'flex-end'
  },
  boxSliderActiveView: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    opacity: 1,
    justifyContent: 'flex-end'
  },
  boxSliderText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT,
    textAlign: 'center',
    marginVertical: 10
  },
  boxSliderFirstImg: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
  boxSliderFirstView: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },

  boxSliderLastImg: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15
  },
  boxSliderLastView: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15
  },

  /* header */
  header: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20
  },
  slide: {
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  slideBtn: {
    flex: 1
  },
  slideBtnImg: {
    width: '100%',
    height: 220,
    borderRadius: 10
  },

  relishContent: {
    paddingHorizontal: 10
  },
  relishImg1: {
    width: '100%',
    height: 230
  },
  relishImg: {
    width: 120,
    height: 230,
    marginLeft: -30
  },

  /* games */
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 15
  },
  headerTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  headerBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.PRIMARY,
    // opacity: 0.7
  },
  gamesContainer: {
    marginTop: 15,
    paddingRight: 15
  },
  gamesContent: {
    flex: 1,
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 15,
    elevation: 5,
    shadowOffset: {
      width: 7,
      height: 7
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13
  },
  gamesImg: {
    width: 138,
    height: 105,
    borderRadius: 13
  },
  /* continue */
  continueContainer: {
    marginTop: 15,
    paddingRight: 15
  },
  continueContent: {
    flex: 1,
    backgroundColor: COLOR.LIGHT,
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 20,
    elevation: 5,
    shadowOffset: {
      width: 7,
      height: 7
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderRadius: 13
  },
  continueImg: {
    width: 192,
    height: 146,
    borderRadius: 13
  },
  /* trending */
  trendingContainer: {
  },
  trendingContent: {
    flex: 1,
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 20,
    elevation: 5,
    shadowOffset: {
      width: 7,
      height: 7
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderRadius: 13
  },
  trendingImg: {
    width: 142,
    height: 172,
    borderRadius: 13
  },
  playBtn: {
    position: 'absolute',
    flexDirection: 'row',
    padding: 10,
    width: 142,
    height: 172,
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  playBtnCount: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT,
    opacity: 0.4
  },
  playBtnBg: {
    width: 20,
    height: 20,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  playBtnIcon: {
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },
  iconTrend: {
    backgroundColor: COLOR.LIGHT,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 3,
    paddingTop: 1
  },

  /* podcast */
  playserviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 15
  },
  musicContainer: {
    marginTop: 15,
    paddingRight: 15
  },
  musicContent: {
    backgroundColor: COLOR.LIGHT,
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 20,
    elevation: 5,
    shadowOffset: {
      width: 7,
      height: 7
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderRadius: 13
  },
  musicBox: {
    position: 'absolute',
    flexDirection: 'row',
    padding: 10,
    width: 112,
    height: 146,
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  musicImg: {
    width: 112,
    height: 146,
    borderRadius: 13
  },
  musicBtn: {
    width: 20,
    height: 20,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  musicBtnIcon: {
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },

  /* movies */
  moviesContent: {
    flex: 1,
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 15,
    elevation: 5,
    shadowOffset: {
      width: 7,
      height: 7
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13
  },
  movieImg: {
    width: 192,
    height: 146,
    borderRadius: 13
  },
  movieplayBtn: {
    position: 'absolute',
    flexDirection: 'row',
    padding: 10,
    width: 192,
    height: 146,
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  /* channels */
  channelContent: {
    flex: 1,
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 15,
    elevation: 5,
    shadowOffset: {
      width: 7,
      height: 7
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13
  },
  channelImg: {
    width: 120,
    height: 120,
    borderRadius: 13
  },
  /* news */
  newsContainer: {

  },
  newsContent: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: COLOR.NEWS_BG,
    borderRadius: 13
  },
  newsCol: {
    flex: 1,
    marginRight: 10
  },
  newsContentPlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: 'transparent'
  },
  newsPlaceholder: {
    borderColor: COLOR.LIGHT
  },
  newsTitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  newsText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginVertical: 15
  },
  publishedDate: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY
  },
  newsImg: {
    width: 80,
    height: 80,
    borderRadius: 13,
    marginTop: 15
  }
}
