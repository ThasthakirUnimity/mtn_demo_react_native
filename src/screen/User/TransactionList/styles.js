import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  header: {
    flexDirection: 'row',
    backgroundColor: COLOR.SMOKE_LIGHT,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK
  },
  headerLeft: {
  },
  headerBtn: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  headerIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK
  },
  headerMiddle: {
    flex: 1
  },
  headerTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_20,
    color: COLOR.DARK
  },

  bgGrey: {
    backgroundColor: COLOR.SMOKE_LIGHT
  },

  /* transaction  */
  rightBtn: {
    width: 50
  },
  rightIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  profileText: {
    marginLeft: 20
  },
  profileName: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    marginBottom: 5
  },
  profileNumber: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  profileBtn: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLOR.GREY,
    marginHorizontal: 20
  },
  profileBtnIcon: {
    fontSize: SIZE.SIZE_20,
    color: COLOR.BLACK
  },

  shareHeader: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  lastTransaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20
  },
  lastTransactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  transactionBtn: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  transactionBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.BLACK
  },

  /* Empty */
  emptyContainer: {
    flex: 1,
    minHeight: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyText: {
    textAlign: 'center',
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },

  /* transaction */
  topupContainer: {
    paddingHorizontal: 10
  },
  topupContent: {
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 10,
    marginBottom: 15,
    borderRadius: 13,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  transactionRow: {
    flex: 1,
    flexDirection: 'row'

  },
  transactionRowActive: {
    flexDirection: 'row',
    margin: 10,
    paddingHorizontal: 5,
    paddingVertical: 15
  },
  planContent: {
    flex: 1
  },
  planRow: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  price: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_20,
    color: COLOR.BLACK
  },
  dataPack: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  successText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  date: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY,
    marginTop: 2,
    borderColor: COLOR.SMOKE,
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10
  },
  payMode: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  upi: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  placeholderContent: {
    marginHorizontal: 10,
    marginTop: 10
  },
  placeholderGroup: {
    width: '100%',
    height: 150,
    borderRadius: 13
  },
  /* modalFilter */
  modalFilter: {
    minHeight: 100,
    height: 'auto',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  filterContianer: {
    paddingHorizontal: 30,
    paddingTop: 40
  },
  filterText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT
  },
  filterHeader: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    marginVertical: 10
  },
  filterContentRow: {
    flexDirection: 'row',
    marginTop: 20
  },
  filterContent: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  fBtn: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderColor: COLOR.SHADOW,
    borderWidth: 1,
    borderRadius: 17,
    marginBottom: 10,
    marginRight: 10
  },
  fBtnActive: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: COLOR.DEFAULT,
    borderRadius: 17,
    marginBottom: 10,
    marginRight: 10
  },
  fBtnTextActive: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT
  },
  fBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },
  btns: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 20,
    marginBottom: 20
  },
  applyBtn: {
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
    marginLeft: 30
  },
  btnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    size: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  applyBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    size: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  /* modalSuccess */
  modalSuccess: {
    height: '80%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 30
  },
  transactionListRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 1
  },
  paymodeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  transactionDetail: {
    paddingVertical: 20,
    borderColor: COLOR.SMOKE,
    borderBottomWidth: 1
  },
  upitransactionText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BLACK
  },
  upiPrice: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  transactionPrice: {
    marginTop: 30
  },
  planScheme: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },

  cal: {
    flexDirection: 'row',
    backgroundColor: COLOR.SMOKE,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical: 15
  },
  calCol: {
    flex: 1,
    marginLeft: 10
  },
  calDesc: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  calBtn: {
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 15
  },
  calBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    textAlign: 'center'
  }
}
