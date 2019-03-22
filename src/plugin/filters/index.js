
const numeral = require('numeral')

numeral.register('locale', 'zh', {
  delimiters: {
    thousands: ',',
    decimal: '.'
  },
  abbreviations: {
    thousand: '万',
    million: '十万',
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

var myNumeral2 = numeral('1,0000')

var value2 = myNumeral2.value()

console.log('value2', value2, filterMoney(myNumeral2))

export function filterMoney(value, arg) {
  if (!value) {
    return ''
  }
  return numeral(value).format('0,00OO.00a')
}
