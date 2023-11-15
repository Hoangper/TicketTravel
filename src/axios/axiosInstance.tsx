import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface ApiResponse {
  data: any;
  status: number;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://192.168.0.116:3000/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


export { axiosInstance};
