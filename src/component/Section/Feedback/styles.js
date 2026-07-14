import { FAMILY, SIZE, COLOR } from '@src/theme/typography'

export default {
  /* modal */
  modal: {
    width: '100%',
    height: '90%', 
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  modalClose: {
    justifyContent: 'space-between'
  },
  modalCloseBtn: {
    alignSelf: 'flex-end',
    paddingVertical: 15
  },
  modalCloseBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.GREYDark
  },


  feedbackHeader: {
  },
  feedbackHeaderTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT,    
    marginBottom: 30
  },

  feedbackGroup: {
    marginBottom: 40
  },
  feedbackRow: {
    flex: 1,
    flexDirection: 'row'
  },
  feedbackCol: {
    flex: 1,
  },
  feedbackQuestion: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,  
    marginBottom: 15
  },
  feedbackInput: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: COLOR.SMOKE_DARK3,
    minHeight: 100,
    textAlignVertical: 'top',
    borderRadius: 10
  },
  feedbackOption: {
    flexDirection: 'row'
  },
  feedbackCheck: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: COLOR.SMOKE_DARK3,
    borderRadius: 30,
    marginRight: 10,
    marginBottom: 10
  },
  feedbackCheckText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
  },
  feedbackCheckActive: {
    borderWidth: 1,
    borderColor: COLOR.PRIMARY,
    backgroundColor: COLOR.PRIMARY
  },
  feedbackCheckActiveText: {
    color: COLOR.BLACK,
  },

  feedbackBtn: {
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 30,
    alignSelf: 'center'
  },
  feedbackBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BUTTON_TEXT
  },

}
