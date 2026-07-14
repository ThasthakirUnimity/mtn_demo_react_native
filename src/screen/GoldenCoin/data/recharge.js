import { CURRENCY, APP_DETAILS } from '@src/theme/typography'

const Entry = [
  {
    image: require('@asset/images/recharge.png'),
    desc: 'Recharge Phone',
    points: 'Get up to '+ CURRENCY.SYMBOL +'10000 \nCashback'
  },
  {
    image: require('@asset/images/paybills.png'),
    desc: 'Pay Credit Card Bill',
    points: 'Get up to '+ CURRENCY.SYMBOL +'10000 \nCashback'
  },
  {
    image: require('@asset/images/recharge.png'),
    desc: 'Add money to \n'+ APP_DETAILS.APP_WALLET_NAME +'',
    points: 'Get up to '+ CURRENCY.SYMBOL +'10000 \nCashback'
  },
  {
    image: require('@asset/images/paybills.png'),
    desc: 'Add money to \n'+ APP_DETAILS.APP_WALLET_NAME +'',
    points: 'Get up to '+ CURRENCY.SYMBOL +'10000 \nCashback'
  },
]

export default Entry
