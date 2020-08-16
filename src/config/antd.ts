import Vue from 'vue'
// @ts-ignore
import Antd from 'ant-design-vue/lib'
// @ts-ignore
import { message, Spin } from 'ant-design-vue/lib'
Vue.use(Antd)

Spin.setDefaultIndicator({
  indicator: (h: any) => {
    return ` <i class= 'anticon anticon-loading anticon-spin ant-spin-dot' > < /i>`
  },
  spinning: false,
})
Vue.prototype._message = message
Vue.prototype.$loading = Spin
