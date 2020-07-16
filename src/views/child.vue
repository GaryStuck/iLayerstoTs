<template>
  <div>
    {{child}}
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      child: 'I am child'
    }
  }
})
</script>