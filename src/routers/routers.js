import Layout from '@/views/layout'

export default [{
  path: '',
  component: Layout,
  children: [{
    path: '/home',
    name: 'home',
    meta: {
      title: 'MHelper',
      hasTab: true
    },
    component: () => import('@/views/home')
  },
  {
    path: '/information',
    name: 'information',
    meta: {
      title: '资讯',
      hasTab: true
    },
    component: () => import('@/views/information')
  },
  {
    path: '/person',
    name: 'person',
    meta: {
      title: '个人中心',
      hasTab: true
    },
    component: () => import('@/views/person')
  }
  ]
}]
