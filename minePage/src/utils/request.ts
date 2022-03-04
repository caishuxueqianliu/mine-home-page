/**
 * @description: 封装axios
 * @author: liuhao
 * @createdTime: 2021-12-22 22:30
 * @lastModifiedTime: 2022-01-16 14:00
 */

import axios from 'axios';


const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: 'http://localhost:8081/admin',
  // baseURL: 'http://101.35.251.32:8081/admin',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000, // request timeout
});

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  (config) => {
    // if (getToken()) {
    //   config.headers.Authorization = getToken();
    // }
    return config;
  },
  (error) => Promise.reject(error),

);

/**
 * 响应拦截器
 */
service.interceptors.response.use(
  (response) => {
    const res = response.data || null;
    // if (!response.data.code) {
    //   return res;
    // }
    // if (res.code !== 0) {
    //   return Promise.reject(new Error(res.message || 'Error'));
    // }
    return res;
  },
  (error) => {
    // switch (error.response?.status) {
    //   case 400:
    //     error.message = '请求错误(400)';
    //     break;
    //   case 401:
    //     error.message = '未授权(401)';
    //     break;
    //   case 403:
    //     error.message = '拒绝访问(403)';
    //     break;
    //   case 404:
    //     error.message = '请求出错(404)';
    //     break;
    //   case 408:
    //     error.message = '请求超时(408)';
    //     break;
    //   case 500:
    //     error.message = '服务器错误(500)';
    //     break;
    //   case 501:
    //     error.message = '服务未实现(501)';
    //     break;
    //   case 502:
    //     error.message = '网络错误(502)';
    //     break;
    //   case 503:
    //     error.message = '服务不可用(503)';
    //     break;
    //   case 504:
    //     error.message = '网络超时(504)';
    //     break;
    //   case 505:
    //     error.message = 'HTTP版本不受支持(505)';
    //     break;
    //   default:
    //     error.message = `连接出错(${error.response?.status})!`;
    // }
    return Promise.reject(error);
  },
);

export default service;
