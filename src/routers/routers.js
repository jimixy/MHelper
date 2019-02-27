
import Layout from '@/views/layout'

export default [
  {
    path: '',
    component: Layout,
    children: [{
      path: '/',
      name: 'home',
      meta: {
        title: 'MHelper',
        hasTab: true
      },
      component: () => import('@/views/home')
    }]
  }
]
