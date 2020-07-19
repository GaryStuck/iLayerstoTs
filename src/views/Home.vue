<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'
export default Vue.extend({
  components: {
    HelloWorld
  },
  beforeRouteEnter(to, from ,next) {
    next(vm =>{
      console.log(vm)
    })
  },
  beforeRouteLeave(to, from ,next) {
    const leave = confirm('您确认要离开么')
    if(leave){next()}else {next(false)}
  }
})
</script>
