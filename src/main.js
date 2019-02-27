import Vue from 'vue'

import 'normalize.css/normalize.css'
import '@/assets/styles/index.styl'

/**
 * @description 全局组件，不用单独引入
 */
import {
  Cell,
  CellGroup,
  Button
} from 'vant'

import App from './App.vue'
import router from './routers'
import store from './store'

import validator from '@ignorance/vue-validator'
import VueRx from 'vue-rx'
import myPlugin from './plugin/index'

// rem布局
import 'amfe-flexible'

// icon
import './assets/icons'

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false

/**
 * 安装插件
 */
Vue.use(Cell).use(CellGroup).use(Button)
Vue.use(validator)
Vue.use(VueRx)
Vue.use(myPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
