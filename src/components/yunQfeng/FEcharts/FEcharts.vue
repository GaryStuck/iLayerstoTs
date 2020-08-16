<template>
  <div ref="container" :style="styles">
  </div>
</template>

<script lang='js'>
  import Vue from 'vue'
  import echarts from 'echarts'

  export default{
    name: "FEcharts",
    props: ['width','height','options'],
    data() {
      return {
        styles: {
          width: `${this.width}px`,
          height: `${this.height}px`
        },
      }
    },
    mounted() {
      this.chart = echarts.init(this.$refs.container,'dark')
      this.chart.setOption(this.options)
    },
    watch: {
      options() {
        this.chart.setOption(this.options)
      }
    },
  }
</script>

<style lang='scss' scoped>

</style>
