import {
  login
} from '@/api/data'

// import { setToken, getToken } from '@/libs/util'

export default {
  state: {
    userName: ''
  },
  mutations: {
    setUserName (state, name) {
      state.userName = name
    }
  },
  getters: {
    userName: state => state.userName
  },
  actions: {
    // 登录
    handleLogin ({ commit }, { userName, password }) {
      userName = userName.trim()
      return new Promise((resolve, reject) => {
        login({
          userName,
          password
        }).then(res => {
          const data = res.data
          commit('setToken', data.token)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
