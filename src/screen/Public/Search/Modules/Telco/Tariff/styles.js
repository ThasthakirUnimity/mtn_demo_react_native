import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

const React = require('react-native')
const { Platform } = React
export default {
  planContainer: {
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
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
    width: 130,
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
  mtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.BLACK,
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
}
