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
  },
  {
    path: '/infoDetail',
    name: 'infoDetail',
    meta: {
      title: '资讯详情'
    },
    component: () => import('@/views/information/components/infoDetail')
  },
  {
    path: '/tradGuide',
    name: 'tradGuide',
    meta: {
      title: '交易指南'
    },
    component: () => import('@/views/tradGuide')
  },
  {
    path: '/giveReward',
    name: 'giveReward',
    meta: {
      title: '我要打赏'
    },
    component: () => import('@/views/giveReward')
  },
  {
    path: '/myScore',
    name: 'myScore',
    meta: {
      title: '我的业绩'
    },
    component: () => import('@/views/myScore')
  },
  {
    path: '/beHolders',
    name: 'beHolders',
    meta: {
      title: '成为股东'
    },
    component: () => import('@/views/beHolders')
  }

  ]
}]
