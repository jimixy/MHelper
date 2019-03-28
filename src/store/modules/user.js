import {
  vueInstance
} from '@/main'

const user = {
  state: {
    userInfo: localStorage.getItem('userInfo') && localStorage.getItem('userInfo') !== 'undefined'
      ? JSON.parse(localStorage.getItem('userInfo')) : null
  },
  mutations: {
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }
  },
  actions: {
    loginOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_USERINFO', '')
        localStorage.clear()
        resolve()
      })
    },
    getUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        vueInstance.$rest.logReg.userInfo().then(res => {
          commit('SET_USERINFO', res)
          resolve(res)
        })
      })
    }
  }
}

export default user
