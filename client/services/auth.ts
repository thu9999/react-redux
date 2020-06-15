import http from '../http-common';
import SignupFormValue from '../interfaces/signup-form-value';

/**
 * Signup 
 * @param value: SignupFormValue
 */

const signup = (value: SignupFormValue) => {
    return http.post('/api/users/signup', value);
}

export default {
    signup
}

