import Axios from 'axios';
import CONFIG from './config';

const token = localStorage.getItem('token');

const http = Axios.create({
    baseURL: CONFIG.SERVER,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});

let isRefreshing: boolean = false;
let failedQueue = [];

interface RefreshTokenData {
    token: string 
    refreshToken: string
}

http.interceptors.response.use(
    res => {
        return res;
    },
    err => {
        const originalRequest = err.config;

        if(err.response?.status === 401 && !originalRequest._retry) {
            if(isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({resolve, reject});
                }).then(token => {
                    originalRequest.headers['Authorization'] = `Bearer ${token}`;
                    return Axios(originalRequest)
                }).catch(err => {
                    return Promise.reject(err);
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            const refreshToken = localStorage.getItem('refreshToken');
            return new Promise((resolve, reject) => {
                Axios.post<RefreshTokenData>(`${CONFIG.SERVER}api/users/refresh`, { refreshToken})
                .then(res => {
                    const { token, refreshToken } = res.data;
                    localStorage.setItem('token', token);
                    localStorage.setItem('refreshToken', refreshToken);
                    Axios.defaults.headers['Authorization'] = `Bearer ${token}`;
                    originalRequest.headers['Authorization'] = `Bearer ${token}`;
                    resolve(Axios(originalRequest));
                }).catch(err => {
                    reject(err)
                }).then(() => {
                    isRefreshing = false
                })
            });
            return Promise.reject(err)
        } else {
            // Redirect to login page
            window.location.href = CONFIG.GOOGLE_AUTH;
        }
    }
)

 export default http;
