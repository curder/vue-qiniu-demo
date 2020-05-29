import Vue from 'vue';
import VueRouter from 'vue-router';
import authRouters from '@/router/modules/auth';


Vue.use(VueRouter);

const routes = [
  ...authRouters,
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
