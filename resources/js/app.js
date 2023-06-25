import './bootstrap';

// FILE: main.js

import { createApp } from 'vue'
import {
  Quasar,
  Notify,
  Dialog
} from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './components/App.vue'
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  
  {
    path: '/',
    component: () => import('./pages/Dashboard.vue'),
    name: 'dashboard'      
  },
  {
    path: '/login',
    component: () => import('./pages/Login.vue'),
    name: 'login'
  },
  {
    path: '/user',
    component: () => import("./layouts/User.vue"),
    name: 'user',
    children: [
      {
        path: 'feed',
        component: () => import('./layouts/UserFeed.vue')
      },
    ]
  },
  {
    path: '/order-history',
    component: () => import('./pages/OrderHistory.vue'),
    name: 'orderhistory'
  },
  {
    path: '/pre-shipment',
    component: () => import('./pages/PreShipment.vue')
  },
  {
    path: '/post-shipment',
    component: () => import('./pages/PostShipment.vue')
  },
  {
    path: '/shipping-documents',
    component: () => import('./pages/ShippingDocuments.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const myApp = createApp(App)

myApp.use(router).use(Quasar, {
  plugins: { 
    Notify,
    Dialog
  }, // import Quasar plugins and add here
  
    config: {
        notify: { /* look at QuasarConfOptions from the API card */ }
    }
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')