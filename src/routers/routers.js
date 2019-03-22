import Layout from '@/views/layout'

export default [{
  path: '',
  component: Layout,
  children: [{
    path: '/home',
    name: 'home',
    meta: {
      title: 'MHelper',
      tabIndex: 0
    },
    component: () => import('@/views/home')
  },
  {
    path: '/information',
    name: 'information',
    meta: {
      title: '资讯',
      tabIndex: 1
    },
    component: () => import('@/views/information')
  },
  {
    path: '/person',
    name: 'person',
    meta: {
      title: '我的',
      tabIndex: 2
    },
    component: () => import('@/views/person')
  },
  {
    path: '/attentionminip',
    name: 'attentionminip',
    meta: {
      title: '关注小程序'
    },
    component: () => import('@/views/attentionMiniP')
  }

  ]
}]