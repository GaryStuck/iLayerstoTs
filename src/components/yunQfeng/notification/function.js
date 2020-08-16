import Component from './func-notification'
import Vue from 'vue'

const NotificationConstructor = Vue.extend(Component)

console.log('NotificationConstructor', NotificationConstructor)

const instances = []
let seed = 1
// 删除节点的方法
const removeInstance = instance => {
  if (!instance) return
  const len = instances.length
  const index = instances.findIndex(inst => instance.id === inst.id)
  instances.splice(index, 1)
  if (len <= 1) return
  const removeHeight = instance.vm.height
  for (let i = index; i < len - 1; i++) {
    instances[i].verticalOffset =
      parseInt(instances[i].verticalOffset) - removeHeight - 16
  }
}

const notify = options => {
  if (Vue.prototype.$isServer) return
  const instance = new NotificationConstructor({
    propsData: options
  })
  instance.id = `notification_${seed++}`
  instance.vm = instance.$mount()
  instance.vm.ifShow = true
  document.body.appendChild(instance.vm.$el)
  let verticalOffset = 0
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)
  instance.vm.$on('closed', () => {
    removeInstance(instance)
    document.body.removeChild(instance.vm.$el)
    instance.vm.$destroy()
  })
  console.log(instance)
  instance.vm.$on('close', () => {
    instance.vm.ifShow = false
  })
  return instance.vm
}
export default notify
