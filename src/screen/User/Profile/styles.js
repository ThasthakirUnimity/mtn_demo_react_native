import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 20
  },
  profileAvatar: {
    width: 80,
    alignItems: 'center',
    marginHorizontal: 15
  },
  profileAvatarBg: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: COLOR.PRIMARY
  },
  profileAvatarImg: {
    width: 66,
    height: 66,
    borderRadius: 33
  },
  profileInfo: {
    flex: 1
  },
  profileRow: {
    flexDirection: 'row'
  },
  profilePlan: {
    flexDirection: 'row',
    marginBottom: 20
  },
  profilePlanText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GOLD
  },

  profileText: {
    fontFamily: FAMILY.MTN_LIGHT,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },
  profileLast: {
    marginRight: 15
  },
  profileBtn: {
    borderWidth: 1,
    borderColor: COLOR.DEFAULT,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  profileBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT
  },
  profileDetail: {
    backgroundColor: COLOR.LIGHT,
    borderRadius: 13,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
    paddingTop: 20,
    paddingHorizontal: 20
  },
  profileGroup: {
    marginBottom: 20
  },
  profileLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginBottom: 5
  },
  profileValue: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },

  /* profile  */
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.LIGHT,
    borderRadius: 15,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    paddingLeft: 10,
    paddingRight: 15,
    paddingBottom: 20
  },
  profileContent: {
    flexDirection: 'row'
  },
  overlayBorder: {
    width: 78,
    height: 78,
    borderRadius: 39,
    marginTop: 30
  },
  profileImg: {
    position: 'absolute',
    width: 64,
    height: 64,
    borderRadius: 48,
    marginTop: 42,
    marginLeft: 7
  },
  profileName: {
    marginLeft: 10,
    color: COLOR.yellow
  },
  profileId: {
    marginVertical: 3
  },
  editBtn: {
    borderColor: COLOR.DEFAULT,
    borderWidth: 1,
    borderRadius: 13,
    marginTop: 20,
    marginHorizontal: 20,
    marginVertical: 30,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  /* form */
  formGroup: {
    backgroundcolor: COLOR.LIGHT,
    borderRadius: 13,
    elevation: 5,
    shadowOffset: {
      width: 7,
      height: 7
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  formInput: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginTop: 5,
    marginBottom: 20
  },
  linkedAcount: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: COLOR.SMOKE,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  logo: {
    width: 56,
    height: 56
  },
  linkContentRow: {
    marginLeft: 10
  },
  linkCol: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  linkedInitial: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLOR.SMOKE_DARK2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  linkedInitialText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT
  },
  linkCol2: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  linkCol3: {
    alignItems: 'flex-end'
  },
  linkTrash: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK,
    marginBottom: 5
  },
  linkName: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  linkNumber: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  linkText: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT
  }
}
