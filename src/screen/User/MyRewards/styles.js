import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* add */
  gift: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  logoBg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.SMOKE,
    marginBottom: 20
  },
  bgcolor: {
    backgroundColor: COLOR.SMOKE
  },
  logo: {
    fontSize: SIZE.SIZE_36,
    color: COLOR.DARK,
    textAlign: 'center'
  },
  rewardNum: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_28,
    color: COLOR.DEFAULT
  },
  rewardPtText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT
  },
  referlogo: {
    width: 252,
    height: 156,
    alignSelf: 'center',
    marginTop: 30
  },
  rewardTerms: {
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginHorizontal: 20,
    marginVertical: 30,
    paddingTop: 30,
    paddingHorizontal: 20
  },
  rewardTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginBottom: 10
  },
  rewardText: {
    fontFamily: FAMILY.MTN_LIGHT,
    fontSize: SIZE.SIZE_11,
    color: COLOR.DARK
  },
  /* Flatlist - reward */
  rewards: {
    paddingHorizontal: 8,
    marginBottom: 30
  },
  placeholderContent: {
    flex: 1,
    height: 180,
    margin: 5
  },
  placeholderImg: {
    borderRadius: 11,
    height: 180,
    width: '100%'
  },
  rewardContainer: {
    flex: 1,
    width: '33%',
    marginHorizontal: 10,
    marginTop: 20
  },
  rewardContent: {
    borderColor: 'rgba(253, 238, 190,1)',
    borderWidth: 1,
    borderRadius: 11,
    backgroundColor: '#FDEEBE',
    opacity: 0.8,
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  giftText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK,
    marginBottom: 5
  },
  date: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_11,
    color: COLOR.DARK,
    marginTop: 5
  },
  detailText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT
  },
  rewardImage: {
    width: 32,
    height: 32,
    borderRadius: 16
  },
  rewardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20
  }
}
