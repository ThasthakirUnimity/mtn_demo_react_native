import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* detail  */
  mobDetail: {
    marginHorizontal: 20,
    marginTop: 30
  },
  /* product */
  productTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT
  },
  productFeatures: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_16,
    color: COLOR.BLACK
  },
  sliderImg: {
    marginVertical: 30
  },
  placeholderImg: {
    width: '100%',
    height: 275
  },
  /* favourite */
  favRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6
  },
  favIcon: {
    flexDirection: 'row'
  },
  favIconColor: {
    fontSize: SIZE.SIZE_20,
    color: '#FFCC00'
  },
  /* color */
  details: {
    marginHorizontal: 20,
    marginTop: 20
  },
  colorHeader: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.BLACK
  },
  storageText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.BLACK
  },
  colorRow: {
    flexDirection: 'row',
    marginTop: 20
  },
  gryColor: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLOR.grey,
    marginRight: 20
  },
  darkColor: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLOR.dark,
    marginLeft: 20
  },
  price: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_20,
    color: COLOR.BLACK,
    textDecorationLine: 'line-through'
  },
  priceDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dealPrice: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  revisedPrice: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_20,
    color: COLOR.BLACK
  },
  productDescription: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY
  },
  orderDetails: {
    alignSelf: 'flex-end',
    marginTop: 30,
    marginBottom: 10
  },
  deliveryEstimation: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  orderText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    alignSelf: 'flex-end',
    marginTop: 5

  },
  /* btn */
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30
  },
  cartBtn: {
    flex: 1,
    borderColor: COLOR.DARK,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 25
  },
  buyBtn: {
    flex: 1,
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 25,
    marginLeft: 20
  },
  cartText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.BLACK,
    textAlign: 'center'
  }
}
