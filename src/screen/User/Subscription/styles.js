import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  formContainer: {
    flex: 1
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  profileCol: {
    flex: 1,
    flexDirection: 'row'
  },
  profileRow: {
    marginHorizontal: 15
  },
  profileName: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT,
    marginBottom: 5
  },
  profileNo: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DEFAULT
  },
  profileBtn: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  profileBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK
  },

  headerTitle: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20
  },
  renewalContainer: {
    marginTop: 10
  },
  accordion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 15,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  placeholder: {
    marginHorizontal: 15
  },
  placeholderImg: {
    width: '100%',
    height: 100,
    borderRadius: 10
  },
  accordionCol: {
    flex: 1,
    flexDirection: 'row'
  },
  accordionContent: {
    flex: 1,
    marginLeft: 15
  },
  accordionRow: {
    flex: 1
  },
  accordionImg: {
    width: 68,
    height: 68,
    borderRadius: 13
  },
  accordionTitle: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    marginBottom: 5
  },
  accordionText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    marginBottom: 10
  },
  accordionBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.PRIMARY
  },
  accordionIcon: {
    fontSize: SIZE.SIZE_20,
    color: COLOR.BLACK
  },

  /* accordion */
  package: {
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20
  },
  packageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 15,
    borderColor: COLOR.SMOKE_DARK,
    borderBottomWidth: 1
  },
  packageImg: {
    width: 34,
    height: 34
  },
  packageCol: {
    paddingHorizontal: 15
  },
  packageName: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    marginBottom: 5
  },
  packageDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    marginBottom: 10
  },
  packageBody: {

  },
  packageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  packageLabel: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT
  },
  packageValue: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK
  },

  packageBtn: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignSelf: 'center'
  },
  packageBtnText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.PRIMARY
  }

}
