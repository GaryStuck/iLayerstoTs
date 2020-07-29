import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'nprogress/nprogress.css'
import './assets/styles/index.css'
import './assets/scss/global/index.scss'
// @ts-ignore
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.less';

// @ts-ignore
import Antd from 'ant-design-vue/lib';
import './assets/less/ant_style.less'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Antd)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
