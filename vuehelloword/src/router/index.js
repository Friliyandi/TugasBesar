import { createRouter, createWebHistory } from 'vue-router'

  const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/HelloWorld.vue')
    },
    {
      path: '/views/update/:id',
      name: 'update',
      component: () => import('@/components/views/UpdatePage.vue')
    },
    {
      path: '/views/create',
      name: 'create',
      component: () => import('@/components/views/InsertPage.vue')
    },
    {
      path: '/views',
      name: 'index',
      component: () => import('@/components/views/IndexPage.vue')
    }
 
 
  ]
})

export default router
