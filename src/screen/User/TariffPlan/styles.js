import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width

export default {
  header: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT,
    marginHorizontal: 20,
    marginTop: 30
  },
  profileContent: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 20,
    borderRadius: 13
  },
  profilePlans: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLOR.SMOKE_DARK2,
    borderBottomWidth: 1,
    paddingBottom: 25,
    marginTop: 4
  },
  layout: {
    marginRight: 30
  },
  planValidity: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  validityDays: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    marginTop: 5
  },
  dataPackage: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  packagePrice: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.BLACK
  },
  packageContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingBottom: 10
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20
  },
  tariffHeader: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT,
    marginBottom: 2
  },
  selectText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    marginTop: 8
  },
  planBtn: {
    
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    // borderRadius: 17,
    // borderColor: COLOR.DEFAULT,
    // borderWidth: 1
  },
  planBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.PRIMARY
  },
  personalPlan: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 5
  },
  personalRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: COLOR.SMOKE
  },
  mtnData: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT
  },
  checkIcon: {
    fontSize: SIZE.SIZE_28,
    color: COLOR.DEFAULT,
    marginLeft: 10
  },
  /* tab */
  share: {
    paddingRight: 15
  },
  shareProf: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 15
  },
  shareProfItemsActive: {
    flexDirection: 'row',
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 17
  },
  shareProfItems: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 17,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginHorizontal: 5
  },
  shareProfTagActive: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT,
    marginLeft: 10
  },
  shareProfTag: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginLeft: 10
  },
  /* plan */
  planContainer: {
    width: width - 40,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: COLOR.LIGHT,
    paddingBottom: 20,
    marginVertical: 20,
    borderRadius: 13
  },
  planContent: {
    paddingHorizontal: 20,
    paddingTop: 15
  },
  primaryText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    backgroundColor: COLOR.SMOKE,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  planDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  planCol: {
    flex: 1
  },
  mtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.BLACK
  },
  activatBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 17
  },
  activatBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BUTTON_TEXT
  },
  planPrice: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.BLACK,
    marginVertical: 5
  },
  annualPlan: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY
  },
  planFacility: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  planFacilityRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  facilityIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.BLACK
  },
  facilityText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    marginLeft: 10
  },
  tariffPlans: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  benefitText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginTop: 20,
    marginBottom: 10
  },
  placeholderContent: {
    marginHorizontal: 15,
    marginTop: 10
  },
  placeholderGroup: {
    width: '100%',
    height: 250,
    borderRadius: 13
  },
  /* modal */
  modalPlanHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  headerText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.BLACK,
    paddingHorizontal: 50,
    textAlign: 'center'
  },
  headerText2: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    paddingHorizontal: 50,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 40
  },
  modalPlans: {
    // minHeight: 80,
    height: '90%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center'
  },
  modalplanContent: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 50,
    borderRadius: 10
  },
  mtnplusText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    marginVertical: 5
  },
  dataFacilityText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BLACK,
    marginLeft: 10
  },
  saveText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT
  },
  confirmBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 50,
    marginBottom: 30
  },
  confirmBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BUTTON_TEXT
  },
  /* modalSuccess */
  modalSuccess: {
    minHeight: 60,
    height: 'auto',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    marginTop: 10
  },
  successContent: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  successImg: {
    width: 72,
    height: 72,
    alignSelf: 'center'
  },
  successText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.BLACK,
    marginVertical: 20
  },
  successText2: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 20
  }
}
