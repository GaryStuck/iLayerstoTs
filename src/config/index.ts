import Vue from "vue";


import './antd'
import './components'

/**
 * 线上环境
 */
export const ONLINEHOST: string = 'localhost:3000'

/**
 * 测试环境
 */
export const QAHOST: string = 'localhost:3000'

/**
 * 线上mock
 */
export const MOCKHOST: string = 'http://xxx.com'

/**
 * 是否mock
 */
export const ISMOCK: boolean = true

/**
 * 当前的host  ONLINEHOST | QAHOST | MOCKHOST
 */
export const MAINHOST: string = ONLINEHOST

/**
 * 请求的公共参数
 */
export const conmomPrams: any = {}

/**
 * @description token在Cookie中存储的天数，默认1天
 */
export const cookieExpires: number = 1
