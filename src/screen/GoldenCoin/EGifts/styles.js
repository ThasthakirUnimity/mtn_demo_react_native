import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  infoBtn: {
    width: '44%',
    backgroundColor: COLOR.LIGHT,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 13
  },
  infoBg: {
    width: '100%',
    height: 130,
    borderRadius: 13
  },
  infoImg: {
    width: '100%',
    height: 130,
    borderRadius: 13
  },
  infoContent: {
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  infoRow: {
    flexDirection: 'row'
  },
  infoTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginBottom: 10
  },
  infoDesc: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  infoPlaceholder: {
    width: '44%',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 13
  },
  infoPlaceholderImg: {
    width: '100%',
    height: 200,
    borderRadius: 13
  }
}
