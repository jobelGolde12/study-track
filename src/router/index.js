import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/left',
    name: 'leftSidebarComponent',
    component: () => import('../views/LeftComponent.vue')
  },
  {
    path: '/',
    name: 'homeComponent',
    component: () => import('../views/rightContent/HomeComponent.vue')
  },
  {
    path: '/upcoming',
    name: 'upcomingComponent',
    component: () => import('../views/rightContent/UpcomingComponent.vue')
  },
  {
    path: '/newSubject',
    name: 'newSubject',
    component: () => import('../views/rightContent/NewSubject.vue')
  },
  {
    path: '/addTodo',
    name: 'addTodo',
    component: () => import('../views/rightContent/NewTodo.vue')
  },
  {
    path: '/editTodo',
    name: 'editTodo',
    component: () => import('../views/rightContent/EditTodo.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
