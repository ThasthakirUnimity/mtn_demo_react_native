import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {

  /* content */
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  /* tab */
  share: {
    marginTop: 30
  },
  shareProf: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingLeft: 15
  },
  tabActive: {
    flexDirection: 'row',
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 6,
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 17
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 17,
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginHorizontal: 5
  },
  tagActive: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    marginLeft: 10
  },
  tag: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    marginLeft: 10
  },
  pointsDetail: {
    flex: 1
  },
  lbImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 15
  },
  overlaymage: {
    width: 76,
    height: 76,
    borderRadius: 38,
    position: 'absolute',
    borderColor: COLOR.PRIMARY,
    borderWidth: 3
  },
  pointsInfo: {
    width: 75,
    height: 100,
    backgroundColor: '#F6F7FC',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15
  },
  lbPlace: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  lbPoints: {
    fontFamily: FAMILY.MTN_LIGHT,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginTop: 8
  },
  pointsOne: {
    height: 100
  },
  pointsTwo: {
    height: 150
  },
  pointsThree: {
    height: 80
  },
  /* Leaderboard */
  leaderboard: {
    elevation: 10,
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 12,
    paddingTop: 10,
    paddingBottom: 25
  },
  leaderboardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20
  },
  leaderboardContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leaderboardImage: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  leaderboardInfo: {
    marginLeft: 20
  },
  itemDate: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT
  },
  /* Badges */
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 15,
    marginHorizontal: 20
  },
  headerTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT
  },
  viewBtn: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.PRIMARY
  },
  badgeContainer: {
    borderWidth: 1,
    borderColor: 'red'
  },
  badgeContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  badgeInfo: {
    flex: 1,
    marginLeft: 20
  },
  lvText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    paddingTop: 5,
    textAlign: 'center'
  },
  badgeName: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  badgeItems: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  voteItem: {
    marginHorizontal: 15,
    marginBottom: 20
  },
  voteDetail: {

  },
  soldInfo: {
    flex: 2,
    marginVertical: 15
  },
  soldLine: {
    width: '100%',
    height: 6,
    borderRadius: 10,
    backgroundColor: '#D4E4F7',
    zIndex: 1
  },
  soldLineActive: {
    position: 'absolute',
    height: 6,
    borderRadius: 10,
    zIndex: 2,
    backgroundColor: COLOR.DEFAULT
  },
  voteNum: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.dark,
    marginLeft: 10
  },
  xpText: {
    flex: 1,
    alignSelf: 'flex-end',
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  }
}
