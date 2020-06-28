import Axios, { AxiosRequestConfig } from 'axios';

const token = localStorage.getItem('token');

const URL = 'http://localhost:8080/';

const http = Axios.create({
    baseURL: URL,
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
                Axios.post<RefreshTokenData>(`${URL}api/users/refresh`, { refreshToken})
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
            window.location.href = 'http://localhost:8080/api/users/google';
        }
    }
)

 export default http;
