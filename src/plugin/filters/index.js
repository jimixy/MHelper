
const numeral = require('numeral')

numeral.register('locale', 'zh', {
  delimiters: {
    thousands: ',',
    decimal: '.'
  },
  abbreviations: {
    thousand: '千',
    million: '百万',
    billion: '十亿',
    trillion: '万亿'
  },
  ordinal: function (number) {
    return number === 1 ? 'er' : 'ème'
  },
  currency: {
    symbol: '￥'
  }
})

numeral.locale('zh')

export function filterMoney(value, arg) {
  if (!value) {
    return ''
  }
  return numeral(value).format('0,00OO.00a')
}
