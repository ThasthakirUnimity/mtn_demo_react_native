import { Platform } from 'react-native'

import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  paymentContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#FF0000'
  },
  paymentHeader: {
    paddingHorizontal: 15,
    paddingVertical: 30
  },
  paymentHeaderTitle: {
    fontFamily: FAMILY.GEO_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK,
    marginBottom: 5
  },
  paymentHeaderDesc: {
    fontFamily: FAMILY.GEO_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREYDark,
    lineHeight: 18
  },
  paymentContent: {
    flex: 1,
    paddingHorizontal: 15
  },
  paymentBtn: {
    flexDirection: 'row',
    backgroundColor: COLOR.SMOKE,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 5,
    borderRadius: 5
  },
  paymentBtnActive: {
    backgroundColor: COLOR.smokeDark
  },
  paymentBtnIcon: {
    fontSize: SIZE.large
  },
  paymentBtnContent: {
    flex: 1,
    marginLeft: 15
  },
  paymentBtnTitle: {
    fontFamily: FAMILY.GEO_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREYDark,
    marginBottom: 5
  },
  paymentBtnDesc: {
    fontFamily: FAMILY.GEO_MEDIUM,
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY,
    lineHeight: 16
  },

  /* --Modal-- */
  modal: {
    width: '100%',
    height: '100%',
    borderRadius: 5
  },
  modalHeader: {
    position: 'absolute',
    zIndex: 10,
    width: '50%',
    alignItems: 'flex-start',
    top: 0,
    marginTop: Platform.OS === 'ios' ? 50 : 10
  },
  modalHeaderBtn: {
    alignSelft: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLOR.DEFAULT,
    marginHorizontal: 15,
    marginVertical: 15
  },
  modalHeaderBtnImg: {
    width: 18,
    height: 10
  },
  modalHeaderBtnIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT
  },
  modalContent: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContentImg: {
    width: 72,
    height: 72,
    marginVertical: 20
  },
  modalContentTitle: {
    fontFamily: FAMILY.GEO_MEDIUM,
    fontSize: SIZE.SIZE_24,
    color: COLOR.GREYDark,
    textAlign: 'center',
    marginBottom: 15
  },
  modalContentDesc: {
    fontFamily: FAMILY.GEO_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    lineHeight: 20,
    textAlign: 'center'
  },
  modalOrderBtn: {
    width: '50%',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 5,
    marginTop: 30
  },
  modalOrderBtnText: {
    fontFamily: FAMILY.GEO_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.LIGHT,
    textAlign: 'center'
  }

}
