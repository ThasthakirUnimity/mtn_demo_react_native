import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  },
  profileAvatar: {
    width: 80,
    marginHorizontal: 15,
    alignItems: 'center'
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
    marginBottom: 10
  },
  profilePlanText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GOLD
  },
  profileName: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT,
    marginBottom: 5
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
    backgroundColor: COLOR.PRIMARY,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  profileBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.BUTTON_TEXT
  },

  menuContainer: {
    backgroundColor: COLOR.LIGHT,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 13,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },
  menuHeader: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    marginBottom: 20
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 10
  },
  menuCol: {
    width: 36
  },
  menuItemText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK
  },
  menuItemImg: {
    width: 16,
    height: 16
  }

}
