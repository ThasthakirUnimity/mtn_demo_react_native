import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  /* add */
  add: {
    margin: 20
  },
  /* form */
  formGroup: {
    marginHorizontal: 5,
    marginVertical: 30,
    padding: 20
  },
  formContent: {
    borderColor: '#D9DBE2',
    borderBottomWidth: 1,
    marginBottom: 20,
    marginTop: 10
  },
  formInputHeader: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  formInput: {
    fontFamily: FAMILY.MTN_REGULAR,
    color: COLOR.GREY
  },
  dailyImgs: {
    borderColor: '#396FA5',
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    marginTop: 20,
    backgroundColor: '#F6F7FC'
  },
  shareIcon: {
    fontSize: SIZE.SIZE_36,
    color: COLOR.DEFAULT
  },
  uploadText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginVertical: 15
  },
  browseText: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DEFAULT,
    textDecorationLine: 'underline',
    borderColor: COLOR.DEFAULT
  },
  uploadImg: {
    width: 100,
    height: 100,
    borderRadius: 5
  },
  fileContentImg: {
    elevation: 10,
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 20,
    padding: 20,
    marginVertical: 20,
    borderRadius: 13
  },
  upldImg: {
    width: 64,
    height: 64,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 15
  },
  soldInfo: {
    flex: 2,
    marginBottom: 10,
    marginVertical: 15
  },
  soldLine: {
    width: '100%',
    height: 6,
    borderRadius: 10,
    backgroundColor: '#FECC2F',
    opacity: 0.3,
    zIndex: 1
  },
  soldLineActive: {
    position: 'absolute',
    height: 6,
    borderRadius: 10,
    zIndex: 2,
    backgroundColor: '#FECC2F'
  },
  timeSchedule: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  pauseIcon: {
    fontSize: SIZE.SIZE_20,
    color: COLOR.GREY,
    padding: 5,
    borderRadius: 3,
    backgroundColor: COLOR.SMOKE
  },
  closeIcon: {
    fontSize: SIZE.SIZE_20,
    padding: 5,
    borderRadius: 3,
    color: 'red',
    backgroundColor: '#FEF2F2',
    marginLeft: 10
  }
}
