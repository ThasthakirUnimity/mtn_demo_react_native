import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  headerTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10
  },
  insuranceContent: {
    flex: 1,
    height: 180,
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 30,
    elevation: 10,
    paddingLeft: 20,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13
  },
  insuranceContent2: {
    height: 180,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  insuranceDetail: {
    height: 180,
    justifyContent: 'space-between'
  },
  insuranceImg: {
    width: 127,
    height: 110,
    marginTop: 50
  },
  insuranceText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    marginTop: 20,
    lineHeight: 20
  },
  insuranceDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginTop: 10
  },
  insuranceText2: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_22,
    color: COLOR.DEFAULT,
    paddingVertical: 20,
    marginRight: 10
  },
  insurancePremium: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },

  priceDetail: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sliderImg: {
    borderRadius: 15,
    width: '90%',
    height: 250,
    marginVertical: 30
  }

}
