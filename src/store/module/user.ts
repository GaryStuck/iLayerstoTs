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
      commit('UPDATE_NICKNAME', params.nickName)
    }
  },
  setUserName({commit, state}, params) {
    commit('UPDATE_USERNAME', params.userName)
  }
}

export const user: Module<UserState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions
}
// import { ActionContext, Store, Module } from 'vuex'
// interface UserState {
//   userName: string
//   tel: string
//   nickName: string
//   isActive: boolean
// }
// interface UserMutations {
//   SET_USERNAME(state: UserState, params: string): string
//   SET_TEL(state: UserState, params: string): string
//   SET_NICKNAME(state: UserState, params: string): string
//   SET_ISACTIVE(state: UserState, params: boolean): boolean
// }
// interface UserActions {
//   setUserName(): void
//   setTel(): void
//   setNickName(): void
//   setIsActive(): void
// }
// class State implements UserState {
//  userName = 'iooc'
//  tel = '13200000'
//  nickName = 'join'
//  isActive = false
// }
// class Mutations implements UserMutations{
//   SET_USERNAME(state: UserState, user: string): string {
//     return state.userName = user
//   }
//   SET_TEL(state: UserState, params: string): string {
//     return state.tel = params
//   }
//   SET_NICKNAME(state: UserState, params: string): string {    
//     return state.nickName = params
//   }
//   SET_ISACTIVE(state: UserState, params: boolean): boolean {
//     return state.isActive = params
//   }

// }
// /**
//  *  setUserName: ({commit, state}, userName) => {
//     return commit('SET_USERNAME', userName)
//     },
//  */
// class Actions implements UserActions{
//   setTel({commit, state}): void {
//     throw new Error('Method not implemented.')
//   }
//   setNickName(): void {
//     throw new Error('Method not implemented.')
//   }
//   setIsActive(): void { 
//     throw new Error('Method not implemented.')
//   }
//   setUserName(): void {
//   }
// }
// const state = new State()
// const mutations = new Mutations()
// const actions = new Actions()
// export default {
//   state,
//   mutations,
//   actions,
//   getters
// }
