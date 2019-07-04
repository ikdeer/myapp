import axios from 'axios'

const service = axios.create({
  baseURL:process.env.BASR_URL,
  timeout:15000,
  withCredentials:true
});

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
);

service.interceptors.request.use(
  response => {
    //请求拦截
    /*if(response.data.code == 600){
      //跳转页面
    }*/
    return Promise.resolve(response)
  },
  error => {
    return Promise.reject(error)
  }
);

export default service;