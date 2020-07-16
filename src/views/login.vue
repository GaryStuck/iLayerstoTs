<template>
  <div>
    <i className="material-icons">home</i>
    {{login}}
    <i className="material-icons">public</i>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      login: 'Welcom to my system'
    }
  }
})
</script>
<style lang="">
</style>