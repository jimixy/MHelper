import Vue from 'vue'

import 'normalize.css/normalize.css'
import '@/assets/styles/index.styl'

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
 * @description 全局组件，不用单独引入
 */
import {
  Cell,
  CellGroup,
  Button,
  Field,
  Icon,
  Dialog,
  Toast,
  NavBar,
  Tag
} from 'vant'

const components = [
  Cell,
  CellGroup,
  Button,
  Field,
  Icon,
  Dialog,
  Toast,
  NavBar,
  Tag
]

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false

/**
 * 安装插件
 */

components.forEach(Component => {
  Vue.use(Component)
})

Vue.use(validator)
Vue.use(VueRx)
Vue.use(myPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
