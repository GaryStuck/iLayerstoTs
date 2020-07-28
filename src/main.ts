import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'nprogress/nprogress.css'
import './assets/styles/index.css'
import './assets/scss/global/index.scss'
// @ts-ignore
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false
Vue.use(Button)
//Vue.component(Button.name, Button);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
