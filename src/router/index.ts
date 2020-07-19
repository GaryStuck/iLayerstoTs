import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import routers from './routes'
import NProgress from 'nprogress'
Vue.use(VueRouter)

const routes: RouteConfig[] = routers

const router = new VueRouter({
  mode: 'history',
  routes,
})
const HAS_LOGINED: boolean = true
// 跳转之前
router.beforeEach((to, from, next) => {
  // if (to.name !== 'login') {
  NProgress.start()
  // NProgress.setColor('#00FFFF');
  if (HAS_LOGINED) {
    next()
  } else {
    next({ name: 'login' })
  }
  // } else {
  //   if (HAS_LOGINED) {
  //     next({name: 'home'})
  //   } else { next() }
  // }
})
// 异步组件加载后触发的
router.beforeResolve((to, from, next) => {
  // go
  next()
})

// 跳转之后
router.afterEach((to, from) => {
  NProgress.done()
})

/**
 * 完整的路由过程
 * 1. 导航被触发
 * 2. 在失活的组件（即将离开的组件）调用离开路由守卫
 * 3.调用全局的前置守卫 beforeEach
 * 4.在复用的组件里调用 beforeRouteUpdate
 * 5.调用路由独享的守卫 beforeEnter
 * 6.解析异步路由组件
 * 7.再被激活的组件（即将进入的页面组件）里调用 beforeRouterEnter
 * 8.调用全局的解析守卫 beforeRsolve
 * 9.导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 触发DOM更新
 * 12. 用创建好的实例调用beforeRouterEnter守卫里传给next回调函数
 */
export default router
