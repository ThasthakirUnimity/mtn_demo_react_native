import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  modal: {
    minHeight: '80%',
    maxHeight: '80%',
    height: 'auto',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 30
  },

  scroll: {
    borderWidth: 1,
    borderColor: COLOR.SMOKE_DARK
  },

  item: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK,
    alignItems: 'center'
  },
  itemGroup: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLOR.SMOKE_DARK,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  itemInitial: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  itemCol: {
    flex: 1,
  },
  itemName: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  itemNo: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  }
}
