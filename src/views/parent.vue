<template>
  <div>
    {{parent}}
    <router-view />
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      parent: "I am parent"
    };
  }
});
</script>