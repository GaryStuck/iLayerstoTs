import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'nprogress/nprogress.css'
import './assets/styles/index.css'
import './assets/scss/global/index.scss'
import './assets/less/mixin.less'
import '@/config'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
