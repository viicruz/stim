import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import Game from '@/views/Game.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:"/game/:id",
      name:"game",
      component:Game,
    }  
  ]
})

export default router
