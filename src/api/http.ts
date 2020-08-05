import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';
import { ONLINEHOST, QAHOST } from '@/config';
import { Queue } from '@/lib/Queue';
const BASE_URL = process.env.NODE_ENV === 'production' ? QAHOST : ONLINEHOST
const ERR_CODE: number = -1;
const ERR_OK: number = 200;

class HttpRequest {
  public queue = new Queue();

  constructor(public baseUrl: string = BASE_URL) {
    this.baseUrl = baseUrl;
  }

  public request(options: AxiosRequestConfig): AxiosPromise {
    const instance: AxiosInstance = axios.create()
    // tslint:disable-next-line:no-parameter-reassignment
    options = this.mergeConfig(options) // 合并基础路径和每个接口单独传入的配置，比如url、参数等
    this.interceptors(instance, options.url) // 调用interceptors方法使拦截器生效
    console.log(instance);
    return instance(options) // 最后返回AxiosPromise
  }

  // 用于添加全局请求和响应拦截逻辑
  private interceptors(instance: AxiosInstance, url?: string) {
    // 在这里添加请求和响应拦截
    instance.interceptors.request.use((config: AxiosRequestConfig) => {
          if (this.queue.isEmpty()) {
            // this.show()
          }
          this.queue.enQueue(url)
          // 接口请求的所有配置，都在这个config对象中，他的类型是AxiosRequestConfig
          // 如果你要修改接口请求配置，需要修改 axios.defaults 上的字段值
          axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
          axios.defaults.timeout = 5
          return config
        },
        (error) => {
          return Promise.reject(error)
        })
    instance.interceptors.response.use((res: AxiosResponse) => {
          console.log(res);
          this.queue.deQueue()
          const {data} = res // res的类型是AxiosResponse<any>，包含六个字段，其中data是服务端返回的数据
          const {code, msg} = data // 通常服务端会将响应状态码、提示信息、数据等放到返回的数据中
          if (code !== ERR_CODE) {
            console.error(msg)
          }
          return res // 返回数据
        },
        (error) => { // 这里是遇到报错的回调
          return Promise.reject(error)
        })
  }

  // 这个方法用于合并基础路径配置和接口单独配置
  private mergeConfig(options: AxiosRequestConfig): AxiosRequestConfig {
    return Object.assign({baseURL: this.baseUrl}, options);
  }
}

export default HttpRequest;
