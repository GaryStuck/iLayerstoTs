import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'nprogress/nprogress.css'
import './assets/styles/index.css'
import './assets/scss/global/index.scss'
import './assets/less/mixin.less'
import '@/config'
import '@/components/f-loading/f-loading'
import VueI18n from 'vue-i18n'
import LangENUS from '@/common/lang/en/en'
import LangZHCN from "@/common/lang/zh/zh"

Vue.config.productionTip = false

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh-cn',
  messages: {
    'en-us': LangENUS,
    'zh-cn': LangZHCN
  }
})

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
