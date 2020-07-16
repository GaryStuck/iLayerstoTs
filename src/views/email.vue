<template>
  <div>
    {{email}}
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      email: 'I am email'
    }
  }
})
</script>