import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/left',
    name: 'leftSidebarComponent',
    component: () => import('../views/LeftComponent.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
