import { COLOR, FAMILY, SIZE } from '@src/theme/typography';

export default {
  layout: {
    flex: 1,
    backgroundColor: COLOR.LIGHT
  },
  headerRow: {
    flexDirection: 'column'
  },
  headerTitle: {
    fontFamily: FAMILY.MTN_EXTRA_BOLD,
    fontSize: SIZE.SIZE_20,
    color: COLOR.BLACK,
  },
  headerSubTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_24,
    color: COLOR.BLACK,
  },

  /* login */
  formContainer: {
    flex: 1,
    backgroundcolor: COLOR.LIGHT,
    paddingTop: 30
  },
  chatImg: {
    width: 44,
    height: 44
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 15
  },
  chatAssist: {
    backgroundColor: COLOR.LIGHT,
    padding: 15,
    borderRadius: 5,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  chatRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 15,
    marginVertical: 5
  },
  chatIcon: {
    width: 60
  },
  chatData: {
    flex: 1
  },
  chatQuestion: {
    flex: 1,
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },

  imageSize: {
    width: '80%',
    height: '100%',
  },

  chatAnswer: {
    flex: 1,
    backgroundColor: COLOR.LIGHT,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'right',
    alignSelf: 'flex-end',
    marginVertical: 15
  },
  chatAnswer2: {
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: COLOR.BLACK,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'left',
    alignSelf: 'flex-end',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },
  chatText: {
    fontFamily: FAMILY.MTN_REGULAR,
    color: 'black',
    fontSize: SIZE.SIZE_16
  },
  chatAns: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_16,
    color: COLOR.BLACK
  },
  dob: {
    flex: 1,
    height: 46
  },
  dobInput: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    paddingHorizontal: 15,
    paddingVertical: 5
  },

  /* option */
  opt: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 30,
    flexWrap: 'wrap'
  },

  optBtn: {
    width: '100%',
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1.5%',

  },
  optBtnActive: {
    width: '100%',
    backgroundColor: COLOR.DARK,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1.5%'
  },


  optBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.LIGHT
  },

  optBtnActive1: {
      flexDirection: 'row',
      justifyContent: 'space-between',

  },

  optBtnActiveText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.LIGHT
  },

  optBtnHeaderText: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_22,
    color: COLOR.LIGHT
  },

  /* footer */
  footerBg: {
    backgroundColor: COLOR.LIGHT
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 10,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  chatFtr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footerIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.PRIMARY
  },
  chatInput: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  footerBtn: {
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  footerIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.PRIMARY
  },
  sendImg: {
    backgroundColor: COLOR.LIGHT
  },

  continue: {
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  continueBtn: {
    backgroundColor: COLOR.DEFAULT,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  continueBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.LIGHT,
    textAlign: 'center'
  },

  item: {
    backgroundColor: 'red',
    margin: 0, 
    width: '50%',
    padding: 0,
    color: 'white'
  },
  grid: {
    marginBottom: 32,
    marginTop: 14,
    height: 120,
    alignItems: 'flex-start'
  },

  item: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: 'red',
    margin: 0,
    // width: "40%",
    padding: 0,
    color: COLOR.DARK,
    textAlign: "right",
    fontSize: SIZE.SIZE_14,
    fontFamily: FAMILY.MTN_BOLD,
  },
  item2: {
    flex: 1,
    color: COLOR.DARK,
    flexDirection: "column",
    // backgroundColor: 'red',
    margin: 0,
    width: "60%",
    padding: 0,
  },

  grid: {
    flexDirection: "row",
    // backgroundColor: COLOR.GREY_LIGHT,
    // flex: 2,
    marginBottom: 2,
    marginTop: 8,
    // height: 120,
  },
  optBgTest: {
    flex: 1,
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },

  optTest: {
    // flexDirection: 'row',
    paddingHorizontal: 15,
    width: "100%",
    marginBottom: 30,
    // flexWrap: 'wrap'
  },

  optBtnTest: {
    width: "100%",
    // backgroundColor: COLOR.PRIMARY,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: "1.5%",
  },
  optBtnHeaderText: {
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 10,
    padding: 8,
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_20,
    color: COLOR.LIGHT,
    textAlign: "center",
  },

  optText2: {
    backgroundColor: COLOR.BLUE,
    borderRadius: 10,
    padding: 8,
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_20,
    color: COLOR.Dark,
    textAlign: "center",
  },

}
