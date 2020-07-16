import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import routers from './routes'
Vue.use(VueRouter);

const routes: RouteConfig[] = routers

const router = new VueRouter({
  routes,
});

export default router;
