import { Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'

import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

const isTablet = DeviceInfo.isTablet() || Platform.isPad

export default {
  modalContainer: {
    width: '90%',
    minHeight: '30%',
    maxHeight: '80%',
    height: 'auto',
    borderRadius: 5,
    paddingBottom: 40
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalHeaderBtn: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  modalHeaderIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.GREY,
    alignSelf: 'flex-end'
  },
  modalContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 30
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
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },

  yesBtn: {
    backgroundColor: COLOR.RED,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLOR.RED,
    marginHorizontal: 10
  },
  yesBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT
  }
}
