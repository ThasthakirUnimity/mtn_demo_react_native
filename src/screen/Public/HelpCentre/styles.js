import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  compatibleBtn: {
    width: 120,
    bordercolor: COLOR.LIGHT,
    borderWidth: 1,
    borderRadius: 18,
    alignItems: 'center',
    paddingVertical: 10,
    marginRight: 20
  },

  /* profile  */
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: COLOR.LIGHT,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },
  profileContent: {
    flexDirection: 'row',
    paddingVertical: 10
  },
  profileImg: {
    width: 48,
    height: 48,
    borderRadius: 24
  },
  profileDetail: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  profileCol: {
    flex: 1
  },
  profileName: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_LIGHT,
    marginBottom: 5
  },
  profileNameSm: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    marginBottom: 5
  },
  profileNo: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  profileNoSM: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },
  pickerSelection: {
  },
  pickerSelectionIcon: {
    fontSize: SIZE.SIZE_20,
    color: COLOR.GREY_DARK
  },
  pickerSelect: {

  },
  line: {
    borderColor: COLOR.SMOKE_DARK,
    borderLeftWidth: 1,
    height: 50,
    marginHorizontal: 10
  },

  /* Contact */
  contactContainer: {
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 13,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },
  contactHeader: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.BLACK,
    marginBottom: 15
  },
  contactDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginBottom: 30
  },
  contactBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  contactCol: {
    width: 36
  },
  contactBtnImg: {
    width: 24
  },
  contactBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT
  },

  /* Issues */
  reqContainer: {
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 13,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },
  reqContent: {
    flex: 1,
    flexDirection: 'row'
  },
  reqCol: {
    flex: 1
  },
  reqHeader: {
    flexDirection: 'row'
  },
  reqTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.BLACK,
    marginBottom: 15
  },
  reqRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  reqName: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT,
    marginBottom: 5
  },
  reqStatus: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT
  },
  reqTime: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  reqIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.GREY_LIGHT,
    marginRight: 5
  },
  reqIconActive: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.SUCCESS,
    marginRight: 5
  },
  reqBot: {
    marginTop: 15
  },
  reqBotRow: {
    flexDirection: 'row'
  },
  reqSubTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT,
    marginBottom: 5
  },
  reqDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },

  profileInfo: {
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 13,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },
  profileHeader: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.BLACK,
    marginBottom: 15
  },
  profileDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginBottom: 30
  },

  helpText: {
    marginTop: 10,
    marginBottom: 20
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  chatbotImg: {
    widht: 22,
    height: 22,
    marginRight: 8
  },
  chatbotIcon: {
    color: COLOR.PRIMARY,
    marginRight: 20
  },
  helpText2: {
  },
  /* status */
  statusInfo: {
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 13,
    elevation: 5,
    shadowOffset: {
      width: 7,
      height: 7
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  statusRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 20
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  timing: {
    marginTop: 4
  },
  /* walkthrough */
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20
  },
  walkthroughContainer: {
    paddingHorizontal: 10,
    marginTop: 15
  },
  walkthroughContent: {
    width: 176,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13,
    elevation: 5,
    shadowOffset: {
      width: 7,
      height: 7
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  walkthroughDisplay: {
    width: '100%',
    height: 129
  },
  walkthroughImg: {
    width: '100%',
    height: '100%'
  },
  walkthroughText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_DARK,
    marginTop: 10,
    marginBottom: 10,
    padding: 15
  },

  /* features */
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 20
  },
  headerTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  headerBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.PRIMARY
  },

  featureContainer: {
    paddingLeft: 10,
    marginTop: 15
  },
  featureContent: {
    width: 76,
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: 'center'
  },
  featureImg: {
    alignSelf: 'center',
    width: 30,
    height: 30
  },
  featureImgDisplay: {
    width: 76,
    height: 76,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.SMOKE
  },
  featureText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 30,
    textAlign: 'center'
  },
  /* modalProfile */
  modalProfile: {
    height: '50%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  profileSelect: {
    marginTop: 25
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    elevation: 8,
    shadowOffset: {
      width: 15,
      height: 15
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 20
  },
  profileRowActive: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    elevation: 8,
    shadowOffset: {
      width: 15,
      height: 15
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 20
  },
  recognitionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  recognitionRowActive: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  recognitionImg: {
    width: 58,
    height: 58
  },
  iconStyle: {

  },
  recognitionText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginLeft: 20
  },
  recognitionNo: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginLeft: 20
  },
  /* FAQ */
  answerText: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20
  },
  faqItem: {
    marginHorizontal: 20,
    marginVertical: 8,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: COLOR.LIGHT,
    shadowColor: COLOR.SHADOW,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },
  faqBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  faqBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_DARK,
    marginHorizontal: 10
  },
  faqBtnTextActive: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT,
    marginHorizontal: 10
  },
  faqBtnIcon: {
    fontSize: SIZE.SIZE_20,
    color: COLOR.GREY_DARK
  },
  faqData: {

  },
  faqRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20
  },
  faqCategory: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  faqTitle: {
    flex: 1,
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK2
  },
  faqAns: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginTop: 10,
    lineHeight: 20
  },

  /* modalChat */
  modalChat: {
    height: '60%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'space-between'
  },
  chatImg: {
    width: 80,
    height: 80
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginRight: 20
  },
  chatAssist: {
    backgroundColor: COLOR.LIGHT,
    padding: 15,
    borderRadius: 5,
    elevation: 5,
    shadowOffset: {
      width: 7,
      height: 7
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  chatAssistText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_DARK
  },
  calText: {
    backgroundColor: COLOR.LIGHT,
    padding: 15,
    borderRadius: 5,
    marginLeft: 80,
    marginRight: 20,
    marginVertical: 30,
    paddingVertical: 25,
    elevation: 5,
    shadowOffset: {
      width: 7,
      height: 7
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  /* footer */
  footerBg: {
    backgroundcolor: COLOR.LIGHT
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    paddingHorizontal: 15,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 10,
    elevation: 5,
    shadowOffset: {
      width: 7,
      height: 7
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  chatFtr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  chatInput: {
    marginLeft: 15
  },
  sendImg: {
    width: 46,
    heigth: 46
  },
  /* modalCall */
  modalCall: {
    height: '40%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 50
  },
  callHeader: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.BLACK,
    marginHorizontal: 20,
    marginBottom: 20
  },
  callLog: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 13,
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 25,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },
  callLogText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY
  },
  callLog2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  callNumb: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    marginLeft: 20
  },
  callLogIcon: {
    fontSize: SIZE.SIZE_16,
    color: COLOR.BLACK
  },

  /* modalVideo */
  modalVideo: {
    width: '90%',
    height: '40%'
  },
  /* modalPuk */
  modalPuk: {
    height: '60%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 40
  },
  pukContent: {
    alignItems: 'center',
    paddingHorizontal: 30
  },
  pukBg: {
    backgroundColor: COLOR.SMOKE,
    width: 92,
    height: 92,
    borderRadius: 46,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pukImg: {
    width: 44,
    height: 40
  },
  pukTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.BLACK,
    textAlign: 'center',
    marginVertical: 20
  },
  pukDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    textAlign: 'center',
    marginVertical: 10
  },
  pukNo: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_28,
    color: COLOR.BLACK,
    textAlign: 'center',
    marginVertical: 20
  },
  pukRow: {
    flexDirection: 'row'
  },
  pukCol: {
    flex: 1
  },
  pukLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  pukNotes: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY
  },

  helpContent: {
    paddingTop: 15
  },
  helpDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  helpMore: {
    marginTop: 15,
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start'
  },
  helpMoreText: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT
  }
}
