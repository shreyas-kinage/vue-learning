import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    name: 'Home-View',
  },
  {
    path: '/product/:id',
    component: () => import('@/views/Product.vue'),
    name: 'Product-View',
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
