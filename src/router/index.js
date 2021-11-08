import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/shop/Shop.vue'),
  },
  {
    path: '/shop/how-to-get-scores',
    name: 'ScoresPage',
    component: () => import('@/views/scores/ScoresPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
