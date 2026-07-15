import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  headerTitle: {
    marginHorizontal: 20
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  pageTop: {
    flex: 1
  },
  pageBot: {
    marginTop: 20,
    marginHorizontal: 20,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },

  pageRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  pageTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.BLACK
  },
  pageDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_DARK,
    lineHeight: 20
  },

  pageForm: {
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginVertical: 20,
    shadowColor: COLOR.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 20
  },
  pageBtn: {
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pageBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT
  },
  pageAcceptedBtn: {
    flexDirection: 'row',
    backgroundColor: COLOR.BLUE,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'center'
  },
  pageAcceptedBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT
  },
  pageAcceptedBtnIcon: {
    fontSize: SIZE.SIZE_20,
    color: COLOR.LIGHT,
    marginHorizontal: 10
  },

  markdown: {
    blockQuote: {
      marginLeft: 10,
      opacity: 0.8
    },
    codeBlock: {
      fontFamily: 'Courier',
      fontWeight: '500',
      color: COLOR.DARK
    },
    del: {
      textDecorationLine: 'line-through'
    },
    em: {
      fontStyle: 'italic'
    },
    heading: {
      fontWeight: '700',
      color: COLOR.DARK
    },
    heading1: {
      fontSize: 32,
      marginTop: 22,
      marginBottom: 22,
      marginLeft: 0,
      marginRight: 0
    },
    heading2: {
      fontSize: 24,
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 0,
      marginRight: 0
    },
    heading3: {
      fontSize: 20,
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 0,
      marginRight: 0
    },
    heading4: {
      fontSize: 16,
      marginTop: 22,
      marginBottom: 22,
      marginLeft: 0,
      marginRight: 0
    },
    heading5: {
      fontSize: 14,
      marginTop: 22,
      marginBottom: 22,
      marginLeft: 0,
      marginRight: 0
    },
    heading6: {
      fontSize: 11,
      marginTop: 24,
      marginBottom: 24,
      marginLeft: 0,
      marginRight: 0
    },
    hr: {
      backgroundColor: '#ccc',
      height: 1
    },
    imageWrapper: {
      padding: 4,
      width: 320,
      height: 320
    },
    image: {
      flexGrow: 1
    },
    inlineCode: {
      backgroundColor: 'rgba(128, 128, 128, 0.25)',
      fontFamily: 'Courier',
      fontWeight: '500',
      color: COLOR.DARK
    },
    link: {
      color: '#0366d6'
    },
    list: {
      margin: 8
    },
    listItem: {
      flexDirection: 'row'
    },
    listItemNumber: {
      minWidth: 32,
      paddingRight: 4
    },
    listItemBullet: {
      minWidth: 32,
      paddingRight: 4
    },
    listItemOrderedContent: {
      flex: 1
    },
    listItemUnorderedContent: {
      flex: 1
    },
    paragraph: {
      marginTop: 10,
      marginBottom: 15,
      fontFamily: FAMILY.MTN_REGULAR,
      fontSize: SIZE.SIZE_14,
      color: COLOR.DARK,
      lineHeight: 24
    },
    strong: {
      fontWeight: '700'
    },
    table: {
      margin: 4,
      borderColor: '#222'
    },
    tableHeaderCell: {
      borderColor: '#222'
    },
    tableHeaderCellContent: {
      fontWeight: '700'
    },
    tableCell: {
      padding: 5
    },
    tableCellOddRow: {
      backgroundColor: 'rgba(128, 128, 128, 0.1)'
    },
    tableCellEvenRow: {},
    tableCellLastRow: {
      borderBottomWidth: 0
    },
    tableCellOddColumn: {},
    tableCellEvenColumn: {},
    tableCellLastColumn: {
      borderRightWidth: 0
    },
    tableCellContent: {},
    tableCellContentOddRow: {},
    tableCellContentEvenRow: {},
    tableCellContentLastRow: {},
    tableCellContentOddColumn: {},
    tableCellContentEvenColumn: {},
    tableCellContentLastColumn: {},
    u: {
      textDecorationLine: 'underline'
    }
  }
}
