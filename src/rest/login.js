import ajax from '../common/ajax'

export default {
  logReg: {
    login: ajax.post('/login/login', {
      returnRes: true
    }),
    userInfo: ajax.get('/customer/customerinfo')
  }
}
