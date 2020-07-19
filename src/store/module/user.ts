import { ActionContext, Store, Module } from 'vuex'
interface UserState {
  userName: string
  tel: number
  nickName: string
  isActive: boolean
}
interface UserMutations {
  SET_USERNAME(state: UserState, user: string): void
  SET_TEL(state: UserState, user: string): void
  SET_NICKNAME(state: UserState, user: string): void
  SET_ISACTIVE(state: UserState, user: string): void
}
interface UserActions {
  setUserName(): void
  setTel(): void
  setNickName(): void
  setIsActive(): void
}
const state: UserState = {
  userName: '',
  tel: 12000000000,
  nickName: '',
  isActive: false,
}
const mutations: UserMutations = {
}
export default user
