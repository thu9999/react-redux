import http from '../http-common';
import SignupFormValue from '../interfaces/signup-form-value';
import LoginFormValue from '../interfaces/login-form-value';

const userAPI = '/api/users/';

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

export default {
    signup,
    login
}

