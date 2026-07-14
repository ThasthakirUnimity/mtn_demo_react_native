import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* Header */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  headerTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  headerCol: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerPrice: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_20,
    color: COLOR.DARK,
    marginHorizontal: 10
  },
  headerIcon: {
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },

  /* Search */
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK3,
    marginBottom: 30
  },

  searchCol: {
    flex: 1
  },
  searchInput: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    paddingHorizontal: 10,
    paddingVertical: 12
  },
  searchBtn: {
  },
  searchBtnIcon: {
    fontSize: SIZE.SIZE_22,
    color: COLOR.DARK
  },

  /* Bank List */
  bank: {
  },
  bankHeader: {
    paddingHorizontal: 15
  },
  bankHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },

  bankContent: {
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 30,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  bankRow: {
    flexDirection: 'row'
  },
  bankCol: {
    flex: 1
  },
  bankBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  bankBtnImg: {
    width: '100%',
    height: 60
  }

}
