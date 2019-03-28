import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login')
  }, {
    path: '/register',
    name: 'register',
    meta: {
      title: '注册'
    },
    component: () => import('@/views/register')
  }, {
    path: '/forget',
    name: 'forget',
    meta: {
      title: '忘记密码'
    },
    component: () => import('@/views/forget')
  }
]

const routerContext = require.context('./', false, /\.js$/)

routerContext.keys().forEach(route => {
  // 如果是根目录的 index.js 、不处理
  if (route.startsWith('./index')) return
  const routerModule = routerContext(route)
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  routes = [...routes, ...(routerModule.default || routerModule)]
})

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next()
  } else {
    next()
  }
})

router.afterEach(to => {
  window.scrollTo(0, 0)
})

export default router
