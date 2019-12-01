import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL
});

axiosInstance.interceptors.request.use(
    config => {
        config.headers.Authorization = localStorage.getItem('authorization');
        return config;
    },
    error => Promise.reject(error)
);



export default axiosInstance;