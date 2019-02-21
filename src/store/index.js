import Vue from 'vue'
import Vuex from 'vuex'

import module from './module'
console.log('module', module)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: module.modules
})
