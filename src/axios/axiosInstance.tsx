import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://192.168.31.165:3500',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },

});


export { axiosInstance};
