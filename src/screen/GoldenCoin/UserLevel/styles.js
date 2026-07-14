import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* User */
  userHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  userCol: {
    paddingHorizontal: 15
  },
  userRow: {
    flexDirection: 'row',
    marginVertical: 5
  },
  userName: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT
  },
  userPlan: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },

  /* Coins */
  coin: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  coinBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  coinBg: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.SMOKE,
    borderRadius: 10,
    marginBottom: 10
  },
  coinImg: {
    width: 28,
    height: 28
  },
  coinRow: {
    flexDirection: 'row',
    marginVertical: 5
  },
  coinName: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT
  },
  coinPts: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },

  /* How it works */
  work: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  workRow: {
    flexDirection: 'row'
  },
  workTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT,
    marginBottom: 15
  },
  workItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  workBg: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: COLOR.SMOKE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  workImg: {
    width: 54,
    height: 54
  },
  workCol: {
    flex: 1,
    paddingHorizontal: 15
  },
  workDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },




  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 13,
    padding: 20
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
    width: 70,
    height: 70,
    borderRadius: 35
  },
lbImage: {
    width: 78,
    height: 78,
    borderRadius: 36
},
overlaymage: {
    width: 78,
    height: 78,
    borderRadius: 36,
    position: 'absolute',
    borderColor: COLOR.default,
    opacity: 0.3,
    borderWidth: 3
},
profileContent: {
    flexDirection: 'row',
    alignItems: 'center'
},
profileId: {
    marginTop: 10,
    marginBottom: 8
},
profileDetail: {
    marginLeft: 15
},
coinContent:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: 25,
  marginTop: 10,
  marginBottom: 30
},
coinContentSelect:{
  alignItems: 'center'
},
coinSelect:{
  width: 70,
  height: 70,
  borderRadius: 13,
  backgroundColor: COLOR.bgColor,
  alignItems: 'center',
  justifyContent: 'center'
},
membershipSelect:{
  marginVertical: 10
},
  header: {
    marginHorizontal: 20
  },
  userLevel: {
    marginBottom: 20
  },
  levelContainer: {
    width: '100%',
    marginHorizontal: 20,
    marginTop: 15
  },
  levelContent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 5
  },
  logoBg: {
    width: 62,
    height: 62,
    borderRadius: 31,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.bgColor,
    marginRight: 15
  },
  logo: {
    textAlign: 'center'
  },
  date: {
    marginTop: 5
  },
  menuItemImg: {
    width: 16,
    height: 16
  },

}
