import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://172.16.85.177:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },

});


export { axiosInstance};
