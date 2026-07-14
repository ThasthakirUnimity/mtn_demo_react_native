import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* news */
  newsContainer: {
    marginHorizontal: 5
  },
  newsContent: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: COLOR.LIGHT,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 13
  },
  newsPlaceholder: {
    backgroundColor: COLOR.LIGHT,
    height: 150,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 13
  },
  newsCol: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  newsplaceholder: {
    borderColor: COLOR.LIGHT,
    borderWidth: 1
  },
  newsTitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  newsText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginVertical: 15
  },
  publishedDate: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY,
    marginTop: 10
  },

  newsImg: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13
  }

}
