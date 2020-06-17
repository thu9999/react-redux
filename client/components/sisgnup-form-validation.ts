import SignupFormValue from '../interfaces/signup-form-value';
import validator from 'validator';
import * as _ from 'lodash';
import SignupFormErrors from '../interfaces/signup-form-error';

const signupFormValidation = (value: SignupFormValue) => {
    const { username, email, password, confirmPassword } = value;

    let errors: SignupFormErrors = {};

    if(_.isEmpty(username)) {
        errors.username = 'This field is required';
    }
    
    /**
     * Check email is valid
     */
    if(!validator.isEmail(email)) {
        errors.email = 'Email is invalid';
    }

    if(_.isEmpty(email)) {
        errors.email = 'This field is required';
    }

    if(_.isEmpty(password)) {
        errors.password = 'This field is required';
    }

    if(_.isEmpty(confirmPassword)) {
        errors.confirmPassword = 'This field is required';
    }

    /**
     * Check passords match
     */
    if(!_.isEqual(password, confirmPassword)) {
        errors.confirmPassword = 'Passwords do not match';
    }

    return {
        errors,
        isValid: _.isEmpty(errors)
    }
}

export default signupFormValidation;