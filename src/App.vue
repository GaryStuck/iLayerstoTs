<template>
  <div id="app">
    <i class="material-icons">face</i>
    <i class="material-icons">home</i>
    <div id="nav">
      <router-link :to="{name:'Home'}">Home</router-link> |
      <router-link :to="{name: 'About'}">About</router-link>
    </div>
    <a-spin :spinning="this.$store.state.loading" tip="加载中...">
      <router-view />
    </a-spin>
    <router-view name="email"/>
    <router-view name="tel"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
  export default Vue.extend({
    name: 'App'
  })
</script>
<style>
  @import "./assets/styles/index.css";
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
