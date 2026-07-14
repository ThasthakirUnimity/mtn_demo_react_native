import { Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'

import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

const isTablet = DeviceInfo.isTablet() || Platform.isPad

export default {
  modalContainer: {
    width: isTablet ? 480 : '90%',
    minHeight: isTablet ? 200 : '20%',
    maxHeight: '80%',
    height: 'auto',
    borderRadius: 10
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalHeaderBtn: {
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  modalContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  modalContentIcon: {
    fontSize: SIZE.SIZE_46,
    color: COLOR.RED,
    paddingBottom: 20
  },
  modalContentTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK,
    marginBottom: 10
  },
  modalContentDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    textAlign: 'center',
    lineHeight: 18
  },
  modalCol: {
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },

  noBtn: {
    borderColor: COLOR.SMOKE_DARK,
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginRight: 10
  },
  noBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_16,
    color: COLOR.GREY
  },

  yesBtn: {
    backgroundColor: COLOR.ERROR,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: COLOR.ERROR,
    marginHorizontal: 10
  },
  yesBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT
  }

}
