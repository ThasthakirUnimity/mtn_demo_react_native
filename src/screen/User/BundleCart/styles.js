import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* games  */
  formContainer: {
    flex: 1,
    backgroundColor: COLOR.LIGHT
  },

  PlaceholderGroup: {
    width: '100%',
    height: 50
  },
  profileContent: {
    flexDirection: 'row',
    marginBottom: 20
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  profileDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  profileName: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    marginBottom: 5
  },
  profileNumber: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  priceIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK
  },
  recognitionText: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK
  },
  amtText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK
  },
  viewCart: {
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
    margin: 20,
    paddingHorizontal: 20,
    paddingTop: 10
  },
  recognitionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  cartRow: {
    flexDirection: 'row'
  },
  cartScheme: {
    marginLeft: 5
  },
  schemeText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginTop: 10
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 20
  },
  amtPrice: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_22,
    color: COLOR.DARK
  },
  price: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    marginLeft: 10
  },
  amtRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  /* footer */

  footerBtn: {
    backgroundColor: COLOR.GOLD,
    borderRadius: 25,
    margin: 15,
    paddingVertical: 15
  },
  footerBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT,
    textAlign: 'center'
  }

}
