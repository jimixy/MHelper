import axios from 'axios'
import qs from 'qs'
import store from '@/store'

import getCookie from './cookie'
import config from '../config'

import {
  vueInstance
} from '@/main'

class Ajax {
  constructor(options) {
    this.axios = axios.create({
      baseURL: options.baseUrl || '',
      timeout: 60000
    })
    this.commonPath = (options || {}).commonPath
      ? options.commonPath
      : ''

    store.commit('SET_LOGIN', false)
    // 通用拦截器（全局的成功后的回调函数，用作去掉 loading 等操作）
    if (options && typeof options.success === 'function') {
      this.success = options.success
    } else {
      this.success = res => {}
    }
    this.initInterceptor()
  }
  initInterceptor() {
    // 给POST请求头加上x-crsf-token
    this.axios.interceptors.request.use(
      config => {
        if (
          !/^(GET|HEAD|OPTIONS|TRACE)$/i.test(config.method) &&
          !this.axios.credentials &&
          process.client // 浏览器环境才找 cookie
        ) {
          const csrftoken = getCookie('csrf-token')
          config.headers.common['X-CSRF-Token'] = csrftoken
        }
        if (/^(POST)$/i.test(config.method)) {
          store.commit('SET_LOGIN', true)
        }
        config.headers['Authorization'] = localStorage.getItem('token') || ''
        return config
      },
      err => {
        return Promise.reject(err)
      }
    )
    // ajax 全局错误处理
    this.axios.interceptors.response.use(
      response => {
        this.success(response)
        store.commit('SET_LOGIN', false)
        // console.log('res', response)
        if (response.data.code !== 200) {
          if (response.data.code === 100 || // 用户未登录
                    response.data.code === 101 || // 用户不存在
                    response.data.code === 403 || // 拒绝访问
                    response.data.code === 5101 || // 两次输入密码不相同
                    response.data.code === 5201 || // Token验证失败, 请求重新登录!
                    response.data.code === 5202) { // 帐号已在其它地方登录!
            localStorage.clear()
            vueInstance.$toast(response.data.msg)
            window.location.href = '/'
            return Promise.reject('error')
          }
          if (response.data.code === 2001) return response
          if (response.data.code === 1000) {
            vueInstance.$toast('帐号已存在')
            return Promise.reject('error')
          }
          vueInstance.$toast(response.data.msg)
          return Promise.reject('error')
        }
        return response
      },
      err => {
        if (err.response) {
          switch (err.response.status) {
            case 404:
              console.log('请求发生404错误')
              break
            case 500:
              console.log('请求发生500错误')
              break
            case 504:
              console.log('请求超时')
              break
            default:
              console.log('error:' + err.response.status)
              break
          }
          const res = this.normalizeRes(err.response)
          return Promise.reject(res.data || res) // 返回接口返回的错误信息
        }
        store.commit('SET_LOGIN', false)
        console.log('errMsg:', err)
        return Promise.reject(err)
      }
    )
  }

  /**
   * 即使服务器端报错，也要将返回错误统一格式化之后返回给前端
   * @param res 原始的错误返回数据
   * @returns 与正常接口格式相同的数据结构
   */
  normalizeRes(res) {
    if (res && typeof res.data === 'string') {
      res.data = {
        code: -1,
        message: res.data
      }
    } else if (res && res.statusText) {
      res.data = {
        code: res.status,
        message: res.statusText
      }
    } else {
      res = {
        data: {
          code: -1,
          message: '未知错误'
        }
      }
    }
    return res
  }
  /**
   * 解析参数，拼接到 path 上
   * @param  {[string]} path   [原始 path]
   * @param  {[string || object]} params [要拼接到 path 上的参数]
   * @return {[string]}        [拼接过后的 path]
   */
  parse(path, params) {
    if (typeof params === 'string') {
      return path + '/' + params
    }
    if (typeof params === 'object') {
      let search = '?'
      let counter = 0
      for (let key in params) {
        if (counter) search += '&'
        search += key + '=' + params[key]
        counter++
      }
      return path + search
    }
    return path
  }

  /**
   * 通用 http 请求方法
   * @param method
   * @param path
   * @param prevConfig = {
   *          cache: false| true 是否开启缓存
   *          emulateJson: false | true 传入 true，则参数将以 formData 的方式传递,
   *          returnRes: false | true 是否不直接返回前端所要的数据
   *        }
   * @returns {*}
   */
  request(method, path, prevConfig) {
    !this[`${method}Map`] && (this[`${method}Map`] = {})
    const url = path.replace(/\//g, '')
    if (!this[`${method}Map`][url]) {
      this[`${method}Map`][url] = (params, lastConfig) => {
        const config = { ...prevConfig, ...lastConfig }
        let newPath = path // 不修改闭包里面的变量
        if (config.cache === false) {
          const headers = (config.headers = config.headers || {})
          headers['Cache-Control'] = 'no-cahce'
          headers['If-Modified-Since'] = '0'
        }
        // get 请求下将参数直接拼接到path中
        if (method === 'get') {
          newPath = this.parse(newPath, params)
        }
        // 非 get 请求，配置项中指定用 form 表单的方式提交
        if (method !== 'get') {
          params = config.emulateJson ? qs.stringify(params) : params
          config.data = params
        }
        const commonPath = config.commonPath || this.commonPath

        if (method === 'post' && store.getters.isLogin) {
          vueInstance.$toast('重复提交！')
          return Promise.reject('重复提交！')
        }
        return this.axios({
          method,
          url: commonPath + newPath,
          ...config
        })
          .then(
            res => {
              return config.returnRes ? res : res.data.data
            }).catch(err => {
            return err.toString()
          })
      }
    }
    return this[`${method}Map`][url]
  }

  get() {
    return this.request('get', ...arguments)
  }
  post() {
    return this.request('post', ...arguments)
  }
  put() {
    return this.request('put', ...arguments)
  }
  patch() {
    return this.request('patch', ...arguments)
  }
  delete() {
    return this.request('delete', ...arguments)
  }
}

export default new Ajax({
  baseUrl: config.baseUrl,
  commonPath: ''
})
