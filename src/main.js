import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'

import validator from '@ignorance/vue-validator'
import myPlugin from './plugin/index'

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false

/**
 * 注册指令
 */

Vue.use(validator)
Vue.use(myPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
