import { Dimensions } from 'react-native'

import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

const width = Dimensions.get('window').width

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
  slideContent: {
    flex: 1
  },
  slideHeader: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 30
  },
  slideHeaderText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  sliderImg: {
    borderRadius: 15,
    width: width - 30,
    marginVertical: 30
  },
  /* device */
  deviceContainer: {
    paddingHorizontal: 10,
    marginTop: 15
  },
  deviceContent: {
    width: 100,
    marginTop: 20,
    alignItems: 'center'
  },
  deviceDisplay: {
    width: 84,
    height: 84,
    borderRadius: 42
  },
  deviceImg: {
    width: 84,
    height: 84,
    borderRadius: 42
  },
  deviceCol: {
  },
  deviceRow: {
    flexDirection: 'row'
  },
  deviceText: {
    textAlign: 'center',
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BLACK,
    marginTop: 15,
    paddingHorizontal: 15
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
