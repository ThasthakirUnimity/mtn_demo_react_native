import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  item: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 10,
    zIndex: 1,
    marginHorizontal: 8,
    marginVertical: 8,
    position: 'relative'
  },
  itemOverlay: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    position: 'absolute',
    zIndex: 2
  },
  itemContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 3,
    paddingHorizontal: 10
  },
  itemTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT,
    textAlign: 'center',
    marginBottom: 10
  },
  itemImg: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  }
}
