import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'

import validator from '@ignorance/vue-validator'
import VueRx from 'vue-rx'
import myPlugin from './plugin/index'

// icon
import './assets/icons'

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false

/**
 * 安装插件
 */
Vue.use(validator)
Vue.use(VueRx)
Vue.use(myPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
