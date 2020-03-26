import axios from 'axios'

export function request(config){
  // 1. 创建实例对象
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000/api/wh',
    timeout:5000
  })

  // 2. axios拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  // 3. 真正发送网络请求
  return instance(config)
}