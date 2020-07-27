<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>state: {{username}}</div>
    <div>vuexState:{{nickName}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Vue from "vue";
import { mapState } from "vuex";
export default Vue.extend({
  components: {
    HelloWorld
  },
  data() {
    return {
      userNames: "",
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(vm);
    });
  },
  beforeRouteLeave(to, from, next) {
    const leave = confirm("您确认要离开么");
    if (leave) {
      next();
    } else {
      next(false);
    }
  },
  mounted() {
  },
  computed: {
    ...mapState('user',{
      nickName: state => state.nickName,
      username: state => state.userName
    }),
    appVersion: {
      set: function (params) {
        this.value = params
      },
      get: function (params) {
        console.log(params)
        return this.value + 'release'
      }
    }
  },
  methods: {
    stateName() {
      console.log(this.$store.state.user);
    }
  }
});
</script>
