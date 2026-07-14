
import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* cart-placeholder */

  container: {
    backgroundColor: COLOR.smoke,
    paddingHorizontal: 10,
    paddingTop: 20
  },
  cartContainer: {
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 13,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  cartContent: {
    flexDirection: 'row',
    padding: 20
  },
  image: {
    width: 90,
    height: 80
  },
  cartItemName: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  cartDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  content: {
    flex: 1,
    paddingHorizontal: 15
  },
  cartText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY,
    marginTop: 8
  },
  priceOrgText: {
    marginRight: 10,
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  price: {
    marginRight: 10,
    marginVertical: 10
  },
  priceText: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_18,
    color: COLOR.BLACK
  },
  offerText: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_12,
    color: COLOR.SUCCESS
  },
  cartRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 3,
    marginTop: 15
  },
  btns: {
    fontSize: SIZE.SIZE_20,
    color: COLOR.GREY,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  trash: {
    justifyContent: 'center',
    alignSelf: 'flex-start'
  },
  deliveryOffer: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },
  save: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLOR.SMOKE_DARK
  },
  saveInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: COLOR.SMOKE_DARK,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnIcon: {
    fontSize: SIZE.SIZE_20,
    color: COLOR.BLACK
  },
  saveBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BUTTON_TEXT,
    paddingLeft: 10
  }
}
