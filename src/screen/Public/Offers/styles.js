import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* topdeals */
  topDeals: {
    marginBottom: 10
  },
  topDealsText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT,
    marginLeft: 20,
    marginTop: 20
  },
  rechargeText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  /* offer */
  offerContainer: {
    marginTop: 20,
    paddingHorizontal: 10
  },
  offerContent: {
    width: 260,
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
    marginHorizontal: 10,
    marginBottom: 30,
    paddingBottom: 5
  },
  placeholderContent: {
    marginRight: 15
  },
  placeholderImg: {
    width: 260,
    height: 260,
    borderRadius: 13
  },
  offerDisplay: {
    width: '100%',
    height: 260
  },
  offerImg: {
    width: 260,
    height: '100%',
    borderRadius: 13
  },
  offerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15
  },
  offerText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    marginTop: 20,
    marginBottom: 8,
    paddingHorizontal: 15
  },
  offerIcon: {
    fontSize: SIZE.SIZE_26,
    color: COLOR.DARK
  },
  priceText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginTop: 5,
    paddingHorizontal: 15,
    paddingBottom: 20
  },
  offerforyouRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR.SMOKE,
    borderRadius: 13,
    marginHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  offerCol: {
    flex: 1
  },
  offerforyouImg: {
    width: 72,
    height: 72,
    borderRadius: 36
  }
}
