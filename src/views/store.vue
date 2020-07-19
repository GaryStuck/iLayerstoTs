<template>
  <div>
    <a-input v-model="value"></a-input>
    <em>输入的值：{{value}}</em>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import AInput from '@/components/AInput.vue'
export default Vue.extend({
  name: 'store',
  data() {
    return {
      value: ''
    }
  },
  components: {
    AInput
  }
})
</script>