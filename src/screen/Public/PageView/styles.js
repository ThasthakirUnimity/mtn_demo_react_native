import { COLOR, FAMILY, SIZE } from '@src/theme/typography'

export default {
  page: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  pageTop: {
    flex: 1
  },
  pageBot: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 20,
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
    color: COLOR.BLACK
  },

  markdown: {
    blockQuote: {
      marginLeft: 10,
      opacity: 0.8
    },
    codeBlock: {
      fontFamily: 'Courier',
      fontWeight: '500',
      color: '#333'
    },
    del: {
      textDecorationLine: 'line-through'
    },
    em: {
      fontStyle: 'italic',
      color: '#333'
    },
    heading: {
      fontWeight: '700',
      color: '#333'
    },
    heading1: {
      fontSize: 32,
      marginTop: 22,
      marginBottom: 22,
      marginLeft: 0,
      marginRight: 0,
      color: '#333'
    },
    heading2: {
      fontSize: 24,
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 0,
      marginRight: 0,
      color: '#333'
    },
    heading3: {
      fontSize: 20,
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 0,
      marginRight: 0,
      color: '#333'
    },
    heading4: {
      fontSize: 16,
      marginTop: 22,
      marginBottom: 22,
      marginLeft: 0,
      marginRight: 0,
      color: '#333'
    },
    heading5: {
      fontSize: 14,
      marginTop: 22,
      marginBottom: 22,
      marginLeft: 0,
      marginRight: 0,
      color: '#333'
    },
    heading6: {
      fontSize: 11,
      marginTop: 24,
      marginBottom: 24,
      marginLeft: 0,
      marginRight: 0,
      color: '#333'
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
      fontWeight: '500'
    },
    link: {
      color: '#0366d6'
    },
    list: {
      margin: 8,
      color: '#333'
    },
    listItem: {
      flexDirection: 'row',
      color: '#333'
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
      marginBottom: 10,
      lineHeight: 24,
      color: '#333'
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
