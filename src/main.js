import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'

import config from '@/config'
import importDirective from '@/directive'

/**
 * 全局filter
 */
import * as filters from '@/filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/**
 * @description 生产环境关掉提示
 */
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
