import http from '../http-common';
import { SignupFormValue } from '../interfaces/signup-form-value';

/**
 * Signup 
 * @param value: SignupFormValue
 */

const signup = (value: SignupFormValue) => {
    return http.post('/auth/signup', value);
}

export default {
    signup
}

