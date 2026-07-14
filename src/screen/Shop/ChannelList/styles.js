import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* games  */
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

  /* tab */
  boxTabs: {
    marginVertical: 20
  },
  boxTabActive: {
    flexDirection: 'row',
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 5
  },
  boxTab: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 5
  },
  boxTabActiveText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    paddingLeft: 5
  },
  boxTabText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    opacity: 0.5,
    paddingLeft: 10
  },
  boxTabActiveImg: {
    opacity: 1
  },
  boxTabImg: {
    opacity: 0.5
  },

  /* games */
  gamesContainer: {
    marginTop: 15
  },
  gamesContent: {
    flex: 1,
    minHeight: 200,
    marginTop: 10,
    marginHorizontal: 20,
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
  gamesImg: {
    height: 160,
    borderRadius: 15
  },
  gamesContent2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  gamesText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT,
    marginBottom: 5
  },
  favIcon: {
    flexDirection: 'row'
  },
  priceText: {
    paddingRight: 15
  },
  buyPrice: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  offerText: {
    paddingRight: 15
  },
  buyBtn: {
    borderColor: COLOR.DEFAULT,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8
  },
  buyBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT
  }

}
