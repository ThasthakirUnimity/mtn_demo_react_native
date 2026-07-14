import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  inviteBg: {
    backgroundColor: COLOR.LIGHT
  },
  invite: {
    paddingHorizontal: 15,
    paddingVertical: 30
  },
  inviteHeader: {
  },
  inviteTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT,
    marginBottom: 15
  },
  inviteDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    marginBottom: 30
  },
  inviteBtn: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    alignSelf: 'flex-start',
    borderWidth: 2,
    borderColor: COLOR.SMOKE_DARK3,
    borderRadius: 30
  },
  inviteBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  inviteImg: {
    width: '100%',
    height: 200
  }
}
