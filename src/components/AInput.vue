<template>
  <div>
    <input type="text" @input="handleInput" :value="value" />
  </div>
</template>
<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "AInput",
  props: {
    value: {
      type: [String, Number],
      default: ""
    } 
  },
  methods: {
    handleInput( event:any ) {
      console.log(event)
      const value = event.target.value
      this.$emit('input', value)
    }
  }
})
</script>