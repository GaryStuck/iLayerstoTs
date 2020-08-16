<!--
  iconsvg组件
-->
<template>
  <svg class="iconfont-svg" aria-hidden="true" :style="styles">
    <use :xlink:href="iconUrl"></use>
  </svg>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'IconSvg',
    props: ['icon','size'],
    computed: {
      styles() {
        return {
          fontSize: `${this.size}px`
        }
      },
      iconUrl() {
        return `#icon-${this.icon}}`
      }
    }
  })
</script>

<style scoped>

</style>
