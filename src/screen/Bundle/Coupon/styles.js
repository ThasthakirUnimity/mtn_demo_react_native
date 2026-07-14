import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  input: {
    flex: 1
  },
  formInput: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: COLOR.LIGHT,
    marginTop: 30,
    marginBottom: 30,
    marginHorizontal: 20,
    borderRadius: 13,
    paddingLeft: 20,
    paddingVertical: 18
  },
  coupon: {
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 13,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  couponRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rewardsText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  offerText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT,
    marginTop: 5
  },
  btn: {
    backgroundColor: COLOR.DEFAULT,
    borderRadius: 13
  },
  btnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT,
    paddingHorizontal: 20,
    paddingVertical: 6
  },
  couponRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 20,
    borderStyle: 'dotted',
    borderColor: COLOR.DEFAULT,
    borderTopWidth: 1
  },
  couponDate: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  couponCode: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  placeholderContent: {
    marginHorizontal: 20,
    marginTop: 10
  },
  placeholderGroup: {
    width: '100%',
    height: 120,
    borderRadius: 13
  }
}
