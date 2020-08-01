<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <a-button type="primary">
            Primary
        </a-button>
        <div>{{appVersion}}</div>
        <div>username: {{userName}}</div>
        <div>nickName:{{nickName}}</div>
        <a-steps :current="1">
            <a-step>
                <!-- <span slot="title">Finished</span> -->
                <template slot="title">
                    Finished
                </template>
                <span slot="description">This is a description.</span>
            </a-step>
            <a-step title="In Progress" sub-title="Left 00:00:08" description="This is a description." />
            <a-step title="Waiting" description="This is a description." />
        </a-steps>
        <a-switch default-checked />
        <br />
        <a-switch size="small" default-checked />
        <div style="width: 60%;margin: 0 auto">
            <y-table></y-table>
        </div>
    </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import Vue from 'vue'
  import { mapState, mapActions } from 'vuex'
    import YTable from './table'
  import { login } from '@/api/user'


  export default Vue.extend({
    components: {
      HelloWorld,
      YTable
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
      this.log()
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
      },
      async log () {
      /*  // this.$store.dispatch('setLoading', true)
        let data = await login({ user_name: 'Lison', password: 123 })
        if (!data) {
          // this.$store.dispatch('setLoading', false)
        }
        console.log(data)*/
      }
    }
  })
</script>
