import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DeveloperView from '../views/DeveloperView.vue'

import Add from '../components/AddSchedule.vue'
import Edit from '../components/EditSchedule.vue'
import List from '../components/ListSchedule.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/developer',
      name: 'developer',
      component: DeveloperView
    },    
  ]
})

export default router
