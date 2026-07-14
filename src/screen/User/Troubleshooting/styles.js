import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  progress: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100
  },
  progressTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.GREY_DARK,
    textAlign: 'center',
    paddingVertical: 5
  },
  progressText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_DARK,
    textAlign: 'center',
    paddingVertical: 30
  },

  wifi: {
  },
  wifiHeader: {
    backgroundColor: '#c7ebd1',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 10
  },
  wifiHeaderIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.SUCCESS,
    marginRight: 10
  },
  wifiHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
  },

  wifiInfo: {
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 15,
    marginVertical: 15,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderColor: 13,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  wifiTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT,
    marginBottom: 15
  },
  wifiRow: {
    flexDirection: 'row'
  },
  wifiCol: {
    flex: 1,
  },
  wifiLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginBottom: 5
  },
  wifiValue: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
  },

  wifiSpeedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  wifiSpeedLabel: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT,
  },
  wifiSpeedValue: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
  },

  wifiGroup: {
    marginBottom: 15
  },
  wifiGroupLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginBottom: 5
  },
  wifiGroupValue: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
  },
  wifiNote: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },

  wifiHelpTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT,
  },
  wifiHelpBtn: {
    paddingVertical: 15
  },
  wifiHelpBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  }

}
