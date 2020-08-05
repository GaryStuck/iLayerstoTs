<template>
  <div id="app">
    <i class="material-icons">face</i>
    <i class="material-icons">home</i>
    <div id="nav">
      <router-link :to="{name:'Home'}">Home</router-link>
      |
      <router-link :to="{name: 'About'}">About</router-link>
    </div>
    <a-spin :spinning="this.$store.state.loading" tip="加载中...">
      <router-view/>
    </a-spin>
    <router-view name="email"/>
    <router-view name="tel"/>
  </div>
</template>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 100 : fontSize
    const html = document.querySelector('html')
    html.style.fontSize = fontSize + 'px'
  })
  if (window.addEventListener) {
    window.addEventListener('resize', function () {
      let fontSize = window.innerWidth / 10
      fontSize = fontSize > 50 ? 100 : fontSize
      const html = document.querySelector('html')
      html.style.fontSize = fontSize + 'px'
    }, false)
  }
  import Vue from 'vue'

  export default Vue.extend({
    name: 'App',
    mounted () {
    }
  })
</script>
<style lang="scss">
  @import "./assets/styles/index.css";
  @import "@/assets/scss/global/mixin";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: px2rem(14);
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
    font-size: px2rem(14);
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
