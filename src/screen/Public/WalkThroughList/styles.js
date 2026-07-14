import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  walkthroughContainer: {
    paddingHorizontal: 15,
    marginTop: 15
  },
  walkthroughContent: {
    width: '44%',
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13,
    elevation: 5,
    shadowOffset: {
      width: 7,
      height: 7
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  walkthroughDisplay: {
    width: '100%',
    height: 129
  },
  walkthroughImg: {
    width: '100%',
    height: '100%'
  },
  walkthroughText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_DARK,
    marginTop: 10,
    marginBottom: 10,
    padding: 15
  }
}
