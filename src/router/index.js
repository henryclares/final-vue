import Vue from 'vue';
import VueRouter from 'vue-router';
import Producto from '../views/Producto.vue';
// import Area from '../views/Area.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/productos',
    name: 'prodcutos',
    component: Producto,
  },
  {
    path: '/activos',
    name: 'activos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Activos.vue'),
  },
  {
    path: '/areas',
    name: 'areas',
    // component: Area,
    component: () => import('../views/Area.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
