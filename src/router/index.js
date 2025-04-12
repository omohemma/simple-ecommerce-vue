import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/Categories.vue'),
    },
    {
      path: '/categories/:slug',
      name: 'category',
      component: () => import('../views/Category.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductListingView.vue'),
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/FavoritesView.vue'),
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 }
  }
})

export default router
