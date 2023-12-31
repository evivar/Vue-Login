import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import WelcomeView from '../views/WelcomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeView
    },
   
  ]
})

export default router
