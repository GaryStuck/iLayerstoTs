import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './rootTypes'
import { user } from './module/user'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    userName: 'jack',
  },
  modules: {
    user
  },
  mutations: {
    updateUserName(state, payload) {
      state.userName = state.userName + payload
    },
  },
  actions: {
    setUserName({commit, state}) {
      return new Promise((resolve, reject) => {
        if (state.userName === '') {
          commit('updateUserName', 'admin')
          resolve()
        } else {
          reject()
        }
      })
    },
  },
}

export default new Vuex.Store<RootState>(store)
