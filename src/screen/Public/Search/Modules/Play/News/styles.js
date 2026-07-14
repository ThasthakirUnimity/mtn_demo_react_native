import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

const React = require('react-native')
const { Platform } = React
export default {

  /* news */
  newsContainer: {

  },
  newsContent: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: COLOR.NEWS_BG,
    borderRadius: 13
  },
  newsCol: {
    flex: 1,
    marginRight: 10
  },
  newsContentPlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: 'transparent'
  },
  newsPlaceholder: {
    borderColor: COLOR.LIGHT
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
    color: COLOR.GREY
  },
  newsImg: {
    width: 80,
    height: 80,
    borderRadius: 13,
    marginTop: 15
  }
}
