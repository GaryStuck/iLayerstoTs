<template>
  <div>
    <span :id="eleId">1648</span>
  </div>
</template>

<script>
  import Vue from 'vue'
  import CountUp from 'countup'
  export default Vue.extend({
    name: 'CountNum',
    computed: {
      eleId() {
        return  `${Date.now() +this._uid}`
      }
    },
    mounted () {
      this.$nextTick(() => {
        const counter = new CountUp('count_up')
      })
    }
  })
</script>

<style lang="scss" scoped>
  @import "./index";
</style>
