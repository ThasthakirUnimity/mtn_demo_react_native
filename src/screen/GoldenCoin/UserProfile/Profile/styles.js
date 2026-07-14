import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

const React = require("react-native");
const { Platform } = React;

export default {
    /* profile  */
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 30,
        borderRadius: 13,
        padding: 20,
        elevation: 10,
        backgroundColor: COLOR.LIGHT
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
        borderColor: COLOR.PRIMARY,
        borderWidth: 3
    },
    dotRed: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: 'red',
        bottom: 0,
        right: 0,
        marginBottom: 5,
        position: 'absolute',
        borderColor: COLOR.LIGHT,
        borderWidth: 2
    },
    profileContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileLevel: {
        fontFamily: FAMILY.MTN_MEDIUM,
        fontSize: SIZE.SIZE_14,
        color: COLOR.PRIMARY
    },
    profileId: {
        fontFamily: FAMILY.MTN_MEDIUM,
        fontSize: SIZE.SIZE_14,
        color: COLOR.DEFAULT,
        marginTop: 10,
        marginBottom: 5
    },
    mailID: {
        fontFamily: FAMILY.MTN_LIGHT,
        fontSize: SIZE.SIZE_12,
        color: COLOR.DARK,
    },
    levelPoints: {
        fontFamily: FAMILY.MTN_REGULAR,
        fontSize: SIZE.SIZE_12,
        color: '#6B6B6B'
    },
    profileDetail: {
        marginLeft: 15
    },
    editBtn: {
        borderColor: COLOR.DEFAULT,
        borderWidth: 1,
        borderRadius: 13,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop: 60
    },
    playerStatus: {
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 13,
        paddingHorizontal: 20,
        paddingVertical: 30,
        elevation: 10,
        backgroundColor: COLOR.LIGHT
    },
    voteDetail: {

    },
    soldInfo: {
        flex: 2,
        marginBottom: 10
    },
    soldLine: {
        width: '100%',
        height: 6,
        borderRadius: 10,
        backgroundColor: '#D4E4F7',
        zIndex: 1,
    },
    soldLineActive: {
        position: 'absolute',
        height: 6,
        borderRadius: 10,
        zIndex: 2,
        backgroundColor: COLOR.DEFAULT
    },
    voteNum: {
    },
    levelDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: COLOR.SMOKE_DARK,
        borderBottomWidth: 1,
        paddingBottom: 30,
        marginBottom: 30
    },
    levelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statusText: {
        fontFamily: FAMILY.MTN_MEDIUM,
        fontSize: SIZE.SIZE_14,
        color: COLOR.DEFAULT
    },
    time: {
        fontFamily: FAMILY.MTN_REGULAR,
        fontSize: SIZE.SIZE_14,
        color: COLOR.DEFAULT,
        opacity: 0.5
    },
    /* badge */
    badgeText: {
        fontFamily: FAMILY.MTN_MEDIUM,
        fontSize: SIZE.SIZE_18,
        color: COLOR.DARK
    },
    badge: {
        flexDirection: 'row',
        borderColor: COLOR.SMOKE_DARK,
        borderBottomWidth: 1,
        paddingBottom: 20,
        marginBottom: 20
    },
    badgeImg: {
        width: 50,
        height: 50,
        marginTop: 15
    },
    gameImg: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 10,
        marginTop: 15
    },
    frnds: {
        flexDirection: 'row',
        marginBottom: 20
    },
    frndImg: {
        width: 42,
        height: 42,
        borderRadius: 21,
        marginRight: 10,
        marginTop: 15
    },
}