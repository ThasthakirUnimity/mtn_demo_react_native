import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* search */
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: COLOR.LIGHT,
    marginRight: 15
  },
  searchInput: {
    flex: 1,
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.LIGHT,
    paddingHorizontal: 5,
    paddingVertical: 0
  },
  searchBtn: {
    paddingVertical: 6
  },
  searchIcon: {
    fontSize: SIZE.SIZE_20,
    color: COLOR.LIGHT
  },

  /* tab */
  tabSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15
  },
  tabActive: {
    flex: 1,
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 20,
    marginRight: 5,
    paddingVertical: 8,
    paddingHorizontal: 20
  },
  tabInactive: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLOR.SMOKE,
    backgroundColor: COLOR.SMOKE,
    marginRight: 5,
    paddingVertical: 8,
    paddingHorizontal: 20
  },
  tabActiveText: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    textAlign: 'center'
  },
  tabInactiveText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    textAlign: 'center'
  },

  // hashtag-placeholder//

  hashtagContainer: {
    paddingTop: 15,
    paddingBottom: 30
  },
  allHeader: {
    marginHorizontal: 15,
    marginBottom: 15,
    borderLeftWidth: 1.5,
    borderColor: COLOR.PRIMARY
  },
  hashtagHeader: {
    marginHorizontal: 15,
    marginBottom: 5,
    borderLeftWidth: 1.5,
    borderColor: COLOR.PRIMARY
  },
  hashtagHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_20,
    color: COLOR.DEFAULT,
    paddingLeft: 10,
    letterSpacing: 0.1
  },
  hashtagHeaderText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    paddingLeft: 15,
    marginBottom: 10,
    letterSpacing: 0.1
  },
  hashtagGroup: {
    paddingRight: 15,
    paddingLeft: 10
  },
  hashtagContent: {
    flex: 1,
    marginLeft: 5,
    borderRadius: 5,
    marginTop: 15
  },
  hashtagImg: {
    width: 125,
    height: 180,
    borderRadius: 10
  },
  linearGradientHash: {
    width: '100%',
    height: 180,
    position: 'absolute',
    borderRadius: 10
  },
  hashtagInfo: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 10
  },
  hashtagText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT,
    textAlign: 'center',
    marginBottom: 20
  },
  btn: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignItems: 'center',
    backgroundcolor: COLOR.DEFAULT,
    borderWidth: 1,
    borderColor: COLOR.INPUT,
    alignSelf: 'center'
  },
  btnImg: {
    width: 16,
    height: 13
  },
  btnText: {
    fontFamily: FAMILY. MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    paddingLeft: 10
  },
  addIcon: {
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginLeft: 5
  },

  viewMore: {
    alignSelf: 'center',
    marginVertical: 15
  },
  viewBtn: {
    alignItems: 'center',
    padding: 10
  },
  viewBtnImg: {
    width: 18,
    height: 22,
    marginBottom: 5
  },
  viewBtnText: {
    fontFamily: FAMILY. MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.PRIMARY
  },

  // post-placeholder//
  postContainer: {
    marginBottom: 30
  },
  postContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: COLOR.LIGHT,
    shadowColor: COLOR.GREY_LIGHT,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        borderRadius: 10
  },
  postImg: {
    width: 64,
    height: 64,
    borderRadius: 5,
    marginRight: 15
  },
  postText: {
    flex: 1,
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK    
  },


  verifieduserIcon: {
    position: 'absolute',
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLUE,
    top: 0,
    right: -5
  },

  // Products //
  productCol: {
    flex: 1
  },
  productTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    marginBottom: 5
  },
  productPrice: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
  },
  productOriginalPrice: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    marginHorizontal: 5
  },
  row: {
    flexDirection: 'row'
  },

  // follow-placeholder//

  followHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_24,
    color: COLOR.GREY,
    opacity: 0.5,
    backgroundColor: COLOR.SMOKE_DARK,
    padding: 15
  },
  followContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK,
    paddingHorizontal: 25,
    paddingVertical: 15

  },
  followItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },
  followCol: {
    position: 'relative',
    justifyContent: 'center'
  },
  followImg: {
    width: 38,
    height: 38,
    borderRadius: 19
  },
  followTitle: {
    flex: 1,
    fontFamily: FAMILY. MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    marginLeft: 15
  },
  followBtn: {
    width: 80,
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 5,
    paddingVertical: 8
  },
  followBtnActive: {
    backgroundColor: COLOR.GREY
  },
  followBtnText: {
    fontFamily: FAMILY. MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    textAlign: 'center'
  },
  // group-placeholder//

  groupTitle: {
    fontFamily: FAMILY. MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    marginLeft: 15
  },
  groupText: {
    fontFamily: FAMILY. MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginLeft: 15
  },

  // Empty //
  empty: {
    paddingVertical: 30
  },
  emptyText: {
    fontFamily: FAMILY. MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    textAlign: 'center'
  },
}
