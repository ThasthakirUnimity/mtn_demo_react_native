import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* recharge */
  formContainer: {
    flex: 1
  },

  /* weekly flatlist */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 5
  },
  weeklyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 5,
    marginTop: 30
  },
  placeholderContent: {
    marginHorizontal: 5
  },
  PlaceholderGroup: {
    width: '100%',
    height: 180,
    borderRadius: 13
  },
  weeklyContainer: {
    paddingHorizontal: 10
  },
  weeklyContent2: {
    flex: 1,
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
    marginVertical: 15,
    padding: 18
  },
  weeklyPlans: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: COLOR.SMOKE_DARK2,
    borderBottomWidth: 1,
    marginTop: 4,
    paddingBottom: 25
  },
  weeklyText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT,
    marginBottom: 3
  },
  validityText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginBottom: 3
  },
  limitedText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  planText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_22,
    color: COLOR.DARK
  },
  weeklyPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingBottom: 10
  },
  detailText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    borderBottomWidth: 1,
    borderColor: COLOR.DEFAULT
  },
  weeklyPriceInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cartBtn: {
    borderColor: COLOR.DEFAULT,
    borderWidth: 1,
    borderRadius: 13,
    marginRight: 15,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  cartText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT
  },
  buyBtn: {
    borderRadius: 13,
    backgroundColor: COLOR.DEFAULT,
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  buyText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT
  }
}
