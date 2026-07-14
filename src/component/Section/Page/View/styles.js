import { FAMILY, SIZE, COLOR } from '@src/theme/typography'

export default {
  /* modal */
  modal: {
    width: '90%',
    height: '90%',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  modalClose: {
    justifyContent: 'space-between'
  },
  modalCloseBtn: {
    alignSelf: 'flex-end'
  },
  modalCloseBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.GREYDark
  },

  modalHeader: {
    fontFamily: FAMILY.GEO_MEDIUM,
    fontSize: SIZE.SIZE_36,
    color: COLOR.DARK,
    textAlign: 'center',
    marginBottom: 30
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  headerLine: {
    height: 32,
    borderLeftWidth: 1.5,
    borderColor: COLOR.PRIMARY,
    marginRight: 10
  },
  headerTitle: {
    fontFamily: FAMILY.GEO_SEMIBOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.SUB_TITLE
  },
  headerSubTitle: {
    fontFamily: FAMILY.GEO_MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK
  },
  content: {
    marginBottom: 30
  },
  desc: {
    fontFamily: FAMILY.CHIRP_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    lineHeight: 24,
    marginBottom: 20
  },
  linkTitle: {
    fontFamily: FAMILY.GEO_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLUE,
    lineHeight: 22,
    marginBottom: 20
  },

  markdown: {
    blockQuote: {
      marginLeft: 10,
      opacity: 0.8
    },
    codeBlock: {
      fontFamily: 'Courier',
      fontWeight: '500'
    },
    del: {
      textDecorationLine: 'line-through'
    },
    em: {
      fontStyle: 'italic'
    },
    heading: {
      fontWeight: '700'
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
      fontWeight: '500'
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
      marginBottom: 10
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
