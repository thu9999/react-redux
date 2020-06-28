import http from '../http-common';
import SignupFormValue from '../interfaces/signup-form-value';
import LoginFormValue from '../interfaces/login-form-value';

const userAPI = '/api/users/';
const callbackURL = 'http://localhost:3000/'

/**
 * Signup 
 * @param value: SignupFormValue
 */

const signup = (value: SignupFormValue) => {
    return http.post(`${userAPI}signup`, value);
}

/**
 * Login
 */
const login = (value: LoginFormValue) => {
    return http.post(`${userAPI}login`, value);
}

/**
 * Login using google account
 */
const googleLogin = () => {
    const params = new URLSearchParams();
        params.append('callback', callbackURL);
    return http.get(`${userAPI}google?${params}`);
}

/**
 * Logout
 */
const logout = () => {
    return http.get(`${userAPI}logout`);
}

export default {
    signup,
    login,
    googleLogin,
    logout
}

