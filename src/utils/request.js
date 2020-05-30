import axios from 'axios';
import storageService from '@/services/storageService';

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 1000 * 5,
});

// 拦截请求，动态修改headers
request.interceptors.request.use((config) => {
  Object.assign(config.headers, { Authorization: `Bearer ${storageService.get(storageService.USER_TOKEN)}` });
  return config;
}, (error) => Promise.reject(error));

export default request;
