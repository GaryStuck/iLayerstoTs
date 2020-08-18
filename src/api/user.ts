import axios, { ResponseData } from './index';
import { AxiosPromise } from 'axios';
import Vue from 'vue';

interface LoginReqArguInterface {
  user_name: string
  password: number | string
}

export const login = (data: LoginReqArguInterface): AxiosPromise<ResponseData> => {
  return axios.request({
    url: '/login',
    data,
    method: 'POST',
    headers: 'x-www-config-ooo'
  })
}
