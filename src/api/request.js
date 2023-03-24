import axios from "axios";

const timeout = 10 * 1000;

const request = axios.create({
  baseURL: "http://localhost:3000/",
  timeout,
});

// 请求拦截
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
request.interceptors.response.use(
  (response) => {
    return response.data
  }, 
  (error) => {
   
    return Promise.reject(error);
  }
);

export default request;

