<template>
  <div>
    <em>
    {{name}}
    </em>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue'
export default  Vue.extend({
  props: {
    name: {
      type:[ String,Number],
      default: 'apple'
    }
  },
  beforeRouteUpdate(ro,from,next) {
    
  }
})
</script>