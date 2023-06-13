// 封装axios
// 实例化  请求拦截器 响应拦截器

import axios from "axios";

const BASE_URL = "http://127.0.0.1:8001";
const http = axios.create({
    baseURL: BASE_URL,
    // timeout: 5000
});

export { http, BASE_URL };