import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/training',
    name: 'TrainingListView',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/TrainingView.vue'),
  },
  {
    path: '/training/:taskId',
    name: 'TrainingDetailView',
    component: () => import('../views/TrainingView.vue'),
  },
  {
    path: '/profile',
    name: 'ProfileView',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ProfileView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
