import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  saveBtn: {
    marginRight: 20
  },
  saveBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT
  },

  /* profile  */
  profileContainer: {
    alignSelf: 'center',
    marginTop: 30
  },
  profileImg: {
    width: 96,
    height: 96,
    borderRadius: 48
  },
  editBtn: {
    width: 32,
    height: 32,
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.LIGHT,
    borderRadius: 16,
    elevation: 5,
    shadowOffset: {
      width: 7,
      height: 7
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  editBtnIcon: {
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },

  /* form */
  formGroup: {
    marginHorizontal: 20,
    marginVertical: 30,
    paddingVertical: 20
  },
  formLabel: {
    flexDirection: 'row'
  },
  formLabelText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  formContent: {
    borderColor: COLOR.SMOKE_DARK2,
    borderBottomWidth: 1,
    marginBottom: 20
  },
  formPicker: {
    borderBottomWidth: 0
  },
  formCol: {
    flexDirection: 'row',
    marginTop: 10
  },
  radioRow: {
    flexDirection: 'row',
    marginRight: 15
  },
  formInput: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginBottom: 5,
    paddingVertical: 10
  },
  formAddressInput: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    borderColor: COLOR.SMOKE_DARK2,
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingVertical: 10
  }
}
