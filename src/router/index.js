import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import TrainingView from '../views/TrainingView.vue'
// import ProfileView from '../views/ProfileView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/training',
    name: 'TrainingView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/TrainingView.vue'),
  },
  {
    path: '/training/:taskId',
    name: 'TrainingView',
    component: () => import('../views/TrainingView.vue'),
  },
  {
    path: '/profile',
    name: 'ProfileView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ProfileView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
