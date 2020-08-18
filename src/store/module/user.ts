import {UserState} from './UserTypes';
import {MutationTree, ActionTree, Module} from 'vuex';
import {RootState} from '../rootTypes';

const state: UserState = {
  isActive: false, nickName: 'nickName', tel: '', userName: ''
}

const mutations: MutationTree<UserState> = {
  UPDATE_NICKNAME(state, payload) {
    state.nickName = payload
  },
  UPDATE_TEL(state, payload) {
    state.tel = payload
  },
  UPDATE_USERNAME(state, payload) {
    state.userName = payload
  },
  UPDATE_IS_ACTIVE(state, payload) {
    state.isActive = payload
  },
}
const actions: ActionTree<UserState, RootState> = {
  setNickName({commit, state}, params) {
    if (state.nickName !== 'admin') {
      commit('UPDATE_NICKNAME', params)
    }
  },
  setUserName({commit, state}, params) {
    commit('UPDATE_USERNAME', params)
  }
}

export const user: Module<UserState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions
}
