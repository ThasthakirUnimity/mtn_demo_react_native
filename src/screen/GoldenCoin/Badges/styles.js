import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* Badges */
  badgeImage: {
    width: 60,
    height: 60,
    borderRadius: 30
  },

  headerRow: {
    flexDirection: 'row',

    marginTop: 20,
    marginBottom: 15,
    marginHorizontal: 20
  },

  badgeContainer: {
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 20,
    elevation: 10,
    backgroundColor: COLOR.LIGHT,
    padding: 20,
    borderRadius: 13
  },
  badgeContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  badgeInfo: {
    flex: 1,
    marginLeft: 20
  },
  lvText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    paddingTop: 5,
    textAlign: 'center'
  },
  badgeText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  badgeDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: '#6B6B6B',
    marginTop: 5
  },
  soldInfo: {
    flex: 2,
    marginVertical: 15
  },
  soldLine: {
    width: '100%',
    height: 6,
    borderRadius: 10,
    backgroundColor: '#D4E4F7',
    zIndex: 1
  },
  soldLineActive: {
    position: 'absolute',
    height: 6,
    borderRadius: 10,
    zIndex: 2,
    backgroundColor: COLOR.DEFAULT
  },
  xpText: {
    flex: 1,
    alignSelf: 'flex-end',
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: '#6B6B6B'
  }
}
