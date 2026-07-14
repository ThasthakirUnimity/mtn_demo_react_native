import { FAMILY, SIZE, COLOR } from '@src/theme/typography'

export default {
  /* modal */
  modal: {
    width: '90%',
    minHeight: '25%',
    height: 'auto',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 30
  },

  modalHeader: {
    fontFamily: FAMILY.GEO_MEDIUM,
    fontSize: SIZE.SIZE_20,
    color: COLOR.DARK,
    textAlign: 'center',
    marginBottom: 30
  },
  modalClose: {
    justifyContent: 'space-between'
  },
  modalCloseBtn: {
    alignSelf: 'flex-end'
  },
  modalCloseBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.GREYDark
  },

  modalText: {
    fontFamily: FAMILY.GEO_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 30
  },
  modalBtn: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  modalCancelBtn: {
    borderColor: COLOR.smoke,
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginRight: 10
  },
  modalCancelBtnText: {
    fontFamily: FAMILY.GEO_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BUTTON_TEXT
  },
  modalByeBtn: {
    backgroundColor: COLOR.PRIMARY,
    borderColor: COLOR.PRIMARY,
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  modalByeBtnText: {
    fontFamily: FAMILY.GEO_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BUTTON_TEXT
  }
}
