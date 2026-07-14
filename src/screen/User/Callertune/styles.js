import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  header: {
    backgroundColor: COLOR.LIGHT
  },
  headerBtn: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  headerBtnIcon: {
    fontSize: SIZE.SIZE_22,
    color: COLOR.DARK
  },

  musicBg: {
    paddingHorizontal: 15
  },
  musicImg: {
    width: 300,
    height: 300,
    borderRadius: 175,
    alignSelf: 'center'
  },

  musicContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  musicLeft: {
    flex: 1
  },
  musicRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  musicTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK,
    marginBottom: 15
  },
  musicLyrist: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  musicRightBtn: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  musicRightBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.BLACK
  },
  subscribeBtn: {
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10
  },
  subscribeBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },

  progress: {
    backgroundColor: COLOR.SMOKE_DARK2,
    height: 5,
    marginHorizontal: 15,
    borderRadius: 5
  },
  progressBar: {
    positon: 'absolute',
    backgroundColor: COLOR.DEFAULT,
    height: 5,
    borderRadius: 5
  },

  reputation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    marginVertical: 20
  },
  lyrist: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    marginHorizontal: 20
  },
  reputationIcon: {
    flexDirection: 'row'
  },

  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20
  },
  optionCol: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  optionBtn: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  optionBtnIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.GREY_LIGHT
  },
  pauseBtn: {
    backgroundColor: COLOR.DEFAULT,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal: 15
  },
  pauseBtnIcon: {
    fontSize: SIZE.SIZE_40,
    color: COLOR.LIGHT
  },

  playList: {
    paddingHorizontal: 15
  },
  playListHeader: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT,
    marginBottom: 15
  },
  playListItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  playListImg: {
    width: 64,
    height: 64,
    borderRadius: 10
  },
  playListCol: {
    flex: 1,
    flexDirection: 'row'
  },
  playListLeft: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  playListRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  playListTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT,
    marginBottom: 5
  },
  playListDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  playListBtn: {
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  playSubscribeBtn: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 10
  },
  playListBtnIcon: {
    fontSize: SIZE.SIZE_16,
    color: COLOR.GREY_LIGHT
  },
  playSubscribeBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },
  playListDotBtnIcon: {
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  }
}
