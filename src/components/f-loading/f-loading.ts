import component from './index.vue'
import Vue from 'vue'

const comp = {
  extends: component,
  data() {
    return{
      verticalOffset: 0
    }
  }
}

const YunQLoadingConstructor = Vue.extend(comp)
console.log(YunQLoadingConstructor)
