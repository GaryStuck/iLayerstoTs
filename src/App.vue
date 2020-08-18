<template>
  <div>
    <a-config-provider :locale="locale">
      <div id="app">
        <router-view></router-view>
      </div>
    </a-config-provider>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { mapActions, mapState } from 'vuex'
  import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
  import moment from 'moment'
  import 'moment/locale/zh-cn'
  const EN = 'en-us'
  const ZH = 'zh-cn'
  moment.locale('zh-cn')

  export default Vue.extend({
    name: 'App',
    data () {
      return {
        locale: zhCN,
        moment,
      }
    },
    computed: {
      ...mapState({
        localLang: (state) => state.localLang
      }),
      ...mapActions(['setLocalLang']),
    },
    mounted () {
      if (this.localLang === EN) {
        moment.locale(EN)
        this.$i18n.locale = EN
        this.locale = null
      } else {
        moment.locale(ZH)
        this.$i18n.locale = ZH
        this.locale = zhCN
      }
    }
  })
</script>
