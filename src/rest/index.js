import ajax from '../common/ajax'
import logRge from './login'
import news from './news'

export default {
  ...logRge,
  ...news,
  hehe: {
    test: ajax.get('/test')
  }
}
