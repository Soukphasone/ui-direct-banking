import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/home/index.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/about.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  return true
})

export default router
