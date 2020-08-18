import Notification from './notification.vue'
// @ts-ignore
import notify from './function'

export default (Vue:any) => {
  Vue.component(Notification.name, Notification)
  Vue.prototype.$notify = notify
}
