import Vue from 'vue';
import VueRouter from 'vue-router';
import Category from '../views/Category.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/category',
    name: 'category',
    component: Category,
  },
  {
    path: '/products',
    name: 'products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Products.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
