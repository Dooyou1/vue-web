import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import CartView from '@/views/CartView.vue'
import Checkout from '@/views/CheckoutView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SearchView from '@/views/SearchView.vue'
import SuccessView from '@/views/SuccessView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    { 
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
    },
    { 
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    { 
      path: '/search',
      name: 'search',
      component: SearchView,
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView,
    },
  ],
})

export default router
