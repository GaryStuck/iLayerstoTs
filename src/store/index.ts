import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './rootTypes'
import { user } from './module/user'
import Cookies from 'js-cookie'
// @ts-ignore
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
const vuexStorage = new VuexPersistence({
  key: 'CUED',
  storage: window.localStorage,
  modules: ['user']
})
// const vuexCookie = new VuexPersistence({
//   key: 'CURD',
//   storage: Cookies,
//   modules: ['user']
// })
const store: StoreOptions<RootState> = {
  state: {
    appVersion: '1.0.0',
    loading: false,
    localLang:'zh-cn'
  },
  modules: {
    user
  },
  mutations: {
    UPDATE_APP_VERSION(state, payload) {
      state.appVersion = payload
    },
    UPDATE_LOADING(state, payload) {
      state.loading = payload
    },
    UPDATE_LOCAL_LANG(state, payload) {
      state.localLang = payload
    },
  },
  actions: {
    setAppVersion({commit, state}, params) {
      commit('UPDATE_APP_VERSION', params)
    },
    setLoading({commit, state}, params) {
      commit('UPDATE_LOADING', params)
    },
    setLocalLang({commit, state}, params) {
      commit('UPDATE_LOCAL_LANG', params)
    }
  }
}

export default new Vuex.Store<RootState>(store)
