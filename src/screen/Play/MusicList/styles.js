import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {

  itemMain: {
    flex: 1,
    marginHorizontal: 8
  },
  item: {
    width: '46%',
    height: 145,
    borderRadius: 10,
    zIndex: 1,
    marginHorizontal: 8,
    marginVertical: 8
  },
  itemOverlay: {
    width: '100%',
    height: 145,
    borderRadius: 10,
    position: 'absolute',
    zIndex: 2
  },
  itemContainer: {
    width: '100%',
    height: 145,
    borderRadius: 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 3
  },
  itemTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.LIGHT,
    textAlign: 'center',
    marginBottom: 15
  },
  itemImg: {
    width: '100%',
    height: 145,
    borderRadius: 10
  }

}
