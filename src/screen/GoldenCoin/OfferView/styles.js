import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /*  reward */
  rewardsImage: {
    width: '100%',
    height: 250
  },
  imgOverlay: {
    position: 'absolute',
    width: '100%',
    height: 250,
    top: 200
  },
  rewardImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 30
  },
  validText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  giftText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT,
    marginVertical: 10
  },
  detailsText: {
    fontFamily: FAMILY.MTN_LIGHT,
    fontSize: SIZE.SIZE_11,
    color: COLOR.DARK
  },
  details: {
    borderColor: COLOR.SMOKE,
    borderBottomWidth: 1,
    marginTop: 70,
    marginHorizontal: 20,
    marginBottom: 30,
    paddingBottom: 30
  },
  redeemBtn: {
    backgroundColor: COLOR.PRIMARY,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    borderRadius: 17,
    marginTop: 20,
    paddingHorizontal: 30,
    paddingVertical: 8
  },
  redeemBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  header: {
    marginHorizontal: 20
  },
  rewards: {
    marginBottom: 20
  },
  rewardTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT
  },
  rewardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 15,
    paddingVertical: 5
  },
  logoBg: {
    width: 62,
    height: 62,
    borderRadius: 31,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.SMOKE,
    marginRight: 15
  },
  logo: {
    width: 62,
    height: 62
  },
  rewardInfo: {
    flex: 1
  },
  rewardText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY
  },

  placeholderGroup: {
    width: '100%',
    height: 80
  }
}
