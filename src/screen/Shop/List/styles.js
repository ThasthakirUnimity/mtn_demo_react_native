import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* shop  */
  rightCol: {
    width: 140,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20
  },
  rightBtn: {
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  rightIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT,
    paddingHorizontal: 8
  },
  miageImg: {
    width: 26,
    height: 26
  },
  sliderContent: {
    flex: 1
  },
  sliderImg: {
    borderRadius: 15,
    width: '90%',
    marginVertical: 30
  },
  /* mobile */
  mobileContainer: {
    paddingHorizontal: 10,
    marginTop: 15
  },
  mobileContent: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },
  mobileDisplay: {
    width: '33%',
    height: 129
  },
  mobileImg: {
    width: 176,
    height: '100%',
    borderRadius: 13
  },
  mobileCol: {
    marginBottom: 15
  },
  mobileText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BLACK,
    marginTop: 15,
    marginBottom: 8,
    paddingHorizontal: 15
  },
  priceText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BLACK,
    paddingHorizontal: 15,
    paddingBottom: 10
  },
  offerText: {
    flex: 1,
    alignSelf: 'flex-end',
    paddingRight: 15,
    paddingVertical: 20
  }

}
