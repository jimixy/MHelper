import ajax from '../common/ajax'

export default {
  logReg: {
    login: ajax.post('/login/login', {
      returnRes: true
    }),
    forget: ajax.post('/login/forgetPassword'),
    registry: ajax.post('/login/registry', {
      returnRes: true
    }),
    getICode: ajax.get('/login/getICode'),
    userInfo: ajax.get('/customer/customerinfo')
  }
}
