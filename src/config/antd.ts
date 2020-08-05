import Vue from "vue";
// @ts-ignore

import Button from 'ant-design-vue/lib';
// @ts-ignore
import Antd from 'ant-design-vue/lib';
// @ts-ignore
import message from 'ant-design-vue/lib/message'

Vue.use(Antd)
Vue.use(Button)
Vue.prototype._message = message
