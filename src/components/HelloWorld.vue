<template>
  <div class="hello">
    <div>{{ msg }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/scss/global/mixin";

  div {
  margin:px2rem(40) 0 0;
    @include title()
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 px2rem(20);
}
a {
  color: #42b983;
}
</style>
