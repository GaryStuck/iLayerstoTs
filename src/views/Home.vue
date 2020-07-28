<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <a-button type="primary">
            Primary
        </a-button>
        <div>{{appVersion}}</div>
        <div>username: {{userName}}</div>
        <div>nickName:{{nickName}}</div>
    </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import Vue from 'vue'
  import { mapState, mapActions } from 'vuex'

  export default Vue.extend({
    components: {
      HelloWorld
    },
    data () {
      return {
        userNames: '',
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        console.log(vm)
      })
    },
    beforeRouteLeave (to, from, next) {
      const leave = confirm('您确认要离开么')
      if (leave) {
        next()
      } else {
        next(false)
      }
    },
    mounted () {
      this.stateName()
    },
    computed: {
      ...mapState('user', {
        nickName: state => state.nickName,
        userName: state => state.userName
      }),
      ...mapState({
        appVersion: state => state.appVersion
      }),
      // updateNickName: {
      //   set: function (params) {
      //     this.value = params
      //   },
      //   get: function () {
      //     return this.value + 'release'
      //   }
      // }
    },
    methods: {
      ...mapActions('user', [
        'setNickName'
      ]),
      stateName () {
        this.setNickName('jack')
        console.info(this.$store)
        this.$store.dispatch('setAppVersion', '1.20')
        this.$store.dispatch('user/setUserName', 'JACKSON')
      }
    }
  })
</script>
