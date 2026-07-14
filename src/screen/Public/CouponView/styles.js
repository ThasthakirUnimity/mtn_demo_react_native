import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  offer: {

  },
  offerImg: {
    width: '100%',
    height: 265
  },
  offerHeader: {
    marginHorizontal: 15,
    paddingVertical: 30,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK
  },
  offerContent: {
    paddingHorizontal: 15
  },
  offerRow: {
    flexDirection: 'row'
  },
  offerDate: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    fontStyle: 'italic',
    opacity: 0.5,
    marginBottom: 10
  },
  offerTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT,
    marginBottom: 15
  },
  offerShortDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },

  offerSubTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_15,
    color: COLOR.DEFAULT
  },
  offerDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  }

}
