import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './store'

import config from '@/config'
import importDirective from '@/directive'


Vue.config.productionTip = false

/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * 注册指令
 */
importDirective(Vue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
