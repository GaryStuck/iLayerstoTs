<template>
  <div class="box">
    <CheckboxGroup v-modal="checkedArr">
      <virtual-list :size="30" :remain="10">
        <Checkbox :label=""
      </virtual-list>
    </CheckboxGroup>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VirtualList from 'vue-virtual-scroll-list'
  export default Vue.extend({
    name: 'yunQfeng',
    components: {
      VirtualList
    },
    data() {
      return {
        checkedArr: []
      }
    }
  })
</script>

<style scoped>

</style>
