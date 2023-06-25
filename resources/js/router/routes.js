import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    { 
        path: '/', 
        component: () => import("../layouts/user.vue"),
        name:   'dashboard'
    },
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  export default routes