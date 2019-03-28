import ajax from '../common/ajax'
import logRge from './login'

export default {
  ...logRge,
  hehe: {
    test: ajax.get('/test')
  }
}
